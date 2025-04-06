import { Button } from "../../Components/ui/button";
import { Link } from "react-router-dom";
import { Ellipsis } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../Components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../Components/ui/dialog";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../../Components/ui/pagination";
import { motion } from "framer-motion";

export default function PartnershipApplications() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:h-[89vh] lg:h-full mx-2 md:mx-4 my-6"
        >
            <h1 className="md:text-lg font-medium">34 Applications Found</h1>
            <ul className="mb-5 mt-8 flex space-x-6 mx-2">
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
                        Approved
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
                <li>
                    <Link to="" className="relative hover:text-gray-950 group">
                        Rejected
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
            </ul>
            <hr className="my-2 border-t-gray-400" />
            <div className="mt-8 overflow-x-auto">
                <div className="min-w-[920px] lg:min-w-[880px]">
                    <ul className="flex items-center px-3 py-4 bg-accentRed text-white rounded-md shadow-md mb-4">
                        <li className="basis-[4%]">ID</li>
                        <li className="basis-[22%]">Product Name</li>
                        <li className="basis-[15%] pl-2">Name</li>
                        <li className="basis-[23%]">Email</li>
                        <li className="basis-[17%]">Phone</li>
                        <li className="basis-[14%]">Type</li>
                        <li className="basis-[5%]"></li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[22%]">Linn Pone Yay Gyi</li>
                        <li className="basis-[15%]">U Aung Lin</li>
                        <li className="basis-[23%]">aunglin38@gmail.com</li>
                        <li className="basis-[17%]">09 258 327 459</li>
                        <li className="basis-[14%]">Manufacturer</li>
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
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentYellow px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View Details
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Linn Pone Yay Gyi
                                                </DialogTitle>
                                                <DialogDescription>
                                                    Here's the details
                                                    information of Linn Pone Yay
                                                    Gyi
                                                </DialogDescription>
                                            </DialogHeader>
                                            <hr className="border-t-gray-400" />
                                            <div className="space-y-2">
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Business Name:
                                                    </p>{" "}
                                                    Linn Pone Yay Gyi
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Owner:
                                                    </p>{" "}
                                                    U Aung Lin
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Email:
                                                    </p>
                                                    aunglin38@gmail.com
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Phone:
                                                    </p>{" "}
                                                    09 258 382 487
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Type:
                                                    </p>{" "}
                                                    Manufacturer
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Address:
                                                    </p>{" "}
                                                    No. 23, MyintMo Street,
                                                    Phwar Saw Village, Bagan,
                                                    Myanmar
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Website:
                                                    </p>{" "}
                                                    <a
                                                        href=""
                                                        target="_blank"
                                                        className="text-blue-500"
                                                    >
                                                        LinnPoneYay.com
                                                    </a>
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Certification:
                                                    </p>{" "}
                                                    No
                                                </span>
                                            </div>
                                            <hr className="border-t-gray-400" />
                                            <DialogFooter>
                                                <Button className="bg-accentRed hover:bg-hoverRed">
                                                    Rejected
                                                </Button>
                                                <Button className="bg-accentGreen hover:bg-hoverGreen ml-0">
                                                    Approved
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Approved
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Rejected
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[22%]">Linn Pone Yay Gyi</li>
                        <li className="basis-[15%]">U Aung Lin</li>
                        <li className="basis-[23%]">aunglin38@gmail.com</li>
                        <li className="basis-[17%]">09 258 327 459</li>
                        <li className="basis-[14%]">Manufacturer</li>
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
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentYellow px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View Details
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Linn Pone Yay Gyi
                                                </DialogTitle>
                                                <DialogDescription>
                                                    Here's the details
                                                    information of Linn Pone Yay
                                                    Gyi
                                                </DialogDescription>
                                            </DialogHeader>
                                            <hr className="border-t-gray-400" />
                                            <div className="space-y-2">
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Business Name:
                                                    </p>{" "}
                                                    Linn Pone Yay Gyi
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Owner:
                                                    </p>{" "}
                                                    U Aung Lin
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Email:
                                                    </p>
                                                    aunglin38@gmail.com
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Phone:
                                                    </p>{" "}
                                                    09 258 382 487
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Type:
                                                    </p>{" "}
                                                    Manufacturer
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Address:
                                                    </p>{" "}
                                                    No. 23, MyintMo Street,
                                                    Phwar Saw Village, Bagan,
                                                    Myanmar
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Website:
                                                    </p>{" "}
                                                    <a
                                                        href=""
                                                        target="_blank"
                                                        className="text-blue-500"
                                                    >
                                                        LinnPoneYay.com
                                                    </a>
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Certification:
                                                    </p>{" "}
                                                    No
                                                </span>
                                            </div>
                                            <hr className="border-t-gray-400" />
                                            <DialogFooter>
                                                <Button className="bg-accentRed hover:bg-hoverRed">
                                                    Rejected
                                                </Button>
                                                <Button className="bg-accentGreen hover:bg-hoverGreen">
                                                    Approved
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Approved
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Rejected
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[22%]">Linn Pone Yay Gyi</li>
                        <li className="basis-[15%]">U Aung Lin</li>
                        <li className="basis-[23%]">aunglin38@gmail.com</li>
                        <li className="basis-[17%]">09 258 327 459</li>
                        <li className="basis-[14%]">Manufacturer</li>
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
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentYellow px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View Details
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Linn Pone Yay Gyi
                                                </DialogTitle>
                                                <DialogDescription>
                                                    Here's the details
                                                    information of Linn Pone Yay
                                                    Gyi
                                                </DialogDescription>
                                            </DialogHeader>
                                            <hr className="border-t-gray-400" />
                                            <div className="space-y-2">
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Business Name:
                                                    </p>{" "}
                                                    Linn Pone Yay Gyi
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Owner:
                                                    </p>{" "}
                                                    U Aung Lin
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Email:
                                                    </p>
                                                    aunglin38@gmail.com
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Phone:
                                                    </p>{" "}
                                                    09 258 382 487
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Type:
                                                    </p>{" "}
                                                    Manufacturer
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Address:
                                                    </p>{" "}
                                                    No. 23, MyintMo Street,
                                                    Phwar Saw Village, Bagan,
                                                    Myanmar
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Website:
                                                    </p>{" "}
                                                    <a
                                                        href=""
                                                        target="_blank"
                                                        className="text-blue-500"
                                                    >
                                                        LinnPoneYay.com
                                                    </a>
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Certification:
                                                    </p>{" "}
                                                    No
                                                </span>
                                            </div>
                                            <hr className="border-t-gray-400" />
                                            <DialogFooter>
                                                <Button className="bg-accentRed hover:bg-hoverRed">
                                                    Rejected
                                                </Button>
                                                <Button className="bg-accentGreen hover:bg-hoverGreen">
                                                    Approved
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Approved
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Rejected
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[22%]">Linn Pone Yay Gyi</li>
                        <li className="basis-[15%]">U Aung Lin</li>
                        <li className="basis-[23%]">aunglin38@gmail.com</li>
                        <li className="basis-[17%]">09 258 327 459</li>
                        <li className="basis-[14%]">Manufacturer</li>
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
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentYellow px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View Details
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Linn Pone Yay Gyi
                                                </DialogTitle>
                                                <DialogDescription>
                                                    Here's the details
                                                    information of Linn Pone Yay
                                                    Gyi
                                                </DialogDescription>
                                            </DialogHeader>
                                            <hr className="border-t-gray-400" />
                                            <div className="space-y-2">
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Business Name:
                                                    </p>{" "}
                                                    Linn Pone Yay Gyi
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Owner:
                                                    </p>{" "}
                                                    U Aung Lin
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Email:
                                                    </p>
                                                    aunglin38@gmail.com
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Phone:
                                                    </p>{" "}
                                                    09 258 382 487
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Type:
                                                    </p>{" "}
                                                    Manufacturer
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Address:
                                                    </p>{" "}
                                                    No. 23, MyintMo Street,
                                                    Phwar Saw Village, Bagan,
                                                    Myanmar
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Website:
                                                    </p>{" "}
                                                    <a
                                                        href=""
                                                        target="_blank"
                                                        className="text-blue-500"
                                                    >
                                                        LinnPoneYay.com
                                                    </a>
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Certification:
                                                    </p>{" "}
                                                    No
                                                </span>
                                            </div>
                                            <hr className="border-t-gray-400" />
                                            <DialogFooter>
                                                <Button className="bg-accentRed hover:bg-hoverRed">
                                                    Rejected
                                                </Button>
                                                <Button className="bg-accentGreen hover:bg-hoverGreen">
                                                    Approved
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Approved
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Rejected
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[22%]">Linn Pone Yay Gyi</li>
                        <li className="basis-[15%]">U Aung Lin</li>
                        <li className="basis-[23%]">aunglin38@gmail.com</li>
                        <li className="basis-[17%]">09 258 327 459</li>
                        <li className="basis-[14%]">Manufacturer</li>
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
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentYellow px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View Details
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Linn Pone Yay Gyi
                                                </DialogTitle>
                                                <DialogDescription>
                                                    Here's the details
                                                    information of Linn Pone Yay
                                                    Gyi
                                                </DialogDescription>
                                            </DialogHeader>
                                            <hr className="border-t-gray-400" />
                                            <div className="space-y-2">
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Business Name:
                                                    </p>{" "}
                                                    Linn Pone Yay Gyi
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Owner:
                                                    </p>{" "}
                                                    U Aung Lin
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Email:
                                                    </p>
                                                    aunglin38@gmail.com
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Phone:
                                                    </p>{" "}
                                                    09 258 382 487
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Type:
                                                    </p>{" "}
                                                    Manufacturer
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Address:
                                                    </p>{" "}
                                                    No. 23, MyintMo Street,
                                                    Phwar Saw Village, Bagan,
                                                    Myanmar
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Website:
                                                    </p>{" "}
                                                    <a
                                                        href=""
                                                        target="_blank"
                                                        className="text-blue-500"
                                                    >
                                                        LinnPoneYay.com
                                                    </a>
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Certification:
                                                    </p>{" "}
                                                    No
                                                </span>
                                            </div>
                                            <hr className="border-t-gray-400" />
                                            <DialogFooter>
                                                <Button className="bg-accentRed hover:bg-hoverRed">
                                                    Rejected
                                                </Button>
                                                <Button className="bg-accentGreen hover:bg-hoverGreen">
                                                    Approved
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Approved
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Rejected
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[22%]">Linn Pone Yay Gyi</li>
                        <li className="basis-[15%]">U Aung Lin</li>
                        <li className="basis-[23%]">aunglin38@gmail.com</li>
                        <li className="basis-[17%]">09 258 327 459</li>
                        <li className="basis-[14%]">Manufacturer</li>
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
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentYellow px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View Details
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Linn Pone Yay Gyi
                                                </DialogTitle>
                                                <DialogDescription>
                                                    Here's the details
                                                    information of Linn Pone Yay
                                                    Gyi
                                                </DialogDescription>
                                            </DialogHeader>
                                            <hr className="border-t-gray-400" />
                                            <div className="space-y-2">
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Business Name:
                                                    </p>{" "}
                                                    Linn Pone Yay Gyi
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Owner:
                                                    </p>{" "}
                                                    U Aung Lin
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Email:
                                                    </p>
                                                    aunglin38@gmail.com
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Phone:
                                                    </p>{" "}
                                                    09 258 382 487
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Type:
                                                    </p>{" "}
                                                    Manufacturer
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Address:
                                                    </p>{" "}
                                                    No. 23, MyintMo Street,
                                                    Phwar Saw Village, Bagan,
                                                    Myanmar
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Website:
                                                    </p>{" "}
                                                    <a
                                                        href=""
                                                        target="_blank"
                                                        className="text-blue-500"
                                                    >
                                                        LinnPoneYay.com
                                                    </a>
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Certification:
                                                    </p>{" "}
                                                    No
                                                </span>
                                            </div>
                                            <hr className="border-t-gray-400" />
                                            <DialogFooter>
                                                <Button className="bg-accentRed hover:bg-hoverRed">
                                                    Rejected
                                                </Button>
                                                <Button className="bg-accentGreen hover:bg-hoverGreen">
                                                    Approved
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Approved
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Rejected
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[22%]">Linn Pone Yay Gyi</li>
                        <li className="basis-[15%]">U Aung Lin</li>
                        <li className="basis-[23%]">aunglin38@gmail.com</li>
                        <li className="basis-[17%]">09 258 327 459</li>
                        <li className="basis-[14%]">Manufacturer</li>
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
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentYellow px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View Details
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Linn Pone Yay Gyi
                                                </DialogTitle>
                                                <DialogDescription>
                                                    Here's the details
                                                    information of Linn Pone Yay
                                                    Gyi
                                                </DialogDescription>
                                            </DialogHeader>
                                            <hr className="border-t-gray-400" />
                                            <div className="space-y-2">
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Business Name:
                                                    </p>{" "}
                                                    Linn Pone Yay Gyi
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Owner:
                                                    </p>{" "}
                                                    U Aung Lin
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Email:
                                                    </p>
                                                    aunglin38@gmail.com
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Phone:
                                                    </p>{" "}
                                                    09 258 382 487
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Type:
                                                    </p>{" "}
                                                    Manufacturer
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Address:
                                                    </p>{" "}
                                                    No. 23, MyintMo Street,
                                                    Phwar Saw Village, Bagan,
                                                    Myanmar
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Website:
                                                    </p>{" "}
                                                    <a
                                                        href=""
                                                        target="_blank"
                                                        className="text-blue-500"
                                                    >
                                                        LinnPoneYay.com
                                                    </a>
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Certification:
                                                    </p>{" "}
                                                    No
                                                </span>
                                            </div>
                                            <hr className="border-t-gray-400" />
                                            <DialogFooter>
                                                <Button className="bg-accentRed hover:bg-hoverRed">
                                                    Rejected
                                                </Button>
                                                <Button className="bg-accentGreen hover:bg-hoverGreen">
                                                    Approved
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Approved
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Rejected
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[22%]">Linn Pone Yay Gyi</li>
                        <li className="basis-[15%]">U Aung Lin</li>
                        <li className="basis-[23%]">aunglin38@gmail.com</li>
                        <li className="basis-[17%]">09 258 327 459</li>
                        <li className="basis-[14%]">Manufacturer</li>
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
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentYellow px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View Details
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Linn Pone Yay Gyi
                                                </DialogTitle>
                                                <DialogDescription>
                                                    Here's the details
                                                    information of Linn Pone Yay
                                                    Gyi
                                                </DialogDescription>
                                            </DialogHeader>
                                            <hr className="border-t-gray-400" />
                                            <div className="space-y-2">
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Business Name:
                                                    </p>{" "}
                                                    Linn Pone Yay Gyi
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Owner:
                                                    </p>{" "}
                                                    U Aung Lin
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Email:
                                                    </p>
                                                    aunglin38@gmail.com
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Phone:
                                                    </p>{" "}
                                                    09 258 382 487
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Type:
                                                    </p>{" "}
                                                    Manufacturer
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Address:
                                                    </p>{" "}
                                                    No. 23, MyintMo Street,
                                                    Phwar Saw Village, Bagan,
                                                    Myanmar
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Website:
                                                    </p>{" "}
                                                    <a
                                                        href=""
                                                        target="_blank"
                                                        className="text-blue-500"
                                                    >
                                                        LinnPoneYay.com
                                                    </a>
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Certification:
                                                    </p>{" "}
                                                    No
                                                </span>
                                            </div>
                                            <hr className="border-t-gray-400" />
                                            <DialogFooter>
                                                <Button className="bg-accentRed hover:bg-hoverRed">
                                                    Rejected
                                                </Button>
                                                <Button className="bg-accentGreen hover:bg-hoverGreen">
                                                    Approved
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Approved
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Rejected
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[22%]">Linn Pone Yay Gyi</li>
                        <li className="basis-[15%]">U Aung Lin</li>
                        <li className="basis-[23%]">aunglin38@gmail.com</li>
                        <li className="basis-[17%]">09 258 327 459</li>
                        <li className="basis-[14%]">Manufacturer</li>
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
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentYellow px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View Details
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Linn Pone Yay Gyi
                                                </DialogTitle>
                                                <DialogDescription>
                                                    Here's the details
                                                    information of Linn Pone Yay
                                                    Gyi
                                                </DialogDescription>
                                            </DialogHeader>
                                            <hr className="border-t-gray-400" />
                                            <div className="space-y-2">
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Business Name:
                                                    </p>{" "}
                                                    Linn Pone Yay Gyi
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Owner:
                                                    </p>{" "}
                                                    U Aung Lin
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Email:
                                                    </p>
                                                    aunglin38@gmail.com
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Phone:
                                                    </p>{" "}
                                                    09 258 382 487
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Type:
                                                    </p>{" "}
                                                    Manufacturer
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Address:
                                                    </p>{" "}
                                                    No. 23, MyintMo Street,
                                                    Phwar Saw Village, Bagan,
                                                    Myanmar
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Website:
                                                    </p>{" "}
                                                    <a
                                                        href=""
                                                        target="_blank"
                                                        className="text-blue-500"
                                                    >
                                                        LinnPoneYay.com
                                                    </a>
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Certification:
                                                    </p>{" "}
                                                    No
                                                </span>
                                            </div>
                                            <hr className="border-t-gray-400" />
                                            <DialogFooter>
                                                <Button className="bg-accentRed hover:bg-hoverRed">
                                                    Rejected
                                                </Button>
                                                <Button className="bg-accentGreen hover:bg-hoverGreen">
                                                    Approved
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Approved
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Rejected
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[22%]">Linn Pone Yay Gyi</li>
                        <li className="basis-[15%]">U Aung Lin</li>
                        <li className="basis-[23%]">aunglin38@gmail.com</li>
                        <li className="basis-[17%]">09 258 327 459</li>
                        <li className="basis-[14%]">Manufacturer</li>
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
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentYellow px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View Details
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Linn Pone Yay Gyi
                                                </DialogTitle>
                                                <DialogDescription>
                                                    Here's the details
                                                    information of Linn Pone Yay
                                                    Gyi
                                                </DialogDescription>
                                            </DialogHeader>
                                            <hr className="border-t-gray-400" />
                                            <div className="space-y-2">
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Business Name:
                                                    </p>{" "}
                                                    Linn Pone Yay Gyi
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Owner:
                                                    </p>{" "}
                                                    U Aung Lin
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Email:
                                                    </p>
                                                    aunglin38@gmail.com
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Phone:
                                                    </p>{" "}
                                                    09 258 382 487
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Type:
                                                    </p>{" "}
                                                    Manufacturer
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Address:
                                                    </p>{" "}
                                                    No. 23, MyintMo Street,
                                                    Phwar Saw Village, Bagan,
                                                    Myanmar
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Website:
                                                    </p>{" "}
                                                    <a
                                                        href=""
                                                        target="_blank"
                                                        className="text-blue-500"
                                                    >
                                                        LinnPoneYay.com
                                                    </a>
                                                </span>
                                                <span className="flex gap-2">
                                                    <p className="font-medium">
                                                        Certification:
                                                    </p>{" "}
                                                    No
                                                </span>
                                            </div>
                                            <hr className="border-t-gray-400" />
                                            <DialogFooter>
                                                <Button className="bg-accentRed hover:bg-hoverRed">
                                                    Rejected
                                                </Button>
                                                <Button className="bg-accentGreen hover:bg-hoverGreen">
                                                    Approved
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentGreen">
                                        Approved
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Rejected
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
