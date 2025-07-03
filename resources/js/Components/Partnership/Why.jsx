import { UtensilsCrossed, TrendingUp, Users, Handshake } from "lucide-react";
import Deco from "../../../images/Deco.png";
import { motion } from "framer-motion";

export default function Why() {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="w-[93%] mx-auto py-5">
                <div className="md:flex gap-3 items-end">
                    <div className="md:2/3">
                        <div>
                            <h2 className="text-2xl font-semibold mb-1 relative inline-block">
                                Why Partner With Us?
                            </h2>
                            <div className="flex items-center">
                                <div className="w-28 h-[2px] bg-accentRed"></div>
                                <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                            </div>
                        </div>
                        <div className="md:grid grid-cols-2 mt-5">
                            <div className="px-2 py-3 rounded-lg bg-[rgb(21, 155, 0)] mb-2">
                                <UtensilsCrossed className="text-accentRed" />
                                <h1 className="font-medium mt-1">
                                    Authentic Burmese Cuisine
                                </h1>
                                <p className="text-gray-800 text-sm mt-2">
                                    {" "}
                                    Be part of introducing rich, traditional
                                    Burmese flavors to NYC.
                                </p>
                            </div>
                            <div className="px-2 py-3 rounded-lg bg-[rgb(21, 155, 0)] mb-2">
                                <TrendingUp className="text-accentRed" />
                                <h1 className="font-medium mt-1">
                                    Growing Market
                                </h1>
                                <p className="text-gray-800 text-sm mt-2">
                                    {" "}
                                    Tap into the rising demand for unique and
                                    diverse Asian cuisine.
                                </p>
                            </div>
                            <div className="px-2 py-3 rounded-lg bg-[rgb(21, 155, 0)] mb-2">
                                <Users className="text-accentRed" />
                                <h1 className="font-medium mt-1">
                                    Strong Community
                                </h1>
                                <p className="text-gray-800 text-sm mt-2">
                                    {" "}
                                    Join a passionate team dedicated to quality
                                    and cultural authenticity.
                                </p>
                            </div>
                            <div className="px-2 py-3 rounded-lg bg-[rgb(21, 155, 0)] mb-2">
                                <Handshake className="text-accentRed" />
                                <h1 className="font-medium mt-1">
                                    Profitable Partnership
                                </h1>
                                <p className="text-gray-800 text-sm mt-2">
                                    {" "}
                                    Benefit from a proven business model with
                                    growth potential.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:1/3">
                        <img
                            src={Deco}
                            alt=""
                            className="w-80 rounded-l-full"
                        />
                    </div>
                </div>
                <hr className="border-t-gray-400" />
            </div>
        </motion.div>
    );
}
