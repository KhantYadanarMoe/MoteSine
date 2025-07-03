import { Button } from "../../Components/ui/button";
import { Star, Ellipsis } from "lucide-react";
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
import { Switch } from "../../Components/ui/switch";
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
import Profile from "../../../images/Profile.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import Empty from "../../../images/Empty.png";
import axios from "axios";
import { useEffect } from "react";
import { useSearch } from "@/contexts/SearchContext";

export default function ReviewsList() {
    const [loading, setLoading] = useState(false);
    // state to store reviews
    let [reviews, setReviews] = useState([]);
    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // rows to show in a page
    const rowsPerPage = 10;
    const { query } = useSearch();

    // fetch data that send from backend
    let getReviews = async () => {
        setLoading(true);
        try {
            let res = await axios.get("/api/reviews");
            let data = res.data;
            setReviews(data.reviews);
        } catch (error) {
            console.error("Failed to fetch reviews:", error);
        } finally {
            setLoading(false);
        }
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getReviews();
    }, []);

    const filteredReviews = reviews.filter((review) =>
        review.name?.toLowerCase().includes(query.toLowerCase())
    );

    const indexOfLastReview = currentPage * rowsPerPage;
    const indexOfFirstReview = indexOfLastReview - rowsPerPage;
    const currentReviews = filteredReviews.slice(
        indexOfFirstReview,
        indexOfLastReview
    );

    const totalPages = Math.ceil(filteredReviews.length / rowsPerPage);
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const renderStars = (rating) => {
        const full = Math.floor(rating);
        const hasHalf = rating % 1 >= 0.25 && rating % 1 < 0.75;
        const empty = 5 - full - (hasHalf ? 1 : 0);
        const stars = [];

        for (let i = 0; i < full; i++) {
            stars.push(
                <Star
                    key={`full-${i}`}
                    size={20}
                    fill="currentColor"
                    className="text-accentYellow"
                />
            );
        }

        if (hasHalf) {
            stars.push(
                <Star
                    key="half"
                    size={20}
                    fill="currentColor"
                    className="text-accentYellow"
                    style={{ clipPath: "inset(0 50% 0 0)" }}
                />
            );
        }

        for (let i = 0; i < empty; i++) {
            stars.push(
                <Star
                    key={`empty-${i}`}
                    size={20}
                    className="text-accentYellow"
                />
            );
        }

        return stars;
    };

    const [visibility, setVisibility] = useState({});

    useEffect(() => {
        const stored = JSON.parse(
            localStorage.getItem("reviewVisibility") || "{}"
        );
        setVisibility(stored);
    }, []);

    const toggleVisibility = (id, checked) => {
        const updated = { ...visibility, [id]: checked };
        setVisibility(updated);
        localStorage.setItem("reviewVisibility", JSON.stringify(updated));
    };

    let deleteReview = async (id) => {
        try {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content");

            let res = await axios.delete("/api/review/" + id, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            setReviews((prev) => prev.filter((review) => review.id !== id));
        } catch (e) {
            console.log(e);
        }
    };

    const ReviewItemSkeleton = () => (
        <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2 animate-pulse">
            <li className="basis-[5%]">
                <div className="h-3 w-3 bg-gray-300 rounded" />
            </li>
            <li className="basis-[20%]">
                <div className="h-3 w-24 bg-gray-300 rounded" />
            </li>
            <li className="basis-[12%] pl-2 flex items-center gap-1">
                <div className="w-4 h-4 bg-gray-300 rounded-full" />
                <div className="h-3 w-6 bg-gray-300 rounded" />
            </li>
            <li className="basis-[43%] pr-5">
                <div className="h-3 w-full bg-gray-300 rounded" />
            </li>
            <li className="basis-[15%]">
                <div className="h-5 w-12 bg-gray-300 rounded-full" />
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
            <h1 className="md:text-lg font-medium">
                {reviews.length} Reviews Found
            </h1>
            <div className="mt-8 overflow-x-auto">
                <div className="min-w-[920px] lg:min-w-[880px]">
                    <ul className="flex items-center px-3 py-4 bg-accentRed text-white rounded-md shadow-md mb-4">
                        <li className="basis-[5%]">ID</li>
                        <li className="basis-[20%]">User</li>
                        <li className="basis-[12%] pl-2">Rating</li>
                        <li className="basis-[43%]">Review</li>
                        <li className="basis-[15%]">Visibility</li>
                        <li className="basis-[5%]"></li>
                    </ul>
                    {loading ? (
                        Array.from({ length: 6 }).map((_, i) => (
                            <ReviewItemSkeleton key={i} />
                        ))
                    ) : reviews.length === 0 ? (
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
                        currentReviews.map((review) => (
                            <ul
                                key={review.id}
                                className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2"
                            >
                                <li className="basis-[5%]">{review.id}</li>
                                <li className="basis-[20%]">
                                    <h1 className="font-medium">
                                        {review.name}
                                    </h1>
                                </li>
                                <li className="basis-[12%] pl-2 flex items-center gap-1">
                                    <Star
                                        size={20}
                                        fill="currentColor"
                                        className="text-accentYellow"
                                    />
                                    {review.rating}
                                </li>
                                <li className="basis-[43%] truncate pr-5">
                                    {review.review
                                        ?.split(" ")
                                        .slice(0, 20)
                                        .join(" ") + "..."}
                                </li>
                                <li className="basis-[15%]">
                                    <Switch
                                        checked={visibility[review.id] || false}
                                        onCheckedChange={(checked) =>
                                            toggleVisibility(review.id, checked)
                                        }
                                    />
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
                                            <Dialog modal>
                                                <DialogTrigger asChild>
                                                    <Button className="text-accentGreen px-2 py-0 bg-white shadow-none hover:bg-white">
                                                        View
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <div>
                                                        <div className="flex items-center gap-2">
                                                            <img
                                                                src={Profile}
                                                                alt="profile"
                                                                className="w-16 h-16 object-cover rounded-full border border-accentRed"
                                                            />
                                                            <div>
                                                                <h1 className="text-base font-medium">
                                                                    {
                                                                        review.name
                                                                    }
                                                                </h1>
                                                                <p className="text-sm text-gray-700 mt-2">
                                                                    {
                                                                        review.phone
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <p className="mt-4 text-sm text-gray-800">
                                                            {review.review}
                                                        </p>
                                                        <div className="flex gap-1 mt-3">
                                                            {renderStars(
                                                                review.rating
                                                            )}
                                                        </div>
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
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
                                                                this review?
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
                                                                    deleteReview(
                                                                        review.id
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
                    <Pagination className="text-accentRed">
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
                                        reviews.length / rowsPerPage
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
                                        Math.ceil(reviews.length / rowsPerPage)
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
