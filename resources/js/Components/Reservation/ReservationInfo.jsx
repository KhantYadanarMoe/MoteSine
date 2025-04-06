import Logo from "../../../images/logo.png";
import { MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ReservationInfo() {
    return (
        <div className="block md:flex gap-3 items-center mt-3 md:mt-16 mb-4 w-[96%] lg:w-[90%] mx-auto">
            <motion.div
                className="w-full md:w-3/5 lg:w-2/3 px-3"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.05 }}
            >
                <div className="mb-5">
                    <h2 className="text-xl font-semibold mb-1 relative inline-block">
                        Detail Infos
                    </h2>
                    <div className="flex items-center">
                        <div className="w-28 h-[2px] bg-accentRed"></div>
                        <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                    </div>
                </div>
                <form action="">
                    <div className="md:flex gap-4">
                        <div className="md:w-1/2 mb-5">
                            <label htmlFor="firstName">First Name</label>
                            <Input
                                id="firstName"
                                type="text"
                                placeholder="Enter your first name"
                                className="mt-1 border-gray-500"
                            />
                        </div>
                        <div className="md:w-1/2 mb-5">
                            <label htmlFor="lastName">Last Name</label>
                            <Input
                                id="lastName"
                                type="text"
                                placeholder="Enter your last name"
                                className="mt-1 border-gray-500"
                            />
                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="md:w-1/2 mb-5">
                            <label htmlFor="email">Email</label>
                            <Input
                                id="email"
                                type="text"
                                placeholder="Enter your email"
                                className="mt-1 border-gray-500"
                            />
                        </div>
                        <div className="md:w-1/2 mb-5">
                            <label htmlFor="phone">Phone</label>
                            <Input
                                id="phone"
                                type="text"
                                placeholder="Enter your phone"
                                className="mt-1 border-gray-500"
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message">Message</label>
                        <Textarea
                            id="message"
                            type="text"
                            placeholder="Enter your message"
                            className="mt-1 border-gray-500"
                        ></Textarea>
                    </div>
                    <div className="flex justify-end mt-4">
                        <Button
                            variant="default"
                            className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                        >
                            Reserve
                        </Button>
                    </div>
                </form>
            </motion.div>
            <motion.div
                className="w-full md:w-2/5 lg:w-1/3 px-6 mt-4 md:mt-0 border-l-2 border-l-accentRed"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.05 }}
            >
                <img
                    src={Logo}
                    alt="logo"
                    className="w-28 md:w-24 lg:w-32 h-auto "
                />
                <p className="text-gray-800 text-xs lg:text-sm mt-2">
                    Reserve a table to make sure your unforgettable eat out
                    memories! You can reserve with just one click. You can also
                    cancel your reservation within 24 hours.
                </p>
                <div className="my-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.250854129098!2d-73.95863912510056!3d40.77849893354363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258bcff650315%3A0xd0e7db23e51d4f29!2s1257%20Lexington%20Ave%20%234b%2C%20New%20York%2C%20NY%2010028%2C%20USA!5e0!3m2!1sen!2smm!4v1740748924372!5m2!1sen!2smm"
                        allowFullScreen=""
                        loading="lazy"
                        className="border-none border-r-2 shadow-md w-[100%] h-[200px] md:h-[140px] lg:h-[200px] md:w-full"
                    ></iframe>
                </div>
                <div className="flex gap-2 font-medium">
                    <MapPin size={28} />
                    <h1 className="text-sm md:text-xs lg:text-sm">
                        1257 Lexington Avenue, Apt 4B, New York, NY 10028, USA
                    </h1>
                </div>
            </motion.div>
        </div>
    );
}
