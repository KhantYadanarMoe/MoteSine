import { Button } from "../ui/button";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ContactForm() {
    return (
        <motion.div
            className="block md:flex items-center gap-3"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="w-full md:w-3/5 lg:w-1/2 px-5">
                <div className="mb-5">
                    <h2 className="text-3xl font-medium mb-1 relative inline-block">
                        Get In Touch
                    </h2>
                    <div className="flex items-center">
                        <div className="w-40 h-[2px] bg-accentRed"></div>
                        <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-medium">Send a Message</h2>
                    <p className="text-sm text-gray-800">
                        Please add your advices or things you want to know about
                        us and send message to let us know.
                    </p>
                </div>
                <form action="" className="my-6">
                    <div className="md:flex gap-3">
                        <div className="md:w-1/2 mb-3">
                            <label
                                htmlFor="name"
                                className="text-base font-medium"
                            >
                                Name
                            </label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="mt-1 border-gray-500"
                            />
                        </div>
                        <div className="md:w-1/2 mb-3">
                            <label
                                htmlFor="email"
                                className="text-base font-medium"
                            >
                                Email
                            </label>
                            <Input
                                id="email"
                                type="text"
                                placeholder="Enter your email"
                                className="mt-1 border-gray-500"
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="phone"
                            className="text-base font-medium"
                        >
                            Phone
                        </label>
                        <Input
                            id="phone"
                            type="text"
                            placeholder="Enter your phone"
                            className="mt-1 border-gray-500"
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="message"
                            className="text-base font-medium"
                        >
                            Message
                        </label>
                        <Textarea
                            id="message"
                            type="text"
                            placeholder="Search..."
                            className="mt-1 border-gray-500"
                        ></Textarea>
                    </div>
                    <div className="flex justify-end mt-6">
                        <Button
                            variant="default"
                            className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                        >
                            Send
                        </Button>
                    </div>
                </form>
            </div>
            <div className="w-full md:w-2/5 lg:w-1/2 px-5 ml-3 border-l border-l-accentRed">
                <div className="py-5">
                    <h1 className="text-xl font-medium mb-1">Call us</h1>
                    <p className="text-sm text-gray-800">
                        Call us via phone if you are in hurry. Calling is faster
                        than sending message.
                    </p>
                    <div className="flex gap-3 items-center mt-4">
                        <PhoneCall className="text-accentRed" size={20} />
                        <p className="font-medium text-accentRed">
                            (917) 555-4827
                        </p>
                    </div>
                </div>
                <div className="py-5">
                    <h1 className="text-xl font-medium mb-1">Email us</h1>
                    <p className="text-sm text-gray-800">
                        Send message via Email for another option.
                    </p>
                    <div className="flex gap-3 items-center mt-4">
                        <Mail className="text-accentRed" size={20} />
                        <p className="font-medium text-accentRed">
                            motesine@gmail.com
                        </p>
                    </div>
                </div>
                <div className="py-5">
                    <h1 className="text-xl font-medium mb-1">Visit us</h1>
                    <p className="text-sm text-gray-800">
                        Come and visit us to feel your home's taste and treat
                        your home sick.
                    </p>
                    <div className="flex gap-3 items-center mt-4">
                        <MapPin className="text-accentRed" size={20} />
                        <p className="font-medium text-accentRed">
                            1257 Lexington Avenue, Apt 4B.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
