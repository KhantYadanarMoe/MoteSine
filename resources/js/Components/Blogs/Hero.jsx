import Deco from "../../../images/text-deco.jpg";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="flex flex-col items-center py-12">
                <p>The blogs</p>
                <div className="flex gap-0">
                    <h1 className="font-medium text-2xl md:text-3xl mb-2">
                        Writing from Mote Sine
                    </h1>
                    <img src={Deco} alt="" className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <p className="text-center text-sm md:text-base">
                    to inform you about our new dishes and services in time.
                </p>
            </div>
            <hr className="border-t-gray-400" />
        </motion.div>
    );
}
