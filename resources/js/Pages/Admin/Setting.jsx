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
import { useState } from "react";
import Loading from "@/Components/Loading";

export default function Setting() {
    const [loading, setLoading] = useState(false);
    return loading ? (
        <div className="absolute top-0 left-0 w-full h-full z-50 pointer-events-none">
            <div className="lg:pt-24 pt-20 h-[83vh] flex items-center justify-center pointer-events-auto">
                <Loading />
            </div>
        </div>
    ) : (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8"
        >
            <GeneralSetting setLoading={setLoading} />
            <OrderSetting setLoading={setLoading} />
            <ReservationSetting setLoading={setLoading} />
            <HeroSetting setLoading={setLoading} />
        </motion.div>
    );
}
