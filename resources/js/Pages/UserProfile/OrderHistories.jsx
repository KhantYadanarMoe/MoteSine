import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "../../Components/ui/input";
import { Link } from "react-router-dom";

export default function OrderHistories() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-[73%] flex flex-col gap-6 py-8 px-4 lg:ml-[28%]"
        >
            <div className="block md:flex justify-between mb-0 md:mb-4">
                <h1 className="text-xl font-medium flex gap-1 items-center">
                    Your Orders
                </h1>
                <div>
                    <div className="relative w-full max-w-md hidden md:block">
                        <Search
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                            size={16}
                        />
                        <Input
                            id=""
                            type="text"
                            placeholder="Search..."
                            className="mt-1 border-gray-500 pl-8 pr-4"
                        />
                    </div>
                </div>
            </div>

            <div className="hidden md:block mx-4">
                <ul className="flex items-center justify-between border-t-2 border-t-accentRed py-5 px-3 shadow-md">
                    <li className="ml-1 basis-[10%] text-accentRed">ID</li>
                    <li className="ml-1 basis-[20%] text-accentRed">Order</li>
                    <li className="ml-1 basis-[23%] text-accentRed">Total</li>
                    <li className="ml-1 basis-[23%] text-accentRed">Status</li>
                    <li className="ml-1 basis-[22%] text-accentRed">
                        Ordered at
                    </li>
                </ul>
                <Link to="/user/order">
                    <ul className="flex items-center justify-between border-l-2 border-l-accentRed mt-3 py-5 px-3 shadow-md hover:bg-gray-100 duration-300">
                        <li className="ml-1 basis-[10%]">23</li>
                        <li className="ml-1 basis-[20%]">#J3489</li>
                        <li className="ml-1 basis-[23%]">37.89 $</li>
                        <li className="ml-1 basis-[23%]">
                            <span className="text-accentGreen bg-green-100 rounded-lg text-sm p-1">
                                Pending
                            </span>
                        </li>
                        <li className="ml-1 basis-[22%]">
                            <p className="text-sm">12.3.2025</p>
                            <p className="text-sm">10:42 AM</p>
                        </li>
                    </ul>
                </Link>
                <Link to="/user/order">
                    <ul className="flex items-center justify-between border-l-2 border-l-accentRed mt-3 py-5 px-3 shadow-md hover:bg-gray-100 duration-300">
                        <li className="ml-1 basis-[10%]">23</li>
                        <li className="ml-1 basis-[20%]">#J3489</li>
                        <li className="ml-1 basis-[23%]">37.89 $</li>
                        <li className="ml-1 basis-[23%]">
                            <span className="text-accentGreen bg-green-100 rounded-lg text-sm p-1">
                                Pending
                            </span>
                        </li>
                        <li className="ml-1 basis-[22%]">
                            <p className="text-sm">12.3.2025</p>
                            <p className="text-sm">10:42 AM</p>
                        </li>
                    </ul>
                </Link>
                <Link to="/user/order">
                    <ul className="flex items-center justify-between border-l-2 border-l-accentRed mt-3 py-5 px-3 shadow-md hover:bg-gray-100 duration-300">
                        <li className="ml-1 basis-[10%]">23</li>
                        <li className="ml-1 basis-[20%]">#J3489</li>
                        <li className="ml-1 basis-[23%]">37.89 $</li>
                        <li className="ml-1 basis-[23%]">
                            <span className="text-accentGreen bg-green-100 rounded-lg text-sm p-1">
                                Pending
                            </span>
                        </li>
                        <li className="ml-1 basis-[22%]">
                            <p className="text-sm">12.3.2025</p>
                            <p className="text-sm">10:42 AM</p>
                        </li>
                    </ul>
                </Link>
                <Link to="/user/order">
                    <ul className="flex items-center justify-between border-l-2 border-l-accentRed mt-3 py-5 px-3 shadow-md hover:bg-gray-100 duration-300">
                        <li className="ml-1 basis-[10%]">23</li>
                        <li className="ml-1 basis-[20%]">#J3489</li>
                        <li className="ml-1 basis-[23%]">37.89 $</li>
                        <li className="ml-1 basis-[23%]">
                            <span className="text-accentGreen bg-green-100 rounded-lg text-sm p-1">
                                Pending
                            </span>
                        </li>
                        <li className="ml-1 basis-[22%]">
                            <p className="text-sm">12.3.2025</p>
                            <p className="text-sm">10:42 AM</p>
                        </li>
                    </ul>
                </Link>
                <Link to="/user/order">
                    <ul className="flex items-center justify-between border-l-2 border-l-accentRed mt-3 py-5 px-3 shadow-md hover:bg-gray-100 duration-300">
                        <li className="ml-1 basis-[10%]">23</li>
                        <li className="ml-1 basis-[20%]">#J3489</li>
                        <li className="ml-1 basis-[23%]">37.89 $</li>
                        <li className="ml-1 basis-[23%]">
                            <span className="text-accentGreen bg-green-100 rounded-lg text-sm p-1">
                                Pending
                            </span>
                        </li>
                        <li className="ml-1 basis-[22%]">
                            <p className="text-sm">12.3.2025</p>
                            <p className="text-sm">10:42 AM</p>
                        </li>
                    </ul>
                </Link>
            </div>

            <div className="block md:hidden">
                <Link to="/user/order">
                    <div className="px-3 py-4 shadow-xl mt-4 rounded-md border-l-2 border-l-accentRed">
                        <div className="flex justify-between">
                            <span className="text-lg flex items-center gap-2">
                                Order
                                <span className="text-xl font-medium">
                                    #J2345
                                </span>
                            </span>
                            <span className="text-accentGreen">Pending</span>
                        </div>
                        <p className="text-base text-gray-700 mt-1">
                            12.3.2025 - 10:42 PM
                        </p>
                        <div className="flex justify-end">
                            <p className="text-gray-950 font-medium mt-2 mx-3">
                                38.47 $
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/user/order">
                    <div className="px-3 py-4 shadow-xl mt-4 rounded-md border-l-2 border-l-accentRed">
                        <div className="flex justify-between">
                            <span className="text-lg flex items-center gap-2">
                                Order
                                <span className="text-xl font-medium">
                                    #J2345
                                </span>
                            </span>
                            <span className="text-accentGreen">Pending</span>
                        </div>
                        <p className="text-base text-gray-700 mt-1">
                            12.3.2025 - 10:42 PM
                        </p>
                        <div className="flex justify-end">
                            <p className="text-gray-950 font-medium mt-2 mx-3">
                                38.47 $
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/user/order">
                    <div className="px-3 py-4 shadow-xl mt-4 rounded-md border-l-2 border-l-accentRed">
                        <div className="flex justify-between">
                            <span className="text-lg flex items-center gap-2">
                                Order
                                <span className="text-xl font-medium">
                                    #J2345
                                </span>
                            </span>
                            <span className="text-accentGreen">Pending</span>
                        </div>
                        <p className="text-base text-gray-700 mt-1">
                            12.3.2025 - 10:42 PM
                        </p>
                        <div className="flex justify-end">
                            <p className="text-gray-950 font-medium mt-2 mx-3">
                                38.47 $
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/user/order">
                    <div className="px-3 py-4 shadow-xl mt-4 rounded-md border-l-2 border-l-accentRed">
                        <div className="flex justify-between">
                            <span className="text-lg flex items-center gap-2">
                                Order
                                <span className="text-xl font-medium">
                                    #J2345
                                </span>
                            </span>
                            <span className="text-accentGreen">Pending</span>
                        </div>
                        <p className="text-base text-gray-700 mt-1">
                            12.3.2025 - 10:42 PM
                        </p>
                        <div className="flex justify-end">
                            <p className="text-gray-950 font-medium mt-2 mx-3">
                                38.47 $
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/user/order">
                    <div className="px-3 py-4 shadow-xl mt-4 rounded-md border-l-2 border-l-accentRed">
                        <div className="flex justify-between">
                            <span className="text-lg flex items-center gap-2">
                                Order
                                <span className="text-xl font-medium">
                                    #J2345
                                </span>
                            </span>
                            <span className="text-accentGreen">Pending</span>
                        </div>
                        <p className="text-base text-gray-700 mt-1">
                            12.3.2025 - 10:42 PM
                        </p>
                        <div className="flex justify-end">
                            <p className="text-gray-950 font-medium mt-2 mx-3">
                                38.47 $
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </motion.div>
    );
}
