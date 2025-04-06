import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../Components/ui/dropdown-menu";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../../Components/ui/pagination";
import { ChevronDown, Ellipsis } from "lucide-react";
import Profile from "../../../images/Profile.jpg";
import { motion } from "framer-motion";

export default function UsersList() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8"
        >
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-medium">26,478 Users Found</h1>
                <div className="hidden md:block">
                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger asChild>
                            <button className="flex gap-1 items-center px-2 py-1 border border-gray-800 rounded-md">
                                Filter By Newest <ChevronDown size={16} />
                            </button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                            align="end"
                            className="w-40"
                            avoidCollisions={false}
                        >
                            <DropdownMenuItem className="cursor-pointer">
                                Filter By Newest
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                Filter By Oldest
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                Filter By A-Z
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                Filter By Z-A
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="mt-8 overflow-x-auto">
                <div className="min-w-[920px] lg:min-w-[880px]">
                    <ul className="flex items-center px-3 py-4 bg-accentRed text-white rounded-md shadow-md mb-4">
                        <li className="basis-[3%]">ID</li>
                        <li className="basis-[19%]">Name</li>
                        <li className="basis-[26%]">Email</li>
                        <li className="basis-[12%]">Phone</li>
                        <li className="basis-[25%]">Address</li>
                        <li className="basis-[11%] pl-3">Status</li>
                        <li className="basis-[4%]"></li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[3%]">1</li>
                        <li className="basis-[19%] flex gap-1 items-center">
                            <img
                                src={Profile}
                                alt="Profile"
                                className="w-8 h-8 object-cover rounded-full"
                            />
                            <p className="text-xs md:text-sm">
                                Khant Yadanar Moe
                            </p>
                        </li>
                        <li className="basis-[26%] text-xs md:text-sm">
                            khantyadanarmoe83@gmail.com
                        </li>
                        <li className="basis-[12%] text-xs md:text-sm">
                            01 237 347 23
                        </li>
                        <li className="basis-[25%] text-xs">
                            843 West 57th Street, Apt 12C, New York, NY 10019,
                            USA
                        </li>
                        <li className="basis-[11%]">
                            <span className="ml-3 text-xs md:text-sm rounded-sm bg-yellow-100 text-accentYellow px-1 py-1">
                                Banned
                            </span>
                        </li>
                        <li className="basis-[4%]">
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
                                    <DropdownMenuItem className="text-accentYellow">
                                        Ban
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[3%]">1</li>
                        <li className="basis-[19%] flex gap-1 items-center">
                            <img
                                src={Profile}
                                alt="Profile"
                                className="w-8 h-8 object-cover rounded-full"
                            />
                            <p className="text-xs md:text-sm">
                                Khant Yadanar Moe
                            </p>
                        </li>
                        <li className="basis-[26%] text-xs md:text-sm">
                            khantyadanarmoe83@gmail.com
                        </li>
                        <li className="basis-[12%] text-xs md:text-sm">
                            01 237 347 23
                        </li>
                        <li className="basis-[25%] text-xs">
                            843 West 57th Street, Apt 12C, New York, NY 10019,
                            USA
                        </li>
                        <li className="basis-[11%]">
                            <span className="ml-3 text-xs md:text-sm rounded-sm bg-yellow-100 text-accentYellow px-1 py-1">
                                Banned
                            </span>
                        </li>
                        <li className="basis-[4%]">
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
                                    <DropdownMenuItem className="text-accentYellow">
                                        Ban
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[3%]">1</li>
                        <li className="basis-[19%] flex gap-1 items-center">
                            <img
                                src={Profile}
                                alt="Profile"
                                className="w-8 h-8 object-cover rounded-full"
                            />
                            <p className="text-xs md:text-sm">
                                Khant Yadanar Moe
                            </p>
                        </li>
                        <li className="basis-[26%] text-xs md:text-sm">
                            khantyadanarmoe83@gmail.com
                        </li>
                        <li className="basis-[12%] text-xs md:text-sm">
                            01 237 347 23
                        </li>
                        <li className="basis-[25%] text-xs">
                            843 West 57th Street, Apt 12C, New York, NY 10019,
                            USA
                        </li>
                        <li className="basis-[11%]">
                            <span className="ml-3 text-xs md:text-sm rounded-sm bg-yellow-100 text-accentYellow px-1 py-1">
                                Banned
                            </span>
                        </li>
                        <li className="basis-[4%]">
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
                                    <DropdownMenuItem className="text-accentYellow">
                                        Ban
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[3%]">1</li>
                        <li className="basis-[19%] flex gap-1 items-center">
                            <img
                                src={Profile}
                                alt="Profile"
                                className="w-8 h-8 object-cover rounded-full"
                            />
                            <p className="text-xs md:text-sm">
                                Khant Yadanar Moe
                            </p>
                        </li>
                        <li className="basis-[26%] text-xs md:text-sm">
                            khantyadanarmoe83@gmail.com
                        </li>
                        <li className="basis-[12%] text-xs md:text-sm">
                            01 237 347 23
                        </li>
                        <li className="basis-[25%] text-xs">
                            843 West 57th Street, Apt 12C, New York, NY 10019,
                            USA
                        </li>
                        <li className="basis-[11%]">
                            <span className="ml-3 text-xs md:text-sm rounded-sm bg-yellow-100 text-accentYellow px-1 py-1">
                                Banned
                            </span>
                        </li>
                        <li className="basis-[4%]">
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
                                    <DropdownMenuItem className="text-accentYellow">
                                        Ban
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[3%]">1</li>
                        <li className="basis-[19%] flex gap-1 items-center">
                            <img
                                src={Profile}
                                alt="Profile"
                                className="w-8 h-8 object-cover rounded-full"
                            />
                            <p className="text-xs md:text-sm">
                                Khant Yadanar Moe
                            </p>
                        </li>
                        <li className="basis-[26%] text-xs md:text-sm">
                            khantyadanarmoe83@gmail.com
                        </li>
                        <li className="basis-[12%] text-xs md:text-sm">
                            01 237 347 23
                        </li>
                        <li className="basis-[25%] text-xs">
                            843 West 57th Street, Apt 12C, New York, NY 10019,
                            USA
                        </li>
                        <li className="basis-[11%]">
                            <span className="ml-3 text-xs md:text-sm rounded-sm bg-yellow-100 text-accentYellow px-1 py-1">
                                Banned
                            </span>
                        </li>
                        <li className="basis-[4%]">
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
                                    <DropdownMenuItem className="text-accentYellow">
                                        Ban
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[3%]">1</li>
                        <li className="basis-[19%] flex gap-1 items-center">
                            <img
                                src={Profile}
                                alt="Profile"
                                className="w-8 h-8 object-cover rounded-full"
                            />
                            <p className="text-xs md:text-sm">
                                Khant Yadanar Moe
                            </p>
                        </li>
                        <li className="basis-[26%] text-xs md:text-sm">
                            khantyadanarmoe83@gmail.com
                        </li>
                        <li className="basis-[12%] text-xs md:text-sm">
                            01 237 347 23
                        </li>
                        <li className="basis-[25%] text-xs">
                            843 West 57th Street, Apt 12C, New York, NY 10019,
                            USA
                        </li>
                        <li className="basis-[11%]">
                            <span className="ml-3 text-xs md:text-sm rounded-sm bg-yellow-100 text-accentYellow px-1 py-1">
                                Banned
                            </span>
                        </li>
                        <li className="basis-[4%]">
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
                                    <DropdownMenuItem className="text-accentYellow">
                                        Ban
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[3%]">1</li>
                        <li className="basis-[19%] flex gap-1 items-center">
                            <img
                                src={Profile}
                                alt="Profile"
                                className="w-8 h-8 object-cover rounded-full"
                            />
                            <p className="text-xs md:text-sm">
                                Khant Yadanar Moe
                            </p>
                        </li>
                        <li className="basis-[26%] text-xs md:text-sm">
                            khantyadanarmoe83@gmail.com
                        </li>
                        <li className="basis-[12%] text-xs md:text-sm">
                            01 237 347 23
                        </li>
                        <li className="basis-[25%] text-xs">
                            843 West 57th Street, Apt 12C, New York, NY 10019,
                            USA
                        </li>
                        <li className="basis-[11%]">
                            <span className="ml-3 text-xs md:text-sm rounded-sm bg-yellow-100 text-accentYellow px-1 py-1">
                                Banned
                            </span>
                        </li>
                        <li className="basis-[4%]">
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
                                    <DropdownMenuItem className="text-accentYellow">
                                        Ban
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[3%]">1</li>
                        <li className="basis-[19%] flex gap-1 items-center">
                            <img
                                src={Profile}
                                alt="Profile"
                                className="w-8 h-8 object-cover rounded-full"
                            />
                            <p className="text-xs md:text-sm">
                                Khant Yadanar Moe
                            </p>
                        </li>
                        <li className="basis-[26%] text-xs md:text-sm">
                            khantyadanarmoe83@gmail.com
                        </li>
                        <li className="basis-[12%] text-xs md:text-sm">
                            01 237 347 23
                        </li>
                        <li className="basis-[25%] text-xs">
                            843 West 57th Street, Apt 12C, New York, NY 10019,
                            USA
                        </li>
                        <li className="basis-[11%]">
                            <span className="ml-3 text-xs md:text-sm rounded-sm bg-yellow-100 text-accentYellow px-1 py-1">
                                Banned
                            </span>
                        </li>
                        <li className="basis-[4%]">
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
                                    <DropdownMenuItem className="text-accentYellow">
                                        Ban
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[3%]">1</li>
                        <li className="basis-[19%] flex gap-1 items-center">
                            <img
                                src={Profile}
                                alt="Profile"
                                className="w-8 h-8 object-cover rounded-full"
                            />
                            <p className="text-xs md:text-sm">
                                Khant Yadanar Moe
                            </p>
                        </li>
                        <li className="basis-[26%] text-xs md:text-sm">
                            khantyadanarmoe83@gmail.com
                        </li>
                        <li className="basis-[12%] text-xs md:text-sm">
                            01 237 347 23
                        </li>
                        <li className="basis-[25%] text-xs">
                            843 West 57th Street, Apt 12C, New York, NY 10019,
                            USA
                        </li>
                        <li className="basis-[11%]">
                            <span className="ml-3 text-xs md:text-sm rounded-sm bg-yellow-100 text-accentYellow px-1 py-1">
                                Banned
                            </span>
                        </li>
                        <li className="basis-[4%]">
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
                                    <DropdownMenuItem className="text-accentYellow">
                                        Ban
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[3%]">1</li>
                        <li className="basis-[19%] flex gap-1 items-center">
                            <img
                                src={Profile}
                                alt="Profile"
                                className="w-8 h-8 object-cover rounded-full"
                            />
                            <p className="text-xs md:text-sm">
                                Khant Yadanar Moe
                            </p>
                        </li>
                        <li className="basis-[26%] text-xs md:text-sm">
                            khantyadanarmoe83@gmail.com
                        </li>
                        <li className="basis-[12%] text-xs md:text-sm">
                            01 237 347 23
                        </li>
                        <li className="basis-[25%] text-xs">
                            843 West 57th Street, Apt 12C, New York, NY 10019,
                            USA
                        </li>
                        <li className="basis-[11%]">
                            <span className="ml-3 text-xs md:text-sm rounded-sm bg-yellow-100 text-accentYellow px-1 py-1">
                                Banned
                            </span>
                        </li>
                        <li className="basis-[4%]">
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
                                    <DropdownMenuItem className="text-accentYellow">
                                        Ban
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
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
