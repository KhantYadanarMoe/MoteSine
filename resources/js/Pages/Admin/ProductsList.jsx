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
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductsList() {
    // state to store products
    let [products, setProducts] = useState([]);

    // fetch data that send from backend
    let getProducts = async () => {
        let res = await axios.get("/api/products");
        let data = res.data;
        setProducts(data.products);
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getProducts();
    }, []);

    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // rows to show in a page
    const rowsPerPage = 10;

    // calculate the last items, first items and set products to show
    const indexOfLastProduct = currentPage * rowsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - rowsPerPage;
    const currentProducts = products.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

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
            className="mx-2 md:mx-4 my-8"
        >
            <div className="flex justify-between md:items-center">
                <h1 className="md:text-lg font-medium">
                    {products.length} Products Found
                </h1>
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
                        <li className="basis-[17%] pl-2">Price</li>
                        <li className="basis-[9%]">Rating</li>
                        <li className="basis-[8%]">Stock</li>
                        <li className="basis-[11%]">Status</li>
                        <li className="basis-[10%]">Promotion</li>
                        <li className="basis-[12%]">Visibility</li>
                        <li className="basis-[5%]"></li>
                    </ul>
                    {currentProducts.length > 0 ? (
                        currentProducts.map((product) => (
                            <ul
                                key={product.id}
                                className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2"
                            >
                                <li className="basis-[5%]">{product.id}</li>
                                <li className="basis-[23%] flex gap-1 items-center">
                                    <img
                                        src={`/storage/${product.image}`}
                                        alt={product.title}
                                        className="w-12 h-auto object-cover"
                                    />
                                    <h1 className="font-medium">
                                        {product.name}
                                    </h1>
                                </li>
                                <li className="basis-[17%] pl-2">
                                    {product.promotion ? (
                                        <div className="flex items-center gap-1">
                                            <span className="text-red-600 font-semibold">
                                                {(
                                                    product.price -
                                                    (product.price *
                                                        product.promotion) /
                                                        100
                                                ).toFixed(2)}{" "}
                                                $
                                            </span>
                                            <span className="line-through text-sm text-gray-500">
                                                {product.price} $
                                            </span>
                                        </div>
                                    ) : (
                                        <span>{product.price} $</span>
                                    )}
                                </li>
                                <li className="basis-[9%]">{product.rating}</li>
                                <li className="basis-[8%]">{product.stock}</li>
                                <li className="basis-[11%]">
                                    <span className="px-1 py-1 text-xs bg-red-100 text-accentRed rounded-md">
                                        Out of Stock
                                    </span>
                                </li>
                                <li className="basis-[10%]">
                                    {product.promotion
                                        ? `${product.promotion}%`
                                        : "-"}
                                </li>
                                <li className="basis-[12%]">
                                    <Switch
                                        id={`visibility-${product.id}`}
                                        checked={product.visibility === 1}
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
            <div className="mt-8 flex">
                <div className="ml-auto">
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
                                {
                                    length: Math.ceil(
                                        products.length / rowsPerPage
                                    ),
                                },
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
                                        Math.ceil(products.length / rowsPerPage)
                                    }
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </motion.div>
    );
}
