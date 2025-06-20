import { Ellipsis, Plus, Clipboard } from "lucide-react";
import { Button } from "@/Components/ui/button";
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
import Empty from "../../../images/Empty.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearch } from "@/contexts/SearchContext";

export default function JobPosts() {
    const [loading, setLoading] = useState(false);
    // state to store jobs
    let [jobs, setJobs] = useState([]);
    const { query } = useSearch();

    // fetch data that send from backend
    let getJobs = async () => {
        setLoading(true);
        try {
            let res = await axios.get("/api/jobs");
            let data = res.data;
            setJobs(data.jobs);
        } catch (error) {
            console.error("Failed to fetch jobs:", error);
        } finally {
            setLoading(false);
        }
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getJobs();
    }, []);

    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // rows to show in a page
    const rowsPerPage = 10;

    const filteredJobs = jobs.filter((job) =>
        job.title?.toLowerCase().includes(query.toLowerCase())
    );

    const indexOfLastJob = currentPage * rowsPerPage;
    const indexOfFirstJob = indexOfLastJob - rowsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

    const totalPages = Math.ceil(filteredJobs.length / rowsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    let deleteJob = async (id) => {
        try {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content");

            let res = await axios.delete("/api/job/" + id, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            setJobs((prev) => prev.filter((job) => job.id !== id));
        } catch (e) {
            console.log(e);
        }
    };

    const JobItemSkeleton = () => (
        <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2 animate-pulse">
            <li className="basis-[4%]">
                <div className="h-3 w-3 bg-gray-300 rounded" />
            </li>
            <li className="basis-[21%]">
                <div className="h-3 w-24 bg-gray-300 rounded" />
            </li>
            <li className="basis-[10%]">
                <div className="h-3 w-12 bg-gray-300 rounded" />
            </li>
            <li className="basis-[42%] pr-4 text-xs">
                <div className="h-3 w-full bg-gray-300 rounded mb-1" />
                <div className="h-3 w-4/5 bg-gray-300 rounded" />
            </li>
            <li className="basis-[18%]">
                <div className="h-3 w-20 bg-gray-300 rounded" />
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
                    {jobs.length} Job Posts Found
                </h1>
                <div className="flex gap-2">
                    <Link to="/admin/jobs/applications">
                        <Button
                            variant="default"
                            className="rounded-lg border bg-lightBackground border-accentRed text-accentRed hover:border-hoverRed hover:text-accentRed hover:bg-gray-200 duration-300 order-1 md:order-2"
                        >
                            <Clipboard size={16} /> Applications
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
                        <li className="basis-[4%]">ID</li>
                        <li className="basis-[21%]">Position</li>
                        <li className="basis-[10%]">Salary</li>
                        <li className="basis-[42%]">Desc</li>
                        <li className="basis-[18%]">Type</li>
                        <li className="basis-[5%]"></li>
                    </ul>
                    {loading ? (
                        Array.from({ length: 6 }).map((_, i) => (
                            <JobItemSkeleton key={i} />
                        ))
                    ) : jobs.length === 0 ? (
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
                            <div className="flex gap-2 mt-2">
                                <Link to="/admin/jobs/applications">
                                    <Button
                                        variant="default"
                                        className="rounded-lg border bg-lightBackground border-accentRed text-accentRed hover:border-hoverRed hover:text-accentRed hover:bg-gray-200 duration-300 order-1 md:order-2"
                                    >
                                        <Clipboard size={16} /> Applications
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
                    ) : (
                        currentJobs.map((job) => (
                            <ul
                                key={job.id}
                                className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2"
                            >
                                <li className="basis-[4%]">{job.id}</li>
                                <li className="basis-[21%]">{job.title}</li>
                                <li className="basis-[10%]">{job.salary} $</li>
                                <li className="basis-[42%] text-xs pr-4">
                                    {job.desc}
                                </li>
                                <li className="basis-[18%]">{job.type}</li>
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
                                            <DropdownMenuItem className="text-accentYellow">
                                                <Link
                                                    to={`/admin/jobs/${job.id}/edit`}
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
                                                                this job post?
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
                                                                    deleteJob(
                                                                        job.id
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
                                        jobs.length / rowsPerPage
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
                                        Math.ceil(jobs.length / rowsPerPage)
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
