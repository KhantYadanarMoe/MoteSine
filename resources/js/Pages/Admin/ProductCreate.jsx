import Product from "../../../images/product.png";
import { Heart, Star, ShoppingCart, Upload, ChevronDown } from "lucide-react";
import { Switch } from "../../Components/ui/switch";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { motion } from "framer-motion";

export default function ProductCreate() {
    return (
        <motion.div
            initial={{ visibility: "hidden", opacity: 0 }}
            whileInView={{ visibility: "visible", opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8 relative lg:flex gap-3"
        >
            <div className="w-full lg:w-[70%]">
                <h1 className="text-lg font-medium">Create Product</h1>
                <form action="" className="mt-6 md:px-3">
                    <div className="flex justify-center mt-8 px-4 py-6 border border-gray-300 bg-white shadow-lg rounded-md">
                        <div className="w-full border-2 border-dashed border-gray-400 p-8 rounded-lg text-center">
                            <div className="flex flex-col items-center">
                                <Upload className="text-gray-700 text-4xl mb-4" />

                                <label
                                    htmlFor="image-upload"
                                    className="flex items-center gap-1 justify-center cursor-pointer text-gray-700"
                                >
                                    <p className="hidden md:block">
                                        Drop your image here or
                                    </p>
                                    <p className="text-accentRed font-bold">
                                        Click to browse
                                    </p>
                                </label>

                                <Input
                                    id="image-upload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                />
                                <p className="mt-4 text-sm">
                                    or drag and drop an image
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 px-4 py-6 border border-gray-300 bg-white  shadow-lg rounded-md">
                        <h2 className="font-medium">General Information</h2>
                        <div>
                            <div className="mt-3">
                                <label htmlFor="name">Name</label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Enter product name"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="price">Price</label>
                                <Input
                                    id="price"
                                    type="text"
                                    placeholder="Enter your price"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="rating">Rating</label>
                                <Input
                                    id="rating"
                                    type="number"
                                    placeholder="Enter product rating"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="stock">Stock</label>
                                <Input
                                    id="stock"
                                    type="number"
                                    placeholder="Enter product stock"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 px-4 py-6 border border-gray-300 bg-white  shadow-lg rounded-md">
                        <h2 className="font-medium">Promotion</h2>
                        <div>
                            <div className="mt-3">
                                <label htmlFor="promotion">
                                    Promotion (Percentage)
                                </label>
                                <Input
                                    id="promotion"
                                    type="text"
                                    placeholder="Enter promotion"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="startDate">Start Date</label>
                                <Input
                                    id="startDate"
                                    type="text"
                                    placeholder="Enter your start date"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="endDate">End Date</label>
                                <Input
                                    id="endDate"
                                    type="text"
                                    placeholder="Enter your end date"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 px-4 py-6 border border-gray-300 bg-white  shadow-lg rounded-md">
                        <h1 className="font-medium">Actions</h1>
                        <div className="mt-3 flex flex-col gap-2">
                            <label htmlFor="Visibility">Publish or Draft</label>
                            <Switch id="visibility" />
                        </div>
                    </div>

                    <div className="mt-5 flex justify-end">
                        <Button
                            variant="default"
                            className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                        >
                            Create
                        </Button>
                    </div>
                </form>
            </div>
            <div className="lg:w-[30%] lg:max-w-[295px] xl:max-w-[285px] hidden lg:block fixed right-4">
                <h1 className="text-lg font-medium mb-6">Preview</h1>
                <div className="px-3 py-4 bg-white border border-gray-400 shadow-lg rounded-xl">
                    <div className="flex justify-between">
                        <a href="">
                            <Heart size={16} className="text-accentRed" />
                        </a>
                        <a
                            href=""
                            className="text-sm flex items-center gap-1 text-accentYellow"
                        >
                            <Star
                                size={16}
                                fill="currentColor"
                                className="text-accentYellow"
                            />{" "}
                            4.3
                        </a>
                    </div>
                    <img
                        src={Product}
                        alt=""
                        className="w-40 md:w-28 xl:w-24 h-auto object-cover mx-auto my-3"
                    />
                    <div className="flex justify-between items-center my-3">
                        <div>
                            <h1 className="text-sm font-medium mb-1">
                                Eain Chat Mote Hti
                            </h1>
                            <p className="text-xs font-medium">6.12 $</p>
                        </div>
                        <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                            <ShoppingCart size={16} className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
