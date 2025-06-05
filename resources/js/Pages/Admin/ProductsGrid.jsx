import {
    List,
    LayoutPanelLeft,
    Plus,
    Heart,
    Star,
    ShoppingCart,
} from "lucide-react";
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
import { Link } from "react-router-dom";
import { Button } from "../../Components/ui/button";
import Empty from "../../../images/Empty.png";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { useSearch } from "@/contexts/SearchContext";

export default function ProductsGrid() {
    const [loading, setLoading] = useState(true);
    // state to store products
    let [products, setProducts] = useState([]);
    const { query } = useSearch();

    // fetch data that send from backend
    let getProducts = async () => {
        try {
            let res = await axios.get("/api/products");
            let data = res.data;
            setProducts(data.products);
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            setLoading(false);
        }
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getProducts();
    }, []);

    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // rows to show in a page
    const rowsPerPage = 9;

    const filteredProducts = products.filter((product) =>
        product.name?.toLowerCase().includes(query.toLowerCase())
    );

    const indexOfLastProduct = currentPage * rowsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - rowsPerPage;
    const currentProducts = filteredProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const totalPages = Math.ceil(filteredProducts.length / rowsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div>
            {loading ? (
                <p className="text-center font-medium text-accentRed">
                    Loading...
                </p>
            ) : products.length === 0 ? (
                <div className="text-center font-medium text-accentRed flex flex-col items-center justify-center h-[80vh]">
                    <img src={Empty} alt="No data" className="mx-auto w-60" />
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">
                        No data to show.
                    </h2>
                    <p className="text-gray-500 mb-4 text-sm">
                        The table you are looking for is empty.
                    </p>
                </div>
            ) : (
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
                    <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {currentProducts.map((product) => (
                            <div
                                key={product.id}
                                className="px-3 py-4 bg-white border border-gray-400 shadow-lg rounded-xl"
                            >
                                <div className="flex justify-between">
                                    <a href="">
                                        <Heart
                                            size={16}
                                            className="text-accentRed"
                                        />
                                    </a>
                                    <a
                                        href=""
                                        className="text-sm flex items-center gap-1 text-accentYellow"
                                    >
                                        <Star
                                            size={16}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />{" "}
                                        {product.rating}
                                    </a>
                                </div>
                                <img
                                    src={`/storage/${product.image}`}
                                    alt={product.title}
                                    className="w-40 md:w-36 xl:w-32 h-auto object-cover mx-auto my-3"
                                />
                                <div className="flex justify-between items-center my-3">
                                    <div>
                                        <h1 className="font-medium mb-1">
                                            {product.name}
                                        </h1>
                                        <p className="font-medium">
                                            {product.promotion &&
                                            new Date() >=
                                                new Date(product.startDate) &&
                                            new Date() <=
                                                new Date(product.endDate) ? (
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
                                        </p>
                                        {product.promotion &&
                                            new Date() >=
                                                new Date(product.startDate) &&
                                            new Date() <=
                                                new Date(product.endDate) && (
                                                <p className="text-xs text-gray-500">
                                                    Promo period:{" "}
                                                    {dayjs(
                                                        product.startDate
                                                    ).format("MMM D")}{" "}
                                                    -{" "}
                                                    {dayjs(
                                                        product.endDate
                                                    ).format("MMM D")}
                                                </p>
                                            )}
                                    </div>
                                    <button className="bg-accentRed hover:bg-hoverRed duration-300 rounded-full px-2 py-2">
                                        <ShoppingCart
                                            size={16}
                                            className="text-white"
                                        />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex">
                        <div className="ml-auto">
                            <Pagination className="text-accentRed">
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious
                                            onClick={() =>
                                                handlePageChange(
                                                    currentPage - 1
                                                )
                                            }
                                            disabled={currentPage === 1}
                                            className={`cursor-pointer ${
                                                currentPage === 1
                                                    ? "opacity-50 cursor-not-allowed"
                                                    : ""
                                            }`}
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
                                                        handlePageChange(
                                                            index + 1
                                                        )
                                                    }
                                                    isActive={
                                                        currentPage ===
                                                        index + 1
                                                    }
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
                                                handlePageChange(
                                                    currentPage + 1
                                                )
                                            }
                                            className={`cursor-pointer ${
                                                currentPage === totalPages
                                                    ? "opacity-50 cursor-not-allowed"
                                                    : ""
                                            }`}
                                            disabled={
                                                currentPage ===
                                                Math.ceil(
                                                    products.length /
                                                        rowsPerPage
                                                )
                                            }
                                        />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
