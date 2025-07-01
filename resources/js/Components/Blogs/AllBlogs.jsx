import Blog2 from "../../../images/Vegetables.jpg";
import { CalendarFold, Clock, ArrowRight, Search } from "lucide-react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/ui/pagination";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
import Empty from "../../../images/Empty.png";
import dayjs from "dayjs";

export default function AllBlogs() {
    // state to store blogs
    let [blogs, setBlogs] = useState([]);
    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // rows to show in a page
    const rowsPerPage = 6;
    // state for loading
    const [loading, setLoading] = useState(true);

    // fetch data that send from backend
    let getBlogs = async () => {
        setLoading(true);
        try {
            let res = await axios.get("/api/blogs");
            let data = res.data;
            const visibleBlogs = data.blogs.filter(
                (blog) => blog.visibility === 1
            );
            setBlogs(visibleBlogs);
        } catch (error) {
            console.error("Error fetching menus:", error);
        } finally {
            setLoading(false);
        }
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getBlogs();
    }, []);

    // calculate the last items, first items and set blogs to show
    const indexOfLastBlog = currentPage * rowsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - rowsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(blogs.length / rowsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    function stripHtml(html) {
        const tmp = document.createElement("div");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }

    function getReadingTime(content) {
        const wordsPerMinute = 200;
        const words = content.trim().split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return `${minutes} min${minutes > 1 ? "s" : ""} read`;
    }

    const SkeletonCard = () => (
        <div className="mb-5 animate-pulse">
            <div className="xl:w-[97%] mx-auto">
                <div className="w-full h-52 lg:h-48 xl:h-52 bg-gray-200 rounded-md"></div>
                <div className="mt-3 space-y-2">
                    <div className="h-5 w-2/3 bg-gray-200 rounded"></div>
                    <div className="h-3 w-full bg-gray-200 rounded"></div>
                    <div className="h-3 w-11/12 bg-gray-200 rounded"></div>
                    <div className="h-3 w-10/12 bg-gray-200 rounded"></div>
                    <div className="flex gap-5 mt-4">
                        <div className="flex gap-1 items-center">
                            <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                            <div className="w-20 h-3 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                            <div className="w-16 h-3 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                    <div className="h-4 w-24 bg-gray-200 rounded mt-3"></div>
                </div>
            </div>
        </div>
    );

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="mt-8">
                <div className="flex justify-between mb-8">
                    <div>
                        <h2 className="text-xl md:text-2xl font-medium mb-1 relative inline-block">
                            All Blogs
                        </h2>
                        <div className="flex items-center">
                            <div className="w-10 md:w-20 h-[2px] bg-accentRed"></div>
                            <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                        </div>
                    </div>
                    <div className="block md:flex gap-3">
                        <div className="relative w-full max-w-md hidden md:block">
                            <Search
                                className="absolute left-3 top-1/2 -translate-y-1/3 text-gray-500"
                                size={16}
                            />
                            <Input
                                id=""
                                type="text"
                                placeholder="Search..."
                                className="mt-1 border-gray-500 pl-8 pr-4"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {loading ? (
                        Array.from({ length: 6 }).map((_, idx) => (
                            <SkeletonCard key={idx} />
                        ))
                    ) : currentBlogs.length > 0 ? (
                        currentBlogs.map((blog) => (
                            <div className="mb-5">
                                <div className="xl:w-[97%] mx-auto">
                                    {blog.image?.length > 0 && (
                                        <img
                                            src={`/storage/${blog.image}`}
                                            alt="Cover"
                                            className="w-[100%] h-52 lg:h-48 xl:h-52 object-cover rounded-md"
                                        />
                                    )}
                                    <div className="mt-3">
                                        <h1 className="text-lg font-medium">
                                            {blog.title}
                                        </h1>
                                        <p className="text-gray-700 mt-2 text-sm">
                                            {stripHtml(blog.paragraph)
                                                .split(" ")
                                                .slice(0, 18)
                                                .join(" ") + "..."}
                                        </p>

                                        <div className="flex gap-5 mt-4">
                                            <div className="flex gap-1 items-center text-sm">
                                                <CalendarFold
                                                    size={16}
                                                    className="text-gray-800"
                                                />
                                                <p className="text-gray-800">
                                                    {dayjs(
                                                        blog?.created_at
                                                    ).format("DD.MM.YYYY")}
                                                </p>
                                            </div>
                                            <div className="flex gap-1 items-center text-sm">
                                                <Clock
                                                    size={16}
                                                    className="text-gray-800"
                                                />
                                                <p className="text-gray-800">
                                                    {getReadingTime(
                                                        blog?.paragraph
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                        <Link to={`/blog/${blog.id}`}>
                                            <button className="text-accentRed hover:text-hoverRed bg-white shadow-none duration-300 flex gap-1 items-center mt-4">
                                                Read More{" "}
                                                <ArrowRight
                                                    size={16}
                                                    className=" -mb-1"
                                                />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full flex justify-center py-6">
                            <div className="text-center font-medium text-accentRed">
                                <img
                                    src={Empty}
                                    alt="No data"
                                    className="mx-auto w-60"
                                />
                                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                                    No data to show.
                                </h2>
                                <p className="text-gray-500 mb-4 text-sm">
                                    The data you are looking for is empty.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <div className="mt-4">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() =>
                                        handlePageChange(currentPage - 1)
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
                                        blogs.length / rowsPerPage
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
                                    className={`cursor-pointer ${
                                        currentPage === totalPages
                                            ? "opacity-50 cursor-not-allowed"
                                            : ""
                                    }`}
                                    disabled={
                                        currentPage ===
                                        Math.ceil(blogs.length / rowsPerPage)
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
