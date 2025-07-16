import { Upload, CalendarFold, Clock, X } from "lucide-react";
import Blog2 from "../../../images/fresh.jpg";
import { Switch } from "../../Components/ui/switch";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import TextEditor from "../../Components/ui/TextEditor";
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
import { useEffect, useState } from "react";
import axios from "axios";
import { Label } from "@/Components/ui/label";
import { useNavigate, useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import RichTextEditor from "@/Components/RichTextEditor";
import Loading from "@/Components/Loading";

export default function BlogForm() {
    const [image, setImage] = useState(null); // single image file

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

    // take id for edit feature
    let { id } = useParams();
    // state to check the page is create page or edit page
    let [isEdit, setIsEdit] = useState(false);

    // state for loading
    const [loading, setLoading] = useState(false);

    // check the id is exist or not (number or undefined)
    useEffect(() => {
        console.log(id);
        setIsEdit(!!id);
    }, [id]);

    const [imageUrl, setImageUrl] = useState([]);

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

    // Handle image input
    const uploadImg = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImageUrl(null);
        }
    };

    // state to store detail of the blog related to ID
    let [blogDetail, setBlogDetails] = useState(null);

    // fetch data to show prev data in input fields
    let getDetails = async (id) => {
        let res = await fetch("/api/blog/" + id);
        let data = await res.json();
        setBlogDetails(data.blog);
    };

    // call data fetching function depend on id changes
    useEffect(() => {
        getDetails(id);
    }, [id]);

    // add prev data sent from backend in the form state
    useEffect(() => {
        if (blogDetail) {
            console.log(blogDetail);
            setImageUrl(blogDetail.image || null);

            setForm({
                title: blogDetail.title,
                paragraph: blogDetail.paragraph,
                visibility: blogDetail.visibility,
            });
        }
    }, [blogDetail]);

    const validateForm = () => {
        const newErrors = {};
        if (!form.title.trim()) newErrors.title = ["Title is required."];
        if (!form.paragraph.trim())
            newErrors.paragraph = ["Paragraph is required."];

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // form submit function
    const submit = async (e) => {
        e.preventDefault();
        setIsDialogOpen(false);
        if (!validateForm()) return;
        setLoading(true);

        // url and method to use in sending data using axios
        let url = isEdit ? "/api/blog/" + id : "/api/blog/create";
        let method = "post";

        // create new object to store form data to send
        let formData = new FormData();

        console.log("Form Data before submitting:", form);

        // store state data in object
        formData.append("title", form.title);
        formData.append("paragraph", form.paragraph);
        formData.append("visibility", form.visibility ? "1" : "0");

        console.log("Form data after appending:", formData);

        if (image) {
            formData.append("image", image);
        }

        if (isEdit) {
            formData.append("_method", "PUT");
        }

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
                res.data.message === "Blog created successfully." ||
                res.data.message === "Blog updated successfully."
            ) {
                navigate("/admin/blogs");
            }
        } catch (error) {
            console.error("Error creating blog:", error);

            // failed condition
            if (error.response && error.response.status === 422) {
                setIsDialogOpen(false);
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

    const stripHtml = (html) => {
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
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
                <h1 className="text-lg font-medium">
                    {isEdit ? "Edit" : "Create"} Blog
                </h1>
                <p className="text-gray-800 text-sm mt-2">
                    You can add 3 images per blog.
                </p>
                <form action="" className="mt-6 md:px-3">
                    <div className="flex justify-center mt-8 px-4 py-6 border border-gray-300 bg-white shadow-lg rounded-md">
                        <div
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(e) => {
                                e.preventDefault();
                                const file = e.dataTransfer.files[0];
                                if (file && file.type.startsWith("image/")) {
                                    setImage(file);
                                    setImageUrl(null);
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

                                {typeof imageUrl === "string" &&
                                    imageUrl.trim() !== "" &&
                                    !image && (
                                        <div className="mt-4">
                                            <img
                                                src={`/storage/${imageUrl}`}
                                                alt="Existing Cover"
                                                className="max-w-[130px] max-h-[130px] rounded-lg"
                                                onError={(e) => {
                                                    e.target.style.display =
                                                        "none"; // hide broken image
                                                }}
                                            />
                                        </div>
                                    )}

                                {image && (
                                    <div className="mt-4 relative max-w-[130px] max-h-[130px]">
                                        <button
                                            type="button"
                                            onClick={() => setImage(null)}
                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center text-sm shadow-md border border-gray-300 hover:bg-red-700 hover:text-white transition"
                                            title="Remove image"
                                        >
                                            <X />
                                        </button>
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt="Preview Cover"
                                            className="max-w-[130px] max-h-[130px] rounded-lg"
                                        />
                                    </div>
                                )}
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
                                <RichTextEditor
                                    value={form.paragraph}
                                    onChange={(val) =>
                                        handleCustomChange("paragraph", val)
                                    }
                                />

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
                                checked={
                                    form.visibility === true ||
                                    form.visibility === "1" ||
                                    form.visibility === 1
                                }
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
                                    {isEdit ? "Update" : "Create"}
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
                        {image ? (
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Live Preview"
                                className="w-[100%] h-36 lg:h-32 xl:h-36 object-cover rounded-md"
                            />
                        ) : isEdit && imageUrl ? (
                            <img
                                src={`/storage/${imageUrl}`}
                                alt="Cover Preview"
                                className="w-[100%] h-36 lg:h-32 xl:h-36 object-cover rounded-md"
                            />
                        ) : (
                            <img
                                src={Blog2}
                                alt="Default Preview"
                                className="w-[100%] h-36 lg:h-32 xl:h-36 object-cover rounded-md"
                            />
                        )}

                        <div className="mt-3">
                            <h1 className="text-base font-medium">
                                {form.title ||
                                    "Where we take our ingredients & how we prepare to cook"}
                            </h1>
                            <p className="text-gray-700 mt-2 text-xs">
                                {(
                                    stripHtml(form.paragraph) ||
                                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, modi accusamus ratione dolorem inventore sapiente?"
                                )
                                    .split(" ")
                                    .slice(0, 27)
                                    .join(" ") + "..."}
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
