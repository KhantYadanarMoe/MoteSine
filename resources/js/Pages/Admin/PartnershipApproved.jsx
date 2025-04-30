import { Button } from "../../Components/ui/button";
import { Link } from "react-router-dom";
import { Ellipsis } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../Components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../Components/ui/dialog";
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
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function PartnershipApproved() {
    // state to store partnerships
    let [approvedPartnership, setApprovedPartnership] = useState([]);
    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // rows to show in a page
    const rowsPerPage = 10;

    // fetch data that send from backend
    let getApprovedPartnerships = async () => {
        let res = await axios.get("/api/partnership");
        let data = res.data;
        let approved = data.partnerships.filter(
            (partnership) => partnership.status === "approved"
        );

        // Set the approved partnerships state
        setApprovedPartnership(approved);
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getApprovedPartnerships();
    }, []);

    // calculate the last items, first items and set partnerships to show
    const indexOfLastPartnership = currentPage * rowsPerPage;
    const indexOfFirstPartnership = indexOfLastPartnership - rowsPerPage;
    const currentPartnerships = approvedPartnership.slice(
        indexOfFirstPartnership,
        indexOfLastPartnership
    );

    // function for pagination button
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const updateStatus = async (id, newStatus) => {
        try {
            await axios.post(`/api/partnership/status/${id}`, {
                status: newStatus,
            });

            setApprovedPartnership((prev) =>
                newStatus === "approved"
                    ? prev.map((p) =>
                          p.id === id ? { ...p, status: newStatus } : p
                      )
                    : prev.filter((p) => p.id !== id)
            );
        } catch (error) {
            console.error("Failed to update partnership status:", error);
        }
    };

    let deletePartnership = async (id) => {
        try {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content");

            let res = await axios.delete("/api/partnership/" + id, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            setApprovedPartnership((prev) =>
                prev.filter((partnership) => partnership.id !== id)
            );
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:h-[89vh] lg:h-full mx-2 md:mx-4 my-6"
        >
            <h1 className="md:text-lg font-medium">
                {approvedPartnership?.length} Applications Found
            </h1>
            <ul className="mb-5 mt-8 flex space-x-6 mx-2">
                <li>
                    <Link
                        to="/admin/partnership"
                        className="relative hover:text-gray-950 group"
                    >
                        All
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/admin/partnerships/approved"
                        className="relative hover:text-gray-950 group"
                    >
                        Approved
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
                <li>
                    <Link
                        to="/admin/partnerships/rejected"
                        className="relative hover:text-gray-950 group"
                    >
                        Rejected
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
            </ul>
            <hr className="my-2 border-t-gray-400" />
            <div className="mt-8 overflow-x-auto">
                <div className="min-w-[920px] lg:min-w-[880px]">
                    <ul className="flex items-center px-3 py-4 bg-accentRed text-white rounded-md shadow-md mb-4">
                        <li className="basis-[4%]">ID</li>
                        <li className="basis-[22%]">Product Name</li>
                        <li className="basis-[15%] pl-2">Name</li>
                        <li className="basis-[23%]">Email</li>
                        <li className="basis-[17%]">Phone</li>
                        <li className="basis-[14%]">Type</li>
                        <li className="basis-[5%]"></li>
                    </ul>
                    {currentPartnerships.length > 0 ? (
                        currentPartnerships.map((partnership) => (
                            <ul
                                key={partnership.id}
                                className="flex items-center px-3 py-4 rounded-md shadow-md mb-2 bg-[rgba(0,255,0,0.1)]"
                            >
                                <li className="basis-[4%]">{partnership.id}</li>
                                <li className="basis-[22%]">
                                    {partnership.businessName}
                                </li>
                                <li className="basis-[15%]">
                                    {partnership.name}
                                </li>
                                <li className="basis-[23%]">
                                    {partnership.email}
                                </li>
                                <li className="basis-[17%]">
                                    {partnership.phone}
                                </li>
                                <li className="basis-[14%]">
                                    {partnership.type}
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
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button className="text-accentYellow px-2 py-0 bg-white shadow-none hover:bg-white">
                                                        View Details
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>
                                                            {
                                                                partnership.businessName
                                                            }
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            Here's the details
                                                            information of Linn
                                                            Pone Yay Gyi
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <hr className="border-t-gray-400" />
                                                    <div className="space-y-2">
                                                        <span className="flex gap-2">
                                                            <p className="font-medium">
                                                                Business Name:
                                                            </p>{" "}
                                                            {
                                                                partnership.businessName
                                                            }
                                                        </span>
                                                        <span className="flex gap-2">
                                                            <p className="font-medium">
                                                                Owner:
                                                            </p>{" "}
                                                            {partnership.name}
                                                        </span>
                                                        <span className="flex gap-2">
                                                            <p className="font-medium">
                                                                Email:
                                                            </p>
                                                            {partnership.email}
                                                        </span>
                                                        <span className="flex gap-2">
                                                            <p className="font-medium">
                                                                Phone:
                                                            </p>{" "}
                                                            {partnership.phone}
                                                        </span>
                                                        <span className="flex gap-2">
                                                            <p className="font-medium">
                                                                Type:
                                                            </p>{" "}
                                                            {partnership.type}
                                                        </span>
                                                        <span className="flex gap-2">
                                                            <p className="font-medium">
                                                                Address:
                                                            </p>{" "}
                                                            {
                                                                partnership.businessAddress
                                                            }
                                                        </span>
                                                        <span className="flex gap-2">
                                                            <p className="font-medium">
                                                                Website:
                                                            </p>{" "}
                                                            <a
                                                                href=""
                                                                target="_blank"
                                                                className="text-blue-500"
                                                            >
                                                                {
                                                                    partnership.social
                                                                }
                                                            </a>
                                                        </span>
                                                        <span className="flex gap-2">
                                                            <p className="font-medium">
                                                                Certification:
                                                            </p>
                                                            {partnership.certificate ? (
                                                                <a
                                                                    href={`/storage/${partnership.certificate}`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-blue-600 underline"
                                                                >
                                                                    View
                                                                    Certificate
                                                                </a>
                                                            ) : (
                                                                "No"
                                                            )}
                                                        </span>
                                                    </div>
                                                    <hr className="border-t-gray-400" />
                                                    <DialogFooter>
                                                        <Button
                                                            onClick={() =>
                                                                updateStatus(
                                                                    partnership.id,
                                                                    partnership.status ===
                                                                        "rejected"
                                                                        ? null
                                                                        : "rejected"
                                                                )
                                                            }
                                                            className="bg-accentRed hover:bg-hoverRed"
                                                        >
                                                            {partnership.status ===
                                                            "rejected"
                                                                ? "unReject"
                                                                : "Reject"}
                                                        </Button>
                                                        <Button
                                                            onClick={() =>
                                                                updateStatus(
                                                                    partnership.id,
                                                                    partnership.status ===
                                                                        "approved"
                                                                        ? null
                                                                        : "approved"
                                                                )
                                                            }
                                                            className="bg-accentGreen hover:bg-hoverGreen ml-0"
                                                        >
                                                            {partnership.status ===
                                                            "approved"
                                                                ? "Disapprove"
                                                                : "Approve"}
                                                        </Button>
                                                    </DialogFooter>
                                                </DialogContent>
                                            </Dialog>
                                            <DropdownMenuItem
                                                onClick={() =>
                                                    updateStatus(
                                                        partnership.id,
                                                        partnership.status ===
                                                            "approved"
                                                            ? null
                                                            : "approved"
                                                    )
                                                }
                                                className="text-accentGreen"
                                            >
                                                {partnership.status ===
                                                "approved"
                                                    ? "Disapprove"
                                                    : "Approve"}
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                onClick={() =>
                                                    updateStatus(
                                                        partnership.id,
                                                        partnership.status ===
                                                            "rejected"
                                                            ? null
                                                            : "rejected"
                                                    )
                                                }
                                                className="text-accentRed"
                                            >
                                                {partnership.status ===
                                                "rejected"
                                                    ? "Unreject"
                                                    : "Reject"}
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
                                                                    deletePartnership(
                                                                        partnership.id
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
                    ) : (
                        <p className="text-center font-medium text-accentRed">
                            Loading...
                        </p> //add lazy loading after complete
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
                                    className="cursor-pointer"
                                />
                            </PaginationItem>
                            {Array.from(
                                {
                                    length: Math.ceil(
                                        approvedPartnership.length / rowsPerPage
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
                                            approvedPartnership.length /
                                                rowsPerPage
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
