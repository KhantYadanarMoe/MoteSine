import { DoorOpen, Smartphone } from "lucide-react";
import HeroBg from "../../../images/hero-bg.jpg";
import { motion } from "framer-motion";
import { useSetting } from "@/contexts/GeneralSettingContext";

const Location = () => {
    const { form } = useSetting();
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="relative">
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
                <div className="block md:flex items-center gap-2 px-2 py-3">
                    <div className="w-full md:w-1/2 lg:w-2/5 py-4 md:py-0 px-3 md:px-6 mb-6 md:mb-0">
                        <div className="mb-4">
                            <h2 className="text-2xl font-semibold mb-1 relative inline-block">
                                Where we are?
                            </h2>
                            <div className="flex items-center">
                                <div className="w-28 h-[2px] bg-accentRed"></div>
                                <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                            </div>
                        </div>
                        <p className=" text-gray-700">
                            We are here to fulfil your taste bud.
                        </p>
                        <hr className="my-1" />
                        <p className="text-base :text-lg font-medium">
                            {form.address}
                        </p>
                        <div className="flex gap-2 mt-4">
                            <div className="w-1/2 flex items-center gap-1">
                                <DoorOpen size={36} strokeWidth={1} />
                                <div>
                                    <p className="text-gray-900 font-medium">
                                        Open Daily{" "}
                                    </p>
                                    <p className="text-gray-900 text-sm lg:text-base">
                                        {form.from}-{form.to}
                                    </p>
                                </div>
                            </div>
                            <div className="w-1/2 flex items-center gap-1">
                                <Smartphone size={28} strokeWidth={1} />
                                <div>
                                    <p className="text-gray-900 font-medium">
                                        Phone{" "}
                                    </p>
                                    <p className="text-gray-900 text-sm lg:text-base">
                                        {form.phone}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/5 h-300">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.250854129098!2d-73.95863912510056!3d40.77849893354363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258bcff650315%3A0xd0e7db23e51d4f29!2s1257%20Lexington%20Ave%20%234b%2C%20New%20York%2C%20NY%2010028%2C%20USA!5e0!3m2!1sen!2smm!4v1740748924372!5m2!1sen!2smm"
                            height="350"
                            allowFullScreen=""
                            loading="lazy"
                            className="mx-auto border-none border-r-2 shadow-md w-[90%] md:w-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Location;
