import Mohinga from "../../../images/Mohinga.png";
import Logo from "../../../images/Logo.png";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import dayjs from "dayjs";

export default function OrderDetails() {
    // take id for edit feature
    let { id } = useParams();

    const [orderDetails, setOrderDetails] = useState(null);

    console.log("Scheduled time:", orderDetails?.time);
    // fetch data to show prev data in input fields
    let getDetails = async (id) => {
        let res = await fetch("http://localhost:8000/api/order/" + id);
        let data = await res.json();
        setOrderDetails(data.order);
    };

    // call data fetching function depend on id changes
    useEffect(() => {
        getDetails(id);
    }, [id]);

    const subtotal = orderDetails?.items?.reduce((acc, item) => {
        return acc + item.quantity * parseFloat(item.price);
    }, 0);
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-[73%] flex flex-col gap-6 py-8 px-4 lg:ml-[28%]"
        >
            <div className="md:flex gap-3">
                <div className="md:w-3/5">
                    <h1 className="text-2xl font-medium">
                        Order{" "}
                        <span className="text-accentRed">
                            {orderDetails?.order_number}
                        </span>
                    </h1>
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
                        {orderDetails?.items?.map((item, index) => (
                            <ul
                                key={item.id}
                                className="flex items-center justify-between mt-2 py-3 px-3 shadow-md"
                            >
                                <li className="basis-[53%] md:basis-[45%] ml-1 text-sm flex gap-1 items-center">
                                    <img
                                        src={`/storage/${item.menu.image}`}
                                        alt="mohinga"
                                        className="w-12 h-12 object-cover rounded-full"
                                    />
                                    <h1 className="font-medium text-sm">
                                        {item.title}
                                    </h1>
                                </li>
                                <li className="basis-[15%] md:basis-[12%] ml-1 text-sm">
                                    x {item.quantity}
                                </li>
                                <li className="md:basis-[18%] hidden md:block ml-1 text-sm">
                                    {item.price} $
                                </li>
                                <li className="basis-[32%] md:basis-[25%] ml-1 text-sm">
                                    {(item.price * item.quantity).toFixed(2)} $
                                </li>
                            </ul>
                        ))}
                    </div>
                    <div className="mt-3">
                        <div className="flex items-center justify-between mt-2 py-3 px-3">
                            <h1 className="text-base">Total - </h1>
                            <h1 className="font-medium mr-4">
                                {subtotal?.toFixed(2)} $
                            </h1>
                        </div>
                    </div>
                    <div className="py-5 px-3 mt-3 shadow-md rounded-md">
                        <div className="flex justify-between mb-3">
                            <h1 className="text-sm font-medium">
                                Customer Name -
                            </h1>
                            <p className="text-sm">{orderDetails?.name}</p>
                        </div>
                        <div className="flex justify-between mb-3">
                            <h1 className="text-sm font-medium">
                                Phone Number -
                            </h1>
                            <p className="text-sm">{orderDetails?.phone}</p>
                        </div>
                        <div className="flex justify-between mb-3">
                            <h1 className="text-sm font-medium">Email -</h1>
                            <p className="text-sm">{orderDetails?.email}</p>
                        </div>
                    </div>
                    <div className="my-5 px-3 py-4 border-t-2 border-t-accentRed bg-white shadow-lg rounded-md">
                        <h1 className="text-lg font-medium">
                            Scheduled Delivery
                        </h1>
                        <div className="py-5">
                            <div className="flex justify-between mb-3">
                                <h1 className="text-sm font-medium">
                                    Scheduled Date -
                                </h1>
                                <p className="text-sm">
                                    {dayjs(orderDetails?.date).format(
                                        "MMMM D, YYYY"
                                    )}
                                </p>
                            </div>
                            <div className="flex justify-between mb-3">
                                <h1 className="text-sm font-medium">
                                    Scheduled Time -
                                </h1>
                                <p className="text-sm"> {orderDetails?.time}</p>
                            </div>
                            <div className="mb-3">
                                <h1 className="text-sm font-medium">Note -</h1>
                                <p className="mt-1 text-sm">
                                    {orderDetails?.note}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-2/5">
                    <img
                        src={Logo}
                        alt="Mote Sine"
                        className="w-24 h-auto my-3"
                    />
                    <p className="text-sm text-gray-700">
                        If you want to change something for this order, contact
                        us via phone.
                    </p>
                    <div className="mt-3 py-3 px-3 shadow-md rounded-md">
                        <div className="flex justify-between items-center mb-5">
                            <h1 className="text-sm font-medium">
                                Order Summary
                            </h1>
                            <p className="text-accentGreen bg-[#d7ffc7] rounded-lg p-1 text-sm">
                                Pending
                            </p>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <h1 className="text-sm font-medium">Date -</h1>
                            <p className="text-sm">
                                {" "}
                                {dayjs(orderDetails?.created_at).format(
                                    "MMMM D, YYYY"
                                )}
                            </p>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <h1 className="text-sm font-medium">Time -</h1>
                            <p className="text-sm">
                                {dayjs(orderDetails?.created_at).format(
                                    "h:mm A"
                                )}
                            </p>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <h1 className="text-sm font-medium">Subtotal - </h1>
                            <p className="text-sm">{subtotal?.toFixed(2)} $</p>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <h1 className="text-sm font-medium">
                                Delivery fee -
                            </h1>
                            <p className="text-sm">0 $</p>
                        </div>
                    </div>
                    <div className="mt-3 py-3 px-3 shadow-md rounded-md border-t-2 border-t-accentRed">
                        <h1 className="text-base font-medium">
                            Delivery Address
                        </h1>
                        <p className="text-gray-900 mt-2 text-sm">
                            {orderDetails?.address}
                        </p>
                    </div>
                    {/* <div className="mt-3 py-3 px-3 shadow-md rounded-md">
            <h1 className="text-sm font-medium">Scheduled Delivery</h1>
            <div className="flex justify-between items-center mt-5 mb-3">
              <h1 className="text-sm font-medium">Scheduled Date -</h1>
              <p className="text-sm">23.3.2025</p>
            </div>
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-sm font-medium">Scheduled Time -</h1>
              <p className="text-sm">12:45 PM</p>
            </div>
            <div className="mb-3">
              <h1 className="text-sm font-medium">Note - </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                exercitationem delectus sapiente asperiores, dolores libero
                dolore! Nesciunt iure quia eveniet? Quis at atque,
                necessitatibus molestias sed reprehenderit!
              </p>
            </div>
          </div> */}
                </div>
            </div>
        </motion.div>
    );
}
