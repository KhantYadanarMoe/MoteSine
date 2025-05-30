import { Settings, Utensils, Store, SquarePen } from "lucide-react";
import { Label } from "../../Components/ui/label";
import { Input } from "../../Components/ui/input";
import { Textarea } from "../../Components/ui/textarea";
import { Button } from "../../Components/ui/button";
import TimePicker from "../../Components/TimePicker";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../Components/ui/select";
import { Switch } from "../../Components/ui/switch";
import { motion } from "framer-motion";
import GeneralSetting from "./GeneralSetting";
import ReservationSetting from "./ReservationSetting";
import OrderSetting from "./OrderSetting";
import HeroSetting from "./HeroSetting";

export default function Setting() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8"
        >
            <GeneralSetting />
            <OrderSetting />
            <ReservationSetting />
            <HeroSetting />
        </motion.div>
    );
}
