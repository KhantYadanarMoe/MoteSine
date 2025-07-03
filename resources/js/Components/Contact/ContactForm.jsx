import { Button } from "../ui/button";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import axios from "axios";
import { useSetting } from "@/contexts/GeneralSettingContext";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

export default function ContactForm({ setSubmitting }) {
    const { form: generalForm } = useSetting();
    // prepare state to store form data
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    // store errors state
    const [errors, setErrors] = useState({});
    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
    const { user, setUser } = useAuth();

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

    useEffect(() => {
        if (user) {
            setForm({
                name: user?.name || "",
                phone: user?.phone || "",
                email: user?.email || "",
                message: "",
            });
        }
    }, [user]);

    const validateForm = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = ["Name is required."];
        if (!form.phone.trim()) newErrors.phone = ["Phone is required."];
        if (!form.email.trim()) newErrors.email = ["Email is required."];
        if (!form.message.trim()) newErrors.message = ["Message is required."];

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // form submit function
    const submit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setSubmitting(true);

        // url and method to use in sending data using axios
        let url = "/contact/send";
        let method = "post";

        // create new object to store form data to send
        let formData = new FormData();

        console.log("Form Data before submitting:", form);

        // store state data in object
        formData.append("name", form.name);
        formData.append("phone", form.phone);
        formData.append("email", form.email);
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
            if (res.data.message === "Contact message sent successfully.") {
                setForm({
                    name: "",
                    phone: "",
                    email: "",
                    message: "",
                });
                setErrors({});
                setIsSuccessDialogOpen(true);
                navigate("/contact");
            }
        } catch (error) {
            console.error("Error sending contact message:", error);

            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            }
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <motion.div
            className="block md:flex items-center gap-3"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="w-full md:w-3/5 lg:w-1/2 px-5">
                <div className="mb-5">
                    <h2 className="text-3xl font-medium mb-1 relative inline-block">
                        Get In Touch
                    </h2>
                    <div className="flex items-center">
                        <div className="w-40 h-[2px] bg-accentRed"></div>
                        <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-medium">Send a Message</h2>
                    <p className="text-sm text-gray-800">
                        Please add your advices or things you want to know about
                        us and send message to let us know.
                    </p>
                </div>
                <form action="" className="my-6">
                    <div className="md:flex gap-3">
                        <div className="md:w-1/2 mb-3">
                            <Label
                                htmlFor="name"
                                className="text-base font-medium"
                            >
                                Name
                            </Label>
                            <Input
                                id="name"
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleInputChange}
                                placeholder="Enter your name"
                                className="mt-1 border-gray-500"
                            />
                            {errors.name && (
                                <p className="text-red-500 mt-1 text-sm">
                                    {errors.name[0]}
                                </p>
                            )}
                        </div>
                        <div className="md:w-1/2 mb-3">
                            <Label
                                htmlFor="phone"
                                className="text-base font-medium"
                            >
                                Phone
                            </Label>
                            <Input
                                id="phone"
                                type="text"
                                name="phone"
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
                    <div className="mb-3">
                        <Label
                            htmlFor="email"
                            className="text-base font-medium"
                        >
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="text"
                            name="email"
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
                    <div className="mb-3">
                        <Label
                            htmlFor="message"
                            className="text-base font-medium"
                        >
                            Message
                        </Label>
                        <Textarea
                            id="message"
                            type="text"
                            name="message"
                            value={form.message}
                            onChange={handleInputChange}
                            placeholder="Write here..."
                            className="mt-1 border-gray-500"
                        ></Textarea>
                        {errors.message && (
                            <p className="text-red-500 mt-1 text-sm">
                                {errors.message[0]}
                            </p>
                        )}
                    </div>
                    <div className="flex justify-end mt-6">
                        <Button
                            variant="default"
                            className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                            onClick={submit}
                        >
                            Send
                        </Button>
                    </div>
                </form>
                <AlertDialog
                    open={isSuccessDialogOpen}
                    onOpenChange={setIsSuccessDialogOpen}
                >
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Your message had been sent successfully!
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                We got your message and we'll connect you soon
                                via email. Thank You!
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction
                                onClick={() => setIsSuccessDialogOpen(false)}
                            >
                                OK
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-5 ml-3 border-l border-l-accentRed">
                <div className="py-5">
                    <h1 className="text-xl font-medium mb-1">Call us</h1>
                    <p className="text-sm text-gray-800">
                        Call us via phone if you are in hurry. Calling is faster
                        than sending message.
                    </p>
                    <div className="flex gap-3 items-center mt-4">
                        <PhoneCall className="text-accentRed" size={20} />
                        <p className="font-medium text-accentRed">
                            {generalForm.phone}
                        </p>
                    </div>
                </div>
                <div className="py-5">
                    <h1 className="text-xl font-medium mb-1">Email us</h1>
                    <p className="text-sm text-gray-800">
                        Send message via Email for another option.
                    </p>
                    <div className="flex gap-3 items-center mt-4">
                        <Mail className="text-accentRed" size={20} />
                        <p className="font-medium text-accentRed">
                            {generalForm.email}
                        </p>
                    </div>
                </div>
                <div className="py-5">
                    <h1 className="text-xl font-medium mb-1">Visit us</h1>
                    <p className="text-sm text-gray-800">
                        Come and visit us to feel your home's taste and treat
                        your home sick.
                    </p>
                    <div className="flex gap-3 items-center mt-4">
                        <MapPin className="text-accentRed" size={20} />
                        <p className="font-medium text-accentRed">
                            {generalForm.address}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
