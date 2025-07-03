import { useSetting } from "@/contexts/GeneralSettingContext";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export default function Banner() {
    const { form } = useSetting();
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
                        <p>{form.address}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Phone size={20} />
                        <h1 className="text-xl">Phone:</h1>
                        <p>{form.phone}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
