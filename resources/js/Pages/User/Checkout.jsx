import DatePicker from "../../Components/DatePicker";
import TimePicker from "../../Components/TimePicker";
import Mohinga from "../../../images/Mohinga.png";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { Textarea } from "../../Components/ui/textarea";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";

export default function Checkout() {
    const [count, setCount] = useState(1);
    const { cartItems, updateQuantity } = useCart();

    console.log(cartItems);

    return (
        <div className="px-4 md:px-6 py-7 bg-lightBackground lg:flex gap-5">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:w-1/2 flex-1"
            >
                <div>
                    <h1 className="text-lg font-medium">
                        Delivery information
                    </h1>
                    <form
                        action=""
                        className="bg-white rounded-lg shadow-lg px-3 md:px-4 py-5 mt-3"
                    >
                        <div className="mb-3 flex flex-col gap-2">
                            <label htmlFor="name">Name</label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="mt-1 border-gray-500"
                            />
                        </div>
                        <div className="md:flex gap-2">
                            <div className="mb-3 md:w-1/2 flex flex-col gap-2">
                                <label htmlFor="phone">Phone</label>
                                <Input
                                    id="phone"
                                    type="text"
                                    placeholder="Enter your phone"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                            <div className="mb-3 md:w-1/2 flex flex-col gap-2">
                                <label htmlFor="email">Email</label>
                                <Input
                                    id="email"
                                    type="text"
                                    placeholder="Enter your email"
                                    className="mt-1 border-gray-500"
                                />
                            </div>
                        </div>
                        <div className="mb-2 flex flex-col gap-2">
                            <label htmlFor="address">Address</label>
                            <Textarea
                                id="address"
                                type="text"
                                placeholder="Enter your address"
                                className="mt-1 border-gray-500"
                            ></Textarea>
                        </div>
                    </form>
                </div>
                <div className="mt-9">
                    <h1 className="text-lg font-medium">Schedule Delivery</h1>
                    <form
                        action=""
                        className="bg-white rounded-lg shadow-lg px-3 md:px-4 py-5 mt-3"
                    >
                        <div className="mb-3 flex flex-col gap-2">
                            <label htmlFor="date">Date</label>
                            <DatePicker />
                        </div>
                        <div className="mb-3 flex flex-col gap-2">
                            <label htmlFor="time">Time</label>
                            <TimePicker minTime={540} maxTime={1320} />
                        </div>
                        <div className="mb-3 flex flex-col gap-2">
                            <label htmlFor="note">Note</label>
                            <Textarea
                                id="note"
                                type="text"
                                placeholder="Write something..."
                                className="mt-1 border-gray-500"
                            ></Textarea>
                        </div>
                    </form>
                </div>
                {/* <div className="mt-9">
          <h1 className="text-lg font-medium">Payment Method</h1>
          <div className="bg-white rounded-lg shadow-lg px-4 py-5 mt-3">
            <div className="flex items-center gap-2">
              <input type="radio" />
              <span className="text-sm text-gray-800">Cash on Delivery</span>
            </div>
          </div>
        </div> */}
            </motion.div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="lg:w-1/2 mt-7 lg:mt-0 bg-white rounded-lg shadow-lg px-4 py-5"
            >
                <div className="h-full flex flex-col justify-between">
                    <div>
                        <h1 className="text-lg font-medium">Order Summary</h1>
                        <div className="px-0 md:px-4 py-5 mt-3">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center mb-6"
                                >
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={
                                                `/storage/${item.image}` ||
                                                "/default-food.jpg"
                                            }
                                            alt={item.title}
                                            className="w-16 h-auto rounded-full"
                                        />
                                        <div>
                                            <h1 className="font-medium">
                                                {item.title}
                                            </h1>
                                            {item.promotion ? (
                                                <div>
                                                    <span className="text-red-600 font-semibold">
                                                        $
                                                        {item.finalPrice.toFixed(
                                                            2
                                                        )}
                                                    </span>
                                                    <span className="line-through text-sm text-gray-500 ml-2">
                                                        $
                                                        {item.originalPrice.toFixed(
                                                            2
                                                        )}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span>
                                                    $
                                                    {item.originalPrice.toFixed(
                                                        2
                                                    )}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-1 p-1 border border-gray-300 rounded-sm shadow-sm">
                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.id, -1)
                                                }
                                                className="px-3 py-1"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="text-base font-medium">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() =>
                                                    updateQuantity(item.id, 1)
                                                }
                                                className="px-3 py-1"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Subtotal & Confirm */}
                    <div>
                        <hr className="border-t-gray-400" />
                        <div className="flex justify-between my-5">
                            <h1 className="text-sm">Subtotal - </h1>
                            <p className="text-gray-800 font-medium">
                                $
                                {cartItems
                                    .reduce(
                                        (total, item) =>
                                            total +
                                            (item.finalPrice ||
                                                item.originalPrice) *
                                                item.quantity, // Use finalPrice if available, otherwise originalPrice
                                        0
                                    )
                                    .toFixed(2)}
                            </p>
                        </div>
                        <div className="flex justify-between my-2">
                            <h1 className="text-sm">Shipping - </h1>
                            <p className="text-gray-800 font-medium">-</p>
                        </div>
                        <hr className="border-gray-400 my-5" />
                        <div className="flex justify-between my-2">
                            <h1 className="text-sm">Total - </h1>
                            <p className="text-gray-800 font-medium">
                                $
                                {cartItems
                                    .reduce(
                                        (total, item) =>
                                            total +
                                            (item.finalPrice ||
                                                item.originalPrice) *
                                                item.quantity,
                                        0
                                    )
                                    .toFixed(2)}
                            </p>
                        </div>
                        <Button
                            variant="default"
                            className="rounded-lg w-full mt-5 bg-accentRed text-white hover:bg-hoverRed duration-300"
                        >
                            Confirm Order
                        </Button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
