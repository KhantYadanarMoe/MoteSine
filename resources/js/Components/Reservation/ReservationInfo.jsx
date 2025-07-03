import { MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../Components/ui/alert-dialog";
import TimePicker from "../TimePicker";
import DatePicker from "../DatePicker";
import { format } from "date-fns";
import { useSetting } from "@/contexts/GeneralSettingContext";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { useReservationSetting } from "@/contexts/ReservationSettingContext";
import { Label } from "../ui/label";

export default function ReservationInfo({ setSubmitting }) {
    const { form: generalForm } = useSetting();
    // prepare state to store form data
    const [form, setForm] = useState({
        guest: "",
        date: "",
        time: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });
    // store errors state
    const [errors, setErrors] = useState({});

    const [availabilityMessage, setAvailabilityMessage] = useState("");
    const [isAvailable, setIsAvailable] = useState(null);

    // use state to check dialog open or not and control
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

    const { form: reservationSetting } = useReservationSetting();

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

    const checkAvailability = async (e) => {
        e.preventDefault();

        // url and method to use in sending data using axios
        let url = "/check-availability";
        let method = "post";

        // create new object to store form data to send
        let formData = new FormData();

        console.log("Form Data before checking availability:", form);

        // store state data in object
        formData.append("guest", form.guest);
        if (form.date) {
            formData.append("date", format(new Date(form.date), "yyyy-MM-dd"));
        }
        formData.append("time", form.time);

        try {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content");

            const res = await axios[method](url, formData, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            setAvailabilityMessage(res.data.message);
            setIsAvailable(res.data.available);
        } catch (error) {
            console.error("Availability check error:", error);
            if (error.response?.data?.message) {
                setAvailabilityMessage(error.response.data.message);
            } else {
                setAvailabilityMessage("Error checking availability.");
            }
            setIsAvailable(false);
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!form.firstName.trim())
            newErrors.firstName = ["First name is required."];
        if (!form.lastName.trim())
            newErrors.lastName = ["Last name is required."];
        if (!form.email.trim()) newErrors.email = ["Email is required."];
        if (!form.phone.trim()) newErrors.phone = ["Phone is required."];
        if (!form.message.trim()) newErrors.message = ["Message is required."];

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // form submit function
    const submit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setSubmitting(true);

        // Don't allow submit if availability was checked and it's NOT available
        if (isAvailable === false) {
            setIsDialogOpen(true);
            setForm({
                guest: "",
                date: "",
                time: "",
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            });
            setErrors({});
            setAvailabilityMessage("");
        }

        // url and method to use in sending data using axios
        let url = "/reserve";
        let method = "post";

        // create new object to store form data to send
        let formData = new FormData();

        console.log("Form Data before submitting:", form);

        // store state data in object
        formData.append("guest", form.guest);
        if (form.date) {
            formData.append("date", format(new Date(form.date), "yyyy-MM-dd"));
        }
        formData.append("time", form.time);
        formData.append("firstName", form.firstName);
        formData.append("lastName", form.lastName);
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
                    guest: "",
                    date: "",
                    time: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                });
                setErrors({});
                setIsSuccessDialogOpen(true);
                navigate("/reservation");
                setAvailabilityMessage("");
            }
        } catch (error) {
            console.error("Error reserving:", error);

            // failed condition
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            }
        } finally {
            setSubmitting(false);
        }
    };

    function timeStringToMinutes(timeStr) {
        const [time, modifier] = timeStr.split(" ");
        let [hours, minutes] = time.split(":").map(Number);

        if (modifier === "PM" && hours !== 12) {
            hours += 12;
        }
        if (modifier === "AM" && hours === 12) {
            hours = 0;
        }

        return hours * 60 + minutes;
    }

    const openingMinutes = generalForm.from
        ? timeStringToMinutes(generalForm.from)
        : 540;
    const closingMinutes = generalForm.to
        ? timeStringToMinutes(generalForm.to)
        : 1320;

    const minTime = openingMinutes + 60;
    const maxTime = closingMinutes - 60;

    return (
        <div className="relative">
            <div className="md:absolute md:-top-40 lg:-top-36 md:left-0 md:ml-4 lg:ml-12 md:translate-y-1/2 w-[97%] mx-auto md:mx-0 md:w-auto bg-white md:shadow-xl p-3 mt-4 md:mt-0 rounded-lg">
                <div className="mb-5 block md:hidden">
                    <h2 className="text-xl font-semibold mb-1 relative inline-block">
                        Check Availability
                    </h2>
                    <div className="flex items-center">
                        <div className="w-28 h-[2px] bg-accentRed"></div>
                        <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                    </div>
                </div>
                <form className="flex flex-col md:flex-row gap-4 md:items-end">
                    <div className="flex flex-col gap-1 px-2">
                        <Label htmlFor="guest" className="font-medium">
                            Guest
                        </Label>
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
                    </div>

                    <div className="flex flex-col gap-1 px-2">
                        <Label htmlFor="Time" className="font-medium">
                            Time
                        </Label>
                        <TimePicker
                            minTime={minTime}
                            maxTime={maxTime}
                            id="time"
                            name="time"
                            selectedTime={form.time}
                            onTimeChange={(time) =>
                                handleCustomChange("time", time)
                            }
                        />
                    </div>

                    <div className="flex flex-col gap-1 px-2">
                        <Label htmlFor="Date" className="font-medium">
                            Date
                        </Label>
                        <DatePicker
                            id="date"
                            name="date"
                            selectedDate={form.date}
                            onDateChange={(date) =>
                                handleCustomChange("date", date)
                            }
                        />
                    </div>

                    <Button
                        variant="outline"
                        className="rounded-lg border-accentRed text-accentRed hover:bg-gray-100 hover:text-hoverRed hover:border-hoverRed duration-300"
                        onClick={checkAvailability}
                    >
                        Check Availability
                    </Button>
                </form>
            </div>
            <div className="block md:flex gap-3 items-center mt-3 md:mt-16 mb-4 w-[96%] lg:w-[90%] mx-auto">
                <motion.div
                    className="w-full md:w-3/5 lg:w-2/3 px-3"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.05 }}
                >
                    <div className="mb-5">
                        {availabilityMessage && (
                            <p
                                className={`text-sm my-4 ${
                                    isAvailable
                                        ? "text-green-600"
                                        : "text-red-600"
                                }`}
                            >
                                {availabilityMessage}
                            </p>
                        )}
                        <h2 className="text-xl font-semibold mb-1 relative inline-block">
                            Detail Infos
                        </h2>
                        <div className="flex items-center">
                            <div className="w-28 h-[2px] bg-accentRed"></div>
                            <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                        </div>
                    </div>
                    <form action="">
                        <div className="md:flex gap-4">
                            <div className="md:w-1/2 mb-5">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={form.firstName}
                                    onChange={handleInputChange}
                                    placeholder="Enter your first name"
                                    className="mt-1 border-gray-500"
                                />
                                {errors.firstName && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.firstName[0]}
                                    </p>
                                )}
                            </div>
                            <div className="md:w-1/2 mb-5">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={form.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Enter your last name"
                                    className="mt-1 border-gray-500"
                                />
                                {errors.lastName && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.lastName[0]}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="md:flex gap-4">
                            <div className="md:w-1/2 mb-5">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="text"
                                    value={form.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    className="mt-1 border-gray-500"
                                />
                                {errors.email && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.email[0]}
                                    </p>
                                )}
                            </div>
                            <div className="md:w-1/2 mb-5">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    value={form.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter your phone"
                                    className="mt-1 border-gray-500"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.phone[0]}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="mb-5">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                type="text"
                                value={form.message}
                                onChange={handleInputChange}
                                placeholder="Enter your message"
                                className="mt-1 border-gray-500"
                            ></Textarea>
                            {errors.message && (
                                <p className="text-red-500 mt-1 text-sm">
                                    {errors.message[0]}
                                </p>
                            )}
                        </div>
                        <div className="flex justify-end mt-4">
                            <Button
                                variant="default"
                                className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                                onClick={submit}
                            >
                                Reserve
                            </Button>
                        </div>
                        <AlertDialog
                            open={isSuccessDialogOpen}
                            onOpenChange={setIsSuccessDialogOpen}
                        >
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Reserved Successfully!
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Your reservation had been recorded.
                                        Thank You!
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogAction
                                        onClick={() =>
                                            setIsSuccessDialogOpen(false)
                                        }
                                    >
                                        OK
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        <div className="mt-5 flex justify-end">
                            <AlertDialog
                                open={isDialogOpen}
                                onOpenChange={setIsDialogOpen}
                            >
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>
                                            Reservation Unavailable!
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Reservation is not available for the
                                            selected time.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogAction
                                            onClick={() =>
                                                setIsDialogOpen(false)
                                            }
                                        >
                                            OK
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </form>
                </motion.div>
                <motion.div
                    className="w-full md:w-2/5 lg:w-1/3 px-6 mt-4 md:mt-0 border-l-2 border-l-accentRed"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.05 }}
                >
                    {generalForm.logo && (
                        <img
                            src={`/storage/${generalForm.logo}`} // adjust if needed
                            alt="Logo"
                            className="w-28 md:w-24 lg:w-32 h-auto"
                        />
                    )}
                    <p className="text-gray-800 text-xs lg:text-sm mt-2">
                        Reserve a table to make sure your unforgettable eat out
                        memories! You can reserve with just one click. You can
                        also cancel your reservation within 24 hours.
                    </p>
                    <div className="my-5">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.250854129098!2d-73.95863912510056!3d40.77849893354363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258bcff650315%3A0xd0e7db23e51d4f29!2s1257%20Lexington%20Ave%20%234b%2C%20New%20York%2C%20NY%2010028%2C%20USA!5e0!3m2!1sen!2smm!4v1740748924372!5m2!1sen!2smm"
                            allowFullScreen=""
                            loading="lazy"
                            className="border-none border-r-2 shadow-md w-[100%] h-[200px] md:h-[140px] lg:h-[200px] md:w-full"
                        ></iframe>
                    </div>
                    <div className="flex gap-2 font-medium">
                        <MapPin size={28} />
                        <h1 className="text-sm md:text-xs lg:text-sm">
                            {generalForm.address}
                        </h1>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
