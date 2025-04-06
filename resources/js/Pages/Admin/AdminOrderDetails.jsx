import { Progress } from "../../Components/ui/progress";
import React from "react";
import Mohinga from "../../../images/Mohinga.png";
import Profile from "../../../images/profile.jpg";
import { ReceiptText } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminOrderDetails() {
    const [progress, setProgress] = React.useState(13);

    React.useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500);
        return () => clearTimeout(timer);
    }, []);
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:flex gap-3 mx-2 md:mx-4 my-8"
        >
            <div className="md:w-[60%] lg:w-[70%]">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl font-medium">#432782</h1>
                    <div>
                        <span className="text-accentYellow border border-accentYellow rounded-lg text-sm px-2 py-1">
                            In progress
                        </span>
                    </div>
                </div>
                <p className="text-sm text-gray-700 mt-2">
                    April 23, 2025 at 5:00 PM
                </p>
                <div className="my-5 px-3 py-4 bg-white shadow-lg rounded-md">
                    <h1 className="font-medium text-lg">Order Progress</h1>
                    <div className="grid grid-cols-2 gap-3 mt-7">
                        <div className="mb-7">
                            <Progress
                                value={progress}
                                className="w-[80%] [&>div]:bg-accentGreen"
                            />
                            <p className="text-sm text-gray-700 mt-1">
                                Order Confirmed
                            </p>
                        </div>
                        <div className="mb-7">
                            <Progress
                                value={progress}
                                className="w-[80%] [&>div]:bg-accentYellow"
                            />
                            <p className="text-sm text-gray-700 mt-1">
                                Processing
                            </p>
                        </div>
                        <div>
                            <Progress
                                value={progress}
                                className="w-[80%] [&>div]:bg-gray-500"
                            />
                            <p className="text-sm text-gray-700 mt-1">
                                Delivered
                            </p>
                        </div>
                    </div>
                    <hr className="border-t-gray-400 mt-6 mb-2" />
                    <div className="flex justify-between items-center">
                        <span className="text-xs md:text-sm text-gray-800 flex gap-1 md:gap-2">
                            Estimated Time:{" "}
                            <p className="text-black">April 26, 2025</p>
                        </span>
                        <button className="px-3 py-2 bg-accentRed text-white hover:bg-hoverRed duration-300 rounded-md">
                            Delivered
                        </button>
                    </div>
                </div>
                <div className="my-5 px-3 py-4 bg-white shadow-lg rounded-md">
                    <h1 className="font-medium text-lg">Order</h1>
                    <div className="mt-6">
                        <ul className="flex items-center justify-between border-t-2 border-t-accentRed py-5 px-3 shadow-md">
                            <li className="basis-[53%] md:basis-[45%] ml-1 text-sm">
                                Order Items
                            </li>
                            <li className="basis-[15%] md:basis-[12%] ml-1 text-sm">
                                QTY
                            </li>
                            <li className="md:basis-[18%] hidden md:block ml-1 text-sm">
                                Price
                            </li>
                            <li className="basis-[32%] md:basis-[25%] ml-1 text-sm">
                                Total
                            </li>
                        </ul>
                        <ul className="flex items-center justify-between mt-2 py-3 px-3 shadow-md">
                            <li className="basis-[53%] md:basis-[45%] ml-1 text-sm flex gap-1 items-center">
                                <img
                                    src={Mohinga}
                                    alt="mohinga"
                                    className="w-12 h-12 object-cover"
                                />
                                <h1 className="font-medium text-sm">Mohinga</h1>
                            </li>
                            <li className="basis-[15%] md:basis-[12%] ml-1 text-sm">
                                x 2
                            </li>
                            <li className="md:basis-[18%] hidden md:block ml-1 text-sm">
                                6.12
                            </li>
                            <li className="basis-[32%] md:basis-[25%] ml-1 text-sm">
                                12.24 $
                            </li>
                        </ul>
                        <ul className="flex items-center justify-between mt-2 py-3 px-3 shadow-md">
                            <li className="basis-[53%] md:basis-[45%] ml-1 text-sm flex gap-1 items-center">
                                <img
                                    src={Mohinga}
                                    alt="mohinga"
                                    className="w-12 h-12 object-cover"
                                />
                                <h1 className="font-medium text-sm">Mohinga</h1>
                            </li>
                            <li className="basis-[15%] md:basis-[12%] ml-1 text-sm">
                                x 2
                            </li>
                            <li className="md:basis-[18%] hidden md:block ml-1 text-sm">
                                6.12
                            </li>
                            <li className="basis-[32%] md:basis-[25%] ml-1 text-sm">
                                12.24 $
                            </li>
                        </ul>
                        <ul className="flex items-center justify-between mt-2 py-3 px-3 shadow-md">
                            <li className="basis-[53%] md:basis-[45%] ml-1 text-sm flex gap-1 items-center">
                                <img
                                    src={Mohinga}
                                    alt="mohinga"
                                    className="w-12 h-12 object-cover"
                                />
                                <h1 className="font-medium text-sm">Mohinga</h1>
                            </li>
                            <li className="basis-[15%] md:basis-[12%] ml-1 text-sm">
                                x 2
                            </li>
                            <li className="md:basis-[18%] hidden md:block ml-1 text-sm">
                                6.12
                            </li>
                            <li className="basis-[32%] md:basis-[25%] ml-1 text-sm">
                                12.24 $
                            </li>
                        </ul>
                        <ul className="flex items-center justify-between mt-2 py-3 px-3 shadow-md">
                            <li className="basis-[53%] md:basis-[45%] ml-1 text-sm flex gap-1 items-center">
                                <img
                                    src={Mohinga}
                                    alt="mohinga"
                                    className="w-12 h-12 object-cover"
                                />
                                <h1 className="font-medium text-sm">Mohinga</h1>
                            </li>
                            <li className="basis-[15%] md:basis-[12%] ml-1 text-sm">
                                x 2
                            </li>
                            <li className="md:basis-[18%] hidden md:block ml-1 text-sm">
                                6.12
                            </li>
                            <li className="basis-[32%] md:basis-[25%] ml-1 text-sm">
                                12.24 $
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="my-5 px-3 py-4 border-t-2 border-t-accentRed bg-white shadow-lg rounded-md">
                    <h1 className="text-lg font-medium">Scheduled Delivery</h1>
                    <div className="py-5">
                        <div className="flex justify-between mb-3">
                            <h1 className="text-sm font-medium">
                                Scheduled Date -
                            </h1>
                            <p className="text-sm">23.3.2025</p>
                        </div>
                        <div className="flex justify-between mb-3">
                            <h1 className="text-sm font-medium">
                                Scheduled Time -
                            </h1>
                            <p className="text-sm">12:45 PM</p>
                        </div>
                        <div className="mb-3">
                            <h1 className="text-sm font-medium">Note -</h1>
                            <p className="mt-1 text-sm">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quidem, consequuntur corrupti
                                sequi qui libero dolorem sed doloribus nobis,
                                ullam enim, sunt labore voluptatibus tenetur
                                incidunt quia odio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-[40%] lg:w-[30%]">
                <div className="px-3 py-4 bg-white shadow-lg rounded-md">
                    <h1 className="font-medium text-base flex gap-1 items-center">
                        Order Summary <ReceiptText size={20} />
                    </h1>
                    <hr className="border-t-gray-400 my-6" />
                    <div>
                        <div className="flex justify-between mb-4">
                            <p className=" text-gray-700">Sub Total - </p>
                            <p className=" text-black">74.87 $ </p>
                        </div>
                        <div className="flex justify-between mb-4">
                            <p className=" text-gray-700">Discount - </p>
                            <p className=" text-black">1 $ </p>
                        </div>
                        <div className="flex justify-between mb-4">
                            <p className=" text-gray-700">Delivery Charge - </p>
                            <p className=" text-black">0 $ </p>
                        </div>
                        <div className="flex justify-between mb-4">
                            <p className=" text-gray-700">Tax (10%) - </p>
                            <p className=" text-black">6.12 $ </p>
                        </div>
                        <hr className="border-t-gray-400 my-6" />
                        <div className="flex justify-between mb-4">
                            <p className=" text-gray-700">Total - </p>
                            <p className=" text-black">79.12 $ </p>
                        </div>
                    </div>
                </div>
                <div className="my-5 px-3 py-4 bg-white shadow-lg rounded-md">
                    <h1 className="font-medium text-lg">Customer Details</h1>
                    <div className="flex gap-2 items-center mt-6">
                        <img
                            src={Profile}
                            alt="profile"
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                            <h1 className="font-medium">Khant Yadanar Moe</h1>
                            <p className="text-xs text-gray-800">
                                khantyadanarmoe489@gmail.com
                            </p>
                        </div>
                    </div>
                    <hr className="border-t-gray-400 my-6" />
                    <div>
                        <div className="my-5">
                            <p className="text-gray-700 mb-2">Phone - </p>
                            <p className="text-sm text-black">
                                (723) 732-760-576
                            </p>
                        </div>
                        <div className="my-5">
                            <p className="text-gray-700 mb-2">
                                Delivery Address -{" "}
                            </p>
                            <p className="text-sm text-black">
                                Wilson's Jewelers LTD 1344 Hershell Hollow Road
                                , Tukwila, WA 98168 , United States
                            </p>
                        </div>
                        <div className="my-5">
                            <p className="text-gray-700 mb-2">Note - </p>
                            <p className="text-sm text-black">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Atque amet quo exercitationem
                                corrupti tenetur quidem, debitis nesciunt culpa?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
