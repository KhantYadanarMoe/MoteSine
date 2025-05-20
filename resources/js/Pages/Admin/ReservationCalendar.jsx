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

export default function ReservationCalendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [reservations, setReservations] = useState([]);

    // Mock reservation data
    const reservationData = {
        "2025-02-02": [
            { id: 1, name: "John Doe", time: "7:00 PM", guests: 2 },
            { id: 2, name: "Jane Smith", time: "8:30 PM", guests: 4 },
        ],
        "2025-02-03": [
            { id: 3, name: "Michael Lee", time: "6:00 PM", guests: 3 },
        ],
    };

    // Handle date selection
    const handleDateChange = (date) => {
        if (!date) return; // Prevent errors if no date is selected
        setSelectedDate(date);
        const formattedDate = format(date, "yyyy-MM-dd"); // Convert date to "2025-02-02" format
        setReservations(reservationData[formattedDate] || []); // Fetch reservations or set empty array
    };

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

    // Handle other custom components' inputs
    const handleCustomChange = (name, value) => {
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // form submit function
    const submit = async (e) => {
        e.preventDefault();

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
        }
    };
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
                    <form action="">
                        <h1 className="text-lg font-medium text-accentRed">
                            Reserve a table
                        </h1>
                        <p className="text-sm text-gray-800 mb-6">
                            Fill the form to reserve table.
                        </p>
                        <div className="md:flex gap-3">
                            <div className="my-2 md:w-1/2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    type="firstName"
                                    value={form.firstName}
                                    onChange={handleInputChange}
                                    placeholder="Enter customer's first name"
                                    className="mt-1 border-gray-500"
                                />
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
                            </div>
                        </div>
                        <div className="my-2">
                            <Label htmlFor="guest">Guest</Label>
                            <Input
                                id="guest"
                                name="guest"
                                type="number"
                                value={form.guest}
                                onChange={handleInputChange}
                                placeholder="Choose guest number"
                                className="mt-1 border-gray-500"
                            />
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
                </div>
            </div>
            <div className="md:w-[40%] lg:w-[30%]">
                <div className=" py-4 border border-gray-300 bg-white shadow-lg rounded-md">
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

                {/* Reservations for Selected Date */}
                <div className="mt-5 p-4 border border-gray-300 bg-white shadow-lg rounded-md">
                    <h2 className="font-medium text-accentRed">Reservations</h2>
                    {reservations.length > 0 ? (
                        <ul className="mt-5 space-y-3">
                            {reservations.map((res) => (
                                <li
                                    key={res.id}
                                    className="p-2 bg-gray-50 border-l-2 border-l-accentRed"
                                >
                                    <p className="font-medium">{res.name}</p>
                                    <p className="text-sm text-gray-600">
                                        {res.time} - {res.guests} Guests
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
