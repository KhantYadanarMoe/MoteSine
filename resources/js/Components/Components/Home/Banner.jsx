import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export default function Banner() {
    return (
        <div className="overflow-hidden w-[100%] bg-accentGreen text-white h-[60px] relative">
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{
                    duration: 15,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="whitespace-nowrap text-lg absolute"
                style={{ top: "25%", transform: "translateY(-50%)" }}
            >
                <div className="flex gap-6 items-center">
                    <div className="flex gap-2 items-center">
                        <MapPin size={20} />
                        <h1 className="text-xl">Location:</h1>
                        <p>
                            1257 Lexington Avenue, Apt 4B, New York, NY 10028,
                            USA
                        </p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Phone size={20} />
                        <h1 className="text-xl">Phone:</h1>
                        <p>(917) 555-4827, (646) 555-7391, (212) 555-1846</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
