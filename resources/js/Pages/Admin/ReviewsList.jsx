import { Button } from "../../Components/ui/button";
import { Star, Ellipsis } from "lucide-react";
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
import { Switch } from "../../Components/ui/switch";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../Components/ui/dialog";
import Profile from "../../../images/profile.jpg";
import { motion } from "framer-motion";

export default function ReviewsList() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8"
        >
            <h1 className="md:text-lg font-medium">27 Reviews Found</h1>
            <div className="mt-8 overflow-x-auto">
                <div className="min-w-[920px] lg:min-w-[880px]">
                    <ul className="flex items-center px-3 py-4 bg-accentRed text-white rounded-md shadow-md mb-4">
                        <li className="basis-[5%]">ID</li>
                        <li className="basis-[20%]">User</li>
                        <li className="basis-[12%] pl-2">Rating</li>
                        <li className="basis-[43%]">Review</li>
                        <li className="basis-[15%]">Visibility</li>
                        <li className="basis-[5%]"></li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[20%]">
                            <h1 className="font-medium">Khant Yadanar Moe</h1>
                        </li>
                        <li className="basis-[12%] pl-2 flex items-center gap-1">
                            <Star
                                size={20}
                                fill="currentColor"
                                className="text-accentYellow"
                            />
                            4.5
                        </li>
                        <li className="basis-[43%] truncate pr-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque ullam molestias, fugit accusamus
                            laboriosam quo quibusdam possimus expedita fugiat
                            impedit ipsa unde at iste omnis? Ab, qui.
                        </li>
                        <li className="basis-[15%]">
                            <Switch id="visibility" />
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
                                    <Dialog modal>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentGreen px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={Profile}
                                                        alt="profile"
                                                        className="w-16 h-16 object-cover rounded-full border border-accentRed"
                                                    />
                                                    <h1 className="text-base font-medium">
                                                        Khant Yadanar Moe
                                                    </h1>
                                                </div>
                                                <p className="mt-4 text-sm text-gray-800">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Voluptatum eveniet quo
                                                    nemo eius tenetur odit
                                                    officiis molestiae iure
                                                    maiores saepe numquam quasi
                                                    modi, quia repudiandae,
                                                    minus accusantium. Doloribus
                                                    cumque nesciunt commodi
                                                    quos?
                                                </p>
                                                <div className="flex gap-1 mt-3">
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        className="text-accentYellow"
                                                    />
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[20%]">
                            <h1 className="font-medium">Khant Yadanar Moe</h1>
                        </li>
                        <li className="basis-[12%] pl-2 flex items-center gap-1">
                            <Star
                                size={20}
                                fill="currentColor"
                                className="text-accentYellow"
                            />
                            4.5
                        </li>
                        <li className="basis-[43%] truncate pr-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque ullam molestias, fugit accusamus
                            laboriosam quo quibusdam possimus expedita fugiat
                            impedit ipsa unde at iste omnis? Ab, qui.
                        </li>
                        <li className="basis-[15%]">
                            <Switch id="visibility" />
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
                                    <Dialog modal>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentGreen px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={Profile}
                                                        alt="profile"
                                                        className="w-16 h-16 object-cover rounded-full border border-accentRed"
                                                    />
                                                    <h1 className="text-base font-medium">
                                                        Khant Yadanar Moe
                                                    </h1>
                                                </div>
                                                <p className="mt-4 text-sm text-gray-800">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Voluptatum eveniet quo
                                                    nemo eius tenetur odit
                                                    officiis molestiae iure
                                                    maiores saepe numquam quasi
                                                    modi, quia repudiandae,
                                                    minus accusantium. Doloribus
                                                    cumque nesciunt commodi
                                                    quos?
                                                </p>
                                                <div className="flex gap-1 mt-3">
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        className="text-accentYellow"
                                                    />
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[20%]">
                            <h1 className="font-medium">Khant Yadanar Moe</h1>
                        </li>
                        <li className="basis-[12%] pl-2 flex items-center gap-1">
                            <Star
                                size={20}
                                fill="currentColor"
                                className="text-accentYellow"
                            />
                            4.5
                        </li>
                        <li className="basis-[43%] truncate pr-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque ullam molestias, fugit accusamus
                            laboriosam quo quibusdam possimus expedita fugiat
                            impedit ipsa unde at iste omnis? Ab, qui.
                        </li>
                        <li className="basis-[15%]">
                            <Switch id="visibility" />
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
                                    <Dialog modal>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentGreen px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={Profile}
                                                        alt="profile"
                                                        className="w-16 h-16 object-cover rounded-full border border-accentRed"
                                                    />
                                                    <h1 className="text-base font-medium">
                                                        Khant Yadanar Moe
                                                    </h1>
                                                </div>
                                                <p className="mt-4 text-sm text-gray-800">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Voluptatum eveniet quo
                                                    nemo eius tenetur odit
                                                    officiis molestiae iure
                                                    maiores saepe numquam quasi
                                                    modi, quia repudiandae,
                                                    minus accusantium. Doloribus
                                                    cumque nesciunt commodi
                                                    quos?
                                                </p>
                                                <div className="flex gap-1 mt-3">
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        className="text-accentYellow"
                                                    />
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[20%]">
                            <h1 className="font-medium">Khant Yadanar Moe</h1>
                        </li>
                        <li className="basis-[12%] pl-2 flex items-center gap-1">
                            <Star
                                size={20}
                                fill="currentColor"
                                className="text-accentYellow"
                            />
                            4.5
                        </li>
                        <li className="basis-[43%] truncate pr-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque ullam molestias, fugit accusamus
                            laboriosam quo quibusdam possimus expedita fugiat
                            impedit ipsa unde at iste omnis? Ab, qui.
                        </li>
                        <li className="basis-[15%]">
                            <Switch id="visibility" />
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
                                    <Dialog modal>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentGreen px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={Profile}
                                                        alt="profile"
                                                        className="w-16 h-16 object-cover rounded-full border border-accentRed"
                                                    />
                                                    <h1 className="text-base font-medium">
                                                        Khant Yadanar Moe
                                                    </h1>
                                                </div>
                                                <p className="mt-4 text-sm text-gray-800">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Voluptatum eveniet quo
                                                    nemo eius tenetur odit
                                                    officiis molestiae iure
                                                    maiores saepe numquam quasi
                                                    modi, quia repudiandae,
                                                    minus accusantium. Doloribus
                                                    cumque nesciunt commodi
                                                    quos?
                                                </p>
                                                <div className="flex gap-1 mt-3">
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        className="text-accentYellow"
                                                    />
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[20%]">
                            <h1 className="font-medium">Khant Yadanar Moe</h1>
                        </li>
                        <li className="basis-[12%] pl-2 flex items-center gap-1">
                            <Star
                                size={20}
                                fill="currentColor"
                                className="text-accentYellow"
                            />
                            4.5
                        </li>
                        <li className="basis-[43%] truncate pr-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque ullam molestias, fugit accusamus
                            laboriosam quo quibusdam possimus expedita fugiat
                            impedit ipsa unde at iste omnis? Ab, qui.
                        </li>
                        <li className="basis-[15%]">
                            <Switch id="visibility" />
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
                                    <Dialog modal>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentGreen px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={Profile}
                                                        alt="profile"
                                                        className="w-16 h-16 object-cover rounded-full border border-accentRed"
                                                    />
                                                    <h1 className="text-base font-medium">
                                                        Khant Yadanar Moe
                                                    </h1>
                                                </div>
                                                <p className="mt-4 text-sm text-gray-800">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Voluptatum eveniet quo
                                                    nemo eius tenetur odit
                                                    officiis molestiae iure
                                                    maiores saepe numquam quasi
                                                    modi, quia repudiandae,
                                                    minus accusantium. Doloribus
                                                    cumque nesciunt commodi
                                                    quos?
                                                </p>
                                                <div className="flex gap-1 mt-3">
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        className="text-accentYellow"
                                                    />
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[20%]">
                            <h1 className="font-medium">Khant Yadanar Moe</h1>
                        </li>
                        <li className="basis-[12%] pl-2 flex items-center gap-1">
                            <Star
                                size={20}
                                fill="currentColor"
                                className="text-accentYellow"
                            />
                            4.5
                        </li>
                        <li className="basis-[43%] truncate pr-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque ullam molestias, fugit accusamus
                            laboriosam quo quibusdam possimus expedita fugiat
                            impedit ipsa unde at iste omnis? Ab, qui.
                        </li>
                        <li className="basis-[15%]">
                            <Switch id="visibility" />
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
                                    <Dialog modal>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentGreen px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={Profile}
                                                        alt="profile"
                                                        className="w-16 h-16 object-cover rounded-full border border-accentRed"
                                                    />
                                                    <h1 className="text-base font-medium">
                                                        Khant Yadanar Moe
                                                    </h1>
                                                </div>
                                                <p className="mt-4 text-sm text-gray-800">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Voluptatum eveniet quo
                                                    nemo eius tenetur odit
                                                    officiis molestiae iure
                                                    maiores saepe numquam quasi
                                                    modi, quia repudiandae,
                                                    minus accusantium. Doloribus
                                                    cumque nesciunt commodi
                                                    quos?
                                                </p>
                                                <div className="flex gap-1 mt-3">
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        className="text-accentYellow"
                                                    />
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[20%]">
                            <h1 className="font-medium">Khant Yadanar Moe</h1>
                        </li>
                        <li className="basis-[12%] pl-2 flex items-center gap-1">
                            <Star
                                size={20}
                                fill="currentColor"
                                className="text-accentYellow"
                            />
                            4.5
                        </li>
                        <li className="basis-[43%] truncate pr-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque ullam molestias, fugit accusamus
                            laboriosam quo quibusdam possimus expedita fugiat
                            impedit ipsa unde at iste omnis? Ab, qui.
                        </li>
                        <li className="basis-[15%]">
                            <Switch id="visibility" />
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
                                    <Dialog modal>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentGreen px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={Profile}
                                                        alt="profile"
                                                        className="w-16 h-16 object-cover rounded-full border border-accentRed"
                                                    />
                                                    <h1 className="text-base font-medium">
                                                        Khant Yadanar Moe
                                                    </h1>
                                                </div>
                                                <p className="mt-4 text-sm text-gray-800">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Voluptatum eveniet quo
                                                    nemo eius tenetur odit
                                                    officiis molestiae iure
                                                    maiores saepe numquam quasi
                                                    modi, quia repudiandae,
                                                    minus accusantium. Doloribus
                                                    cumque nesciunt commodi
                                                    quos?
                                                </p>
                                                <div className="flex gap-1 mt-3">
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        className="text-accentYellow"
                                                    />
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[20%]">
                            <h1 className="font-medium">Khant Yadanar Moe</h1>
                        </li>
                        <li className="basis-[12%] pl-2 flex items-center gap-1">
                            <Star
                                size={20}
                                fill="currentColor"
                                className="text-accentYellow"
                            />
                            4.5
                        </li>
                        <li className="basis-[43%] truncate pr-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque ullam molestias, fugit accusamus
                            laboriosam quo quibusdam possimus expedita fugiat
                            impedit ipsa unde at iste omnis? Ab, qui.
                        </li>
                        <li className="basis-[15%]">
                            <Switch id="visibility" />
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
                                    <Dialog modal>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentGreen px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={Profile}
                                                        alt="profile"
                                                        className="w-16 h-16 object-cover rounded-full border border-accentRed"
                                                    />
                                                    <h1 className="text-base font-medium">
                                                        Khant Yadanar Moe
                                                    </h1>
                                                </div>
                                                <p className="mt-4 text-sm text-gray-800">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Voluptatum eveniet quo
                                                    nemo eius tenetur odit
                                                    officiis molestiae iure
                                                    maiores saepe numquam quasi
                                                    modi, quia repudiandae,
                                                    minus accusantium. Doloribus
                                                    cumque nesciunt commodi
                                                    quos?
                                                </p>
                                                <div className="flex gap-1 mt-3">
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        className="text-accentYellow"
                                                    />
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[20%]">
                            <h1 className="font-medium">Khant Yadanar Moe</h1>
                        </li>
                        <li className="basis-[12%] pl-2 flex items-center gap-1">
                            <Star
                                size={20}
                                fill="currentColor"
                                className="text-accentYellow"
                            />
                            4.5
                        </li>
                        <li className="basis-[43%] truncate pr-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque ullam molestias, fugit accusamus
                            laboriosam quo quibusdam possimus expedita fugiat
                            impedit ipsa unde at iste omnis? Ab, qui.
                        </li>
                        <li className="basis-[15%]">
                            <Switch id="visibility" />
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
                                    <Dialog modal>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentGreen px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={Profile}
                                                        alt="profile"
                                                        className="w-16 h-16 object-cover rounded-full border border-accentRed"
                                                    />
                                                    <h1 className="text-base font-medium">
                                                        Khant Yadanar Moe
                                                    </h1>
                                                </div>
                                                <p className="mt-4 text-sm text-gray-800">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Voluptatum eveniet quo
                                                    nemo eius tenetur odit
                                                    officiis molestiae iure
                                                    maiores saepe numquam quasi
                                                    modi, quia repudiandae,
                                                    minus accusantium. Doloribus
                                                    cumque nesciunt commodi
                                                    quos?
                                                </p>
                                                <div className="flex gap-1 mt-3">
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        className="text-accentYellow"
                                                    />
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[20%]">
                            <h1 className="font-medium">Khant Yadanar Moe</h1>
                        </li>
                        <li className="basis-[12%] pl-2 flex items-center gap-1">
                            <Star
                                size={20}
                                fill="currentColor"
                                className="text-accentYellow"
                            />
                            4.5
                        </li>
                        <li className="basis-[43%] truncate pr-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque ullam molestias, fugit accusamus
                            laboriosam quo quibusdam possimus expedita fugiat
                            impedit ipsa unde at iste omnis? Ab, qui.
                        </li>
                        <li className="basis-[15%]">
                            <Switch id="visibility" />
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
                                    <Dialog modal>
                                        <DialogTrigger asChild>
                                            <Button className="text-accentGreen px-2 py-0 bg-white shadow-none hover:bg-white">
                                                View
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={Profile}
                                                        alt="profile"
                                                        className="w-16 h-16 object-cover rounded-full border border-accentRed"
                                                    />
                                                    <h1 className="text-base font-medium">
                                                        Khant Yadanar Moe
                                                    </h1>
                                                </div>
                                                <p className="mt-4 text-sm text-gray-800">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur, adipisicing
                                                    elit. Voluptatum eveniet quo
                                                    nemo eius tenetur odit
                                                    officiis molestiae iure
                                                    maiores saepe numquam quasi
                                                    modi, quia repudiandae,
                                                    minus accusantium. Doloribus
                                                    cumque nesciunt commodi
                                                    quos?
                                                </p>
                                                <div className="flex gap-1 mt-3">
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        fill="currentColor"
                                                        className="text-accentYellow"
                                                    />
                                                    <Star
                                                        size={20}
                                                        className="text-accentYellow"
                                                    />
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
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
