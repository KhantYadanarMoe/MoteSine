import { Button } from "../../Components/ui/button";
import { Plus, Ellipsis } from "lucide-react";
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
import Fresh from "../../../images/fresh.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function BlogsList() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8"
        >
            <div className="flex justify-between md:items-center">
                <h1 className="md:text-lg font-medium">34 Blogs Found</h1>
                <Link to="/admin/blogs/create" className="flex items-end gap-1">
                    <Button
                        variant="default"
                        className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300 order-1 md:order-2"
                    >
                        <Plus size={16} /> Add Blog
                    </Button>
                </Link>
            </div>
            <div className="mt-8 overflow-x-auto">
                <div className="min-w-[920px] lg:min-w-[880px]">
                    <ul className="flex items-center px-3 py-4 bg-accentRed text-white rounded-md shadow-md mb-4">
                        <li className="basis-[5%]">ID</li>
                        <li className="basis-[21%]">Thumbnails</li>
                        <li className="basis-[30%]">Title</li>
                        <li className="basis-[12%] pl-2">Status</li>
                        <li className="basis-[12%]">Views</li>
                        <li className="basis-[15%]">Created at</li>
                        <li className="basis-[5%]"></li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[21%] flex gap-1 items-center">
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                        </li>
                        <li className="basis-[30%] font-medium pr-2">
                            How we take our ingredients and prepare to cook
                        </li>
                        <li className="basis-[12%]">
                            <span className="px-1 py-1 rounded-md bg-green-100 text-accentGreen text-sm">
                                Publish
                            </span>
                        </li>
                        <li className="basis-[12%]">234</li>
                        <li className="basis-[15%]">
                            <p className="text-sm">April 12, 2025</p>
                            <p className="text-sm">6:30 PM</p>
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
                                    <Link to="/blog">
                                        <DropdownMenuItem className="text-accentGreen">
                                            Read
                                        </DropdownMenuItem>
                                    </Link>
                                    <DropdownMenuItem className="text-accentYellow">
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
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[21%] flex gap-1 items-center">
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                        </li>
                        <li className="basis-[30%] font-medium pr-2">
                            How we take our ingredients and prepare to cook
                        </li>
                        <li className="basis-[12%]">
                            <span className="px-1 py-1 rounded-md bg-green-100 text-accentGreen text-sm">
                                Publish
                            </span>
                        </li>
                        <li className="basis-[12%]">234</li>
                        <li className="basis-[15%]">
                            <p className="text-sm">April 12, 2025</p>
                            <p className="text-sm">6:30 PM</p>
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
                                        Read
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentYellow">
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
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[21%] flex gap-1 items-center">
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                        </li>
                        <li className="basis-[30%] font-medium pr-2">
                            How we take our ingredients and prepare to cook
                        </li>
                        <li className="basis-[12%]">
                            <span className="px-1 py-1 rounded-md bg-green-100 text-accentGreen text-sm">
                                Publish
                            </span>
                        </li>
                        <li className="basis-[12%]">234</li>
                        <li className="basis-[15%]">
                            <p className="text-sm">April 12, 2025</p>
                            <p className="text-sm">6:30 PM</p>
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
                                        Read
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentYellow">
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
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[21%] flex gap-1 items-center">
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                        </li>
                        <li className="basis-[30%] font-medium pr-2">
                            How we take our ingredients and prepare to cook
                        </li>
                        <li className="basis-[12%]">
                            <span className="px-1 py-1 rounded-md bg-green-100 text-accentGreen text-sm">
                                Publish
                            </span>
                        </li>
                        <li className="basis-[12%]">234</li>
                        <li className="basis-[15%]">
                            <p className="text-sm">April 12, 2025</p>
                            <p className="text-sm">6:30 PM</p>
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
                                        Read
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentYellow">
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
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[21%] flex gap-1 items-center">
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                        </li>
                        <li className="basis-[30%] font-medium pr-2">
                            How we take our ingredients and prepare to cook
                        </li>
                        <li className="basis-[12%]">
                            <span className="px-1 py-1 rounded-md bg-green-100 text-accentGreen text-sm">
                                Publish
                            </span>
                        </li>
                        <li className="basis-[12%]">234</li>
                        <li className="basis-[15%]">
                            <p className="text-sm">April 12, 2025</p>
                            <p className="text-sm">6:30 PM</p>
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
                                        Read
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentYellow">
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
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[21%] flex gap-1 items-center">
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                        </li>
                        <li className="basis-[30%] font-medium pr-2">
                            How we take our ingredients and prepare to cook
                        </li>
                        <li className="basis-[12%]">
                            <span className="px-1 py-1 rounded-md bg-green-100 text-accentGreen text-sm">
                                Publish
                            </span>
                        </li>
                        <li className="basis-[12%]">234</li>
                        <li className="basis-[15%]">
                            <p className="text-sm">April 12, 2025</p>
                            <p className="text-sm">6:30 PM</p>
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
                                        Read
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentYellow">
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
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[21%] flex gap-1 items-center">
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                        </li>
                        <li className="basis-[30%] font-medium pr-2">
                            How we take our ingredients and prepare to cook
                        </li>
                        <li className="basis-[12%]">
                            <span className="px-1 py-1 rounded-md bg-green-100 text-accentGreen text-sm">
                                Publish
                            </span>
                        </li>
                        <li className="basis-[12%]">234</li>
                        <li className="basis-[15%]">
                            <p className="text-sm">April 12, 2025</p>
                            <p className="text-sm">6:30 PM</p>
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
                                        Read
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentYellow">
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
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[21%] flex gap-1 items-center">
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                        </li>
                        <li className="basis-[30%] font-medium pr-2">
                            How we take our ingredients and prepare to cook
                        </li>
                        <li className="basis-[12%]">
                            <span className="px-1 py-1 rounded-md bg-green-100 text-accentGreen text-sm">
                                Publish
                            </span>
                        </li>
                        <li className="basis-[12%]">234</li>
                        <li className="basis-[15%]">
                            <p className="text-sm">April 12, 2025</p>
                            <p className="text-sm">6:30 PM</p>
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
                                        Read
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentYellow">
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
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[21%] flex gap-1 items-center">
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                        </li>
                        <li className="basis-[30%] font-medium pr-2">
                            How we take our ingredients and prepare to cook
                        </li>
                        <li className="basis-[12%]">
                            <span className="px-1 py-1 rounded-md bg-green-100 text-accentGreen text-sm">
                                Publish
                            </span>
                        </li>
                        <li className="basis-[12%]">234</li>
                        <li className="basis-[15%]">
                            <p className="text-sm">April 12, 2025</p>
                            <p className="text-sm">6:30 PM</p>
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
                                        Read
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentYellow">
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
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[21%] flex gap-1 items-center">
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                            <img
                                src={Fresh}
                                alt="blog img"
                                className="w-11 h-11 object-cover rounded-md"
                            />
                        </li>
                        <li className="basis-[30%] font-medium pr-2">
                            How we take our ingredients and prepare to cook
                        </li>
                        <li className="basis-[12%]">
                            <span className="px-1 py-1 rounded-md bg-green-100 text-accentGreen text-sm">
                                Publish
                            </span>
                        </li>
                        <li className="basis-[12%]">234</li>
                        <li className="basis-[15%]">
                            <p className="text-sm">April 12, 2025</p>
                            <p className="text-sm">6:30 PM</p>
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
                                        Read
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentYellow">
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
