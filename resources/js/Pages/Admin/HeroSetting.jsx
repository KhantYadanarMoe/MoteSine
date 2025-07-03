import { SquarePen } from "lucide-react";
import { Label } from "../../Components/ui/label";
import { Input } from "../../Components/ui/input";
import { Button } from "../../Components/ui/button";
import { useSetting } from "@/contexts/HeroSettingContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function HeroSetting({ setLoading }) {
    const { form, setForm, images, setImages, getSetting } = useSetting();
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

    // Handle image input
    const uploadImg = (e) => {
        const files = Array.from(e.target.files);
        const validImages = files.filter((file) =>
            file.type.startsWith("image/")
        );
        setImages(validImages);
    };

    // form submit function
    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();

        formData.append("header", form.header);
        formData.append("body", form.body);

        if (Array.isArray(images) && images.length > 0) {
            images.forEach((img) => {
                formData.append("heroImg[]", img);
            });
        } else if (form.heroImg) {
            formData.append("existingHeroImg", JSON.stringify(form.heroImg));
        }

        try {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                ?.getAttribute("content");

            const res = await axios.post("/api/setting/hero", formData, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            if (res.data.message === "Hero Setting updated successfully.") {
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

    let heroImages;
    try {
        heroImages =
            typeof form.heroImg === "string" && form.heroImg.trim() !== ""
                ? JSON.parse(form.heroImg)
                : form.heroImg;
    } catch (e) {
        console.error("Invalid JSON in heroImg:", e);
        heroImages = [];
    }

    return (
        <div className="mb-6 p-4 border border-gray-300 bg-white shadow-lg rounded-md">
            <h1 className="flex gap-1 items-center font-medium text-accentRed">
                <SquarePen size={20} />
                Hero Customization Settings
            </h1>
            <form action="" className="mt-8">
                <div className="flex gap-1">
                    {Array.isArray(heroImages) &&
                        heroImages.map((img, index) => (
                            <img
                                key={index}
                                src={`/storage/${img}`}
                                alt={`Hero ${index}`}
                                className="w-16 h-16 object-contain mb-2 rounded-sm"
                            />
                        ))}
                </div>

                <div className="md:flex gap-4">
                    <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                        <Label htmlFor="heroImg">Hero Images</Label>
                        <Input
                            id="heroImg"
                            name="heroImg"
                            type="file"
                            accept="image/*"
                            onChange={uploadImg}
                            className="border-gray-500"
                            multiple
                        />
                    </div>
                    <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                        <Label htmlFor="header">Hero Heading</Label>
                        <Input
                            id="header"
                            name="header"
                            type="text"
                            value={form.header}
                            onChange={handleInputChange}
                            placeholder="Enter the title for your hero section"
                            className="border-gray-500"
                            multiple
                        />
                    </div>
                    {/* <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <Select>
                            <SelectTrigger className="border-gray-500">
                                <SelectValue placeholder="Select Language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="en">🇬🇧 English</SelectItem>
                                <SelectItem value="mm">
                                    🇲🇲 Burmese (မြန်မာ)
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div> */}
                </div>
                {/* <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                    <Label htmlFor="themeColor">Theme Color</Label>
                    <Input
                        id="themeColor"
                        type="color"
                        className="h-10 border border-gray-300 rounded-md w-20"
                    />
                </div> */}
                <div className="my-5 md:my-3 md:w-1/2 space-y-2">
                    <Label htmlFor="body">Hero Body Text</Label>
                    <Input
                        id="body"
                        name="body"
                        type="text"
                        value={form.body}
                        onChange={handleInputChange}
                        placeholder="Write here..."
                        className="border-gray-500"
                        multiple
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
                        onClick={submit}
                    >
                        Save Changes
                    </Button>
                </div>
            </form>
        </div>
    );
}
