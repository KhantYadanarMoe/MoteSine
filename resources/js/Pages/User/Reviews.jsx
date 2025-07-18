import Rating from "react-rating";
import { Star } from "lucide-react";
import Cooking from "../../../images/CookingArt.png";
import Thanks from "../../../images/ThankYou.png";
import { useState } from "react";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { Textarea } from "../../Components/ui/textarea";
import { motion } from "framer-motion";
import { Label } from "@/Components/ui/label";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "@/Components/Loading";

export default function Reviews() {
    const [rating, setRating] = useState(0);

    // prepare state to store form data
    const [form, setForm] = useState({
        name: "",
        phone: "",
        review: "",
    });
    // store errors state
    const [errors, setErrors] = useState({});

    // state for loading
    const [loading, setLoading] = useState(false);

    // store submit condition
    const [submitted, setSubmitted] = useState(false);

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

    const validateForm = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = ["Name is required."];
        if (!form.phone.trim()) newErrors.phone = ["Phone is required."];
        if (!form.review.trim()) newErrors.review = ["Review is required."];

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // form submit function
    const submit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setLoading(true);

        // url and method to use in sending data using axios
        let url = "/api/review/create";
        let method = "post";

        // create new object to store form data to send
        let formData = new FormData();

        console.log("Form Data before submitting:", form);

        // store state data in object
        formData.append("rating", rating);
        formData.append("name", form.name);
        formData.append("phone", form.phone);
        formData.append("review", form.review);

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
            if (res.data.message === "Review sent successfully.") {
                setForm({
                    name: "",
                    phone: "",
                    review: "",
                });
                setRating(0);
                setSubmitted(true);
            }
        } catch (error) {
            console.error("Error sending review:", error);

            // failed condition
            if (error.response && error.response.status === 422) {
                setIsDialogOpen(false);
                setErrors(error.response.data.errors);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="px-4 md:px-6 py-7 bg-lightBackground md:flex items-center gap-5 pt-8">
            {loading ? (
                <div className="h-[67vh] flex items-center justify-center ">
                    <Loading />
                </div>
            ) : (
                <>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                        className={`${
                            submitted
                                ? "w-full h-[75vh] flex flex-col items-center justify-center text-center"
                                : "md:w-2/5 lg:w-1/2 flex-1"
                        }`}
                    >
                        <img
                            src={submitted ? Thanks : Cooking}
                            alt=""
                            className="w-[200px] lg:w-[250px] h-auto mx-auto md:mx-0"
                        />
                        <h1 className="text-center md:text-start text-base lg:text-2xl font-medium text-accentGreen">
                            {submitted
                                ? "Thanks for your feedback!"
                                : "Your order placed successfully!"}
                        </h1>
                        <p className="text-center md:text-start text-gray-700 text-xs lg:text-sm mt-3">
                            {submitted
                                ? "We appreciate your review and will use it to improve our service!"
                                : "Please wait a few time for your delivery. We are preparing your orders and we will let you know when the delivery is out."}
                        </p>
                    </motion.div>
                    {!submitted && (
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                            className="md:w-3/5 lg:w-1/2 mt-7 lg:mt-0 bg-white rounded-lg shadow-lg px-4 py-5"
                        >
                            <h1 className="text-xl font-medium">
                                Let's us know about your experience!
                            </h1>
                            <p className="text-sm text-gray-800 mt-2">
                                We want to hear your feelings about using our
                                website to fix our needs.
                            </p>
                            <form action="">
                                <div className="mt-3 flex gap-2">
                                    <Rating
                                        initialRating={rating}
                                        onChange={(rate) => setRating(rate)}
                                        fractions={10}
                                        emptySymbol={
                                            <Star
                                                className="text-gray-300"
                                                size={32}
                                            />
                                        }
                                        fullSymbol={
                                            <Star
                                                className="text-yellow-500 fill-yellow-500"
                                                size={32}
                                            />
                                        }
                                    />
                                    <p className="text-sm mt-2">
                                        Rating: {rating.toFixed(1)} / 5
                                    </p>
                                </div>
                                <div className="mt-3">
                                    <Label htmlFor="name">Name</Label>
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
                                <div className="mt-3">
                                    <Label htmlFor="phone">Phone</Label>
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
                                <div className="mt-3">
                                    <Label htmlFor="review">Message</Label>
                                    <Textarea
                                        id="review"
                                        name="review"
                                        value={form.review}
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="Enter your review"
                                        className="mt-1 border-gray-500"
                                    ></Textarea>
                                    {errors.review && (
                                        <p className="text-red-500 mt-1 text-sm">
                                            {errors.review[0]}
                                        </p>
                                    )}
                                </div>
                                <div className="mt-5 flex justify-end">
                                    <Button
                                        type="button"
                                        variant="default"
                                        className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                                        onClick={submit}
                                    >
                                        Send Reviews
                                    </Button>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </>
            )}
        </div>
    );
}
