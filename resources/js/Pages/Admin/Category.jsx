import { Button } from "../../Components/ui/button";
import { Plus, LayoutPanelLeft, List, Ellipsis } from "lucide-react";
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
import { Input } from "../../Components/ui/input";
import { Label } from "../../Components/ui/label";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default function Category() {
    // prepare state to store form data
    const [form, setForm] = useState({
        category: "",
    });
    // store errors state
    const [errors, setErrors] = useState({});
    // state to store categories
    let [categories, setCategories] = useState([]);

    const submit = async (e) => {
        e.preventDefault();

        // url and method to use in sending data using axios
        let url = "/api/category/create";
        let method = "post";

        // create new object to store form data to send
        let formData = new FormData();

        console.log("Form Data before submitting:", form);

        // store state data in object
        formData.append("category", form.category);

        console.log("Form data after appending:", formData);

        try {
            const csrfToken = document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content");

            // send data
            const res = await axios[method](url, formData, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                    "Content-Type": "multipart/form-data",
                },
            });

            // success condition
            if (res.data.message === "Category created successfully.") {
                setForm({ category: "" });
                setErrors({});

                // ✅ Close dialog
                setOpen(false);
                await getCategories();
            }
        } catch (error) {
            console.error("Error creating category:", error);

            // failed condition
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            }
        }
    };

    const [open, setOpen] = useState(false);

    // state for pagination
    const [currentPage, setCurrentPage] = useState(1);
    // rows to show in a page
    const rowsPerPage = 10;

    let getCategories = async () => {
        let res = await axios.get("/api/categories");
        let data = res.data;
        setCategories(data.categories);
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getCategories();
    }, []);

    // calculate the last items, first items and set menus to show
    const indexOfLastCategory = currentPage * rowsPerPage;
    const indexOfFirstCategory = indexOfLastCategory - rowsPerPage;
    const currentCategories = categories.slice(
        indexOfFirstCategory,
        indexOfLastCategory
    );

    // function for pagination button
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    dayjs.extend(relativeTime);

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8"
        >
            <div className="flex justify-between md:items-center">
                <h1 className="md:text-lg font-medium">12 Categories Found</h1>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button
                            variant="default"
                            className="rounded-lg bg-accentRed text-white hover:bg-hoverRed duration-300 order-1 md:order-2"
                        >
                            <Plus size={16} /> Create Category
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Create New Category</DialogTitle>
                            <DialogDescription>
                                Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col gap-4 py-4">
                            <Label htmlFor="category" className="text-left">
                                Category Name
                            </Label>
                            <Input
                                id="category"
                                name="category"
                                value={form.category}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        category: e.target.value,
                                    })
                                }
                                className="col-span-3 mt-1 border-gray-500"
                            />
                            {errors.category && (
                                <p className="text-red-500 mt-1 text-sm">
                                    {errors.category[0]}
                                </p>
                            )}
                        </div>
                        <DialogFooter>
                            <Button type="submit" onClick={submit}>
                                Save changes
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="mt-8 overflow-x-auto">
                <div className="min-w-[920px] lg:min-w-[880px]">
                    <ul className="flex items-center px-3 py-4 bg-accentRed text-white rounded-md shadow-md mb-4">
                        <li className="basis-[5%]">ID</li>
                        <li className="basis-[35%]">Category</li>
                        <li className="basis-[15%]">Availability</li>
                        <li className="basis-[18%] pl-2">Related Menu</li>
                        <li className="basis-[22%]">Created at</li>
                        <li className="basis-[5%]"></li>
                    </ul>
                    {currentCategories.length > 0 ? (
                        currentCategories.map((category) => (
                            <ul
                                key={category.id}
                                className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2"
                            >
                                <li className="basis-[5%]">{category.id}</li>
                                <li className="basis-[35%]">
                                    {category.category}
                                </li>
                                <li className="basis-[15%]">
                                    <Switch />
                                </li>
                                <li className="basis-[18%] pl-2">23</li>
                                <li className="basis-[22%]">
                                    {dayjs(category.created_at).fromNow()}
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
                                                        Edit
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>
                                                            Edit Category
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            Update the category
                                                            name below.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <div className="flex flex-col gap-4 py-4">
                                                        <Label
                                                            htmlFor="category"
                                                            className="text-left"
                                                        >
                                                            Category Name
                                                        </Label>
                                                        <Input
                                                            id="category"
                                                            defaultValue="Snacks & Street Food"
                                                            className="col-span-3 mt-1 border-gray-500"
                                                        />
                                                    </div>
                                                    <DialogFooter>
                                                        <Button variant="secondary">
                                                            Cancel
                                                        </Button>
                                                        <Button>Update</Button>
                                                    </DialogFooter>
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
                                        categories.length / rowsPerPage
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
                                            categories.length / rowsPerPage
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
