import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Input } from "../ui/input";

export default function ApplyForm() {
    const [position, setPosition] = useState("");
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="w-[93%] mx-auto py-5">
                <form action="" className="md:flex gap-5">
                    <div className="md:w-1/2">
                        <h1 className="text-2xl font-medium">
                            Upgrade your business with us!
                        </h1>
                        <p className="text-gray-800 text-xs md:text-sm mt-2">
                            Do you want to sell your products in other country?
                            Here is a starting point for you! Apply and be part
                            of our team now!
                        </p>
                        <div className="my-4">
                            <div className="mb-3">
                                <label htmlFor="businessName">
                                    Business Name
                                </label>
                                <Input
                                    id="businessName"
                                    type="text"
                                    placeholder="Enter your business name"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="businessAddress">
                                    Business Address
                                </label>
                                <Input
                                    id="businessAddress"
                                    type="text"
                                    placeholder="Enter your business address"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Name</label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="lg:flex gap-3">
                            <div className="lg:w-1/2 mb-3">
                                <label htmlFor="email">Email</label>
                                <Input
                                    id="email"
                                    type="text"
                                    placeholder="Enter your email"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                            <div className="lg:w-1/2 mb-3">
                                <label htmlFor="phone">Phone</label>
                                <Input
                                    id="phone"
                                    type="text"
                                    placeholder="Enter your phone"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="social">
                                Website or Social Link
                            </label>
                            <Input
                                id="social"
                                type="text"
                                placeholder="Enter your website or social URL"
                                className="mt-1 border-gray-500"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Type">Type of Business</label>
                            <div className="mt-2">
                                <Select onValueChange={setPosition}>
                                    <SelectTrigger className="w-full border-gray-400">
                                        <SelectValue placeholder="Choose a position" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Distributor">
                                            Distributor
                                        </SelectItem>
                                        <SelectItem value="Manufacturer">
                                            Manufacturer
                                        </SelectItem>
                                        <SelectItem value=" Wholesaler">
                                            {" "}
                                            Wholesaler
                                        </SelectItem>
                                        <SelectItem value="Retailer">
                                            Retailer
                                        </SelectItem>
                                        <SelectItem value="Home-based">
                                            Home-based
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="certificate">
                                Food Safety & Certification (if applicable)
                            </label>
                            <Input
                                id="certificate"
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
                    </div>
                </form>
            </div>
        </motion.div>
    );
}
