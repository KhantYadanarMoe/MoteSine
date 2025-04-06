import { Button } from "../../Components/ui/button";
import { Plus, LayoutPanelLeft, List, Ellipsis } from "lucide-react";
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
import { motion } from "framer-motion";
import { Switch } from "../../Components/ui/switch";
import Product from "../../../images/product.png";
import { Link } from "react-router-dom";

export default function ProductsList() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8"
        >
            <div className="flex justify-between md:items-center">
                <h1 className="md:text-lg font-medium">43 Products Found</h1>
                <div className="flex flex-col md:flex-row items-end gap-3">
                    <div className="flex gap-2 order-2 md:order-1">
                        <Link
                            to="/admin/products"
                            className="px-1 py-1 border border-accentRed text-accentRed rounded-sm hover:bg-gray-200 duration-300"
                        >
                            <List size={20} />
                        </Link>
                        <Link
                            to="/admin/products/grid"
                            className="px-1 py-1 border border-accentRed text-accentRed rounded-sm hover:bg-gray-200 duration-300"
                        >
                            <LayoutPanelLeft size={20} />
                        </Link>
                    </div>

                    <Link
                        to="/admin/products/create"
                        className="order-1 md:order-2"
                    >
                        <Button
                            variant="default"
                            className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                        >
                            <Plus size={16} /> Add product
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="mt-8 overflow-x-auto">
                <div className="min-w-[920px] lg:min-w-[880px]">
                    <ul className="flex items-center px-3 py-4 bg-accentRed text-white rounded-md shadow-md mb-4">
                        <li className="basis-[5%]">ID</li>
                        <li className="basis-[23%]">Name</li>
                        <li className="basis-[14%] pl-2">Price</li>
                        <li className="basis-[10%]">Rating</li>
                        <li className="basis-[9%]">Stock</li>
                        <li className="basis-[11%]">Status</li>
                        <li className="basis-[11%]">Promotion</li>
                        <li className="basis-[12%]">Visibility</li>
                        <li className="basis-[5%]"></li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">32</li>
                        <li className="basis-[23%] flex gap-1 items-center">
                            <img
                                src={Product}
                                alt="product"
                                className="w-12 h-auto object-cover"
                            />
                            <h1 className="font-medium">Eain Chat Mote Hti</h1>
                        </li>
                        <li className="basis-[14%] pl-2">6.12 $</li>
                        <li className="basis-[10%]">4.5</li>
                        <li className="basis-[9%]">276</li>
                        <li className="basis-[11%]">
                            <span className="px-1 py-1 text-xs bg-red-100 text-accentRed rounded-md">
                                Out of Stock
                            </span>
                        </li>
                        <li className="basis-[11%]">30%</li>
                        <li className="basis-[12%]">
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
                        <li className="basis-[5%]">32</li>
                        <li className="basis-[23%] flex gap-1 items-center">
                            <img
                                src={Product}
                                alt="product"
                                className="w-12 h-auto object-cover"
                            />
                            <h1 className="font-medium">Eain Chat Mote Hti</h1>
                        </li>
                        <li className="basis-[14%] pl-2">6.12 $</li>
                        <li className="basis-[10%]">4.5</li>
                        <li className="basis-[9%]">276</li>
                        <li className="basis-[11%]">
                            <span className="px-1 py-1 text-xs bg-red-100 text-accentRed rounded-md">
                                Out of Stock
                            </span>
                        </li>
                        <li className="basis-[11%]">30%</li>
                        <li className="basis-[12%]">
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
                        <li className="basis-[5%]">32</li>
                        <li className="basis-[23%] flex gap-1 items-center">
                            <img
                                src={Product}
                                alt="product"
                                className="w-12 h-auto object-cover"
                            />
                            <h1 className="font-medium">Eain Chat Mote Hti</h1>
                        </li>
                        <li className="basis-[14%] pl-2">6.12 $</li>
                        <li className="basis-[10%]">4.5</li>
                        <li className="basis-[9%]">276</li>
                        <li className="basis-[11%]">
                            <span className="px-1 py-1 text-xs bg-red-100 text-accentRed rounded-md">
                                Out of Stock
                            </span>
                        </li>
                        <li className="basis-[11%]">30%</li>
                        <li className="basis-[12%]">
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
                        <li className="basis-[5%]">32</li>
                        <li className="basis-[23%] flex gap-1 items-center">
                            <img
                                src={Product}
                                alt="product"
                                className="w-12 h-auto object-cover"
                            />
                            <h1 className="font-medium">Eain Chat Mote Hti</h1>
                        </li>
                        <li className="basis-[14%] pl-2">6.12 $</li>
                        <li className="basis-[10%]">4.5</li>
                        <li className="basis-[9%]">276</li>
                        <li className="basis-[11%]">
                            <span className="px-1 py-1 text-xs bg-red-100 text-accentRed rounded-md">
                                Out of Stock
                            </span>
                        </li>
                        <li className="basis-[11%]">30%</li>
                        <li className="basis-[12%]">
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
                        <li className="basis-[5%]">32</li>
                        <li className="basis-[23%] flex gap-1 items-center">
                            <img
                                src={Product}
                                alt="product"
                                className="w-12 h-auto object-cover"
                            />
                            <h1 className="font-medium">Eain Chat Mote Hti</h1>
                        </li>
                        <li className="basis-[14%] pl-2">6.12 $</li>
                        <li className="basis-[10%]">4.5</li>
                        <li className="basis-[9%]">276</li>
                        <li className="basis-[11%]">
                            <span className="px-1 py-1 text-xs bg-red-100 text-accentRed rounded-md">
                                Out of Stock
                            </span>
                        </li>
                        <li className="basis-[11%]">30%</li>
                        <li className="basis-[12%]">
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
                        <li className="basis-[5%]">32</li>
                        <li className="basis-[23%] flex gap-1 items-center">
                            <img
                                src={Product}
                                alt="product"
                                className="w-12 h-auto object-cover"
                            />
                            <h1 className="font-medium">Eain Chat Mote Hti</h1>
                        </li>
                        <li className="basis-[14%] pl-2">6.12 $</li>
                        <li className="basis-[10%]">4.5</li>
                        <li className="basis-[9%]">276</li>
                        <li className="basis-[11%]">
                            <span className="px-1 py-1 text-xs bg-red-100 text-accentRed rounded-md">
                                Out of Stock
                            </span>
                        </li>
                        <li className="basis-[11%]">30%</li>
                        <li className="basis-[12%]">
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
                        <li className="basis-[5%]">32</li>
                        <li className="basis-[23%] flex gap-1 items-center">
                            <img
                                src={Product}
                                alt="product"
                                className="w-12 h-auto object-cover"
                            />
                            <h1 className="font-medium">Eain Chat Mote Hti</h1>
                        </li>
                        <li className="basis-[14%] pl-2">6.12 $</li>
                        <li className="basis-[10%]">4.5</li>
                        <li className="basis-[9%]">276</li>
                        <li className="basis-[11%]">
                            <span className="px-1 py-1 text-xs bg-red-100 text-accentRed rounded-md">
                                Out of Stock
                            </span>
                        </li>
                        <li className="basis-[11%]">30%</li>
                        <li className="basis-[12%]">
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
                        <li className="basis-[5%]">32</li>
                        <li className="basis-[23%] flex gap-1 items-center">
                            <img
                                src={Product}
                                alt="product"
                                className="w-12 h-auto object-cover"
                            />
                            <h1 className="font-medium">Eain Chat Mote Hti</h1>
                        </li>
                        <li className="basis-[14%] pl-2">6.12 $</li>
                        <li className="basis-[10%]">4.5</li>
                        <li className="basis-[9%]">276</li>
                        <li className="basis-[11%]">
                            <span className="px-1 py-1 text-xs bg-red-100 text-accentRed rounded-md">
                                Out of Stock
                            </span>
                        </li>
                        <li className="basis-[11%]">30%</li>
                        <li className="basis-[12%]">
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
                        <li className="basis-[5%]">32</li>
                        <li className="basis-[23%] flex gap-1 items-center">
                            <img
                                src={Product}
                                alt="product"
                                className="w-12 h-auto object-cover"
                            />
                            <h1 className="font-medium">Eain Chat Mote Hti</h1>
                        </li>
                        <li className="basis-[14%] pl-2">6.12 $</li>
                        <li className="basis-[10%]">4.5</li>
                        <li className="basis-[9%]">276</li>
                        <li className="basis-[11%]">
                            <span className="px-1 py-1 text-xs bg-red-100 text-accentRed rounded-md">
                                Out of Stock
                            </span>
                        </li>
                        <li className="basis-[11%]">30%</li>
                        <li className="basis-[12%]">
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
                        <li className="basis-[5%]">32</li>
                        <li className="basis-[23%] flex gap-1 items-center">
                            <img
                                src={Product}
                                alt="product"
                                className="w-12 h-auto object-cover"
                            />
                            <h1 className="font-medium">Eain Chat Mote Hti</h1>
                        </li>
                        <li className="basis-[14%] pl-2">6.12 $</li>
                        <li className="basis-[10%]">4.5</li>
                        <li className="basis-[9%]">276</li>
                        <li className="basis-[11%]">
                            <span className="px-1 py-1 text-xs bg-red-100 text-accentRed rounded-md">
                                Out of Stock
                            </span>
                        </li>
                        <li className="basis-[11%]">30%</li>
                        <li className="basis-[12%]">
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
