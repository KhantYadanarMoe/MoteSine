import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function MenuCategories() {
    // Define state for categories
    const [categories, setCategories] = useState([]);

    // Fetch categories data from backend
    const getCategories = async () => {
        try {
            const response = await axios.get("/api/categories");
            setCategories(response.data.categories);
        } catch (error) {
            console.error("Error fetching categories data: ", error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="md:px-5 px-2 py-12 mx-auto w-[100%] md:w-[85%] lg:w-[70%]">
                <ul className="flex flex-wrap justify-center md:text-base text-sm text-gray-800">
                    {categories.map((category) => (
                        <li
                            key={category.id}
                            className="md:py-4 md:px-4 py-3 px-2"
                        >
                            <Link
                                to={
                                    category.link ||
                                    `/categories/${category.slug}`
                                }
                                className="relative hover:text-gray-950 group"
                            >
                                {category.category}
                                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-[#E32737] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <hr className="border-t-gray-400" />
        </motion.div>
    );
}
