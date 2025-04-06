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

export default function Setting() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8"
        >
            <div className="mb-6 p-4 border border-gray-300 bg-white shadow-lg rounded-md">
                <h1 className="flex gap-1 items-center font-medium text-accentRed">
                    <Settings size={20} />
                    General Settings
                </h1>
                <form action="" className="mt-8">
                    <div className="md:flex gap-4">
                        <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                            <Label htmlFor="name">Website's Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Enter your website's name"
                                className="border-gray-500"
                            />
                        </div>
                        <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                            <Label htmlFor="logo">Website's Logo</Label>
                            <Input
                                id="logo"
                                type="file"
                                className="border-gray-500 cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                            <Label htmlFor="email">Business Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your business email"
                                className="border-gray-500"
                            />
                        </div>
                        <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                            <Label htmlFor="phone">Business Phone</Label>
                            <Input
                                id="phone"
                                type="text"
                                placeholder="Enter your business phone"
                                className="border-gray-500"
                            />
                        </div>
                    </div>
                    <div className="my-5 md:my-3 space-y-2">
                        <Label htmlFor="address">Restaurant Address</Label>
                        <Textarea
                            id="address"
                            type="text"
                            placeholder="Enter your restaurant address"
                            className="border-gray-500"
                        ></Textarea>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                            <Label htmlFor="from">Opening Hour (From)</Label>
                            <TimePicker minTime={360} maxTime={1380} />
                        </div>
                        <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                            <Label htmlFor="to">Opening Hour (To)</Label>
                            <TimePicker minTime={360} maxTime={1380} />
                        </div>
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
            <div className="mb-6 p-4 border border-gray-300 bg-white shadow-lg rounded-md">
                <h1 className="flex gap-1 items-center font-medium text-accentRed">
                    <Utensils size={20} />
                    Online Order Settings
                </h1>
                <form action="" className="mt-8">
                    <div className="md:flex gap-4">
                        <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                            <Label htmlFor="DeliFee">Delivery Fee</Label>
                            <div className="relative w-full max-w-sm">
                                <span className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500">
                                    $
                                </span>
                                <Input
                                    id="DeliFee"
                                    type="number"
                                    placeholder="0.00"
                                    className="border-gray-500"
                                />
                            </div>
                        </div>
                        <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                            <Label htmlFor="minOrder">
                                Minimum Order Amount
                            </Label>
                            <div className="relative w-full max-w-sm">
                                <span className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500">
                                    $
                                </span>
                                <Input
                                    id="minOrder"
                                    type="number"
                                    placeholder="30.00"
                                    className="border-gray-500"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                            <Label htmlFor="prepTime">
                                Order Preparation Time
                            </Label>
                            <div className="relative w-full max-w-sm">
                                <span className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500">
                                    Mins
                                </span>
                                <Input
                                    id="prepTime"
                                    type="number"
                                    placeholder="20"
                                    className="border-gray-500"
                                />
                            </div>
                        </div>
                        <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                            <Label htmlFor="acceptType">
                                Order Accepting Type
                            </Label>
                            <Select defaultValue="">
                                <SelectTrigger className="w-full max-w-sm border-gray-500">
                                    <SelectValue placeholder="Select approval type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="auto">
                                        Auto-Accept
                                    </SelectItem>
                                    <SelectItem value="manual">
                                        Manual Approval
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="my-5 md:my-3 space-y-2">
                        <Label htmlFor="onlineOrder">
                            Enable/Disable Online Orders
                        </Label>
                        <div>
                            <Switch defaultChecked />
                        </div>
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
            <div className="mb-6 p-4 border border-gray-300 bg-white shadow-lg rounded-md">
                <h1 className="flex gap-1 items-center font-medium text-accentRed">
                    <Store size={20} />
                    Reservation Settings
                </h1>
                <form action="" className="mt-8">
                    <div className="md:flex gap-4">
                        <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                            <Label htmlFor="maxGuests">
                                Maximum Guests Per Reservation
                            </Label>
                            <div className="relative w-full max-w-sm">
                                <span className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500">
                                    Guest
                                </span>
                                <Input
                                    id="maxGuests"
                                    type="number"
                                    placeholder="12"
                                    className="border-gray-500"
                                />
                            </div>
                        </div>
                        <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                            <Label htmlFor="acceptType">
                                Reservation Confirmation Type
                            </Label>
                            <Select defaultValue="">
                                <SelectTrigger className="w-full max-w-sm border-gray-500">
                                    <SelectValue placeholder="Select approval type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="auto">
                                        Auto-Accept
                                    </SelectItem>
                                    <SelectItem value="manual">
                                        Manual Approval
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="my-5 md:my-3 space-y-2">
                        <Label htmlFor="onlineOrder">
                            Enable/Disable Online Orders
                        </Label>
                        <div>
                            <Switch defaultChecked />
                        </div>
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
