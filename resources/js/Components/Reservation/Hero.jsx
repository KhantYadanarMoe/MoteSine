import ReservationBg from "../../../images/ReservationBg.jpg";
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Input } from "../ui/input";

export default function Hero() {
    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <img
                src={ReservationBg}
                alt="Reservation Background"
                className="w-full h-60 md:h-72 lg:h-[22rem] object-cover"
            />
        </motion.div>
    );
}
