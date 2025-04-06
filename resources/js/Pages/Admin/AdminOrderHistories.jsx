import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../../Components/ui/pagination";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../Components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Ellipsis } from "lucide-react";
import Profile from "../../../images/profile.jpg";
import { motion } from "framer-motion";

export default function AdminOrderHistories() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8"
        >
            <h1 className="text-lg font-medium">2,389 Orders Found</h1>
            <ul className="mt-6 flex gap-3 items-center space-x-4">
                <li>
                    <Link to="" className="relative hover:text-gray-950 group">
                        All
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
                <li>
                    <Link to="" className="relative hover:text-gray-950 group">
                        New
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
                <li>
                    <Link to="" className="relative hover:text-gray-950 group">
                        Completed
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
                <li>
                    <Link to="" className="relative hover:text-gray-950 group">
                        Cancelled
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
            </ul>
            <hr className="border-t-gray-300 mt-3" />
            <div className="mt-8 overflow-x-auto">
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
                        <li className="basis-[20%]">89.56 $</li>
                        <li className="basis-[15%]">
                            <span className="text-accentYellow bg-yellow-100 px-1 py-1 text-sm rounded-sm">
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
                                    <Link to="/admin/order">
                                        <DropdownMenuItem className="text-accentGreen">
                                            View Details
                                        </DropdownMenuItem>
                                    </Link>
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
                        <li className="basis-[20%]">89.56 $</li>
                        <li className="basis-[15%]">
                            <span className="text-accentYellow bg-yellow-100 px-1 py-1 text-sm rounded-sm">
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
                                    <Link to="/admin/order">
                                        <DropdownMenuItem className="text-accentGreen">
                                            View Details
                                        </DropdownMenuItem>
                                    </Link>
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
                        <li className="basis-[20%]">89.56 $</li>
                        <li className="basis-[15%]">
                            <span className="text-accentYellow bg-yellow-100 px-1 py-1 text-sm rounded-sm">
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
                                    <Link to="/admin/order">
                                        <DropdownMenuItem className="text-accentGreen">
                                            View Details
                                        </DropdownMenuItem>
                                    </Link>
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
                        <li className="basis-[20%]">89.56 $</li>
                        <li className="basis-[15%]">
                            <span className="text-accentYellow bg-yellow-100 px-1 py-1 text-sm rounded-sm">
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
                                    <Link to="/admin/order">
                                        <DropdownMenuItem className="text-accentGreen">
                                            View Details
                                        </DropdownMenuItem>
                                    </Link>
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
                        <li className="basis-[20%]">89.56 $</li>
                        <li className="basis-[15%]">
                            <span className="text-accentYellow bg-yellow-100 px-1 py-1 text-sm rounded-sm">
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
                                    <Link to="/admin/order">
                                        <DropdownMenuItem className="text-accentGreen">
                                            View Details
                                        </DropdownMenuItem>
                                    </Link>
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
                        <li className="basis-[20%]">89.56 $</li>
                        <li className="basis-[15%]">
                            <span className="text-accentYellow bg-yellow-100 px-1 py-1 text-sm rounded-sm">
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
                                    <Link to="/admin/order">
                                        <DropdownMenuItem className="text-accentGreen">
                                            View Details
                                        </DropdownMenuItem>
                                    </Link>
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
                        <li className="basis-[20%]">89.56 $</li>
                        <li className="basis-[15%]">
                            <span className="text-accentYellow bg-yellow-100 px-1 py-1 text-sm rounded-sm">
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
                                    <Link to="/admin/order">
                                        <DropdownMenuItem className="text-accentGreen">
                                            View Details
                                        </DropdownMenuItem>
                                    </Link>
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
                        <li className="basis-[20%]">89.56 $</li>
                        <li className="basis-[15%]">
                            <span className="text-accentYellow bg-yellow-100 px-1 py-1 text-sm rounded-sm">
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
                                    <Link to="/admin/order">
                                        <DropdownMenuItem className="text-accentGreen">
                                            View Details
                                        </DropdownMenuItem>
                                    </Link>
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
                        <li className="basis-[20%]">89.56 $</li>
                        <li className="basis-[15%]">
                            <span className="text-accentYellow bg-yellow-100 px-1 py-1 text-sm rounded-sm">
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
                                    <Link to="/admin/order">
                                        <DropdownMenuItem className="text-accentGreen">
                                            View Details
                                        </DropdownMenuItem>
                                    </Link>
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
                        <li className="basis-[20%]">89.56 $</li>
                        <li className="basis-[15%]">
                            <span className="text-accentYellow bg-yellow-100 px-1 py-1 text-sm rounded-sm">
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
                                    <Link to="/admin/order">
                                        <DropdownMenuItem className="text-accentGreen">
                                            View Details
                                        </DropdownMenuItem>
                                    </Link>
                                    <DropdownMenuItem className="text-accentRed">
                                        Cancel
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 flex">
                <div className="ml-auto">
                    <Pagination className="text-accentRed">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive>
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem></PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </motion.div>
    );
}
