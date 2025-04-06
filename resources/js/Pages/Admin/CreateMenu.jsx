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

export default function CreateMenu() {
    return (
        <motion.div
            initial={{ visibility: "hidden", opacity: 0 }}
            whileInView={{ visibility: "visible", opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8 relative lg:flex gap-3"
        >
            <div className="w-full lg:w-[70%]">
                <h1 className="text-lg font-medium">Create Menu</h1>
                <form action="" className="mt-6 md:px-3">
                    <div className="flex justify-center mt-8 px-4 py-6 border border-gray-300 bg-white shadow-lg rounded-md">
                        <div className="w-full border-2 border-dashed border-gray-400 p-8 rounded-lg text-center">
                            <div className="flex flex-col items-center">
                                {/* Upload icon on top */}
                                <Upload className="text-gray-700 text-4xl mb-4" />

                                {/* Text with label */}
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
                                    //   onChange={handleImageChange}
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
                                <label htmlFor="title">Title</label>
                                <Input
                                    id="title"
                                    type="text"
                                    placeholder="Enter your title"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="category">Category</label>
                                <Select>
                                    <SelectTrigger
                                        id="category"
                                        className="mt-1 border-gray-500"
                                    >
                                        <span>Select Category</span>
                                    </SelectTrigger>

                                    <SelectContent className="w-96 max-h-60">
                                        <SelectItem value="all">All</SelectItem>
                                        <SelectItem value="curries">
                                            Curries
                                        </SelectItem>
                                        <SelectItem value="noodles">
                                            Noodles
                                        </SelectItem>
                                        <SelectItem value="salads">
                                            Salads
                                        </SelectItem>
                                        <SelectItem value="soups">
                                            Soups
                                        </SelectItem>
                                        <SelectItem value="side-dishes">
                                            Side Dishes
                                        </SelectItem>
                                        <SelectItem value="snacks-street-foods">
                                            Snacks & Street Foods
                                        </SelectItem>
                                        <SelectItem value="chefs-favorite">
                                            Chef's Favorite
                                        </SelectItem>
                                        <SelectItem value="desserts">
                                            Desserts
                                        </SelectItem>
                                        <SelectItem value="drinks-beverages">
                                            Drinks & Beverages
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="desc">Description</label>
                                <textarea
                                    type="text"
                                    placeholder="Enter your desc"
                                    className="w-full px-2 py-2 mt-2 text-sm border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson focus:border-crimson text-gray-700"
                                ></textarea>
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
                        <div className="flex justify-between">
                            <div className="mt-3 flex flex-col gap-2">
                                <label htmlFor="featured">Featured</label>
                                <Checkbox id="featured" />
                            </div>
                            <div className="mt-3 flex flex-col gap-2">
                                <label htmlFor="Visibility">
                                    Publish or Draft
                                </label>
                                <Switch id="visibility" />
                            </div>
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
            <div className="lg:w-[30%] lg:max-w-[295px] xl:max-w-[290px] hidden lg:block fixed right-4">
                <div className="mx-auto p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[130px] object-cover rounded-full border-4 border-white shadow-md"
                            />
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
                            <h3 className="mt-8 font-semibold">Mohinga</h3>
                            <p className="text-[11px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="font-bold text-gray-800">
                                    6.12 $
                                </span>
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
