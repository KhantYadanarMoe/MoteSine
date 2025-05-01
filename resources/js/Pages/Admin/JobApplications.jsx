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
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function JobApplications() {
    // state to store applications
    let [applications, setApplications] = useState([]);

    // fetch data that send from backend
    let getApplications = async () => {
        let res = await axios.get("/api/jobs/applications");
        let data = res.data;
        setApplications(data.applications);
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getApplications();
    }, []);

    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // rows to show in a page
    const rowsPerPage = 10;

    // calculate the last items, first items and set applications to show
    const indexOfLastApplication = currentPage * rowsPerPage;
    const indexOfFirstApplication = indexOfLastApplication - rowsPerPage;
    const currentApplications = applications.slice(
        indexOfFirstApplication,
        indexOfLastApplication
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
                    {currentApplications.length > 0 ? (
                        currentApplications.map((application) => (
                            <ul
                                key={application.id}
                                className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2"
                            >
                                <li className="basis-[4%]">{application.id}</li>
                                <li className="basis-[18%]">
                                    {application.firstName}{" "}
                                    {application.lastName}
                                </li>
                                <li className="basis-[27%] text-sm">
                                    {application.email}
                                </li>
                                <li className="basis-[13%] text-sm">
                                    {application.phone}
                                </li>
                                <li className="basis-[13%]">
                                    {application.position}
                                </li>
                                <li className="basis-[20%] text-sm">
                                    <a
                                        href={`/storage/${application.resume}`}
                                        className="text-blue-600 underline"
                                        download
                                    >
                                        {application.firstName}
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
                    <Pagination className="text-accentREbg-accentRed">
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
                                        applications.length / rowsPerPage
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
                                        Math.ceil(
                                            applications.length / rowsPerPage
                                        )
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
