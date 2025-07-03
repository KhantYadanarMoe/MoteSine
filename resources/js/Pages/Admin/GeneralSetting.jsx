import { Settings, Utensils, Store, SquarePen } from "lucide-react";
import { Label } from "../../Components/ui/label";
import { Input } from "../../Components/ui/input";
import { Textarea } from "../../Components/ui/textarea";
import { Button } from "../../Components/ui/button";
import TimePicker from "../../Components/TimePicker";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSetting } from "@/contexts/GeneralSettingContext";

export default function GeneralSetting({ setLoading }) {
    const { form, setForm, image, setImage, getSetting } = useSetting();
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

    // Handle image input
    const uploadImg = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setImage(file);
        }
    };

    // form submit function
    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let formData = new FormData();

        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("address", form.address);
        formData.append("from", form.from);
        formData.append("to", form.to);

        if (image && typeof image !== "string") {
            formData.append("logo", image);
        }

        try {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                ?.getAttribute("content");

            const res = await axios.post("/api/setting/general", formData, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            if (res.data.message === "General Setting updated successfully.") {
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
                <Settings size={20} />
                General Settings
            </h1>
            <form action="" className="mt-8">
                <div className="my-5 space-y-2">
                    <Label htmlFor="logo">Website's Logo</Label>
                    <div className="flex items-center gap-3">
                        {form.logo && (
                            <img
                                src={`/storage/${form.logo}`} // adjust if needed
                                alt="Current Logo"
                                className="w-20 h-20 object-contain mb-2"
                            />
                        )}
                        <Input
                            id="logo"
                            name="logo"
                            type="file"
                            accept="image/*"
                            onChange={uploadImg}
                            className="border-gray-500 cursor-pointer"
                        />
                    </div>
                </div>
                <div className="my-5 space-y-2">
                    <Label htmlFor="name">Website's Name</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="Enter your website's name"
                        className="border-gray-500"
                    />
                </div>
                <div className="md:flex gap-4">
                    <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                        <Label htmlFor="email">Business Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleInputChange}
                            placeholder="Enter your business email"
                            className="border-gray-500"
                        />
                    </div>
                    <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                        <Label htmlFor="phone">Business Phone</Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="text"
                            value={form.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your business phone"
                            className="border-gray-500"
                        />
                    </div>
                </div>
                <div className="my-5 md:my-3 space-y-2">
                    <Label htmlFor="address">Restaurant Address</Label>
                    <Textarea
                        id="address"
                        name="address"
                        type="text"
                        value={form.address}
                        onChange={handleInputChange}
                        placeholder="Enter your restaurant address"
                        className="border-gray-500"
                    ></Textarea>
                </div>
                <div className="md:flex gap-4">
                    <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                        <Label htmlFor="from">Opening Hour (From)</Label>
                        <TimePicker
                            minTime={360}
                            maxTime={1380}
                            id="from"
                            name="from"
                            selectedTime={form.from}
                            onTimeChange={(from) =>
                                handleCustomChange("from", from)
                            }
                        />
                    </div>
                    <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                        <Label htmlFor="to">Opening Hour (To)</Label>
                        <TimePicker
                            minTime={360}
                            maxTime={1380}
                            id="to"
                            name="to"
                            selectedTime={form.to}
                            onTimeChange={(to) => handleCustomChange("to", to)}
                        />
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
