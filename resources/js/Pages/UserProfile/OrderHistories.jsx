import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "../../Components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import dayjs from "dayjs";

export default function OrderHistories() {
    // state to store orders
    let [orders, setOrders] = useState([]);

    console.log("Order:", orders);
    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // rows to show in a page
    const rowsPerPage = 10;

    // fetch data that send from backend
    let getOrders = async () => {
        let res = await axios.get("/api/user/orders");
        let data = res.data;
        setOrders(data.orders);
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getOrders();
    }, []);

    // calculate the last items, first items and set orders to show
    const indexOfLastOrder = currentPage * rowsPerPage;
    const indexOfFirstOrder = indexOfLastOrder - rowsPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    // function for pagination button
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
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
                {currentOrders.length > 0 ? (
                    currentOrders.map((order) => (
                        <Link key={order.id} to={`/user/order/${order.id}`}>
                            <ul className="flex items-center justify-between border-l-2 border-l-accentRed mt-3 py-5 px-3 shadow-md hover:bg-gray-100 duration-300">
                                <li className="ml-1 basis-[10%]">{order.id}</li>
                                <li className="ml-1 basis-[20%]">
                                    {order.order_number}
                                </li>
                                <li className="ml-1 basis-[23%]">
                                    {(
                                        (order.items ?? []).reduce(
                                            (total, item) =>
                                                total +
                                                parseFloat(
                                                    item.finalPrice ||
                                                        item.originalPrice ||
                                                        item.price ||
                                                        0
                                                ) *
                                                    parseInt(
                                                        item.quantity ?? 1
                                                    ),
                                            0
                                        ) * 1.1
                                    ).toFixed(2)}{" "}
                                    $
                                </li>
                                <li className="basis-[23%]">
                                    <span
                                        className={`rounded-lg text-sm p-1
                                ${
                                    order?.status === "confirmed"
                                        ? "text-accentGreen bg-green-100"
                                        : ""
                                }
                                ${
                                    order?.status === "processing"
                                        ? "text-accentYellow bg-yellow-100"
                                        : ""
                                }
                                ${
                                    order?.status === "out for delivery"
                                        ? "text-blue-400 bg-blue-50"
                                        : ""
                                }
                                ${
                                    order?.status === "delivered"
                                        ? "text-gray-500 bg-gray-100"
                                        : ""
                                }
                            `}
                                    >
                                        {order?.status}
                                    </span>
                                </li>
                                <li className="ml-1 basis-[22%]">
                                    <p className="text-sm">
                                        {dayjs(order?.created_at).format(
                                            "MMMM D, YYYY"
                                        )}
                                    </p>
                                    <p className="text-sm">
                                        {dayjs(order?.created_at).format(
                                            "h:mm A"
                                        )}
                                    </p>
                                </li>
                            </ul>
                        </Link>
                    ))
                ) : (
                    <p className="text-center font-medium text-accentRed">
                        Loading...
                    </p> //add lazy loading after complete
                )}
            </div>

            <div className="block md:hidden">
                {currentOrders.length > 0 ? (
                    currentOrders.map((order) => (
                        <Link to="/user/order">
                            <div className="px-3 py-4 shadow-xl mt-4 rounded-md border-l-2 border-l-accentRed">
                                <div className="flex justify-between">
                                    <span className="text-lg flex items-center gap-2">
                                        Order
                                        <span className="text-xl font-medium">
                                            {order.order_number}
                                        </span>
                                    </span>
                                    <span className="text-accentGreen">
                                        Pending
                                    </span>
                                </div>
                                <p className="text-base text-gray-700 mt-1">
                                    {dayjs(order?.created_at).format(
                                        "MMMM D, YYYY [-] h:mm A"
                                    )}
                                </p>
                                <div className="flex justify-end">
                                    <p className="text-gray-950 font-medium mt-2 mx-3">
                                        {(order.items ?? [])
                                            .reduce(
                                                (total, item) =>
                                                    total +
                                                    parseFloat(
                                                        item.finalPrice ||
                                                            item.originalPrice ||
                                                            item.price ||
                                                            0
                                                    ) *
                                                        parseInt(
                                                            item.quantity ?? 1
                                                        ),
                                                0
                                            )
                                            .toFixed(2)}
                                        $
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-center font-medium text-accentRed">
                        Loading...
                    </p> //add lazy loading after complete
                )}
            </div>
        </motion.div>
    );
}
