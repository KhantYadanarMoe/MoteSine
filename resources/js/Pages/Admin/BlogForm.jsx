import { Upload, CalendarFold, Clock } from "lucide-react";
import Blog2 from "../../../images/fresh.jpg";
import { Switch } from "../../Components/ui/switch";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { Textarea } from "../../Components/ui/textarea";
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
import { Label } from "@/Components/ui/label";
import { useNavigate } from "react-router-dom";

export default function BlogForm() {
    const [images, setImages] = useState([]); //for new image upload

    // prepare state to store form data
    const [form, setForm] = useState({
        title: "",
        paragraph: "",
        visibility: true,
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

    // Handle image input
    const uploadImg = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 0) {
            setImages((prevImages) => [...prevImages, ...files]);
        }
    };

    // form submit function
    const submit = async (e) => {
        e.preventDefault();

        // url and method to use in sending data using axios
        let url = "/api/blog/create";
        let method = "post";

        // create new object to store form data to send
        let formData = new FormData();

        console.log("Form Data before submitting:", form);

        // store state data in object
        formData.append("title", form.title);
        formData.append("paragraph", form.paragraph);
        formData.append("visibility", form.visibility ? "1" : "0");

        console.log("Form data after appending:", formData);

        // Append images to form data
        images.forEach((image) => {
            formData.append("images[]", image);
        });

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
            if (res.data.message === "Blog created successfully.") {
                navigate("/admin/blogs");
            }
        } catch (error) {
            console.error("Error creating blog:", error);

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
                <h1 className="text-lg font-medium">Create Blog</h1>
                <p className="text-gray-800 text-sm mt-2">
                    You can add 3 images per blog.
                </p>
                <form action="" className="mt-6 md:px-3">
                    <div className="flex justify-center mt-8 px-4 py-6 border border-gray-300 bg-white shadow-lg rounded-md">
                        <div
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(e) => {
                                e.preventDefault();
                                const files = Array.from(e.dataTransfer.files);
                                const imageFiles = files.filter((file) =>
                                    file.type.startsWith("image/")
                                );

                                if (imageFiles.length > 0) {
                                    setImages((prevImages) => [
                                        ...prevImages,
                                        ...imageFiles,
                                    ]);
                                }
                            }}
                            className="w-full border-2 border-dashed border-gray-400 p-8 rounded-lg text-center"
                        >
                            <div className="flex flex-col items-center">
                                {/* Upload icon on top */}
                                <Upload className="text-gray-700 text-4xl mb-4" />

                                {/* Text with label */}
                                <Label
                                    htmlFor="image-upload"
                                    className="flex items-center gap-1 justify-center cursor-pointer text-gray-700"
                                >
                                    <p className="hidden md:block">
                                        Drop your image here or
                                    </p>
                                    <p className="text-accentRed font-bold">
                                        Click to browse
                                    </p>
                                </Label>
                                <Input
                                    id="image-upload"
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    onChange={uploadImg}
                                    className="hidden"
                                />
                                <p className="mt-4 text-sm">
                                    or drag and drop an image
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 px-4 py-6 border border-gray-300 bg-white  shadow-lg rounded-md">
                        <h2 className="font-medium">Blog</h2>
                        <div>
                            <div className="mt-3">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    value={form.title}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your title"
                                    className="mt-1 border-gray-500"
                                />
                                {errors.title && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.title[0]}
                                    </p>
                                )}
                            </div>
                            <div className="mt-3">
                                <Label htmlFor="paragraph">Paragraph</Label>
                                <Textarea
                                    id="paragraph"
                                    name="paragraph"
                                    value={form.paragraph}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Write your blog here..."
                                    className="mt-1 border-gray-500"
                                ></Textarea>
                                {errors.paragraph && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.paragraph[0]}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 px-4 py-6 border border-gray-300 bg-white  shadow-lg rounded-md">
                        <h1 className="font-medium">Actions</h1>
                        <div className="mt-3 flex flex-col gap-2">
                            <Label htmlFor="Visibility">Publish or Draft</Label>
                            <Switch
                                id="visibility"
                                name="visibility"
                                checked={form.visibility}
                                onCheckedChange={(checked) =>
                                    handleCustomChange("visibility", checked)
                                }
                            />
                            {errors.visibility && (
                                <p className="text-red-500 mt-1 text-sm">
                                    {errors.visibility[0]}
                                </p>
                            )}
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
                                    Create
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
                <div className="mb-5">
                    <div className="xl:w-[97%] mx-auto">
                        <img
                            src={Blog2}
                            alt=""
                            className="w-[100%] h-36 lg:h-32 xl:h-36 object-cover rounded-md"
                        />
                        <div className="mt-3">
                            <h1 className="text-base font-medium">
                                Where we take our ingredients & how we prepare
                                to cook
                            </h1>
                            <p className="text-gray-700 mt-2 text-xs">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Optio, modi accusamus ratione
                                dolorem inventore sapiente?
                            </p>
                            <div className="flex gap-5 mt-4">
                                <div className="flex gap-1 items-center text-sm">
                                    <CalendarFold
                                        size={16}
                                        className="text-gray-800"
                                    />
                                    <p className="text-gray-800">20 Jan 2025</p>
                                </div>
                                <div className="flex gap-1 items-center text-sm">
                                    <Clock
                                        size={16}
                                        className="text-gray-800"
                                    />
                                    <p className="text-gray-800">3 mins read</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
