import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
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
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function ApplyForm({ setSubmitting }) {
    const [position, setPosition] = useState("");

    // prepare state to store form data
    const [form, setForm] = useState({
        businessName: "",
        businessAddress: "",
        name: "",
        email: "",
        phone: "",
        social: "",
        type: "",
        certificate: "",
    });
    // store errors state
    const [errors, setErrors] = useState({});

    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

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

    const certificateRef = useRef();

    const validateForm = () => {
        const newErrors = {};
        if (!form.businessName.trim())
            newErrors.businessName = ["Business name is required."];
        if (!form.businessAddress.trim())
            newErrors.businessAddress = ["Business address is required."];
        if (!form.name.trim()) newErrors.name = ["Name is required."];
        if (!form.email.trim()) newErrors.email = ["Email is required."];
        if (!form.phone.trim()) newErrors.phone = ["Phone is required."];
        if (!form.type.trim()) newErrors.type = ["Type is required."];

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // form submit function
    const submit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setSubmitting(true);

        // url and method to use in sending data using axios
        let url = "/partnership/send";
        let method = "post";

        // create new object to store form data to send
        let formData = new FormData();

        console.log("Form Data before submitting:", form);

        // store state data in object
        formData.append("businessName", form.businessName);
        formData.append("businessAddress", form.businessAddress);
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("social", form.social);
        formData.append("type", form.type);
        formData.append("certificate", form.certificate);

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
            if (
                res.data.message ===
                "Partnership application sent successfully."
            ) {
                setForm({
                    businessName: "",
                    businessAddress: "",
                    name: "",
                    email: "",
                    phone: "",
                    social: "",
                    type: "",
                    certificate: "",
                });
                certificateRef.current.value = "";
                setIsSuccessDialogOpen(true);
                navigate("/partnerships");
            }
        } catch (error) {
            console.error("Error sending application:", error);

            // failed condition
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            }
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="w-[93%] mx-auto py-5">
                <form action="" className="md:flex gap-5">
                    <div className="md:w-1/2">
                        <h1 className="text-2xl font-medium">
                            Upgrade your business with us!
                        </h1>
                        <p className="text-gray-800 text-xs md:text-sm mt-2">
                            Do you want to sell your products in other country?
                            Here is a starting point for you! Apply and be part
                            of our team now!
                        </p>
                        <div className="my-4">
                            <div className="mb-3">
                                <label htmlFor="businessName">
                                    Business Name
                                </label>
                                <Input
                                    id="businessName"
                                    name="businessName"
                                    value={form.businessName}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your business name"
                                    className="mt-1 border-gray-500"
                                />
                                {errors.businessName && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.businessName[0]}
                                    </p>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="businessAddress">
                                    Business Address
                                </label>
                                <Input
                                    id="businessAddress"
                                    name="businessAddress"
                                    value={form.businessAddress}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your business address"
                                    className="mt-1 border-gray-500"
                                />
                                {errors.businessAddress && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.businessAddress[0]}
                                    </p>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Name</label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your name"
                                    className="mt-1 border-gray-500"
                                />
                                {errors.name && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.name[0]}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="lg:flex gap-3">
                            <div className="lg:w-1/2 mb-3">
                                <label htmlFor="email">Email</label>
                                <Input
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your email"
                                    className="mt-1 border-gray-500"
                                />
                                {errors.email && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.email[0]}
                                    </p>
                                )}
                            </div>
                            <div className="lg:w-1/2 mb-3">
                                <label htmlFor="phone">Phone</label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleInputChange}
                                    type="text"
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
                            <label htmlFor="social">
                                Website or Social Link
                            </label>
                            <Input
                                id="social"
                                name="social"
                                value={form.social}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Enter your website or social URL"
                                className="mt-1 border-gray-500"
                            />
                            {errors.social && (
                                <p className="text-red-500 mt-1 text-sm">
                                    {errors.social[0]}
                                </p>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Type">Type of Business</label>
                            <div className="mt-2">
                                <Select
                                    value={form.type}
                                    onValueChange={(value) =>
                                        handleCustomChange("type", value)
                                    }
                                >
                                    <SelectTrigger
                                        className="w-full border-gray-400"
                                        name="type"
                                    >
                                        <SelectValue placeholder="Choose a position" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Distributor">
                                            Distributor
                                        </SelectItem>
                                        <SelectItem value="Manufacturer">
                                            Manufacturer
                                        </SelectItem>
                                        <SelectItem value=" Wholesaler">
                                            {" "}
                                            Wholesaler
                                        </SelectItem>
                                        <SelectItem value="Retailer">
                                            Retailer
                                        </SelectItem>
                                        <SelectItem value="Home-based">
                                            Home-based
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.type && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.type[0]}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="certificate">
                                Food Safety & Certification (if applicable)
                            </label>
                            <Input
                                id="certificate"
                                name="certificate"
                                ref={certificateRef}
                                onChange={(e) =>
                                    handleCustomChange(
                                        "certificate",
                                        e.target.files[0]
                                    )
                                }
                                type="file"
                                placeholder="Upload your Resume"
                                className="mt-1 border-gray-500"
                            />
                            {errors.certificate && (
                                <p className="text-red-500 mt-1 text-sm">
                                    {errors.certificate[0]}
                                </p>
                            )}
                        </div>
                        <div className="flex justify-end mt-5">
                            <Button
                                variant="default"
                                className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                                onClick={submit}
                            >
                                Submit
                            </Button>
                        </div>
                    </div>
                </form>
                <AlertDialog
                    open={isSuccessDialogOpen}
                    onOpenChange={setIsSuccessDialogOpen}
                >
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Your application has been recorded!
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                We got your application for our partnership
                                program and we'll connect you soon via email.
                                Thank You!
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
        </motion.div>
    );
}
