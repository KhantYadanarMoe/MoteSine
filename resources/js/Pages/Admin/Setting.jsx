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
            <div className="mb-6 p-4 border border-gray-300 bg-white shadow-lg rounded-md">
                <h1 className="flex gap-1 items-center font-medium text-accentRed">
                    <SquarePen size={20} />
                    Customization Settings
                </h1>
                <form action="" className="mt-8">
                    <div className="md:flex gap-4">
                        <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                            <Label htmlFor="heroImg">Hero Images</Label>
                            <Input
                                id="heroImg"
                                type="file"
                                className="border-gray-500"
                                multiple
                            />
                        </div>
                        <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                            <Label htmlFor="language">Language</Label>
                            <Select>
                                <SelectTrigger className="border-gray-500">
                                    <SelectValue placeholder="Select Language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="en">
                                        🇬🇧 English
                                    </SelectItem>
                                    <SelectItem value="mm">
                                        🇲🇲 Burmese (မြန်မာ)
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                        <Label htmlFor="themeColor">Theme Color</Label>
                        <Input
                            id="themeColor"
                            type="color"
                            className="h-10 border border-gray-300 rounded-md w-20"
                        />
                    </div>
                    <div className="flex justify-end gap-2 mt-7">
                        <Button
                            variant="outline"
                            className="rounded-lg bg-white text-accentRed border border-accentRed hover:bg-gray-100 hover:text-hoverRed hover:border-hoverRed duration-300"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="default"
                            className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                        >
                            Save Changes
                        </Button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
}
