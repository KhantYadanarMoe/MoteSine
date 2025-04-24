import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from "../../Components/ui/select";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { Textarea } from "../../Components/ui/textarea";
import { Label } from "@/Components/ui/label";
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
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function JobCreate() {
    // prepare state to store form data
    const [form, setForm] = useState({
        title: "",
        desc: "",
        salary: "",
        type: "",
    });
    // store errors state
    const [errors, setErrors] = useState({});

    // use state to check dialog open or not and control
    const [isDialogOpen, setIsDialogOpen] = useState(false);

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
        let url = "/api/job/create";
        let method = "post";

        // create new object to store form data to send
        let formData = new FormData();

        console.log("Form Data before submitting:", form);

        // store state data in object
        formData.append("title", form.title);
        formData.append("desc", form.desc);
        formData.append("salary", form.salary);
        formData.append("type", form.type);

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
            if (res.data.message === "Job post created successfully.") {
                navigate("/admin/jobs");
            }
        } catch (error) {
            console.error("Error creating job:", error);

            // failed condition
            if (error.response && error.response.status === 422) {
                setIsDialogOpen(false);
                setErrors(error.response.data.errors);
            }
        }
    };
    return (
        <motion.div
            initial={{ visibility: "hidden", opacity: 0 }}
            whileInView={{ visibility: "visible", opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8 relative lg:flex gap-3"
        >
            <div className="w-full lg:w-[70%]">
                <h1 className="text-lg font-medium">Create Job Post</h1>
                <form action="" className="mt-6 md:px-3">
                    <div className="mt-5 px-4 py-6 border border-gray-300 bg-white  shadow-lg rounded-md">
                        <h2 className="font-medium">Job Information</h2>
                        <div>
                            <div className="mt-3">
                                <Label htmlFor="title">Job Title</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    value={form.title}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your job title"
                                    className="mt-1 border-gray-500"
                                />
                                {errors.title && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.title[0]}
                                    </p>
                                )}
                            </div>
                            <div className="mt-3">
                                <Label htmlFor="salary">
                                    Pay Rate (Per Hour)
                                </Label>
                                <Input
                                    id="salary"
                                    name="salary"
                                    value={form.salary}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your pay rate"
                                    className="mt-1 border-gray-500"
                                />
                                {errors.salary && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.salary[0]}
                                    </p>
                                )}
                            </div>
                            <div className="mt-3">
                                <Label htmlFor="desc">
                                    Job Description (Skills needed to apply)
                                </Label>
                                <Textarea
                                    id="desc"
                                    name="desc"
                                    value={form.desc}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your desc"
                                    className="mt-1 border-gray-500"
                                ></Textarea>
                                {errors.desc && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.desc[0]}
                                    </p>
                                )}
                            </div>
                            <div className="mt-3">
                                <Label htmlFor="type">Type</Label>
                                <Select
                                    value={form.type}
                                    onValueChange={(value) =>
                                        handleCustomChange("type", value)
                                    }
                                >
                                    <SelectTrigger
                                        id="type"
                                        name="type"
                                        className="mt-1 border-gray-500"
                                    >
                                        <span>
                                            {form.type || "Select Type"}
                                        </span>
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="Part Time">
                                            Part Time
                                        </SelectItem>
                                        <SelectItem value="Full Time">
                                            Full Time
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
                    </div>

                    <div className="mt-5 flex justify-end">
                        <AlertDialog
                            open={isDialogOpen}
                            onOpenChange={setIsDialogOpen}
                        >
                            <AlertDialogTrigger>
                                <Button
                                    type="button"
                                    variant="default"
                                    className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                                    onClick={() => setIsDialogOpen(true)}
                                >
                                    Create Post
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Are you sure you want to add this in
                                        your menu?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction onClick={submit}>
                                        Submit
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </form>
            </div>
            <div className="lg:w-[30%] lg:max-w-[295px] xl:max-w-[290px] hidden lg:block fixed right-4">
                <h1 className="text-lg font-medium">Job Posts</h1>
                <ul className="mt-5 px-4 py-6 border border-gray-300 bg-white  shadow-lg rounded-md">
                    <li>
                        <h1 className="font-medium">Delivery Man</h1>
                        <div className="mt-1">
                            <p className="text-gray-800 text-sm">
                                $35-50 Per Hour
                            </p>
                            <p className="text-gray-800 text-sm">Part Time</p>
                        </div>
                        <hr className="border-t-gray-400 my-2" />
                    </li>
                    <li>
                        <h1 className="font-medium">Delivery Man</h1>
                        <div className="mt-1">
                            <p className="text-gray-800 text-sm">
                                $35-50 Per Hour
                            </p>
                            <p className="text-gray-800 text-sm">Part Time</p>
                        </div>
                        <hr className="border-t-gray-400 my-2" />
                    </li>
                    <li>
                        <h1 className="font-medium">Delivery Man</h1>
                        <div className="mt-1">
                            <p className="text-gray-800 text-sm">
                                $35-50 Per Hour
                            </p>
                            <p className="text-gray-800 text-sm">Part Time</p>
                        </div>
                        <hr className="border-t-gray-400 my-2" />
                    </li>
                    <li>
                        <h1 className="font-medium">Delivery Man</h1>
                        <div className="mt-1">
                            <p className="text-gray-800 text-sm">
                                $35-50 Per Hour
                            </p>
                            <p className="text-gray-800 text-sm">Part Time</p>
                        </div>
                    </li>
                </ul>
            </div>
        </motion.div>
    );
}
