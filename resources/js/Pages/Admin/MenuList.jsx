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
import { useEffect, useState } from "react";
import axios from "axios";

export default function MenuList() {
    // state to store menus
    let [menus, setMenus] = useState([]);
    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // rows to show in a page
    const rowsPerPage = 10;

    // fetch data that send from backend
    let getMenus = async () => {
        let res = await axios.get("/api/menus");
        let data = res.data;
        setMenus(data.menus);
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getMenus();
    }, []);

    // calculate the last items, first items and set menus to show
    const indexOfLastMenu = currentPage * rowsPerPage;
    const indexOfFirstMenu = indexOfLastMenu - rowsPerPage;
    const currentMenus = menus.slice(indexOfFirstMenu, indexOfLastMenu);

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
            className="mx-2 md:mx-4 py-8"
        >
            <div className="flex justify-between md:items-center">
                <h1 className="md:text-lg font-medium">
                    {menus.length} Menu Items Found
                </h1>
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
                        <li className="basis-[20%]">Category</li>
                        <li className="basis-[11%]">Promotion</li>
                        <li className="basis-[8%]">Featured</li>
                        <li className="basis-[8%]">Visibility</li>
                        <li className="basis-[5%]"></li>
                    </ul>
                    {currentMenus.length > 0 ? (
                        currentMenus.map((menu) => (
                            <ul
                                key={menu.id}
                                className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2"
                            >
                                <li className="basis-[4%]">{menu.id}</li>
                                <li className="basis-[26%] flex gap-1 items-center">
                                    <img
                                        src={`/storage/${menu.image}`}
                                        alt={menu.title}
                                        className="w-12 h-12 object-cover rounded-full"
                                    />
                                    <h1 className="font-medium">
                                        {menu.title}
                                    </h1>
                                </li>
                                <li className="basis-[18%]">
                                    {menu.promotion ? (
                                        <div className="flex items-center gap-1">
                                            <span className="text-red-600 font-semibold">
                                                {(
                                                    menu.price -
                                                    (menu.price *
                                                        menu.promotion) /
                                                        100
                                                ).toFixed(2)}{" "}
                                                $
                                            </span>
                                            <span className="line-through text-sm text-gray-500">
                                                {menu.price} $
                                            </span>
                                        </div>
                                    ) : (
                                        <span>{menu.price} $</span>
                                    )}
                                </li>
                                <li className="basis-[20%] capitalize">
                                    {menu.category}
                                </li>
                                <li className="basis-[11%]">
                                    {menu.promotion
                                        ? `${menu.promotion}%`
                                        : "-"}
                                </li>
                                <li className="basis-[8%]">
                                    <Checkbox
                                        id={`featured-${menu.id}`}
                                        checked={menu.featured === 1}
                                        readOnly
                                    />
                                </li>
                                <li className="basis-[8%]">
                                    <Switch
                                        id={`visibility-${menu.id}`}
                                        checked={menu.visibility === 1}
                                        readOnly
                                    />
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
                        ))
                    ) : (
                        <p className="text-center font-medium text-accentRed">
                            Loading...
                        </p> //add lazy loading after complete
                    )}
                </div>
            </div>
            <div className="mt-8 flex justify-center gap-4">
                <Pagination className="text-accentRed">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() =>
                                    handlePageChange(currentPage - 1)
                                }
                                disabled={currentPage === 1}
                                className="cursor-pointer"
                            />
                        </PaginationItem>
                        {Array.from(
                            { length: Math.ceil(menus.length / rowsPerPage) },
                            (_, index) => (
                                <PaginationItem key={index}>
                                    <PaginationLink
                                        onClick={() =>
                                            handlePageChange(index + 1)
                                        }
                                        isActive={currentPage === index + 1}
                                        className="cursor-pointer"
                                    >
                                        {index + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        )}
                        <PaginationItem>
                            <PaginationNext
                                onClick={() =>
                                    handlePageChange(currentPage + 1)
                                }
                                className="cursor-pointer"
                                disabled={
                                    currentPage ===
                                    Math.ceil(menus.length / rowsPerPage)
                                }
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </motion.div>
    );
}
