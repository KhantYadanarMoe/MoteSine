import { Button } from "../../Components/ui/button";
import { Plus, Hash, Ellipsis } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../Components/ui/dropdown-menu";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../../Components/ui/pagination";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "../../Components/ui/sheet";
import { useState } from "react";
import Profile from "../../../images/profile.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ReservationList() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8"
        >
            <div className="flex justify-between md:items-center">
                <h1 className="md:text-lg font-medium">
                    29 Reservations Found
                </h1>
                <Link to="/admin/reservation/calendar">
                    <Button
                        variant="default"
                        className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300 order-1 md:order-2"
                    >
                        <Plus size={16} /> Reserve
                    </Button>
                </Link>
            </div>
            <div className="mt-8 overflow-x-auto">
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
                            <h1 className="text-accentRed font-medium">45J</h1>
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
                            <h1 className="text-accentRed font-medium">45J</h1>
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
                            <h1 className="text-accentRed font-medium">45J</h1>
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
                            <h1 className="text-accentRed font-medium">45J</h1>
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
                            <h1 className="text-accentRed font-medium">45J</h1>
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
                            <h1 className="text-accentRed font-medium">45J</h1>
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
                            <h1 className="text-accentRed font-medium">45J</h1>
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
                            <h1 className="text-accentRed font-medium">45J</h1>
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
                            <h1 className="text-accentRed font-medium">45J</h1>
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
                            <h1 className="text-accentRed font-medium">45J</h1>
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
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent className="w-[93%] md:w-[48%] flex flex-col justify-between">
                    <SheetHeader>
                        <SheetTitle>
                            <div className="flex gap-1">
                                Reservation{" "}
                                <div className="flex items-center basis-[28%] md:basis-[20%] text-accentRed">
                                    <Hash size={20} />
                                    <h1 className="font-medium">H3921</h1>
                                </div>
                            </div>
                        </SheetTitle>
                    </SheetHeader>
                    <div>
                        <div className="flex items-center gap-2">
                            <img
                                src={Profile}
                                alt=""
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <h1 className="font-medium">
                                    Khant Yadanar Moe
                                </h1>
                                <span className="text-sm text-gray-700">
                                    Bahan, Yangon
                                </span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center mb-2">
                                <h1 className="text-sm font-medium">Date - </h1>
                                <span className="text-sm text-gray-800">
                                    31 Feb 2025
                                </span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <h1 className="text-sm font-medium">Time - </h1>
                                <span className="text-sm text-gray-800">
                                    12:30 PM
                                </span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <h1 className="text-sm font-medium">
                                    Guest -{" "}
                                </h1>
                                <span className="text-sm text-gray-800">
                                    3 guests
                                </span>
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <h1 className="text-sm font-medium">
                                    Table -{" "}
                                </h1>
                                <span className="text-sm text-accentRed">
                                    A46
                                </span>
                            </div>
                            <hr className="border-t-gray-400 mt-4 mb-5" />
                            <div className="flex justify-between items-center mb-2">
                                <h1 className="text-sm font-medium">
                                    Phone -{" "}
                                </h1>
                                <span className="text-sm text-gray-800">
                                    (917) 555-3462
                                </span>
                            </div>
                            <div className="text-sm flex justify-between items-center mb-2">
                                <h1 className="font-medium">Email - </h1>
                                <span className="text-sm text-gray-800">
                                    khantyadanarmoe587@gmail.com
                                </span>
                            </div>
                            <hr className="border-t-gray-400 mt-5 mb-2" />
                            <div>
                                <h1 className="font-medium">Message</h1>
                                <p className="text-gray-700 text-xs mt-3">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Dolor dolore suscipit
                                    consequatur veritatis reprehenderit sequi a,
                                    voluptatum in quod magni. Enim saepe
                                    doloremque praesentium deserunt aperiam
                                    architecto ea, distinctio quis?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            className="text-white bg-accentRed"
                        >
                            Arrived
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </motion.div>
    );
}
