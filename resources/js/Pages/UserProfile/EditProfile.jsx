import Profile from "../../../images/Profile.jpg";
import { Button } from "../../Components/ui/button";
import { motion } from "framer-motion";
import { Input } from "../../Components/ui/input";
import { Textarea } from "../../Components/ui/textarea";
import { Label } from "../../Components/ui/Label";
import { useAuth } from "@/contexts/AuthContext";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function EditProfile() {
    const { user, setUser } = useAuth();
    const [image, setImage] = useState(null);
    // prepare state to store form data
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        password: "",
    });
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
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setImage(file);
        }
    };

    useEffect(() => {
        if (user) {
            setForm({
                name: user.name || "",
                email: user.email || "",
                phone: user.phone || "",
                address: user.address || "",
                password: "",
            });
        }
    }, [user]);

    // form submit function
    const submit = async (e) => {
        e.preventDefault();

        // url and method to use in sending data using axios
        let url = "/api/user/" + user.id;
        let method = "post";

        // create new object to store form data to send
        let formData = new FormData();

        console.log("Form Data before submitting:", form);

        // store state data in object
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("address", form.address);
        formData.append("password", form.password || "");

        console.log("Form data after appending:", formData);

        if (image) {
            formData.append("image", image);
        }

        formData.append("_method", "PUT");

        try {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content");

            // send data
            const res = await axios[method](url, formData, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            // success condition
            if (res.data.message === "User updated successfully.") {
                navigate("/user");
            }
        } catch (error) {
            console.error("Error updating user:", error);

            // failed condition
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            }
        }
    };

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-[73%] flex flex-col gap-6 lg:ml-[28%]"
        >
            <div className="mx-auto my-12 w-[93%] md:w-[90%] lg:w-[80%] ">
                <form action="">
                    <div className="flex gap-2">
                        <img
                            src={
                                image
                                    ? URL.createObjectURL(image)
                                    : user?.image
                                    ? `/storage/${user.image}`
                                    : Profile
                            }
                            alt="User Profile"
                            className="w-24 h-24 md:h-32 md:w-32 object-cover rounded-full border-2 border-accentRed"
                        />
                        <div>
                            <h2 className="text-lg font-medium">
                                {user?.name}
                            </h2>
                            <p className="text-gray-700 text-xs">NYC, USA</p>
                            <div className="flex gap-2 md:justify-start mt-3">
                                <Input
                                    id="image-upload"
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    onChange={uploadImg}
                                    className="hidden"
                                />

                                <label
                                    htmlFor="image-upload"
                                    className="inline-block rounded-lg border border-accentGreen text-accentGreen hover:border-hoverGreen hover:text-hoverGreen hover:bg-gray-100 font-medium duration-300 px-3 py-1 cursor-pointer"
                                >
                                    Upload
                                </label>

                                <Button
                                    variant="default"
                                    className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                                >
                                    Delete Photo
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12">
                        <div className="my-3">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleInputChange}
                                placeholder="Enter your name"
                                className="mt-1 border-gray-500"
                            />
                        </div>
                        <div className="md:flex gap-2">
                            <div className="w-1/2 my-3">
                                <label htmlFor="email">Email</label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="text"
                                    value={form.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                            <div className="w-1/2 my-3">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    value={form.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter your phone"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                        </div>
                        <div className="my-3">
                            <Label htmlFor="address">Address</Label>
                            <Textarea
                                id="address"
                                name="address"
                                type="text"
                                value={form.address}
                                onChange={handleInputChange}
                                placeholder="Enter your address"
                                className="mt-1 border-gray-500"
                            ></Textarea>
                        </div>
                        <div className="flex justify-end">
                            <Button
                                onClick={submit}
                                className="bg-accentYellow text-black hover:bg-hoverYellow duration-300"
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                </form>

                <form action="" className="mt-12">
                    <h2 className="font-medium mb-6 text-lg">
                        Change Password
                    </h2>
                    <div className="my-3">
                        <Label htmlFor="currentPassword">
                            Current Password
                        </Label>
                        <Input
                            id="currentPassword"
                            type="text"
                            placeholder="Enter your password"
                            className="mt-1 border-gray-500"
                        />
                        {/* <a href="" className="text-sm underline mt-1 mb-3">
              forgot password?
            </a> */}
                    </div>
                    <div className="my-3">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                            id="newPassword"
                            type="text"
                            placeholder="Set new password"
                            className="mt-1 border-gray-500"
                        />
                    </div>
                    <div className="flex justify-end">
                        <Button className="bg-accentYellow text-black hover:bg-hoverYellow duration-300">
                            Change
                        </Button>
                    </div>
                </form>

                <a href="" className="text-accentRed underline">
                    Delete Account?
                </a>
            </div>
        </motion.div>
    );
}
