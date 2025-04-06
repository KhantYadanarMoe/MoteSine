import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import HeroBg from "../../../images/hero-bg.jpg";
import { motion } from "framer-motion";
import { Input } from "../ui/input";

export default function JobForm() {
    const [position, setPosition] = useState("");
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            id="Form"
        >
            <hr className="border-t-gray-400" />
            <div className="relative py-4" id="jobForm">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${HeroBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.6,
                        zIndex: -1,
                    }}
                ></div>
                <h1 className="font-medium text-2xl text-accentRed text-center">
                    Apply Here
                </h1>
                <p className="text-sm text-gray-800 text-center mt-2">
                    Apply now to be part of our team!
                </p>
                <form action="" className="w-[92%] md:w-[70%] mx-auto my-4">
                    <div className="flex gap-3">
                        <div className="w-1/2 mb-3">
                            <label htmlFor="firstName">First Name</label>
                            <Input
                                id="firstName"
                                type="text"
                                placeholder="Enter your first name"
                                className="mt-1 border-gray-500"
                            />
                        </div>
                        <div className="w-1/2 mb-3">
                            <label htmlFor="lastName">Last Name</label>
                            <Input
                                id="lastName"
                                type="text"
                                placeholder="Enter your name"
                                className="mt-1 border-gray-500"
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <Input
                            id="email"
                            type="text"
                            placeholder="Enter your email"
                            className="mt-1 border-gray-500"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone">Phone</label>
                        <Input
                            id="phone"
                            type="text"
                            placeholder="Enter your phone"
                            className="mt-1 border-gray-500"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Position">Position</label>
                        <div className="mt-2">
                            <Select onValueChange={setPosition}>
                                <SelectTrigger className="w-full border-gray-500">
                                    <SelectValue placeholder="Choose a position" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="waiter">
                                        Waiter
                                    </SelectItem>
                                    <SelectItem value="chef">Chef</SelectItem>
                                    <SelectItem value="cashier">
                                        Cashier
                                    </SelectItem>
                                    <SelectItem value="barista">
                                        Barista
                                    </SelectItem>
                                    <SelectItem value="delivery">
                                        Delivery Staff
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="resume">Resume</label>
                        <Input
                            id="resume"
                            type="file"
                            placeholder="Upload your Resume"
                            className="mt-1 border-gray-500"
                        />
                    </div>
                    <div className="flex justify-end mt-5">
                        <Button
                            variant="default"
                            className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
}
