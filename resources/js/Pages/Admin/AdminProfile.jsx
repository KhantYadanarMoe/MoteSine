import Profile from "../../../images/profile.jpg";
import { Mail, Phone, BadgeCheck } from "lucide-react";
import { Input } from "../../Components/ui/input";
import { motion } from "framer-motion";

export default function AdminProfile() {
    return (
        <motion.div
            initial={{ visibility: "hidden", opacity: 0 }}
            whileInView={{ visibility: "visible", opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:h-[89vh] h-full lg:h-full lg:relative flex flex-col md:flex-row gap-3 mx-2 md:mx-4 mt-2 mb-6 md:mt-6"
        >
            <div className="w-full md:w-3/5 order-0 md:-order-1">
                <div className="mt-3 px-4 py-3 bg-white shadow-md rounded-lg">
                    <h1 className="text-lg font-medium">Edit Profile</h1>
                    <form action="" className="mt-6">
                        <div className="flex gap-6 items-center mb-7">
                            <img
                                src={Profile}
                                alt="profile"
                                className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-2 border-accentRed"
                            />
                            <div>
                                <h1 className="font-medium">
                                    Khant Yadanar Moe
                                </h1>
                                <p className="text-gray-800 text-sm">
                                    NYC, USA
                                </p>
                                <div className="flex gap-2 mt-2">
                                    <button className="px-2 py-2 text-sm bg-accentGreen hover:bg-hoverGreen duration-300 text-white rounded-md">
                                        Upload new
                                    </button>
                                    <button className="px-2 py-2 text-sm bg-accentRed hover:bg-accentRed duration-300 text-white rounded-md">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex gap-3">
                            <div className="md:w-1/2 mb-4">
                                <label htmlFor="firstName">First Name</label>
                                <Input
                                    id="firstName"
                                    type="text"
                                    placeholder="Enter your first name"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                            <div className="md:w-1/2 mb-4">
                                <label htmlFor="lastName">Last Name</label>
                                <Input
                                    id="lastName"
                                    type="text"
                                    placeholder="Enter your last name"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                        </div>
                        <div className="md:flex gap-3">
                            <div className="md:w-1/2 mb-4">
                                <label htmlFor="email">Email</label>
                                <Input
                                    id="email"
                                    type="text"
                                    placeholder="Enter your email"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                            <div className="md:w-1/2 mb-4">
                                <label htmlFor="phone">Phone</label>
                                <Input
                                    id="phone"
                                    type="text"
                                    placeholder="Enter your phone"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address">Address</label>
                            <textarea
                                type="text"
                                placeholder="Enter your Address"
                                className="w-full mt-1 px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson focus:border-crimson text-gray-700"
                            ></textarea>
                        </div>
                        <div className="flex justify-end gap-2">
                            <button className="px-2 py-2 text-sm bg-accentGreen hover:bg-hoverGreen duration-300 text-white rounded-md">
                                Submit
                            </button>
                            <button className="px-2 py-2 text-sm bg-accentRed hover:bg-accentRed duration-300 text-white rounded-md">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
                <div className="mt-3 px-4 py-3 bg-white shadow-md rounded-lg">
                    <h1 className="text-lg font-medium">Security Setting</h1>
                    <form action="" className="mt-6">
                        <div className="mb-4">
                            <label htmlFor="currentPassword">
                                Current Password
                            </label>
                            <Input
                                id="currentPassword"
                                type="password"
                                placeholder="Enter your password"
                                className="mt-1 border-gray-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="newPassword">New Password</label>
                            <Input
                                id="newPassword"
                                type="password"
                                placeholder="Enter your new password"
                                className="mt-1 border-gray-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                className="mt-1 border-gray-500"
                            />
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button className="px-2 py-2 text-sm bg-accentGreen hover:bg-hoverGreen duration-300 text-white rounded-md">
                                Change
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="w-full md:w-2/5 lg:max-w-[365px] -order-1 md:order-0 lg:fixed lg:right-4">
                <div className="mt-3 px-4 py-3 bg-white shadow-md rounded-lg">
                    <h1 className="text-lg font-medium">Your Account</h1>
                    <img
                        src={Profile}
                        alt="profile"
                        className="mt-5 w-24 h-24 object-cover mx-auto rounded-full border border-accentRed"
                    />
                    <h1 className="text-center font-medium mt-1">
                        Khant Yadanar Moe
                    </h1>
                    <p className="text-center text-gray-800 text-sm">Admin</p>
                    <hr className="border-t-gray-400 my-3" />
                    <h1 className="text-sm font-medium">
                        Personal Information
                    </h1>
                    <div className="my-3">
                        <p className="text-sm flex gap-1 items-center mb-1">
                            <Mail size={16} className="text-accentRed" />
                            Email
                        </p>
                        <p className="text-sm text-gray-800">
                            khantyadanarmoe487@gmail.com
                        </p>
                    </div>
                    <div className="my-3">
                        <p className="text-sm flex gap-1 items-center mb-1">
                            <Phone size={16} className="text-accentRed" />
                            Phone
                        </p>
                        <p className="text-sm text-gray-800">(376) 457 732</p>
                    </div>

                    <div className="my-3">
                        <p className="text-sm flex gap-1 items-center mb-1">
                            <BadgeCheck
                                size={16}
                                className="text-accentYellow"
                            />
                            Role
                        </p>
                        <p className="text-sm text-gray-800">Admin</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
