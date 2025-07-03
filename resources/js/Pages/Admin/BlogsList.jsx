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
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../Components/ui/alert-dialog";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Empty from "../../../images/Empty.png";
import axios from "axios";
import { useSearch } from "@/contexts/SearchContext";

export default function BlogsList() {
    const [loading, setLoading] = useState(false);
    // state to store blogs
    let [blogs, setBlogs] = useState([]);
    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // rows to show in a page
    const rowsPerPage = 10;
    const { query } = useSearch();

    // fetch data that send from backend
    let getBlogs = async () => {
        setLoading(true);
        try {
            let res = await axios.get("/api/blogs");
            let data = res.data;
            setBlogs(data.blogs);
        } catch (error) {
            console.error("Failed to fetch blogs:", error);
        } finally {
            setLoading(false);
        }
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getBlogs();
    }, []);

    const filteredBlogs = blogs.filter((blog) =>
        blog.title?.toLowerCase().includes(query.toLowerCase())
    );

    const indexOfLastBlog = currentPage * rowsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - rowsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(filteredBlogs.length / rowsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    let deleteBlog = async (id) => {
        try {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content");

            let res = await axios.delete("/api/blog/" + id, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            setBlogs((prev) => prev.filter((blog) => blog.id !== id));
        } catch (e) {
            console.log(e);
        }
    };

    const BlogItemSkeleton = () => (
        <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2 animate-pulse">
            <li className="basis-[5%]">
                <div className="h-3 w-3 bg-gray-300 rounded" />
            </li>
            <li className="basis-[21%] flex items-center gap-2">
                <div className="w-11 h-11 bg-gray-300 rounded-md" />
            </li>
            <li className="basis-[30%] pr-2">
                <div className="h-3 w-40 bg-gray-300 rounded" />
            </li>
            <li className="basis-[12%]">
                <div className="h-5 w-16 bg-gray-300 rounded-full" />
            </li>
            <li className="basis-[12%]">
                <div className="h-3 w-8 bg-gray-300 rounded" />
            </li>
            <li className="basis-[15%]">
                <div className="h-3 w-24 bg-gray-300 rounded mb-1" />
                <div className="h-3 w-16 bg-gray-300 rounded" />
            </li>
            <li className="basis-[5%]">
                <div className="w-4 h-4 bg-gray-300 rounded-full" />
            </li>
        </ul>
    );

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
                    {blogs.length} Blogs Found
                </h1>
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
                    {loading ? (
                        Array.from({ length: 6 }).map((_, i) => (
                            <BlogItemSkeleton key={i} />
                        ))
                    ) : blogs.length === 0 ? (
                        <div className="absolute inset-0 z-10  bg-lightBackground flex flex-col items-center justify-center text-center font-medium text-accentRed h-full">
                            <img
                                src={Empty}
                                alt="No data"
                                className="mx-auto w-60"
                            />
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">
                                No data to show.
                            </h2>
                            <p className="text-gray-500 mb-4 text-sm">
                                The table you are looking for is empty.
                            </p>
                            <Link
                                to="/admin/blogs/create"
                                className="flex items-end gap-1 pt-3"
                            >
                                <Button
                                    variant="default"
                                    className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300 order-1 md:order-2"
                                >
                                    Add Blog
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        currentBlogs.map((blog) => (
                            <ul
                                key={blog.id}
                                className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2"
                            >
                                <li className="basis-[5%]">{blog.id}</li>
                                <li className="basis-[21%] flex gap-1 items-center">
                                    {blog.image && (
                                        <img
                                            src={`/storage/${blog.image}`}
                                            alt="blog img"
                                            className="w-11 h-11 object-cover rounded-md"
                                        />
                                    )}
                                </li>
                                <li className="basis-[30%] font-medium text-sm pr-2">
                                    {blog.title}
                                </li>
                                <li className="basis-[12%]">
                                    {blog.visibility === 1 ? (
                                        <span className="px-1 py-1 rounded-md bg-green-100 text-accentGreen text-sm">
                                            Publish
                                        </span>
                                    ) : (
                                        <span className="px-1 py-1 rounded-md bg-gray-100 text-gray-500 text-sm">
                                            Draft
                                        </span>
                                    )}
                                </li>
                                <li className="basis-[12%]">{blog?.view}</li>
                                <li className="basis-[15%]">
                                    <p className="text-sm">
                                        {new Date(
                                            blog.created_at
                                        ).toLocaleDateString()}
                                    </p>
                                    <p className="text-sm">
                                        {new Date(
                                            blog.created_at
                                        ).toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </p>
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
                                                <Link
                                                    to={`/admin/blogs/${blog.id}/edit`}
                                                >
                                                    Edit
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <button className="text-accentRed bg-white w-full text-left px-2 py-2">
                                                            Delete
                                                        </button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>
                                                                Are you sure you
                                                                want to delete
                                                                this menu?
                                                            </AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                This action
                                                                cannot be
                                                                undone.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>
                                                                Cancel
                                                            </AlertDialogCancel>
                                                            <AlertDialogAction
                                                                onClick={() =>
                                                                    deleteBlog(
                                                                        blog.id
                                                                    )
                                                                }
                                                            >
                                                                Delete
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                            </ul>
                        ))
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
