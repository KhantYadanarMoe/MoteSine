import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
} from "../../Components/ui/select";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { Textarea } from "../../Components/ui/textarea";
import { motion } from "framer-motion";

export default function JobCreate() {
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
                                <label htmlFor="jobTitle">Job Title</label>
                                <Input
                                    id="jobTitle"
                                    type="text"
                                    placeholder="Enter your job title"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="salary">
                                    Pay Rate (Per Hour)
                                </label>
                                <Input
                                    id="salary"
                                    type="text"
                                    placeholder="Enter your pay rate"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                            <div className="mt-3">
                                <label htmlFor="jobDesc">
                                    Job Description (Skills needed to apply)
                                </label>
                                <Textarea
                                    type="text"
                                    placeholder="Enter your desc"
                                    className="mt-1 border-gray-500"
                                ></Textarea>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="type">Type</label>
                                <Select>
                                    <SelectTrigger
                                        id="type"
                                        className="mt-1 border-gray-500"
                                    >
                                        <span>Select Type</span>
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value="part-time">
                                            Part Time
                                        </SelectItem>
                                        <SelectItem value="full-time">
                                            Full Time
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
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

                    <div className="mt-5 flex justify-end">
                        <Button
                            variant="default"
                            className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                        >
                            Upload
                        </Button>
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
