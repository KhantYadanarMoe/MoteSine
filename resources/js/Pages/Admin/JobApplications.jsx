import { Ellipsis, Plus, CircleCheckBig, StickyNote } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../Components/ui/dropdown-menu";
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
import Empty from "../.././../images/Empty.png";
import axios from "axios";
import { useSearch } from "@/contexts/SearchContext";

export default function JobApplications() {
    const [loading, setLoading] = useState(false);
    // state to store applications
    let [applications, setApplications] = useState([]);
    const { query } = useSearch();

    // fetch data that send from backend
    let getApplications = async () => {
        setLoading(true);
        try {
            let res = await axios.get("/api/jobs/applications");
            let data = res.data;
            setApplications(data.applications);
        } catch (error) {
            console.error("Failed to fetch applications:", error);
        } finally {
            setLoading(false);
        }
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getApplications();
    }, []);

    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // rows to show in a page
    const rowsPerPage = 10;

    const filteredApplications = applications.filter(
        (application) =>
            application.firstName
                ?.toLowerCase()
                .includes(query.toLowerCase()) ||
            application.lastName?.toLowerCase().includes(query.toLowerCase()) ||
            application.position?.toLowerCase().includes(query.toLowerCase())
    );

    const indexOfLastApplication = currentPage * rowsPerPage;
    const indexOfFirstApplication = indexOfLastApplication - rowsPerPage;
    const currentApplications = filteredApplications.slice(
        indexOfFirstApplication,
        indexOfLastApplication
    );

    const totalPages = Math.ceil(filteredApplications.length / rowsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const checked = async (id, currentChecked) => {
        try {
            let newChecked = currentChecked ? 0 : 1;

            let res = await axios.post("/api/jobs/applications/checked/" + id, {
                checked: newChecked,
            });
            setApplications((prevApplications) =>
                prevApplications.map((application) =>
                    application.id === id
                        ? { ...application, checked: newChecked }
                        : application
                )
            );
        } catch (error) {
            console.error("Failed to check application:", error);
        }
    };

    let deleteApplication = async (id) => {
        try {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content");

            let res = await axios.delete("/api/jobs/application/" + id, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            setApplications((prev) =>
                prev.filter((application) => application.id !== id)
            );
        } catch (e) {
            console.log(e);
        }
    };

    const ApplicationSkeleton = () => (
        <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2 animate-pulse">
            <li className="basis-[4%]">
                <div className="w-4 h-4 rounded-full bg-gray-300" />
            </li>
            <li className="basis-[4%]">
                <div className="h-3 w-3 bg-gray-300 rounded" />
            </li>
            <li className="basis-[18%]">
                <div className="h-3 w-24 bg-gray-300 rounded" />
            </li>
            <li className="basis-[23%] text-sm">
                <div className="h-3 w-32 bg-gray-300 rounded" />
            </li>
            <li className="basis-[13%] text-sm">
                <div className="h-3 w-20 bg-gray-300 rounded" />
            </li>
            <li className="basis-[13%]">
                <div className="h-3 w-20 bg-gray-300 rounded" />
            </li>
            <li className="basis-[20%] text-sm">
                <div className="h-3 w-24 bg-gray-300 rounded" />
            </li>
            <li className="basis-[5%]">
                <div className="w-4 h-4 rounded-full bg-gray-300" />
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
                    {applications.length} Applications Found
                </h1>
                <div className="flex gap-2 mt-2">
                    <Link to="/admin/jobs">
                        <Button
                            variant="default"
                            className="rounded-lg border bg-lightBackground border-accentRed text-accentRed hover:border-hoverRed hover:text-accentRed hover:bg-gray-200 duration-300 order-1 md:order-2"
                        >
                            <StickyNote size={16} /> Job Posts
                        </Button>
                    </Link>
                    <Link to="/admin/jobs/create">
                        <Button
                            variant="default"
                            className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300 order-1 md:order-2"
                        >
                            <Plus size={16} /> Upload Job
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="mt-8 overflow-x-auto">
                <div className="min-w-[920px] lg:min-w-[880px]">
                    <ul className="flex items-center px-3 py-4 bg-accentRed text-white rounded-md shadow-md mb-4">
                        <li className="basis-[4%]"></li>
                        <li className="basis-[4%]">ID</li>
                        <li className="basis-[18%]">Name</li>
                        <li className="basis-[23%] pl-2">Email</li>
                        <li className="basis-[13%]">Phone</li>
                        <li className="basis-[13%]">Position</li>
                        <li className="basis-[20%]">Resume</li>
                        <li className="basis-[5%]"></li>
                    </ul>
                    {loading ? (
                        Array.from({ length: 6 }).map((_, i) => (
                            <ApplicationSkeleton key={i} />
                        ))
                    ) : applications.length === 0 ? (
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
                        </div>
                    ) : (
                        currentApplications.map((application) => (
                            <ul
                                key={application.id}
                                className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2"
                            >
                                <li className="basis-[4%]">
                                    {application.checked === 1 && (
                                        <CircleCheckBig
                                            size={24}
                                            className="text-green-600"
                                        />
                                    )}
                                </li>
                                <li className="basis-[4%]">{application.id}</li>
                                <li className="basis-[18%]">
                                    {application.firstName}{" "}
                                    {application.lastName}
                                </li>
                                <li className="basis-[23%] text-sm">
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
                                            <DropdownMenuItem
                                                onClick={() =>
                                                    checked(
                                                        application.id,
                                                        application.checked
                                                    )
                                                }
                                                className="text-accentGreen"
                                            >
                                                {application.checked
                                                    ? "Unchecked"
                                                    : "Checked"}
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
                                                                this job
                                                                application?
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
                                                                    deleteApplication(
                                                                        application.id
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
                    <Pagination className="text-accentREbg-accentRed">
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
                                    className={`cursor-pointer ${
                                        currentPage === totalPages
                                            ? "opacity-50 cursor-not-allowed"
                                            : ""
                                    }`}
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
