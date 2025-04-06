import Profile from "../../../images/Profile.jpg";
import { Button } from "../../Components/ui/button";
import { motion } from "framer-motion";
import { Input } from "../../Components/ui/input";
import { Textarea } from "../../Components/ui/textarea";
import { Label } from "../../Components/ui/Label";

export default function EditProfile() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-[73%] flex flex-col gap-6 lg:ml-[28%]"
        >
            <div className="mx-auto my-12 w-[93%] md:w-[90%] lg:w-[80%] ">
                <div className="flex gap-2">
                    <img
                        src={Profile}
                        alt="User Profile"
                        className="w-24 h-24 md:h-32 md:w-32 object-cover rounded-full border-2 border-accentRed"
                    />
                    <div>
                        <h2 className="text-lg font-medium">
                            Khant Yadanar Moe
                        </h2>
                        <p className="text-gray-700 text-xs">NYC, USA</p>
                        <div className="flex gap-2 md:justify-start mt-3">
                            <Button
                                variant="outline"
                                className="rounded-lg border border-accentGreen text-accentGreen hover:border-hoverGreen hover:text-hoverGreen hover:bg-gray-100 duration-300"
                            >
                                Upload
                            </Button>
                            <Button
                                variant="default"
                                className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                            >
                                Delete Photo
                            </Button>
                        </div>
                    </div>
                </div>
                <form action="" className="mt-12">
                    <div className="my-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            className="mt-1 border-gray-500"
                        />
                    </div>
                    <div className="md:flex gap-2">
                        <div className="w-1/2 my-3">
                            <label htmlFor="email">Email</label>
                            <Input
                                id="email"
                                type="text"
                                placeholder="Enter your email"
                                className="mt-1 border-gray-500"
                            />
                        </div>
                        <div className="w-1/2 my-3">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                id="phone"
                                type="text"
                                placeholder="Enter your phone"
                                className="mt-1 border-gray-500"
                            />
                        </div>
                    </div>
                    <div className="my-3">
                        <Label htmlFor="Address">Address</Label>
                        <Textarea
                            type="text"
                            placeholder="Enter your address"
                            className="mt-1 border-gray-500"
                        ></Textarea>
                    </div>
                    <div className="flex justify-end">
                        <Button className="bg-accentYellow text-black hover:bg-hoverYellow duration-300">
                            Save
                        </Button>
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
