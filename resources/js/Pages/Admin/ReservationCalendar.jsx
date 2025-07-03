import { Label } from "../../Components/ui/label";
import { Input } from "../../Components/ui/input";
import { Textarea } from "../../Components/ui/textarea";
import { Button } from "../../Components/ui/button";
import { Calendar } from "../../Components/ui/calendar";
import { format } from "date-fns";
import DatePicker from "../../Components/DatePicker";
import TimePicker from "../../Components/TimePicker";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { useReservationSetting } from "@/contexts/ReservationSettingContext";
import Unavailable from "../../../images/Unavailable.jpg";
import Loading from "@/Components/Loading";

export default function ReservationCalendar() {
    const { form: reservationSetting } = useReservationSetting();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleDateChange = async (date) => {
        if (!date) return;

        setSelectedDate(date);
        const formattedDate = format(date, "yyyy-MM-dd");

        try {
            const res = await axios.get(
                `/api/reservations/by-date/${formattedDate}`
            );
            setReservations(res.data || []);
        } catch (error) {
            console.error("Failed to fetch reservations:", error);
            setReservations([]);
        }
    };

    useEffect(() => {
        handleDateChange(selectedDate);
    }, []);

    // prepare state to store form data
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        guest: "",
        date: "",
        time: "",
        email: "",
        phone: "",
        message: "",
    });
    // store errors state
    const [errors, setErrors] = useState({});

    // prepare to move another route/page after sending data
    const navigate = useNavigate();

    // Handle HTML inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle other custom Components' inputs
    const handleCustomChange = (name, value) => {
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // form submit function
    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // url and method to use in sending data using axios
        let url = "/reserve";
        let method = "post";

        // create new object to store form data to send
        let formData = new FormData();

        console.log("Form Data before submitting:", form);

        // store state data in object
        formData.append("firstName", form.firstName);
        formData.append("lastName", form.lastName);
        formData.append("guest", form.guest);
        if (form.date) {
            formData.append("date", format(new Date(form.date), "yyyy-MM-dd"));
        }
        formData.append("time", form.time);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("message", form.message);

        console.log("Form data after appending:", formData);

        try {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content");

            // send data
            const res = await axios[method](url, formData, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            // success condition
            if (res.data.message === "Reserved successfully.") {
                setForm({
                    firstName: "",
                    lastName: "",
                    guest: "",
                    date: "",
                    time: "",
                    email: "",
                    phone: "",
                    message: "",
                });
                setErrors({});
                navigate("/admin/reservation/calendar");
            }
        } catch (error) {
            console.error("Error reserving:", error);

            // failed condition
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            }
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="absolute top-0 left-0 w-full h-full z-50 pointer-events-none">
                <div className="lg:pt-24 pt-20 h-[83vh] flex items-center justify-center pointer-events-auto">
                    <Loading />
                </div>
            </div>
        );
    }
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:flex gap-3 mx-2 md:mx-4 my-8"
        >
            <div className="md:w-[60%] lg:w-[70%] mb-4 md:mb-0">
                <div className="px-4 py-6 border border-gray-300 bg-white  shadow-lg rounded-md">
                    {reservationSetting.allow ? (
                        <form action="">
                            <h1 className="text-lg font-medium text-accentRed">
                                Reserve a table
                            </h1>
                            <p className="text-sm text-gray-800 mb-6">
                                Fill the form to reserve table.
                            </p>
                            <div className="md:flex gap-3">
                                <div className="my-2 md:w-1/2">
                                    <Label htmlFor="firstName">
                                        First Name
                                    </Label>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        type="firstName"
                                        value={form.firstName}
                                        onChange={handleInputChange}
                                        placeholder="Enter customer's first name"
                                        className="mt-1 border-gray-500"
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500 mt-1 text-sm">
                                            {errors.firstName}
                                        </p>
                                    )}
                                </div>
                                <div className="my-2 md:w-1/2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        type="lastName"
                                        value={form.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Enter customer's last name"
                                        className="mt-1 border-gray-500"
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-500 mt-1 text-sm">
                                            {errors.lastName}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="my-2">
                                <Label htmlFor="guest">Guest</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="w-full border-b text-left justify-start text-gray-600 border-gray-500"
                                        >
                                            {form.guest
                                                ? `${form.guest} guests`
                                                : "Select Guest Number"}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-36 p-0 bg-white shadow-lg rounded-md z-50">
                                        <ScrollArea className="h-48">
                                            <div className="p-2">
                                                {Array.from(
                                                    {
                                                        length: reservationSetting.maxGuests,
                                                    },
                                                    (_, i) => i + 1
                                                ).map((guest) => (
                                                    <div
                                                        key={guest}
                                                        className="p-2 cursor-pointer hover:bg-gray-100 rounded-md"
                                                        onClick={() =>
                                                            handleCustomChange(
                                                                "guest",
                                                                guest
                                                            )
                                                        }
                                                    >
                                                        {guest}
                                                    </div>
                                                ))}
                                            </div>
                                        </ScrollArea>
                                    </PopoverContent>
                                </Popover>
                                {errors.guest && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.guest}
                                    </p>
                                )}
                            </div>
                            <div className="md:flex gap-3">
                                <div className="my-2 md:w-1/2">
                                    <Label htmlFor="date">Date</Label>
                                    <DatePicker
                                        id="date"
                                        name="date"
                                        selectedDate={form.date}
                                        onDateChange={(date) =>
                                            handleCustomChange("date", date)
                                        }
                                    />
                                    {errors.date && (
                                        <p className="text-red-500 mt-1 text-sm">
                                            {errors.date}
                                        </p>
                                    )}
                                </div>
                                <div className="my-2 md:w-1/2">
                                    <Label htmlFor="time">Time</Label>
                                    <TimePicker
                                        minTime={540}
                                        maxTime={1320}
                                        id="time"
                                        name="time"
                                        selectedTime={form.time}
                                        onTimeChange={(time) =>
                                            handleCustomChange("time", time)
                                        }
                                    />
                                    {errors.time && (
                                        <p className="text-red-500 mt-1 text-sm">
                                            {errors.time}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="my-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter customer's email"
                                    className="mt-1 border-gray-500"
                                />
                                {errors.email && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div className="my-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    value={form.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter customer's phone"
                                    className="mt-1 border-gray-500"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>
                            <div className="my-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    type="text"
                                    value={form.message}
                                    onChange={handleInputChange}
                                    placeholder="Enter customer's message"
                                    className="mt-1 border-gray-500"
                                ></Textarea>
                                {errors.message && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            <div className="flex mt-5 justify-end">
                                <Button
                                    variant="default"
                                    className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                                    onClick={submit}
                                >
                                    Reserve
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <div className="h-[85vh] flex flex-col justify-center items-center">
                            <img
                                src={Unavailable}
                                alt=""
                                className="w-48 mb-8"
                            />
                            <h2 className="md:text-xl font-semibold text-gray-700 mb-2 text-center">
                                Table Reservation is not available now!
                            </h2>
                            <p className="text-gray-500 mb-4 text-xs md:text-sm text-center">
                                We are sorry! Table reservation service is
                                temporarily unavailable. We will come back
                                later.
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className="md:w-[40%] lg:w-[30%]">
                <div className="py-4 border border-gray-300 bg-white shadow-lg rounded-md">
                    <h2 className="font-medium text-accentRed pl-4">
                        Select Date
                    </h2>
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateChange}
                        className="mt-3"
                    />
                </div>

                <div className="mt-5 p-4 border border-gray-300 bg-white shadow-lg rounded-md">
                    <h2 className="font-medium text-accentRed">Reservations</h2>
                    {reservations.length > 0 ? (
                        <ul className="mt-5 space-y-3">
                            {reservations.map((res) => (
                                <li
                                    key={res.id}
                                    className="p-2 bg-gray-50 border-l-2 border-l-accentRed"
                                >
                                    <p className="font-medium">
                                        {res.firstName} {res.lastName}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        {res.time} - {res.guest} Guests
                                    </p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="mt-5 text-gray-500 text-center text-sm">
                            No reservations for this date.
                        </p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
