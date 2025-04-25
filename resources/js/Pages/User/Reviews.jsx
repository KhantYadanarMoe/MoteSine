import Rating from "react-rating";
import { Star } from "lucide-react";
import Cooking from "../../../images/CookingArt.png";
import { useState } from "react";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { Textarea } from "../../Components/ui/textarea";
import { motion } from "framer-motion";
import { Label } from "@/Components/ui/label";
import { useNavigate } from "react-router-dom";

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

    return (
        <div className="px-4 md:px-6 py-7 bg-lightBackground md:flex items-center gap-5">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="md:w-2/5 lg:w-1/2 flex-1"
            >
                <img
                    src={Cooking}
                    alt=""
                    className="w-[200px] lg:w-[250px] h-auto mx-auto md:mx-0"
                />
                <h1 className="text-center md:text-start text-base lg:text-2xl font-medium text-accentGreen">
                    Your order placed successfully!
                </h1>
                <p className="text-center md:text-start text-gray-700 text-xs lg:text-sm mt-3">
                    Please wait a few time for your delivery. We are preparing
                    your orders and we will let you know when the delivery is
                    out.
                </p>
            </motion.div>
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
                    We want to hear your feelings about using our website to fix
                    our needs.
                </p>
                <form action="">
                    <div className="mt-3 flex gap-2">
                        <Rating
                            initialRating={rating}
                            onChange={(rate) => setRating(rate)}
                            fractions={10}
                            emptySymbol={
                                <Star className="text-gray-300" size={32} />
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
                            // value={form.name}
                            // onChange={handleInputChange}
                            type="text"
                            placeholder="Enter your name"
                            className="mt-1 border-gray-500"
                        />
                    </div>
                    <div className="mt-3">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            id="phone"
                            name="phone"
                            // value={form.phone}
                            // onChange={handleInputChange}
                            type="text"
                            placeholder="Enter your phone"
                            className="mt-1 border-gray-500"
                        />
                    </div>
                    <div className="mt-3">
                        <Label htmlFor="review">Message</Label>
                        <Textarea
                            id="review"
                            name="review"
                            // value={form.review}
                            // onChange={handleInputChange}
                            type="text"
                            placeholder="Enter your review"
                            className="mt-1 border-gray-500"
                        ></Textarea>
                    </div>
                    <div className="mt-5 flex justify-end">
                        <Button
                            type="button"
                            variant="default"
                            className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                        >
                            Send Reviews
                        </Button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}
