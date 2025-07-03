import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Button } from "../ui/button";
import HeroBg from "../../../images/hero-bg.jpg";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
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
import { Label } from "../ui/label";
import { useRef } from "react";
import { useEffect } from "react";

export default function JobForm({ setSubmitting }) {
    const [position, setPosition] = useState("");
    // prepare state to store form data
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        resume: "",
    });
    // store errors state
    const [errors, setErrors] = useState({});

    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

    // state to store jobs
    let [jobs, setJobs] = useState([]);

    // fetch data that send from backend
    let getJobs = async () => {
        try {
            let res = await axios.get("/api/jobs");
            let data = res.data;
            setJobs(data.jobs);
        } catch (error) {
            console.error("Failed to fetch jobs:", error);
        }
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getJobs();
    }, []);

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

    const resumeRef = useRef();

    const validateForm = () => {
        const newErrors = {};
        if (!form.firstName.trim())
            newErrors.firstName = ["First name is required."];
        if (!form.lastName.trim())
            newErrors.lastName = ["Last name is required."];
        if (!form.email.trim()) newErrors.email = ["Email is required."];
        if (!form.phone.trim()) newErrors.phone = ["Phone is required."];
        if (!form.position.trim())
            newErrors.position = ["Position is required."];

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // form submit function
    const submit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setSubmitting(true);

        // url and method to use in sending data using axios
        let url = "/jobs/apply";
        let method = "post";

        // create new object to store form data to send
        let formData = new FormData();

        console.log("Form Data before submitting:", form);

        // store state data in object
        formData.append("firstName", form.firstName);
        formData.append("lastName", form.lastName);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("position", form.position);
        formData.append("resume", form.resume);

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
            if (res.data.message === "Job application sent successfully.") {
                setForm({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    position: "",
                    resume: "",
                });
                resumeRef.current.value = "";
                setIsSuccessDialogOpen(true);
                navigate("/jobs");
            }
        } catch (error) {
            console.error("Error applying job:", error);

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
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            id="Form"
        >
            <hr className="border-t-gray-400" />
            <div className="relative py-4" id="jobForm">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${HeroBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.6,
                        zIndex: -1,
                    }}
                ></div>
                <h1 className="font-medium text-2xl text-accentRed text-center">
                    Apply Here
                </h1>
                <p className="text-sm text-gray-800 text-center mt-2">
                    Apply now to be part of our team!
                </p>
                <form action="" className="w-[92%] md:w-[70%] mx-auto my-4">
                    <div className="flex gap-3">
                        <div className="w-1/2 mb-3">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                                id="firstName"
                                type="text"
                                value={form.firstName}
                                onChange={handleInputChange}
                                name="firstName"
                                placeholder="Enter your first name"
                                className="mt-1 border-gray-500"
                            />
                            {errors.firstName && (
                                <p className="text-red-500 mt-1 text-sm">
                                    {errors.firstName[0]}
                                </p>
                            )}
                        </div>
                        <div className="w-1/2 mb-3">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                                id="lastName"
                                type="text"
                                value={form.lastName}
                                onChange={handleInputChange}
                                name="lastName"
                                placeholder="Enter your name"
                                className="mt-1 border-gray-500"
                            />
                            {errors.lastName && (
                                <p className="text-red-500 mt-1 text-sm">
                                    {errors.lastName[0]}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="mb-3">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="text"
                            value={form.email}
                            onChange={handleInputChange}
                            name="email"
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
                        <Label htmlFor="phone">Phone</Label>
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
                    <div className="mb-3">
                        <Label htmlFor="Position">Position</Label>
                        <div className="mt-2">
                            <Select
                                value={form.position}
                                onValueChange={(value) =>
                                    handleCustomChange("position", value)
                                }
                            >
                                <SelectTrigger
                                    name="position"
                                    className="w-full border-gray-500"
                                >
                                    <SelectValue placeholder="Choose a position" />
                                </SelectTrigger>
                                <SelectContent>
                                    {jobs.map((job) => (
                                        <SelectItem
                                            key={job.id}
                                            value={job?.title?.toLowerCase()}
                                        >
                                            {job.title}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        {errors.position && (
                            <p className="text-red-500 mt-1 text-sm">
                                {errors.position[0]}
                            </p>
                        )}
                    </div>
                    <div className="mb-3">
                        <Label htmlFor="resume">Resume</Label>
                        <Input
                            id="resume"
                            type="file"
                            onChange={(e) =>
                                handleCustomChange("resume", e.target.files[0])
                            }
                            name="resume"
                            ref={resumeRef}
                            placeholder="Upload your Resume"
                            className="mt-1 border-gray-500"
                        />
                        {errors.resume && (
                            <p className="text-red-500 mt-1 text-sm">
                                {errors.resume[0]}
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
                                We got your job application and we'll connect
                                you soon via email. Thank You!
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
