import Mohinga from "../../../images/Mohinga.png";
import { Heart, Star, ShoppingCart, Upload, ChevronDown } from "lucide-react";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from "../../Components/ui/select";
import { Checkbox } from "../../Components/ui/checkbox";
import { Switch } from "../../Components/ui/switch";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { motion } from "framer-motion";
import { Textarea } from "../../Components/ui/textarea";
import { Label } from "../../Components/ui/label";
import DatePicker from "@/Components/DatePicker";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
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
import { fromJSON } from "postcss";
import Loading from "@/Components/Loading";

export default function MenuForm() {
    // take id for edit feature
    let { id } = useParams();
    // state to check the page is create page or edit page
    let [isEdit, setIsEdit] = useState(false);

    // check the id is exist or not (number or undefined)
    useEffect(() => {
        console.log(id);
        setIsEdit(!!id);
    }, [id]);

    // form data to store before sending to backend
    const [image, setImage] = useState(null); //for new image upload
    const [imageUrl, setImageUrl] = useState(null); // for displaying the existing image

    // prepare state to store form data
    const [form, setForm] = useState({
        title: "",
        price: "",
        category_id: "",
        desc: "",
        promotion: "",
        startDate: "",
        endDate: "",
        featured: false,
        visibility: true,
    });
    // store errors state
    const [errors, setErrors] = useState({});

    // use state to check dialog open or not and control
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // state to store detail of the menu related to ID
    let [menuDetail, setMenuDetails] = useState(null);

    // Define state for categories
    const [categories, setCategories] = useState([]);

    // state for loading
    const [loading, setLoading] = useState(false);

    // Fetch categories data from backend
    const getCategories = async () => {
        try {
            const response = await axios.get("/api/categories");
            let data = response.data;
            let allCategories = data.categories;

            const publishedCategories = allCategories.filter(
                (c) => c.visibility == 1
            );

            setCategories(publishedCategories);
        } catch (error) {
            console.error("Error fetching categories data: ", error);
        }
    };

    console.log("Fetched categories:", categories);

    useEffect(() => {
        getCategories();
    }, []);

    // fetch data to show prev data in input fields
    let getDetails = async (id) => {
        let res = await fetch("/api/menu/" + id);
        let data = await res.json();
        setMenuDetails(data.menu);
    };

    // call data fetching function depend on id changes
    useEffect(() => {
        getDetails(id);
    }, [id]);

    // add prev data sent from backend in the form state
    useEffect(() => {
        if (menuDetail) {
            console.log(menuDetail);
            setImageUrl(menuDetail.image);
            // Convert the backend date string to a Date object
            const startDate = menuDetail.startDate
                ? new Date(menuDetail.startDate)
                : null;
            const endDate = menuDetail.endDate
                ? new Date(menuDetail.endDate)
                : null;
            setForm({
                title: menuDetail.title,
                category_id: menuDetail.category_id,
                desc: menuDetail.desc,
                price: menuDetail.price,
                promotion: menuDetail.promotion,
                startDate: startDate,
                endDate: endDate,
                featured: menuDetail.featured,
                visibility: menuDetail.visibility,
            });
        }
    }, [menuDetail, categories]);

    // change to dynamic data after writing create category feature
    const categoryStyles = {
        all: "text-gray-700 bg-gray-200",
        curries: "text-red-700 bg-red-200",
        noodles: "text-yellow-800 bg-yellow-200",
        salads: "text-green-800 bg-green-200",
        soups: "text-blue-800 bg-blue-200",
        "side-dishes": "text-pink-800 bg-pink-200",
        "snacks-street-foods": "text-orange-800 bg-orange-200",
        "chefs-favorite": "text-purple-800 bg-purple-200",
        desserts: "text-rose-800 bg-rose-200",
        "drinks-beverages": "text-teal-800 bg-teal-200",
    };

    // calculating discounts
    const getDiscountedPrice = (price, promo, startDate, endDate) => {
        const now = new Date();
        const start = new Date(startDate);
        const end = new Date(endDate);

        if (
            !promo ||
            isNaN(promo) ||
            !startDate ||
            !endDate ||
            now < start ||
            now > end
        ) {
            return price;
        }

        return (price - (price * promo) / 100).toFixed(2);
    };

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
        }
    };

    // form submit function
    const submit = async (e) => {
        e.preventDefault();
        setIsDialogOpen(false);
        setLoading(true);

        // url and method to use in sending data using axios
        let url = isEdit ? "/api/menu/" + id : "/api/menu/create";
        let method = "post";

        // create new object to store form data to send
        let formData = new FormData();

        console.log("Form Data before submitting:", form);

        // store state data in object
        formData.append("title", form.title);
        formData.append("category_id", form.category_id);
        formData.append("desc", form.desc);
        formData.append("price", form.price);
        formData.append("promotion", form.promotion || "");
        if (form.startDate) {
            formData.append(
                "startDate",
                format(new Date(form.startDate), "yyyy-MM-dd")
            );
        }
        if (form.endDate) {
            formData.append(
                "endDate",
                format(new Date(form.endDate), "yyyy-MM-dd")
            );
        }
        formData.append("featured", form.featured ? "1" : "0");
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
                res.data.message === "Menu created successfully." ||
                res.data.message === "Menu updated successfully."
            ) {
                navigate("/admin/menu");
            }
        } catch (error) {
            console.error("Error creating menu:", error);

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

    console.log("Selected Category ID:", menuDetail?.category_id);

    return (
        <motion.div
            initial={{ visibility: "hidden", opacity: 0 }}
            whileInView={{ visibility: "visible", opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 py-8 relative lg:flex gap-3"
        >
            <div className="w-full lg:w-[70%]">
                <h1 className="text-lg font-medium">
                    {isEdit ? "Edit" : "Create"} Menu
                </h1>
                <form action="" className="mt-6 md:px-3">
                    <div className="flex justify-center mt-8 px-4 py-6 border border-gray-300 bg-white shadow-lg rounded-md">
                        <div
                            className="w-full border-2 border-dashed border-gray-400 p-8 rounded-lg text-center"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={(e) => {
                                e.preventDefault();
                                const file = e.dataTransfer.files[0];
                                if (file && file.type.startsWith("image/")) {
                                    setImage(file);
                                }
                            }}
                        >
                            <div className="flex flex-col items-center">
                                <Upload className="text-gray-700 text-4xl mb-4" />

                                <Label
                                    htmlFor="image-upload"
                                    id="image"
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
                                {imageUrl && !image && (
                                    <div className="mt-4">
                                        <img
                                            src={`/storage/${imageUrl}`}
                                            alt="Existing Preview"
                                            className="max-w-[130px] h-auto rounded-lg"
                                        />
                                    </div>
                                )}
                                {image && (
                                    <div className="mt-4">
                                        <img
                                            src={
                                                image
                                                    ? URL.createObjectURL(image)
                                                    : ""
                                            }
                                            alt="Preview"
                                            className="max-w-[130px] h-auto rounded-lg"
                                        />
                                    </div>
                                )}
                            </div>
                            {errors.image?.[0] && (
                                <p className="text-red-500 mt-1 text-sm">
                                    {errors.image[0]}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="mt-5 px-4 py-6 border border-gray-300 bg-white  shadow-lg rounded-md">
                        <h2 className="font-medium">General Information</h2>
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
                                <Label htmlFor="category_id">Category</Label>
                                <Select
                                    value={form.category_id}
                                    onValueChange={(value) =>
                                        handleCustomChange("category_id", value)
                                    }
                                >
                                    <SelectTrigger
                                        id="category_id"
                                        name="category_id"
                                        className="mt-1 border-gray-500"
                                    >
                                        <span>
                                            {categories.find(
                                                (c) =>
                                                    c.id ===
                                                    Number(form.category_id)
                                            )?.category || "Select Category"}
                                        </span>{" "}
                                    </SelectTrigger>

                                    <SelectContent className="w-96 max-h-60">
                                        {categories.map((category) => (
                                            <SelectItem
                                                key={category.id}
                                                value={category.id}
                                            >
                                                {category.category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.category && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.category[0]}
                                    </p>
                                )}
                            </div>
                            <div className="mt-3">
                                <Label htmlFor="desc">Description</Label>
                                <Textarea
                                    type="text"
                                    name="desc"
                                    value={form.desc}
                                    onChange={handleInputChange}
                                    placeholder="Enter your desc"
                                    className="w-full px-2 py-2 mt-2 text-sm border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson focus:border-crimson text-gray-700"
                                ></Textarea>
                                {errors.desc && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.desc[0]}
                                    </p>
                                )}
                            </div>
                            <div className="mt-3">
                                <Label htmlFor="price">Price</Label>
                                <Input
                                    id="price"
                                    name="price"
                                    value={form.price}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your price"
                                    className="mt-1 border-gray-500"
                                />
                                {errors.price && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.price[0]}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 px-4 py-6 border border-gray-300 bg-white  shadow-lg rounded-md">
                        <h2 className="font-medium">Promotion</h2>
                        <div>
                            <div className="mt-3">
                                <Label htmlFor="promotion">
                                    Promotion (Percentage)
                                </Label>
                                <Input
                                    id="promotion"
                                    name="promotion"
                                    value={form.promotion}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter promotion"
                                    className="mt-1 border-gray-500"
                                />
                                {errors.promotion && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.promotion[0]}
                                    </p>
                                )}
                            </div>
                            <div className="mt-3">
                                <Label htmlFor="startDate">Start Date</Label>
                                <DatePicker
                                    id="startDate"
                                    name="startDate"
                                    selectedDate={form.startDate}
                                    onDateChange={(date) =>
                                        handleCustomChange("startDate", date)
                                    }
                                    placeholder="Select your start date"
                                    className="border-gray-500"
                                />
                                {errors.startDate && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.startDate[0]}
                                    </p>
                                )}
                            </div>
                            <div className="mt-3">
                                <Label htmlFor="endDate">End Date</Label>
                                <DatePicker
                                    id="endDate"
                                    name="endDate"
                                    selectedDate={form.endDate}
                                    onDateChange={(date) =>
                                        handleCustomChange("endDate", date)
                                    }
                                    placeholder="Select your end date"
                                    className="mt-1 border-gray-500"
                                />
                                {errors.endDate && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.endDate[0]}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 px-4 py-6 border border-gray-300 bg-white  shadow-lg rounded-md">
                        <h1 className="font-medium">Actions</h1>
                        <div className="flex justify-between">
                            <div className="mt-3 flex flex-col gap-2">
                                <Label htmlFor="featured">Featured</Label>
                                <Checkbox
                                    id="featured"
                                    name="featured"
                                    checked={form.featured}
                                    onCheckedChange={(checked) =>
                                        handleCustomChange("featured", checked)
                                    }
                                />
                                {errors.featured && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.featured[0]}
                                    </p>
                                )}
                            </div>
                            <div className="mt-3 flex flex-col gap-2">
                                <Label htmlFor="Visibility">
                                    Publish or Draft
                                </Label>
                                <Switch
                                    id="visibility"
                                    name="visibility"
                                    checked={
                                        form.visibility === true ||
                                        form.visibility === "1" ||
                                        form.visibility === 1
                                    }
                                    onCheckedChange={(checked) =>
                                        handleCustomChange(
                                            "visibility",
                                            checked
                                        )
                                    }
                                />
                                {errors.visibility && (
                                    <p className="text-red-500 mt-1 text-sm">
                                        {errors.visibility[0]}
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
                <div className="mx-auto p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            {image ? (
                                <img
                                    src={URL.createObjectURL(image)} // For create feature, use uploaded image
                                    alt="Live Preview"
                                    className="w-[130px] h-[130px] object-cover rounded-full border-4 border-white shadow-md"
                                />
                            ) : isEdit && imageUrl ? ( // If editing and imageUrl is available, use the menu image
                                <img
                                    src={`/storage/${imageUrl}`} // imageUrl is the path to the image stored in the database
                                    alt="Menu Image"
                                    className="w-[130px] h-[130px] object-cover rounded-full border-4 border-white shadow-md"
                                />
                            ) : (
                                <img
                                    src={Mohinga} // Default image when no image is uploaded or available
                                    alt="Mohinga"
                                    className="w-[130px] object-cover rounded-full border-4 border-white shadow-md"
                                />
                            )}
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-3">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart size={20} />
                                    </a>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />
                                        <span className="text-sm font-medium">
                                            4.5
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2 mt-12">
                                <h3 className="font-semibold">
                                    {form.title || "Mohinga"}
                                </h3>
                                <Link to="">
                                    <span
                                        className={`p-1 text-[10px] rounded-md ${
                                            categoryStyles[form.category] ||
                                            categoryStyles[
                                                "snacks-street-foods"
                                            ]
                                        }`}
                                    >
                                        {categories.find(
                                            (c) =>
                                                c.id ===
                                                Number(form.category_id)
                                        )?.category || "Snacks & Street Food"}
                                    </span>
                                </Link>
                            </div>
                            <p className="text-[11px] text-gray-600 mt-2">
                                {form.desc ||
                                    "a popular Burmese dish featuring rice noodles in a flavorful fish broth, garnished with herbs, lime, and crispy fritters."}
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                {form.promotion &&
                                new Date() >= new Date(form.startDate) &&
                                new Date() <= new Date(form.endDate) ? (
                                    <div className="flex items-center gap-2">
                                        <span className="line-through text-sm text-gray-500">
                                            {form.price || 6.12} $
                                        </span>
                                        <span className="font-bold text-red-600">
                                            {getDiscountedPrice(
                                                form.price,
                                                form.promotion,
                                                form.startDate,
                                                form.endDate
                                            )}{" "}
                                            $
                                        </span>
                                    </div>
                                ) : (
                                    <span className="font-bold text-gray-800">
                                        {form.price || 6.12} $
                                    </span>
                                )}

                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
