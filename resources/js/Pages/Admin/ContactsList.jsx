import { Link } from "react-router-dom";
import { Bell, Ellipsis } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../Components/ui/dropdown-menu";
import { motion } from "framer-motion";

export default function ContactsList() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-2 md:mx-4 my-8"
        >
            <h1 className="font-medium text-lg flex gap-2 items-center">
                Contact Messages <Bell className="text-accentRed" />
            </h1>
            <ul className="mt-7 mb-4 flex space-x-7">
                <li>
                    <Link to="" className="relative hover:text-gray-950 group">
                        New
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
                <li>
                    <Link to="" className="relative hover:text-gray-950 group">
                        Replied
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
                <li>
                    <Link to="" className="relative hover:text-gray-950 group">
                        Marked
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </li>
            </ul>
            <ul className="my-3">
                <li className="px-2 md:px-4 py-3 bg-white shadow-md mb-3 border-l-2 border-l-accentRed">
                    <Link to="/admin/contact/id">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <h1 className="text-sm md:text-base font-medium">
                                    Khant Yadanar Moe{" "}
                                </h1>
                                <p className="text-sm md:text-base text-gray-800">
                                    sent you a message.
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="text-sm text-gray-700 hidden md:block">
                                    23 minutes ago
                                </p>
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
                                            Mark
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-accentRed">
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        <span className="text-xs text-gray-800 mt-1 flex gap-1">
                            khantyadanarmoe3489@gmail.com{" "}
                            <p className="hidden md:block">| (328) 453 784</p>
                        </span>
                        <div className="text-sm truncate text-gray-800 mt-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, laborum doloribus nisi alias molestiae
                            assumenda magni quibusdam mollitia tenetur illo vero
                            ullam voluptatibus, dolorem repudiandae minus vitae
                            repellat, ipsam aperiam animi explicabo! A facere,
                            quod eligendi dolorem nam autem ullam laborum
                            reprehenderit dignissimos est, eos laboriosam ipsum
                            nesciunt et aut!
                        </div>
                    </Link>
                </li>
                <li className="px-2 md:px-4 py-3 bg-white shadow-md mb-3 border-l-2 border-l-accentRed">
                    <Link to="/admin/contact/id">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <h1 className="text-sm md:text-base font-medium">
                                    Khant Yadanar Moe{" "}
                                </h1>
                                <p className="text-sm md:text-base text-gray-800">
                                    sent you a message.
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="text-sm text-gray-700 hidden md:block">
                                    23 minutes ago
                                </p>
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
                                            Mark
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-accentRed">
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        <span className="text-xs text-gray-800 mt-1 flex gap-1">
                            khantyadanarmoe3489@gmail.com{" "}
                            <p className="hidden md:block">| (328) 453 784</p>
                        </span>
                        <div className="text-sm truncate text-gray-800 mt-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, laborum doloribus nisi alias molestiae
                            assumenda magni quibusdam mollitia tenetur illo vero
                            ullam voluptatibus, dolorem repudiandae minus vitae
                            repellat, ipsam aperiam animi explicabo! A facere,
                            quod eligendi dolorem nam autem ullam laborum
                            reprehenderit dignissimos est, eos laboriosam ipsum
                            nesciunt et aut!
                        </div>
                    </Link>
                </li>
                <li className="px-2 md:px-4 py-3 bg-white shadow-md mb-3 border-l-2 border-l-accentRed">
                    <Link to="/admin/contact/id">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <h1 className="text-sm md:text-base font-medium">
                                    Khant Yadanar Moe{" "}
                                </h1>
                                <p className="text-sm md:text-base text-gray-800">
                                    sent you a message.
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="text-sm text-gray-700 hidden md:block">
                                    23 minutes ago
                                </p>
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
                                            Mark
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-accentRed">
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        <span className="text-xs text-gray-800 mt-1 flex gap-1">
                            khantyadanarmoe3489@gmail.com{" "}
                            <p className="hidden md:block">| (328) 453 784</p>
                        </span>
                        <div className="text-sm truncate text-gray-800 mt-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, laborum doloribus nisi alias molestiae
                            assumenda magni quibusdam mollitia tenetur illo vero
                            ullam voluptatibus, dolorem repudiandae minus vitae
                            repellat, ipsam aperiam animi explicabo! A facere,
                            quod eligendi dolorem nam autem ullam laborum
                            reprehenderit dignissimos est, eos laboriosam ipsum
                            nesciunt et aut!
                        </div>
                    </Link>
                </li>
                <li className="px-2 md:px-4 py-3 bg-white shadow-md mb-3 border-l-2 border-l-accentRed">
                    <Link to="/admin/contact/id">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <h1 className="text-sm md:text-base font-medium">
                                    Khant Yadanar Moe{" "}
                                </h1>
                                <p className="text-sm md:text-base text-gray-800">
                                    sent you a message.
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="text-sm text-gray-700 hidden md:block">
                                    23 minutes ago
                                </p>
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
                                            Mark
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-accentRed">
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        <span className="text-xs text-gray-800 mt-1 flex gap-1">
                            khantyadanarmoe3489@gmail.com{" "}
                            <p className="hidden md:block">| (328) 453 784</p>
                        </span>
                        <div className="text-sm truncate text-gray-800 mt-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, laborum doloribus nisi alias molestiae
                            assumenda magni quibusdam mollitia tenetur illo vero
                            ullam voluptatibus, dolorem repudiandae minus vitae
                            repellat, ipsam aperiam animi explicabo! A facere,
                            quod eligendi dolorem nam autem ullam laborum
                            reprehenderit dignissimos est, eos laboriosam ipsum
                            nesciunt et aut!
                        </div>
                    </Link>
                </li>
                <li className="px-2 md:px-4 py-3 bg-white shadow-md mb-3 border-l-2 border-l-accentRed">
                    <Link to="/admin/contact/id">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <h1 className="text-sm md:text-base font-medium">
                                    Khant Yadanar Moe{" "}
                                </h1>
                                <p className="text-sm md:text-base text-gray-800">
                                    sent you a message.
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="text-sm text-gray-700 hidden md:block">
                                    23 minutes ago
                                </p>
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
                                            Mark
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-accentRed">
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        <span className="text-xs text-gray-800 mt-1 flex gap-1">
                            khantyadanarmoe3489@gmail.com{" "}
                            <p className="hidden md:block">| (328) 453 784</p>
                        </span>
                        <div className="text-sm truncate text-gray-800 mt-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, laborum doloribus nisi alias molestiae
                            assumenda magni quibusdam mollitia tenetur illo vero
                            ullam voluptatibus, dolorem repudiandae minus vitae
                            repellat, ipsam aperiam animi explicabo! A facere,
                            quod eligendi dolorem nam autem ullam laborum
                            reprehenderit dignissimos est, eos laboriosam ipsum
                            nesciunt et aut!
                        </div>
                    </Link>
                </li>
                <li className="px-2 md:px-4 py-3 bg-white shadow-md mb-3 border-l-2 border-l-accentRed">
                    <Link to="/admin/contact/id">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <h1 className="text-sm md:text-base font-medium">
                                    Khant Yadanar Moe{" "}
                                </h1>
                                <p className="text-sm md:text-base text-gray-800">
                                    sent you a message.
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="text-sm text-gray-700 hidden md:block">
                                    23 minutes ago
                                </p>
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
                                            Mark
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-accentRed">
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        <span className="text-xs text-gray-800 mt-1 flex gap-1">
                            khantyadanarmoe3489@gmail.com{" "}
                            <p className="hidden md:block">| (328) 453 784</p>
                        </span>
                        <div className="text-sm truncate text-gray-800 mt-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, laborum doloribus nisi alias molestiae
                            assumenda magni quibusdam mollitia tenetur illo vero
                            ullam voluptatibus, dolorem repudiandae minus vitae
                            repellat, ipsam aperiam animi explicabo! A facere,
                            quod eligendi dolorem nam autem ullam laborum
                            reprehenderit dignissimos est, eos laboriosam ipsum
                            nesciunt et aut!
                        </div>
                    </Link>
                </li>
                <li className="px-2 md:px-4 py-3 bg-white shadow-md mb-3 border-l-2 border-l-accentRed">
                    <Link to="/admin/contact/id">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <h1 className="text-sm md:text-base font-medium">
                                    Khant Yadanar Moe{" "}
                                </h1>
                                <p className="text-sm md:text-base text-gray-800">
                                    sent you a message.
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="text-sm text-gray-700 hidden md:block">
                                    23 minutes ago
                                </p>
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
                                            Mark
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-accentRed">
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        <span className="text-xs text-gray-800 mt-1 flex gap-1">
                            khantyadanarmoe3489@gmail.com{" "}
                            <p className="hidden md:block">| (328) 453 784</p>
                        </span>
                        <div className="text-sm truncate text-gray-800 mt-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, laborum doloribus nisi alias molestiae
                            assumenda magni quibusdam mollitia tenetur illo vero
                            ullam voluptatibus, dolorem repudiandae minus vitae
                            repellat, ipsam aperiam animi explicabo! A facere,
                            quod eligendi dolorem nam autem ullam laborum
                            reprehenderit dignissimos est, eos laboriosam ipsum
                            nesciunt et aut!
                        </div>
                    </Link>
                </li>
                <li className="px-2 md:px-4 py-3 bg-white shadow-md mb-3 border-l-2 border-l-accentRed">
                    <Link to="/admin/contact/id">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <h1 className="text-sm md:text-base font-medium">
                                    Khant Yadanar Moe{" "}
                                </h1>
                                <p className="text-sm md:text-base text-gray-800">
                                    sent you a message.
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="text-sm text-gray-700 hidden md:block">
                                    23 minutes ago
                                </p>
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
                                            Mark
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-accentRed">
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        <span className="text-xs text-gray-800 mt-1 flex gap-1">
                            khantyadanarmoe3489@gmail.com{" "}
                            <p className="hidden md:block">| (328) 453 784</p>
                        </span>
                        <div className="text-sm truncate text-gray-800 mt-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, laborum doloribus nisi alias molestiae
                            assumenda magni quibusdam mollitia tenetur illo vero
                            ullam voluptatibus, dolorem repudiandae minus vitae
                            repellat, ipsam aperiam animi explicabo! A facere,
                            quod eligendi dolorem nam autem ullam laborum
                            reprehenderit dignissimos est, eos laboriosam ipsum
                            nesciunt et aut!
                        </div>
                    </Link>
                </li>
                <li className="px-2 md:px-4 py-3 bg-white shadow-md mb-3 border-l-2 border-l-accentRed">
                    <Link to="/admin/contact/id">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <h1 className="text-sm md:text-base font-medium">
                                    Khant Yadanar Moe{" "}
                                </h1>
                                <p className="text-sm md:text-base text-gray-800">
                                    sent you a message.
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="text-sm text-gray-700 hidden md:block">
                                    23 minutes ago
                                </p>
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
                                            Mark
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-accentRed">
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        <span className="text-xs text-gray-800 mt-1 flex gap-1">
                            khantyadanarmoe3489@gmail.com{" "}
                            <p className="hidden md:block">| (328) 453 784</p>
                        </span>
                        <div className="text-sm truncate text-gray-800 mt-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, laborum doloribus nisi alias molestiae
                            assumenda magni quibusdam mollitia tenetur illo vero
                            ullam voluptatibus, dolorem repudiandae minus vitae
                            repellat, ipsam aperiam animi explicabo! A facere,
                            quod eligendi dolorem nam autem ullam laborum
                            reprehenderit dignissimos est, eos laboriosam ipsum
                            nesciunt et aut!
                        </div>
                    </Link>
                </li>
                <li className="px-2 md:px-4 py-3 bg-white shadow-md mb-3 border-l-2 border-l-accentRed">
                    <Link to="/admin/contact/id">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <h1 className="text-sm md:text-base font-medium">
                                    Khant Yadanar Moe{" "}
                                </h1>
                                <p className="text-sm md:text-base text-gray-800">
                                    sent you a message.
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="text-sm text-gray-700 hidden md:block">
                                    23 minutes ago
                                </p>
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
                                            Mark
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-accentRed">
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        <span className="text-xs text-gray-800 mt-1 flex gap-1">
                            khantyadanarmoe3489@gmail.com{" "}
                            <p className="hidden md:block">| (328) 453 784</p>
                        </span>
                        <div className="text-sm truncate text-gray-800 mt-2">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, laborum doloribus nisi alias molestiae
                            assumenda magni quibusdam mollitia tenetur illo vero
                            ullam voluptatibus, dolorem repudiandae minus vitae
                            repellat, ipsam aperiam animi explicabo! A facere,
                            quod eligendi dolorem nam autem ullam laborum
                            reprehenderit dignissimos est, eos laboriosam ipsum
                            nesciunt et aut!
                        </div>
                    </Link>
                </li>
            </ul>
        </motion.div>
    );
}
