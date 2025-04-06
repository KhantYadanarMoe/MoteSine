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
} from "@/components/ui/pagination";
import { Button } from "../../Components/ui/button";
import Mohinga from "../../../images/Mohinga.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MenuGrid() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-4 xl:mx-1 my-8"
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
            <div className="mt-6 flex flex-wrap">
                <div className="w-[100%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart size={20} />
                                    </a>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />
                                        <span className="text-sm font-medium">
                                            4.5
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart size={20} />
                                    </a>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />
                                        <span className="text-sm font-medium">
                                            4.5
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart size={20} />
                                    </a>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />
                                        <span className="text-sm font-medium">
                                            4.5
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart size={20} />
                                    </a>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />
                                        <span className="text-sm font-medium">
                                            4.5
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart size={20} />
                                    </a>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />
                                        <span className="text-sm font-medium">
                                            4.5
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart size={20} />
                                    </a>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />
                                        <span className="text-sm font-medium">
                                            4.5
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart size={20} />
                                    </a>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />
                                        <span className="text-sm font-medium">
                                            4.5
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart size={20} />
                                    </a>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />
                                        <span className="text-sm font-medium">
                                            4.5
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart size={20} />
                                    </a>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />
                                        <span className="text-sm font-medium">
                                            4.5
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] lg:mx-0 mx-auto md:w-1/2 lg:w-1/3 p-1 mt-16">
                    <div className="py-3 relative bg-white border border-gray-400 shadow-lg rounded-lg">
                        <div className="absolute -top-10 mr-3 right-0 flex justify-end">
                            <img
                                src={Mohinga}
                                alt="Mohinga"
                                className="w-[150px] object-cover rounded-full border-4 border-white shadow-md"
                            />
                        </div>

                        <div className="pt-5 px-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-accentRed"
                                    >
                                        <Heart size={20} />
                                    </a>
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Star
                                            size={20}
                                            fill="currentColor"
                                            className="text-accentYellow"
                                        />
                                        <span className="text-sm font-medium">
                                            4.5
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg mt-12 font-semibold">
                                Mohinga
                            </h3>
                            <p className="text-[13px] text-gray-600 mt-2">
                                a popular Burmese dish featuring rice noodles in
                                a flavorful fish broth, garnished with herbs,
                                lime, and crispy fritters.
                            </p>
                            <div className="flex items-center justify-between mt-6">
                                <span className="text-lg font-bold text-gray-800">
                                    6.12 $
                                </span>
                                <button>
                                    <ShoppingCart
                                        size={24}
                                        className="text-accentRed"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
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
