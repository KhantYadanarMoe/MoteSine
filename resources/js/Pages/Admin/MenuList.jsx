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
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
} from "../../Components/ui/pagination";
import { Checkbox } from "../../Components/ui/checkbox";
import { Switch } from "../../Components/ui/switch";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Mohinga from "../../../images/Mohinga.png";

export default function MenuList() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8"
        >
            <div className="flex justify-between md:items-center">
                <h1 className="md:text-lg font-medium">34 Menu Items Found</h1>
                <div className="flex flex-col md:flex-row items-end gap-3">
                    <div className="flex gap-2 order-2 md:order-1">
                        <Link
                            to="/admin/menu"
                            className="px-1 py-1 border border-accentRed text-accentRed rounded-sm hover:bg-gray-100 duration-300"
                        >
                            <List size={20} />
                        </Link>
                        <Link
                            to="/admin/menu/grid"
                            className="px-1 py-1 border border-accentRed text-accentRed rounded-sm hover:bg-gray-100 duration-300"
                        >
                            <LayoutPanelLeft size={20} />
                        </Link>
                    </div>

                    <Link
                        to="/admin/menu/create"
                        className="order-1 md:order-2"
                    >
                        <Button
                            variant="default"
                            className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300"
                        >
                            <Plus size={16} /> Add menu
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="mt-8 overflow-x-auto">
                <div className="min-w-[920px] lg:min-w-[880px]">
                    <ul className="flex items-center px-3 py-4 bg-accentRed text-white rounded-md shadow-md mb-4">
                        <li className="basis-[4%]">ID</li>
                        <li className="basis-[26%]">Name</li>
                        <li className="basis-[18%] pl-2">Price</li>
                        <li className="basis-[13%]">Category</li>
                        <li className="basis-[14%]">Promotion</li>
                        <li className="basis-[10%]">Featured</li>
                        <li className="basis-[10%]">Visibility</li>
                        <li className="basis-[5%]"></li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[26%] flex gap-1 items-center">
                            <img
                                src={Mohinga}
                                alt="mohinga"
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <h1 className="font-medium">Mohinga</h1>
                        </li>
                        <li className="basis-[18%]">6.12 $</li>
                        <li className="basis-[13%]">Noodle</li>
                        <li className="basis-[14%]">15%</li>
                        <li className="basis-[10%]">
                            <Checkbox id="featured" />
                        </li>
                        <li className="basis-[10%]">
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
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[26%] flex gap-1 items-center">
                            <img
                                src={Mohinga}
                                alt="mohinga"
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <h1 className="font-medium">Mohinga</h1>
                        </li>
                        <li className="basis-[18%]">6.12 $</li>
                        <li className="basis-[13%]">Noodle</li>
                        <li className="basis-[14%]">15%</li>
                        <li className="basis-[10%]">
                            <Checkbox id="featured" />
                        </li>
                        <li className="basis-[10%]">
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
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[26%] flex gap-1 items-center">
                            <img
                                src={Mohinga}
                                alt="mohinga"
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <h1 className="font-medium">Mohinga</h1>
                        </li>
                        <li className="basis-[18%]">6.12 $</li>
                        <li className="basis-[13%]">Noodle</li>
                        <li className="basis-[14%]">15%</li>
                        <li className="basis-[10%]">
                            <Checkbox id="featured" />
                        </li>
                        <li className="basis-[10%]">
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
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[26%] flex gap-1 items-center">
                            <img
                                src={Mohinga}
                                alt="mohinga"
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <h1 className="font-medium">Mohinga</h1>
                        </li>
                        <li className="basis-[18%]">6.12 $</li>
                        <li className="basis-[13%]">Noodle</li>
                        <li className="basis-[14%]">15%</li>
                        <li className="basis-[10%]">
                            <Checkbox id="featured" />
                        </li>
                        <li className="basis-[10%]">
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
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[26%] flex gap-1 items-center">
                            <img
                                src={Mohinga}
                                alt="mohinga"
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <h1 className="font-medium">Mohinga</h1>
                        </li>
                        <li className="basis-[18%]">6.12 $</li>
                        <li className="basis-[13%]">Noodle</li>
                        <li className="basis-[14%]">15%</li>
                        <li className="basis-[10%]">
                            <Checkbox id="featured" />
                        </li>
                        <li className="basis-[10%]">
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
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[26%] flex gap-1 items-center">
                            <img
                                src={Mohinga}
                                alt="mohinga"
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <h1 className="font-medium">Mohinga</h1>
                        </li>
                        <li className="basis-[18%]">6.12 $</li>
                        <li className="basis-[13%]">Noodle</li>
                        <li className="basis-[14%]">15%</li>
                        <li className="basis-[10%]">
                            <Checkbox id="featured" />
                        </li>
                        <li className="basis-[10%]">
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
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[26%] flex gap-1 items-center">
                            <img
                                src={Mohinga}
                                alt="mohinga"
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <h1 className="font-medium">Mohinga</h1>
                        </li>
                        <li className="basis-[18%]">6.12 $</li>
                        <li className="basis-[13%]">Noodle</li>
                        <li className="basis-[14%]">15%</li>
                        <li className="basis-[10%]">
                            <Checkbox id="featured" />
                        </li>
                        <li className="basis-[10%]">
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
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[26%] flex gap-1 items-center">
                            <img
                                src={Mohinga}
                                alt="mohinga"
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <h1 className="font-medium">Mohinga</h1>
                        </li>
                        <li className="basis-[18%]">6.12 $</li>
                        <li className="basis-[13%]">Noodle</li>
                        <li className="basis-[14%]">15%</li>
                        <li className="basis-[10%]">
                            <Checkbox id="featured" />
                        </li>
                        <li className="basis-[10%]">
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
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[26%] flex gap-1 items-center">
                            <img
                                src={Mohinga}
                                alt="mohinga"
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <h1 className="font-medium">Mohinga</h1>
                        </li>
                        <li className="basis-[18%]">6.12 $</li>
                        <li className="basis-[13%]">Noodle</li>
                        <li className="basis-[14%]">15%</li>
                        <li className="basis-[10%]">
                            <Checkbox id="featured" />
                        </li>
                        <li className="basis-[10%]">
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
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[26%] flex gap-1 items-center">
                            <img
                                src={Mohinga}
                                alt="mohinga"
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <h1 className="font-medium">Mohinga</h1>
                        </li>
                        <li className="basis-[18%]">6.12 $</li>
                        <li className="basis-[13%]">Noodle</li>
                        <li className="basis-[14%]">15%</li>
                        <li className="basis-[10%]">
                            <Checkbox id="featured" />
                        </li>
                        <li className="basis-[10%]">
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
