import { Upload, CalendarFold, Clock } from "lucide-react";
import Blog2 from "../../../images/fresh.jpg";
import { Switch } from "../../Components/ui/switch";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { Textarea } from "../../Components/ui/textarea";
import { motion } from "framer-motion";

export default function BlogsCreate() {
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
                        <h2 className="font-medium">Blog</h2>
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
                                <label htmlFor="body">Paragraph</label>
                                <Textarea
                                    type="text"
                                    placeholder="Write your blog here..."
                                    className="mt-1 border-gray-500"
                                ></Textarea>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 px-4 py-6 border border-gray-300 bg-white  shadow-lg rounded-md">
                        <h1 className="font-medium">Actions</h1>
                        <div className="mt-3 flex flex-col gap-2">
                            <label htmlFor="Visibility">Publish or Draft</label>
                            <Switch id="visibility" defaultChecked />
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
