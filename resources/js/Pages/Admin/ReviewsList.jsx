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
import Profile from "../../../images/profile.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function ReviewsList() {
    // state to store reviews
    let [reviews, setReviews] = useState([]);
    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // rows to show in a page
    const rowsPerPage = 10;

    // fetch data that send from backend
    let getReviews = async () => {
        let res = await axios.get("/api/reviews");
        let data = res.data;
        setReviews(data.reviews);
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getReviews();
    }, []);

    // calculate the last items, first items and set reviews to show
    const indexOfLastReview = currentPage * rowsPerPage;
    const indexOfFirstReview = indexOfLastReview - rowsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    // function for pagination button
    const handlePageChange = (page) => {
        setCurrentPage(page);
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

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8"
        >
            <h1 className="md:text-lg font-medium">27 Reviews Found</h1>
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
                    {currentReviews.length > 0 ? (
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
                                        .slice(0, 18)
                                        .join(" ") + "..."}
                                </li>
                                <li className="basis-[15%]">
                                    <Switch id="visibility" />
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
