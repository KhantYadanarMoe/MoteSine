import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { History, Hash, UserRound, Utensils, Ellipsis } from "lucide-react";
import Profile from "../../../images/Profile.jpg";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect } from "react";
import dayjs from "dayjs";

export default function ReservationHistories() {
    // state to store reservations
    let [reservations, setReservations] = useState([]);

    const [selectedReservationId, setSelectedReservationId] = useState(null);

    // fetch data that send from backend
    let getReservations = async () => {
        let res = await axios.get("/api/user/reservations");
        let data = res.data;
        setReservations(data.reservations);
    };

    useEffect(() => {
        getReservations();
    }, []);

    // Find the selected reservation object
    const selectedReservation = reservations.find(
        (r) => r.id === selectedReservationId
    );

    function formatDate(dateStr) {
        const options = { weekday: "long", day: "numeric", month: "long" };
        return new Date(dateStr).toLocaleDateString(undefined, options);
    }

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
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-[68%] xl:w-[74%] flex flex-col gap-6 lg:ml-[32%] xl:ml-[26%] pl-3 lg:pl-4 py-8"
        >
            <div>
                <h1 className="text-xl font-medium flex gap-1 items-center">
                    <History size={20} /> Reservation Histories
                </h1>
                <p className="text-sm text-gray-700 mt-1">
                    You can canceled your order before 24 hours of your reserved
                    time.
                </p>
            </div>

            <div>
                {[...new Set(reservations.map((r) => r.date))].map((date) => (
                    <div key={date} className="mt-10">
                        <div className="flex gap-2 items-center">
                            <h1 className="text-xl font-medium">
                                {formatDate(date)}
                            </h1>
                            <span className="text-xl text-gray-600">
                                {new Date(date).getFullYear()}
                            </span>
                        </div>

                        <div className="mt-7">
                            {reservations
                                .filter((r) => r.date === date)
                                .map((reservation) => (
                                    <div
                                        key={reservation.id}
                                        className="flex mt-5 mb-4 items-center"
                                    >
                                        <span className="text-gray-700 basis-[28%] md:basis-[15%] border-r border-r-gray-500 mr-1">
                                            {reservation.time}
                                        </span>

                                        <div className="flex items-center basis-[28%] md:basis-[20%] text-accentRed">
                                            <h1 className="font-medium text-xl">
                                                {reservation.reservation_code}
                                            </h1>
                                        </div>

                                        <div className="flex gap-1 items-center basis-[31%] md:basis-[20%]">
                                            <UserRound size={20} />
                                            <h1>{reservation.guest} guests</h1>
                                        </div>

                                        <div className="md:basis-[20%] hidden md:block">
                                            <div className="flex gap-1 items-center">
                                                <Utensils size={16} />
                                                <div className="flex items-center gap-1">
                                                    <h1>Table No.</h1>
                                                    <span className=" text-accentRed">
                                                        {reservation.table_no}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="md:basis-[15%] hidden md:block">
                                            <span
                                                className={`px-1 py-1 rounded-md text-sm ${
                                                    reservation.status ===
                                                    "Confirmed"
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
                                                {reservation.status ||
                                                    "Pending"}
                                            </span>
                                        </div>

                                        <div className="basis-[8%] md:basis-[10%]">
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
                                                        onClick={() => {
                                                            setSelectedReservationId(
                                                                reservation.id
                                                            );
                                                        }}
                                                    >
                                                        View Details
                                                    </DropdownMenuItem>

                                                    {reservation.status !==
                                                        "Reserved" &&
                                                        reservation.status !==
                                                            "Canceled" && (
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
                                                                Reservation
                                                            </DropdownMenuItem>
                                                        )}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                            {/* Detail Sheet */}
                                            <Sheet
                                                open={
                                                    selectedReservationId ===
                                                    reservation.id
                                                }
                                                onOpenChange={(open) => {
                                                    if (!open)
                                                        setSelectedReservationId(
                                                            null
                                                        ); // close the sheet
                                                }}
                                            >
                                                <SheetContent className="w-[93%] md:w-[48%]">
                                                    <SheetHeader>
                                                        <SheetTitle className="flex gap-2">
                                                            Reservation{" "}
                                                            {selectedReservation ? (
                                                                <div className="flex items-center gap-1 text-accentRed">
                                                                    <h1 className="font-medium">
                                                                        {
                                                                            reservation.reservation_code
                                                                        }
                                                                    </h1>
                                                                </div>
                                                            ) : (
                                                                "..."
                                                            )}
                                                        </SheetTitle>
                                                    </SheetHeader>

                                                    {selectedReservation && (
                                                        <div className="mt-8">
                                                            <div className="flex items-center gap-2">
                                                                <img
                                                                    src={
                                                                        Profile
                                                                    }
                                                                    alt=""
                                                                    className="w-16 h-16 rounded-full"
                                                                />
                                                                <div>
                                                                    <h1 className="font-medium">
                                                                        {
                                                                            reservation
                                                                                ?.user
                                                                                ?.name
                                                                        }
                                                                    </h1>
                                                                    <span className="text-sm text-gray-700">
                                                                        {
                                                                            reservation
                                                                                ?.user
                                                                                ?.address
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="mt-8">
                                                                <div className="flex justify-between items-center mb-3">
                                                                    <h1 className="font-medium">
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

                                                                <div className="flex justify-between items-center mb-3">
                                                                    <h1 className="font-medium">
                                                                        Time -{" "}
                                                                    </h1>
                                                                    <span className="text-sm text-gray-800">
                                                                        {
                                                                            reservation.time
                                                                        }
                                                                    </span>
                                                                </div>

                                                                <div className="flex justify-between items-center mb-3">
                                                                    <h1 className="font-medium">
                                                                        Guest -{" "}
                                                                    </h1>
                                                                    <span className="text-sm text-gray-800">
                                                                        {
                                                                            reservation.guest
                                                                        }{" "}
                                                                        guests
                                                                    </span>
                                                                </div>

                                                                <div className="flex justify-between items-center mb-3">
                                                                    <h1 className="font-medium">
                                                                        Table -{" "}
                                                                    </h1>
                                                                    <span className="text-sm text-accentRed">
                                                                        {
                                                                            reservation.table_no
                                                                        }
                                                                    </span>
                                                                </div>

                                                                <hr className="border-t-gray-400 mt-4 mb-5" />

                                                                <div className="flex justify-between items-center mb-3">
                                                                    <h1 className="font-medium">
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

                                                                <div className="flex justify-between items-center mb-3">
                                                                    <h1 className="font-medium">
                                                                        Phone -{" "}
                                                                    </h1>
                                                                    <span className="text-sm text-gray-800">
                                                                        {
                                                                            reservation.phone
                                                                        }
                                                                    </span>
                                                                </div>

                                                                <div className="flex justify-between items-center mb-3">
                                                                    <h1 className="font-medium">
                                                                        Email -{" "}
                                                                    </h1>
                                                                    <span className="text-sm text-gray-800">
                                                                        {
                                                                            reservation.email
                                                                        }
                                                                    </span>
                                                                </div>

                                                                <hr className="border-t-gray-400 mt-5 mb-3" />

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
                                                    )}
                                                </SheetContent>
                                            </Sheet>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
