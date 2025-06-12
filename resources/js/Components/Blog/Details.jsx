import BlogImg from "../../../images/Vegetables.jpg";
import { CalendarFold, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import dayjs from "dayjs";

export default function Details() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    let getDetails = async (id) => {
        try {
            let res = await axios.get("/api/blog/" + id);
            let data = res.data;
            setBlog(data.blog);
        } catch (err) {
            console.error("Error fetching blog:", err);
        }
    };

    const incrementView = async (id) => {
        try {
            await axios.post(`/api/blog/${id}/view`);
        } catch (err) {
            console.error("Error incrementing view:", err);
        }
    };

    useEffect(() => {
        getDetails(id);
        incrementView(id);
    }, [id]);

    console.log(blog);

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div>
                <div className="flex gap-6 justify-center">
                    <p className="text-gray-700 flex items-center gap-1">
                        <CalendarFold size={16} />
                        {dayjs(blog?.created_at).format("DD.MM.YYYY")}
                    </p>
                    <p className="text-gray-700 flex items-center gap-1">
                        <Clock size={16} />
                        {dayjs(blog?.created_at).format("hh:mm A")}
                    </p>
                </div>
                <h1 className="text-xl md:text-3xl lg:text-4xl font-medium my-3 text-center">
                    {blog?.title}
                </h1>
                <div
                    className="rich-text-content"
                    dangerouslySetInnerHTML={{ __html: blog?.paragraph }}
                />

                {blog?.image?.length > 0 && (
                    <img
                        src={`/storage/${blog.image}`}
                        alt="Main blog image"
                        className="w-full h-60 md:h-80 object-cover rounded-lg my-7"
                    />
                )}
            </div>
        </motion.div>
    );
}
