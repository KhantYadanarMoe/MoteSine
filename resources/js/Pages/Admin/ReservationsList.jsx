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
import Profile from "../../../images/profile.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import dayjs from "dayjs";

export default function ReservationList() {
    // state to store reservations
    let [reservations, setReservations] = useState([]);

    const [selectedReservationId, setSelectedReservationId] = useState(null);

    // fetch data that send from backend
    let getReservations = async () => {
        let res = await axios.get("/api/reservations");
        let data = res.data;
        setReservations(data.reservations);
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getReservations();
    }, []);

    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // rows to show in a page
    const rowsPerPage = 10;

    // calculate the last items, first items and set reservations to show
    const indexOfLastReservation = currentPage * rowsPerPage;
    const indexOfFirstReservation = indexOfLastReservation - rowsPerPage;
    const currentReservations = reservations.slice(
        indexOfFirstReservation,
        indexOfLastReservation
    );

    // function for pagination button
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const updateReservationStatus = async (id, currentStatus) => {
        try {
            let newStatus =
                currentStatus === "confirmed" ? "reserved" : "confirmed";

            let res = await axios.post(`/api/reservations/${id}/status`, {
                status: newStatus,
            });

            setReservations((prevReservations) =>
                prevReservations.map((reservation) =>
                    reservation.id === id
                        ? { ...reservation, status: newStatus }
                        : reservation
                )
            );
        } catch (error) {
            console.error("Failed to update status:", error);
        }
    };

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
                    {currentReservations.length > 0 ? (
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
                                    {reservation.status === "confirmed" ? (
                                        <span className="px-1 py-1 rounded-md bg-green-100 text-accentGreen text-sm">
                                            Confirmed
                                        </span>
                                    ) : (
                                        <span className="px-1 py-1 rounded-md bg-yellow-100 text-yellow-700 text-sm">
                                            Reserved
                                        </span>
                                    )}
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
                                                className="text-accentGreen"
                                                onClick={() =>
                                                    setSelectedReservationId(
                                                        reservation.id
                                                    )
                                                }
                                            >
                                                View Details
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-accentRed">
                                                Canceled
                                            </DropdownMenuItem>
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
                                                    type="submit"
                                                    className="text-white bg-accentRed"
                                                    onClick={() =>
                                                        updateReservationStatus(
                                                            reservation.id,
                                                            reservation.status
                                                        )
                                                    }
                                                >
                                                    {reservation.status ===
                                                    "confirmed"
                                                        ? "Mark as Reserved"
                                                        : "Mark as Confirmed"}
                                                </Button>
                                            </div>
                                        </SheetContent>
                                    </Sheet>
                                </li>
                            </ul>
                        ))
                    ) : (
                        <p className="text-center font-medium text-accentRed">
                            Loading...
                        </p> //add lazy loading after complete
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
                                    className="cursor-pointer"
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
                                    className="cursor-pointer"
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
