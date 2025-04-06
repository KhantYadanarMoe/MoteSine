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

export default function Category() {
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
                <Dialog>
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
                                className="col-span-3 mt-1 border-gray-500"
                            />
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="mt-8 overflow-x-auto">
                <div className="min-w-[920px] lg:min-w-[880px]">
                    <ul className="flex items-center px-3 py-4 bg-accentRed text-white rounded-md shadow-md mb-4">
                        <li className="basis-[5%]">ID</li>
                        <li className="basis-[35%]">Category</li>
                        <li className="basis-[20%]">Availability</li>
                        <li className="basis-[18%] pl-2">Related Menu</li>
                        <li className="basis-[17%]">Created at</li>
                        <li className="basis-[5%]"></li>
                    </ul>
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[35%]">Snacks & Street Food</li>
                        <li className="basis-[20%]">
                            <Switch />
                        </li>
                        <li className="basis-[18%] pl-2">23</li>
                        <li className="basis-[17%]">April 23, 2024</li>
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
                                                    Update the category name
                                                    below.
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
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[35%]">Snacks & Street Food</li>
                        <li className="basis-[20%]">
                            <Switch />
                        </li>
                        <li className="basis-[18%] pl-2">23</li>
                        <li className="basis-[17%]">April 23, 2024</li>
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
                                                    Update the category name
                                                    below.
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
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[35%]">Snacks & Street Food</li>
                        <li className="basis-[20%]">
                            <Switch />
                        </li>
                        <li className="basis-[18%] pl-2">23</li>
                        <li className="basis-[17%]">April 23, 2024</li>
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
                                                    Update the category name
                                                    below.
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
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[35%]">Snacks & Street Food</li>
                        <li className="basis-[20%]">
                            <Switch />
                        </li>
                        <li className="basis-[18%] pl-2">23</li>
                        <li className="basis-[17%]">April 23, 2024</li>
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
                                                    Update the category name
                                                    below.
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
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[35%]">Snacks & Street Food</li>
                        <li className="basis-[20%]">
                            <Switch />
                        </li>
                        <li className="basis-[18%] pl-2">23</li>
                        <li className="basis-[17%]">April 23, 2024</li>
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
                                                    Update the category name
                                                    below.
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
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[35%]">Snacks & Street Food</li>
                        <li className="basis-[20%]">
                            <Switch />
                        </li>
                        <li className="basis-[18%] pl-2">23</li>
                        <li className="basis-[17%]">April 23, 2024</li>
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
                                                    Update the category name
                                                    below.
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
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[35%]">Snacks & Street Food</li>
                        <li className="basis-[20%]">
                            <Switch />
                        </li>
                        <li className="basis-[18%] pl-2">23</li>
                        <li className="basis-[17%]">April 23, 2024</li>
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
                                                    Update the category name
                                                    below.
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
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[35%]">Snacks & Street Food</li>
                        <li className="basis-[20%]">
                            <Switch />
                        </li>
                        <li className="basis-[18%] pl-2">23</li>
                        <li className="basis-[17%]">April 23, 2024</li>
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
                                                    Update the category name
                                                    below.
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
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[35%]">Snacks & Street Food</li>
                        <li className="basis-[20%]">
                            <Switch />
                        </li>
                        <li className="basis-[18%] pl-2">23</li>
                        <li className="basis-[17%]">April 23, 2024</li>
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
                                                    Update the category name
                                                    below.
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
                    <ul className="flex items-center bg-white px-3 py-4 rounded-md shadow-md mb-2">
                        <li className="basis-[5%]">1</li>
                        <li className="basis-[35%]">Snacks & Street Food</li>
                        <li className="basis-[20%]">
                            <Switch />
                        </li>
                        <li className="basis-[18%] pl-2">23</li>
                        <li className="basis-[17%]">April 23, 2024</li>
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
                                                    Update the category name
                                                    below.
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
