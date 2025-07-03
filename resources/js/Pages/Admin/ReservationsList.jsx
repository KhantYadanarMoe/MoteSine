import { Button } from "../../Components/ui/button";
import { Plus, Hash, Ellipsis } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../Components/ui/dropdown-menu";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../../Components/ui/pagination";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "../../Components/ui/sheet";
import { useState } from "react";
import Profile from "../../../images/Profile.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import Empty from "../../../images/Empty.png";
import { useEffect } from "react";
import dayjs from "dayjs";
import { useSearch } from "@/contexts/SearchContext";

export default function ReservationList() {
    const [loading, setLoading] = useState(false);
    // state to store reservations
    let [reservations, setReservations] = useState([]);

    const [selectedReservationId, setSelectedReservationId] = useState(null);

    const { query } = useSearch();

    // fetch data that send from backend
    let getReservations = async () => {
        setLoading(true);
        try {
            let res = await axios.get("/api/reservations");
            let data = res.data;
            setReservations(data.reservations);
        } catch (error) {
            console.error("Failed to fetch reservations:", error);
        } finally {
            setLoading(false);
        }
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getReservations();
    }, []);

    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // rows to show in a page
    const rowsPerPage = 10;

    const filteredReservations = reservations.filter(
        (reservation) =>
            reservation.reservation_code
                ?.toLowerCase()
                .includes(query.toLowerCase()) ||
            reservation.firstName
                ?.toLowerCase()
                .includes(query.toLowerCase()) ||
            reservation.lastName?.toLowerCase().includes(query.toLowerCase())
    );

    const indexOfLastReservation = currentPage * rowsPerPage;
    const indexOfFirstReservation = indexOfLastReservation - rowsPerPage;
    const currentReservations = filteredReservations.slice(
        indexOfFirstReservation,
        indexOfLastReservation
    );

    const totalPages = Math.ceil(filteredReservations.length / rowsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const STATUS = ["Pending", "Confirmed", "Reserved", "Canceled"];

    const handleStatusChange = async (id, newStatus) => {
        try {
            const response = await axios.post(
                `/api/reservations/${id}/status`,
                {
                    status: newStatus,
                }
            );

            setReservations((prev) =>
                prev.map((r) =>
                    r.id === id ? { ...r, status: response.data.status } : r
                )
            );
        } catch (error) {
            console.error(
                "Error updating status:",
                error.response?.data || error
            );
            alert("Failed to update reservation status.");
        }
    };

    const ReservationItemSkeleton = () => (
        <ul className="flex items-center bg-white px-3 py-5 rounded-md shadow-md mb-2 animate-pulse">
            <li className="basis-[4%]">
                <div className="h-4 w-6 bg-gray-300 rounded" />
            </li>
            <li className="basis-[14%]">
                <div className="h-4 w-20 bg-gray-300 rounded" />
            </li>
            <li className="basis-[22%]">
                <div className="h-4 w-32 bg-gray-300 rounded" />
            </li>
            <li className="basis-[12%]">
                <div className="h-4 w-8 bg-gray-300 rounded" />
            </li>
            <li className="basis-[18%] space-y-1">
                <div className="h-3 w-24 bg-gray-300 rounded" />
                <div className="h-3 w-16 bg-gray-200 rounded" />
            </li>
            <li className="basis-[12%]">
                <div className="h-4 w-10 bg-gray-300 rounded" />
            </li>
            <li className="basis-[13%]">
                <div className="h-6 w-20 bg-gray-200 rounded-full" />
            </li>
            <li className="basis-[5%]">
                <div className="w-5 h-4 bg-gray-300 rounded-full" />
            </li>
        </ul>
    );

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8"
        >
            <div className="flex justify-between md:items-center">
                <h1 className="md:text-lg font-medium">
                    {reservations.length} Reservations Found
                </h1>
                <Link to="/admin/reservation/calendar">
                    <Button
                        variant="default"
                        className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300 order-1 md:order-2"
                    >
                        <Plus size={16} /> Reserve
                    </Button>
                </Link>
            </div>
            <div className="mt-8 overflow-x-auto">
                <div className="min-w-[920px] lg:min-w-[880px]">
                    <ul className="flex items-center px-3 py-4 bg-accentRed text-white rounded-md shadow-md mb-4">
                        <li className="basis-[4%]">ID</li>
                        <li className="basis-[14%]">Reservation</li>
                        <li className="basis-[22%]">Name</li>
                        <li className="basis-[12%]">Guests</li>
                        <li className="basis-[18%]">Date & Time</li>
                        <li className="basis-[12%]">Table</li>
                        <li className="basis-[13%]">Status</li>
                        <li className="basis-[5%]"></li>
                    </ul>
                    {loading ? (
                        Array.from({ length: 6 }).map((_, i) => (
                            <ReservationItemSkeleton key={i} />
                        ))
                    ) : reservations.length === 0 ? (
                        <div className="absolute inset-0 z-10  bg-lightBackground flex flex-col items-center justify-center text-center font-medium text-accentRed h-full">
                            <img
                                src={Empty}
                                alt="No data"
                                className="mx-auto w-60"
                            />
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">
                                No data to show.
                            </h2>
                            <p className="text-gray-500 mb-4 text-sm">
                                The table you are looking for is empty.
                            </p>
                            <Link to="/admin/reservation/calendar">
                                <Button
                                    variant="default"
                                    className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300 order-1 md:order-2 mt-2"
                                >
                                    Reserve
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        currentReservations.map((reservation) => (
                            <ul
                                key={reservation.id}
                                className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2"
                            >
                                <li className="basis-[4%]">{reservation.id}</li>
                                <li className="basis-[14%]">
                                    <h1 className="text-accentRed font-medium">
                                        {reservation.reservation_code}
                                    </h1>
                                </li>
                                <li className="basis-[22%]">
                                    {reservation.firstName}{" "}
                                    {reservation.lastName}
                                </li>
                                <li className="basis-[12%]">
                                    {reservation.guest}
                                </li>
                                <li className="basis-[18%]">
                                    <p className="text-sm">
                                        {dayjs(reservation?.date).format(
                                            "MMMM D, YYYY"
                                        )}
                                    </p>
                                    <p className="text-sm">
                                        {" "}
                                        {reservation.time}
                                    </p>
                                </li>
                                <li className="basis-[12%]">
                                    <h1 className="text-accentRed font-medium">
                                        {reservation.table_no}
                                    </h1>
                                </li>
                                <li className="basis-[13%]">
                                    <span
                                        className={`px-1 py-1 rounded-md text-sm ${
                                            reservation.status === "Confirmed"
                                                ? "bg-green-100 text-accentGreen"
                                                : reservation.status ===
                                                  "Canceled"
                                                ? "bg-red-100 text-red-600"
                                                : reservation.status ===
                                                  "Reserved"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-gray-100 text-gray-600"
                                        }`}
                                    >
                                        {reservation.status || "Pending"}
                                    </span>
                                </li>
                                <li className="basis-[5%]">
                                    <DropdownMenu modal={false}>
                                        <DropdownMenuTrigger asChild>
                                            <button className="p-1 rounded-md hover:bg-gray-100 outline-none">
                                                <Ellipsis size={20} />
                                            </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="end"
                                            className="w-40"
                                        >
                                            <DropdownMenuItem
                                                className="text-accentYellow"
                                                onClick={() =>
                                                    setSelectedReservationId(
                                                        reservation.id
                                                    )
                                                }
                                            >
                                                View Details
                                            </DropdownMenuItem>
                                            {reservation.status !==
                                                "Reserved" && (
                                                <div>
                                                    <DropdownMenuItem
                                                        onClick={() =>
                                                            handleStatusChange(
                                                                reservation.id,
                                                                "Confirmed"
                                                            )
                                                        }
                                                        className="text-accentGreen"
                                                    >
                                                        Confirm
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() =>
                                                            handleStatusChange(
                                                                reservation.id,
                                                                "Canceled"
                                                            )
                                                        }
                                                        className="text-accentRed"
                                                    >
                                                        Cancel
                                                    </DropdownMenuItem>
                                                </div>
                                            )}
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    <Sheet
                                        open={
                                            selectedReservationId ===
                                            reservation.id
                                        }
                                        onOpenChange={(open) => {
                                            if (!open)
                                                setSelectedReservationId(null); // close the sheet
                                        }}
                                    >
                                        <SheetContent className="w-[93%] md:w-[48%] flex flex-col justify-between">
                                            <SheetHeader>
                                                <SheetTitle>
                                                    <div className="flex gap-1">
                                                        Reservation{" "}
                                                        <div className="flex items-center basis-[28%] md:basis-[20%] text-accentRed">
                                                            <h1 className="font-medium">
                                                                {
                                                                    reservation.reservation_code
                                                                }
                                                            </h1>
                                                        </div>
                                                    </div>
                                                </SheetTitle>
                                            </SheetHeader>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={Profile}
                                                        alt=""
                                                        className="w-16 h-16 rounded-full"
                                                    />
                                                    <div>
                                                        <h1 className="font-medium">
                                                            {reservation.user
                                                                ?.name ??
                                                                "Guest"}
                                                        </h1>
                                                        {/* <span className="text-sm text-gray-700">
                                                            Bahan, Yangon
                                                        </span> */}
                                                    </div>
                                                </div>
                                                <div className="mt-8">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <h1 className="text-sm font-medium">
                                                            Name -{" "}
                                                        </h1>
                                                        <span className="text-sm text-gray-800">
                                                            {
                                                                reservation.firstName
                                                            }{" "}
                                                            {
                                                                reservation.lastName
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between items-center mb-2">
                                                        <h1 className="text-sm font-medium">
                                                            Date -{" "}
                                                        </h1>
                                                        <span className="text-sm text-gray-800">
                                                            {dayjs(
                                                                reservation?.date
                                                            ).format(
                                                                "MMMM D, YYYY"
                                                            )}
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between items-center mb-2">
                                                        <h1 className="text-sm font-medium">
                                                            Time -{" "}
                                                        </h1>
                                                        <span className="text-sm text-gray-800">
                                                            {reservation.time}
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between items-center mb-2">
                                                        <h1 className="text-sm font-medium">
                                                            Guest -{" "}
                                                        </h1>
                                                        <span className="text-sm text-gray-800">
                                                            {reservation.guest}{" "}
                                                            guests
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between items-center mb-2">
                                                        <h1 className="text-sm font-medium">
                                                            Table -{" "}
                                                        </h1>
                                                        <span className="text-sm text-accentRed">
                                                            {
                                                                reservation.table_no
                                                            }
                                                        </span>
                                                    </div>
                                                    <hr className="border-t-gray-400 mt-4 mb-5" />
                                                    <div className="flex justify-between items-center mb-2">
                                                        <h1 className="text-sm font-medium">
                                                            Phone -{" "}
                                                        </h1>
                                                        <span className="text-sm text-gray-800">
                                                            {reservation.phone}
                                                        </span>
                                                    </div>
                                                    <div className="text-sm flex justify-between items-center mb-2">
                                                        <h1 className="font-medium">
                                                            Email -{" "}
                                                        </h1>
                                                        <span className="text-sm text-gray-800">
                                                            {reservation.email}
                                                        </span>
                                                    </div>
                                                    <hr className="border-t-gray-400 mt-5 mb-2" />
                                                    <div>
                                                        <h1 className="font-medium">
                                                            Message
                                                        </h1>
                                                        <p className="text-gray-700 text-xs mt-3">
                                                            {
                                                                reservation.message
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <Button
                                                    type="button"
                                                    className={`text-white ${
                                                        reservation.status ===
                                                        "Reserved"
                                                            ? "bg-gray-400 cursor-not-allowed"
                                                            : "bg-yellow-600"
                                                    }`}
                                                    onClick={() =>
                                                        handleStatusChange(
                                                            reservation.id,
                                                            "Reserved"
                                                        )
                                                    }
                                                >
                                                    {reservation.status ===
                                                    "Reserved"
                                                        ? "Already Reserved"
                                                        : "Mark as Reserved"}
                                                </Button>
                                            </div>
                                        </SheetContent>
                                    </Sheet>
                                </li>
                            </ul>
                        ))
                    )}
                </div>
            </div>
            <div className="mt-8 flex">
                <div className="ml-auto">
                    <Pagination className="text-accentRed">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() =>
                                        handlePageChange(currentPage - 1)
                                    }
                                    disabled={currentPage === 1}
                                    className={`cursor-pointer ${
                                        currentPage === 1
                                            ? "opacity-50 cursor-not-allowed"
                                            : ""
                                    }`}
                                />
                            </PaginationItem>
                            {Array.from(
                                {
                                    length: Math.ceil(
                                        reservations.length / rowsPerPage
                                    ),
                                },
                                (_, index) => (
                                    <PaginationItem key={index}>
                                        <PaginationLink
                                            onClick={() =>
                                                handlePageChange(index + 1)
                                            }
                                            isActive={currentPage === index + 1}
                                            className="cursor-pointer"
                                        >
                                            {index + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                )
                            )}
                            <PaginationItem>
                                <PaginationNext
                                    onClick={() =>
                                        handlePageChange(currentPage + 1)
                                    }
                                    className={`cursor-pointer ${
                                        currentPage === totalPages
                                            ? "opacity-50 cursor-not-allowed"
                                            : ""
                                    }`}
                                    disabled={
                                        currentPage ===
                                        Math.ceil(
                                            reservations.length / rowsPerPage
                                        )
                                    }
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </motion.div>
    );
}
