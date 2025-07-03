import Deco from "../../../images/text-deco.jpg";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="w-[93%] mx-auto">
            <div className="md:flex justify-between py-11 md:py-16">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="md:w-1/2 flex"
                >
                    <h1 className="font-medium text-3xl mt-2">
                        Partner with us!
                    </h1>
                    <img src={Deco} alt="" className="w-4 h-4 md:w-5 md:h-5" />
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="md:w-1/2 mt-3 md:mt-0"
                >
                    <p className="text-gray-800">
                        {" "}
                        Join Mote Sine as a partner and bring the rich,
                        authentic flavors of Burma to NYC! Be part of our
                        journey in sharing traditional Burmese cuisine with food
                        lovers across the city.
                    </p>
                </motion.div>
            </div>
            <hr className="border-t-gray-400" />
        </div>
    );
}
