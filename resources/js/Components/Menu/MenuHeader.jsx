import { Search, ArrowUpWideNarrow, ArrowDownWideNarrow } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { useSearch } from "@/contexts/SearchContext";

export default function MenuHeader({ selectedCategory }) {
    const [isOpen, setIsOpen] = useState(false);
    const { setQuery } = useSearch();

    const toggleDropdown = () => setIsOpen(!isOpen);
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="flex justify-between my-4 mx-2">
                <div>
                    <h2 className="text-xl md:text-2xl font-medium mb-1 relative inline-block">
                        {selectedCategory || "All Menus"}
                    </h2>
                    <div className="flex items-center">
                        <div className="w-12 md:w-20 h-[2px] bg-accentRed"></div>
                        <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                    </div>
                </div>
                <div className="block md:flex gap-3">
                    <div>
                        <div className="relative w-full max-w-md hidden md:block">
                            <Search
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                                size={16}
                            />
                            <Input
                                id=""
                                type="text"
                                placeholder="Search..."
                                className="mt-1 border-gray-500 pl-8 pr-4"
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
