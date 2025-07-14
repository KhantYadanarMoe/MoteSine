import Empty from "../../../images/Empty.png";
import { CalendarFold, Clock, ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

export default function LatestBlog() {
    // state to store blogs
    let [blog, setBlog] = useState([]);

    // state for loading
    const [loading, setLoading] = useState(true);

    // fetch data that send from backend
    let getBlogs = async () => {
        setLoading(true);
        try {
            let res = await axios.get("/api/blogs");
            let data = res.data;
            const visibleBlogs = data.blogs.filter(
                (blog) => blog.visibility == 1
            );
            setBlog(visibleBlogs[0] || null); // handle case if no visible blogs
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

    function stripHtml(html) {
        const tmp = document.createElement("div");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }

    function getReadingTime(content) {
        const wordsPerMinute = 200;
        const words = content?.trim().split(/\s+/).length;
        const minutes = Math.ceil(words / wordsPerMinute);
        return `${minutes} min${minutes > 1 ? "s" : ""} read`;
    }

    const BlogSkeletonCard = () => (
        <div className="block md:flex gap-3 lg:gap-0 my-6 animate-pulse">
            <div className="md:w-1/2">
                <div className="w-[97%] h-52 md:h-64 lg:h-72 xl:h-80 bg-gray-200 rounded-md"></div>
            </div>
            <div className="md:w-1/2 flex flex-col justify-end py-3 space-y-3">
                <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                <div className="space-y-2">
                    <div className="h-3 w-full bg-gray-200 rounded"></div>
                    <div className="h-3 w-11/12 bg-gray-200 rounded"></div>
                    <div className="h-3 w-10/12 bg-gray-200 rounded"></div>
                </div>
                <div className="flex gap-5 mt-2">
                    <div className="flex gap-1 items-center">
                        <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                        <div className="w-20 h-3 bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex gap-1 items-center">
                        <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                        <div className="w-16 h-3 bg-gray-200 rounded"></div>
                    </div>
                </div>
                <div className="h-4 w-24 bg-gray-200 rounded mt-3"></div>
            </div>
        </div>
    );

    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            {loading ? (
                <BlogSkeletonCard />
            ) : blog ? (
                <div className="block md:flex gap-3 lg:gap-0 my-6">
                    <div className="md:w-1/2">
                        {blog?.image?.length > 0 && (
                            <img
                                src={`/storage/${blog.image}`}
                                alt="Cover"
                                className="w-[97%] h-52 md:h-64 lg:h-72 xl:h-80 object-cover rounded-md"
                            />
                        )}
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-end py-3">
                        <h1 className="text-xl lg:text-2xl font-medium mb-3">
                            {blog.title}
                        </h1>
                        <p className="text-gray-700 text-xs lg:text-sm">
                            {stripHtml(blog.paragraph)
                                ?.split(" ")
                                .slice(0, 45)
                                .join(" ") + "..."}
                        </p>
                        <div className="flex gap-5 mt-4">
                            <div className="flex gap-1 items-center text-sm lg:text-base">
                                <CalendarFold
                                    size={20}
                                    className="text-gray-800"
                                />
                                <p className="text-gray-800">
                                    {dayjs(blog.created_at).format(
                                        "DD.MM.YYYY"
                                    )}
                                </p>
                            </div>
                            <div className="flex gap-1 items-center text-sm lg:text-base">
                                <Clock size={20} className="text-gray-800" />
                                <p className="text-gray-800">
                                    {getReadingTime(blog?.paragraph)}
                                </p>
                            </div>
                        </div>
                        <Link to={`/blog/${blog.id}`}>
                            <button className="text-accentRed bg-white shadow-none hover:text-hoverRed duration-300 flex gap-1 items-center mt-4">
                                Read More{" "}
                                <ArrowRight size={16} className=" -mb-1" />
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className="col-span-full flex justify-center py-6">
                    <div className="text-center font-medium text-accentRed">
                        <img
                            src={Empty}
                            alt="No data"
                            className="mx-auto w-60"
                        />
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">
                            No latest blog available.
                        </h2>
                        <p className="text-gray-500 mb-4 text-sm">
                            There are no blogs marked as visible at the moment.
                        </p>
                    </div>
                </div>
            )}

            <hr className="border-t-gray-400" />
        </motion.div>
    );
}
