import {
    MoveUp,
    Utensils,
    MoveDown,
    HandPlatter,
    Circle,
    Ellipsis,
} from "lucide-react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";
import Profile from "../../../images/profile.jpg";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

const data1 = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 200 },
    { name: "Apr", value: 278 },
    { name: "May", value: 189 },
    { name: "Jun", value: 239 },
    { name: "Jul", value: 349 },
];

const data = [
    { name: "Food Delivery", value: 400 },
    { name: "Products Delivery", value: 300 },
    { name: "Dine-in", value: 300 },
];

const COLORS = ["#DC143C", "#FF8C00", "#008000"];

export default function Dashboard() {
    const total = data.reduce((acc, item) => acc + item.value, 0);
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8"
        >
            <div className="grid md:grid-cols-3 gap-3">
                {/* <div className="mb-6 p-3 border border-gray-300 bg-white shadow-lg rounded-md">
            <div className="flex justify-between border-l-2 border-l-accentRed px-2 py-1">
              <div>
                <h1 className="text-gray-600">Customers</h1>
                <p className="text-black">1,226</p>
              </div>
              <Users className="text-accentRed" />
            </div>
            <span className="text-sm flex gap-1 pt-3">
              <p className="flex text-accentGreen">
                <MoveUp size={16} />
                +3.4%
              </p>
              <p className="text-gray-600">Since Last Week</p>
            </span>
          </div> */}
                <div className="mb-6 p-3 border border-gray-300 bg-white shadow-lg rounded-md">
                    <div className="flex justify-between border-l-2 border-l-accentRed px-2 py-1">
                        <div>
                            <h1 className="text-gray-600">Total Orders</h1>
                            <p className="text-black">238</p>
                        </div>
                        <Utensils className="text-accentRed" />
                    </div>
                    <span className="text-sm flex gap-1 pt-3">
                        <p className="flex text-accentGreen">
                            <MoveUp size={16} />
                            +1.0%
                        </p>
                        <p className="text-gray-600">Since Last Week</p>
                    </span>
                </div>
                <div className="mb-6 p-3 border border-gray-300 bg-white shadow-lg rounded-md">
                    <div className="flex justify-between border-l-2 border-l-accentRed px-2 py-1">
                        <div>
                            <h1 className="text-gray-600">Total Reservation</h1>
                            <p className="text-black">78</p>
                        </div>
                        <HandPlatter className="text-accentRed" />
                    </div>
                    <span className="text-sm flex gap-1 pt-3">
                        <p className="flex text-accentRed">
                            <MoveDown size={16} />
                            -2.8%
                        </p>
                        <p className="text-gray-600">Since Last Week</p>
                    </span>
                </div>
                <div className="mb-6 p-3 border border-gray-300 bg-white shadow-lg rounded-md">
                    <div className="flex justify-between border-l-2 border-l-accentRed px-2 py-1">
                        <div>
                            <h1 className="text-gray-600">Total Revenue</h1>
                            <p className="text-black">$ 73,28</p>
                        </div>
                        <HandPlatter className="text-accentRed" />
                    </div>
                    <span className="text-sm flex gap-1 pt-3">
                        <p className="flex text-accentGreen">
                            <MoveUp size={16} />
                            +8.2%
                        </p>
                        <p className="text-gray-600">Since Last Week</p>
                    </span>
                </div>
            </div>
            <div className="lg:flex gap-3">
                <div className="lg:w-[40%] mb-6 p-3 border border-gray-300 bg-white shadow-lg rounded-md">
                    <h1 className="font-medium">Revenue Statistics</h1>
                    <div className="md:flex items-center gap-2">
                        <div className="md:w-3/5 flex flex-col items-center">
                            <div className="relative">
                                <PieChart width={250} height={250}>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60} // Creates the donut effect
                                        outerRadius={90}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={
                                                    COLORS[
                                                        index % COLORS.length
                                                    ]
                                                }
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                                {/* Center Text */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <p className="text-xl font-bold">{total}</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/5">
                            <div className="space-y-1 my-3">
                                <h1 className="text-gray-600 text-sm">
                                    Food Delivery
                                </h1>
                                <span className="text-accentRed flex gap-1">
                                    <Circle size={20} />
                                    <p className="font-medium">236</p>
                                </span>
                            </div>
                            <div className="space-y-1 my-3">
                                <h1 className="text-gray-600 text-sm">
                                    Products Delivery
                                </h1>
                                <span className="text-accentYellow flex gap-1">
                                    <Circle size={20} />
                                    <p className="font-medium">187</p>
                                </span>
                            </div>
                            <div className="space-y-1 my-3">
                                <h1 className="text-gray-600 text-sm">
                                    Reservations
                                </h1>
                                <span className="text-accentGreen flex gap-1">
                                    <Circle size={20} />
                                    <p className="font-medium">189</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[60%] mb-6 p-3 border border-gray-300 bg-white shadow-lg rounded-md">
                    <div className="w-full">
                        <h1 className="font-medium mb-3">Sales Analytics</h1>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart
                                data={data1}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#DC143C"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="my-8">
                <h1 className="font-medium text-lg">Recent Invoices</h1>
                <div className="mt-3 overflow-x-auto">
                    <div className="min-w-[920px] lg:min-w-[880px]">
                        <ul className="flex items-center px-3 py-4 bg-accentRed text-white rounded-md shadow-md mb-4">
                            <li className="basis-[15%]">Order</li>
                            <li className="basis-[25%]">Customer Name</li>
                            <li className="basis-[20%]">Total</li>
                            <li className="basis-[15%]">Status</li>
                            <li className="basis-[20%]">Ordered at</li>
                            <li className="basis-[5%]"></li>
                        </ul>
                        <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                            <li className="basis-[15%]">#3784</li>
                            <li className="basis-[25%] flex gap-1 items-center">
                                <img
                                    src={Profile}
                                    alt="Profile"
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-xs md:text-sm">
                                    Khant Yadanar Moe
                                </p>
                            </li>
                            <li className="basis-[20%]">74.32 $</li>
                            <li className="basis-[15%]">
                                <span className="text-accentYellow bg-yellow-100 px-2 py-1 rounded-sm">
                                    Pending
                                </span>
                            </li>
                            <li className="basis-[20%]">
                                <p className="text-sm">23. 5. 2024</p>
                                <p className="text-sm">12:23 PM</p>
                            </li>
                            <li className="basis-[5%]">
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <button className="p-1 rounded-md hover:bg-gray-100 outline-none">
                                            <Ellipsis size={20} />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="end"
                                        className="w-40"
                                    >
                                        <DropdownMenuItem className="text-accentGreen">
                                            View Details
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-accentRed">
                                            Cancel
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                        </ul>
                        <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                            <li className="basis-[15%]">#3784</li>
                            <li className="basis-[25%] flex gap-1 items-center">
                                <img
                                    src={Profile}
                                    alt="Profile"
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-xs md:text-sm">
                                    Khant Yadanar Moe
                                </p>
                            </li>
                            <li className="basis-[20%]">74.32 $</li>
                            <li className="basis-[15%]">
                                <span className="text-accentYellow bg-yellow-100 px-2 py-1 rounded-sm">
                                    Pending
                                </span>
                            </li>
                            <li className="basis-[20%]">
                                <p className="text-sm">23. 5. 2024</p>
                                <p className="text-sm">12:23 PM</p>
                            </li>
                            <li className="basis-[5%]">
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <button className="p-1 rounded-md hover:bg-gray-100 outline-none">
                                            <Ellipsis size={20} />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="end"
                                        className="w-40"
                                    >
                                        <DropdownMenuItem className="text-accentGreen">
                                            View Details
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-accentRed">
                                            Cancel
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                        </ul>
                        <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                            <li className="basis-[15%]">#3784</li>
                            <li className="basis-[25%] flex gap-1 items-center">
                                <img
                                    src={Profile}
                                    alt="Profile"
                                    className="w-10 h-10 object-cover rounded-full"
                                />
                                <p className="text-xs md:text-sm">
                                    Khant Yadanar Moe
                                </p>
                            </li>
                            <li className="basis-[20%]">74.32 $</li>
                            <li className="basis-[15%]">
                                <span className="text-accentYellow bg-yellow-100 px-2 py-1 rounded-sm">
                                    Pending
                                </span>
                            </li>
                            <li className="basis-[20%]">
                                <p className="text-sm">23. 5. 2024</p>
                                <p className="text-sm">12:23 PM</p>
                            </li>
                            <li className="basis-[5%]">
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <button className="p-1 rounded-md hover:bg-gray-100 outline-none">
                                            <Ellipsis size={20} />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="end"
                                        className="w-40"
                                    >
                                        <DropdownMenuItem className="text-accentGreen">
                                            View Details
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-accentRed">
                                            Cancel
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="my-8">
                <h1 className="font-medium text-lg">Today's reservations</h1>
                <div className="mt-3 overflow-x-auto">
                    <div className="min-w-[920px] lg:min-w-[880px]">
                        <ul className="flex items-center px-3 py-4 bg-accentRed text-white rounded-md shadow-md mb-4">
                            <li className="basis-[4%]">ID</li>
                            <li className="basis-[14%]">Reservation</li>
                            <li className="basis-[22%]">Name</li>
                            <li className="basis-[12%]">Guests</li>
                            <li className="basis-[18%]">Date & Time</li>
                            <li className="basis-[12%]">Table</li>
                            <li className="basis-[13%]">Status</li>
                            <li className="basis-[5%]"></li>
                        </ul>
                        <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                            <li className="basis-[4%]">1</li>
                            <li className="basis-[14%]">
                                <h1 className="text-accentRed font-medium">
                                    #H3478
                                </h1>
                            </li>
                            <li className="basis-[22%]">Khant Yadanar Moe</li>
                            <li className="basis-[12%]">15</li>
                            <li className="basis-[18%]">
                                <p className="text-sm">28..4.2025</p>
                                <p className="text-sm">12:30 PM</p>
                            </li>
                            <li className="basis-[12%]">
                                <h1 className="text-accentRed font-medium">
                                    45J
                                </h1>
                            </li>
                            <li className="basis-[13%]">
                                <span className="px-1 py-1 rounded-md bg-yellow-100 text-accentYellow text-sm">
                                    Pending
                                </span>
                            </li>
                            <li className="basis-[5%]">
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <button className="p-1 rounded-md hover:bg-gray-100 outline-none">
                                            <Ellipsis size={20} />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="end"
                                        className="w-40"
                                    >
                                        <DropdownMenuItem
                                            className="text-accentGreen"
                                            onClick={() => setIsOpen(true)}
                                        >
                                            View Details
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-accentRed">
                                            Canceled
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                        </ul>
                        <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                            <li className="basis-[4%]">1</li>
                            <li className="basis-[14%]">
                                <h1 className="text-accentRed font-medium">
                                    #H3478
                                </h1>
                            </li>
                            <li className="basis-[22%]">Khant Yadanar Moe</li>
                            <li className="basis-[12%]">15</li>
                            <li className="basis-[18%]">
                                <p className="text-sm">28..4.2025</p>
                                <p className="text-sm">12:30 PM</p>
                            </li>
                            <li className="basis-[12%]">
                                <h1 className="text-accentRed font-medium">
                                    45J
                                </h1>
                            </li>
                            <li className="basis-[13%]">
                                <span className="px-1 py-1 rounded-md bg-yellow-100 text-accentYellow text-sm">
                                    Pending
                                </span>
                            </li>
                            <li className="basis-[5%]">
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <button className="p-1 rounded-md hover:bg-gray-100 outline-none">
                                            <Ellipsis size={20} />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="end"
                                        className="w-40"
                                    >
                                        <DropdownMenuItem
                                            className="text-accentGreen"
                                            onClick={() => setIsOpen(true)}
                                        >
                                            View Details
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-accentRed">
                                            Canceled
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                        </ul>
                        <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                            <li className="basis-[4%]">1</li>
                            <li className="basis-[14%]">
                                <h1 className="text-accentRed font-medium">
                                    #H3478
                                </h1>
                            </li>
                            <li className="basis-[22%]">Khant Yadanar Moe</li>
                            <li className="basis-[12%]">15</li>
                            <li className="basis-[18%]">
                                <p className="text-sm">28..4.2025</p>
                                <p className="text-sm">12:30 PM</p>
                            </li>
                            <li className="basis-[12%]">
                                <h1 className="text-accentRed font-medium">
                                    45J
                                </h1>
                            </li>
                            <li className="basis-[13%]">
                                <span className="px-1 py-1 rounded-md bg-yellow-100 text-accentYellow text-sm">
                                    Pending
                                </span>
                            </li>
                            <li className="basis-[5%]">
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <button className="p-1 rounded-md hover:bg-gray-100 outline-none">
                                            <Ellipsis size={20} />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="end"
                                        className="w-40"
                                    >
                                        <DropdownMenuItem
                                            className="text-accentGreen"
                                            onClick={() => setIsOpen(true)}
                                        >
                                            View Details
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-accentRed">
                                            Canceled
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
