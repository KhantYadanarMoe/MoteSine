import { Utensils } from "lucide-react";
import { Label } from "../../Components/ui/label";
import { Input } from "../../Components/ui/input";
import { Button } from "../../Components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../Components/ui/select";
import { Switch } from "../../Components/ui/switch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useOrderSetting } from "@/contexts/OrderSettingContext";

export default function OrderSetting({ setLoading }) {
    const { form, setForm } = useOrderSetting();
    // store errors state
    const [errors, setErrors] = useState({});

    // prepare to move another route/page after sending data
    const navigate = useNavigate();

    // Handle HTML inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle other custom Components' inputs
    const handleCustomChange = (name, value) => {
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // form submit function
    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let formData = new FormData();

        formData.append("deliveryFee", form.deliveryFee);
        formData.append("minOrder", form.minOrder);
        formData.append("type", form.type);
        formData.append("allow", form.allow ? "1" : "0");

        try {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                ?.getAttribute("content");

            const res = await axios.post("/api/setting/order", formData, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            if (res.data.message === "Order Setting updated successfully.") {
                navigate("/admin/settings");
            }
        } catch (error) {
            console.error("Error updating setting:", error);
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="mb-6 p-4 border border-gray-300 bg-white shadow-lg rounded-md">
            <h1 className="flex gap-1 items-center font-medium text-accentRed">
                <Utensils size={20} />
                Online Order Settings
            </h1>
            <form action="" className="mt-8">
                <div className="md:flex gap-4">
                    <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                        <Label htmlFor="deliveryFee">Delivery Fee</Label>
                        <div className="relative w-full max-w-sm">
                            <span className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500">
                                $
                            </span>
                            <Input
                                id="deliveryFee"
                                name="deliveryFee"
                                value={form.deliveryFee}
                                onChange={handleInputChange}
                                type="number"
                                placeholder="0.00"
                                className="border-gray-500"
                            />
                        </div>
                    </div>
                    <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                        <Label htmlFor="minOrder">Minimum Order Amount</Label>
                        <div className="relative w-full max-w-sm">
                            <span className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-500">
                                $
                            </span>
                            <Input
                                id="minOrder"
                                name="minOrder"
                                value={form.minOrder}
                                onChange={handleInputChange}
                                type="number"
                                placeholder="30.00"
                                className="border-gray-500"
                            />
                        </div>
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                        <Label htmlFor="type">Order Accepting Type</Label>
                        <Select
                            defaultValue=""
                            value={form.type}
                            onValueChange={(value) =>
                                handleCustomChange("type", value)
                            }
                        >
                            <SelectTrigger
                                id="type"
                                name="type"
                                className="w-full max-w-sm border-gray-500"
                            >
                                <SelectValue placeholder="Select approval type" />
                            </SelectTrigger>
                            <SelectContent>
                                {/* <SelectItem value="Auto Approve">
                                    Auto-Accept
                                </SelectItem> */}
                                <SelectItem value="Manual Approve">
                                    Manual Approval
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                        <Label htmlFor="allow">
                            Enable/Disable Online Orders
                        </Label>
                        <div>
                            <Switch
                                id="allow"
                                name="allow"
                                checked={form.allow}
                                onCheckedChange={(checked) =>
                                    handleCustomChange("allow", checked)
                                }
                            />
                        </div>
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
                        onClick={submit}
                    >
                        Save Changes
                    </Button>
                </div>
            </form>
        </div>
    );
}
