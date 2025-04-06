import { Ellipsis, Plus } from "lucide-react";
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
import { Link } from "react-router-dom";
import { Button } from "../../Components/ui/button";

export default function JobApplications() {
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
                    34 Applications Found
                </h1>
                <Link to="/admin/jobs/create">
                    <Button
                        variant="default"
                        className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300 order-1 md:order-2"
                    >
                        <Plus size={16} /> Upload Job
                    </Button>
                </Link>
            </div>
            <div className="mt-8 overflow-x-auto">
                <div className="min-w-[920px] lg:min-w-[880px]">
                    <ul className="flex items-center px-3 py-4 bg-accentRed text-white rounded-md shadow-md mb-4">
                        <li className="basis-[4%]">ID</li>
                        <li className="basis-[18%]">Name</li>
                        <li className="basis-[27%] pl-2">Email</li>
                        <li className="basis-[13%]">Phone</li>
                        <li className="basis-[13%]">Position</li>
                        <li className="basis-[20%]">Resume</li>
                        <li className="basis-[5%]"></li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[18%]">Khant Yadanar Moe</li>
                        <li className="basis-[27%] text-sm">
                            khantyadanarmoe478@gmail.com
                        </li>
                        <li className="basis-[13%] text-sm">(376) 459 786</li>
                        <li className="basis-[13%]">Delivery Man</li>
                        <li className="basis-[20%] text-sm">
                            <a href="" className="text-blue-600 underline">
                                KhantYadanarMoe.pdf
                            </a>
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
                                    <DropdownMenuItem className="text-accentGreen">
                                        Checked
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[18%]">Khant Yadanar Moe</li>
                        <li className="basis-[27%] text-sm">
                            khantyadanarmoe478@gmail.com
                        </li>
                        <li className="basis-[13%] text-sm">(376) 459 786</li>
                        <li className="basis-[13%]">Delivery Man</li>
                        <li className="basis-[20%] text-sm">
                            <a href="" className="text-blue-600 underline">
                                KhantYadanarMoe.pdf
                            </a>
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
                                    <DropdownMenuItem className="text-accentGreen">
                                        Checked
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[18%]">Khant Yadanar Moe</li>
                        <li className="basis-[27%] text-sm">
                            khantyadanarmoe478@gmail.com
                        </li>
                        <li className="basis-[13%] text-sm">(376) 459 786</li>
                        <li className="basis-[13%]">Delivery Man</li>
                        <li className="basis-[20%] text-sm">
                            <a href="" className="text-blue-600 underline">
                                KhantYadanarMoe.pdf
                            </a>
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
                                    <DropdownMenuItem className="text-accentGreen">
                                        Checked
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[18%]">Khant Yadanar Moe</li>
                        <li className="basis-[27%] text-sm">
                            khantyadanarmoe478@gmail.com
                        </li>
                        <li className="basis-[13%] text-sm">(376) 459 786</li>
                        <li className="basis-[13%]">Delivery Man</li>
                        <li className="basis-[20%] text-sm">
                            <a href="" className="text-blue-600 underline">
                                KhantYadanarMoe.pdf
                            </a>
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
                                    <DropdownMenuItem className="text-accentGreen">
                                        Checked
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[18%]">Khant Yadanar Moe</li>
                        <li className="basis-[27%] text-sm">
                            khantyadanarmoe478@gmail.com
                        </li>
                        <li className="basis-[13%] text-sm">(376) 459 786</li>
                        <li className="basis-[13%]">Delivery Man</li>
                        <li className="basis-[20%] text-sm">
                            <a href="" className="text-blue-600 underline">
                                KhantYadanarMoe.pdf
                            </a>
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
                                    <DropdownMenuItem className="text-accentGreen">
                                        Checked
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[18%]">Khant Yadanar Moe</li>
                        <li className="basis-[27%] text-sm">
                            khantyadanarmoe478@gmail.com
                        </li>
                        <li className="basis-[13%] text-sm">(376) 459 786</li>
                        <li className="basis-[13%]">Delivery Man</li>
                        <li className="basis-[20%] text-sm">
                            <a href="" className="text-blue-600 underline">
                                KhantYadanarMoe.pdf
                            </a>
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
                                    <DropdownMenuItem className="text-accentGreen">
                                        Checked
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[18%]">Khant Yadanar Moe</li>
                        <li className="basis-[27%] text-sm">
                            khantyadanarmoe478@gmail.com
                        </li>
                        <li className="basis-[13%] text-sm">(376) 459 786</li>
                        <li className="basis-[13%]">Delivery Man</li>
                        <li className="basis-[20%] text-sm">
                            <a href="" className="text-blue-600 underline">
                                KhantYadanarMoe.pdf
                            </a>
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
                                    <DropdownMenuItem className="text-accentGreen">
                                        Checked
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[18%]">Khant Yadanar Moe</li>
                        <li className="basis-[27%] text-sm">
                            khantyadanarmoe478@gmail.com
                        </li>
                        <li className="basis-[13%] text-sm">(376) 459 786</li>
                        <li className="basis-[13%]">Delivery Man</li>
                        <li className="basis-[20%] text-sm">
                            <a href="" className="text-blue-600 underline">
                                KhantYadanarMoe.pdf
                            </a>
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
                                    <DropdownMenuItem className="text-accentGreen">
                                        Checked
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[18%]">Khant Yadanar Moe</li>
                        <li className="basis-[27%] text-sm">
                            khantyadanarmoe478@gmail.com
                        </li>
                        <li className="basis-[13%] text-sm">(376) 459 786</li>
                        <li className="basis-[13%]">Delivery Man</li>
                        <li className="basis-[20%] text-sm">
                            <a href="" className="text-blue-600 underline">
                                KhantYadanarMoe.pdf
                            </a>
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
                                    <DropdownMenuItem className="text-accentGreen">
                                        Check
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[4%]">1</li>
                        <li className="basis-[18%]">Khant Yadanar Moe</li>
                        <li className="basis-[27%] text-sm">
                            khantyadanarmoe478@gmail.com
                        </li>
                        <li className="basis-[13%] text-sm">(376) 459 786</li>
                        <li className="basis-[13%]">Delivery Man</li>
                        <li className="basis-[20%] text-sm">
                            <a href="" className="text-blue-600 underline">
                                KhantYadanarMoe.pdf
                            </a>
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
                                    <DropdownMenuItem className="text-accentGreen">
                                        Checked
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-accentRed">
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 flex">
                <div className="ml-auto">
                    <Pagination className="text-accentREbg-accentRed">
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
