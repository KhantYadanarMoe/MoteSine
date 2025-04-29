import { Link } from "react-router-dom";
import { Bell, Ellipsis, Flag } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../Components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function ContactsList() {
    // state to store contacts
    let [contacts, setContacts] = useState([]);

    // fetch data that send from backend
    let getContacts = async () => {
        let res = await axios.get("/api/contacts");
        let data = res.data;
        setContacts(data.contacts);
    };

    // call data fetching function in useEffect to run when user enter the page
    useEffect(() => {
        getContacts();
    }, []);

    // send marked value to backend
    const markContact = async (id) => {
        try {
            let res = await axios.post("/api/contacts/marked/" + id);
            setContacts((prev) =>
                prev.map((contact) =>
                    contact.id === id
                        ? { ...contact, marked: contact.marked ? 0 : 1 }
                        : contact
                )
            );
        } catch (error) {
            console.error("Failed to mark contact:", error);
        }
    };

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
                {contacts.length > 0 ? (
                    contacts.map((contact) => (
                        <li
                            key={contact.id}
                            className="px-2 md:px-4 py-3 bg-white shadow-md mb-3 border-l-2 border-l-accentRed"
                        >
                            <div className="flex justify-between">
                                <Link to={`/admin/contact/${contact.id}`}>
                                    <div className="flex gap-1 items-center">
                                        <h1 className="text-sm md:text-base font-medium">
                                            {contact.name}
                                        </h1>
                                        <p className="text-sm md:text-base text-gray-800">
                                            sent you a message.
                                        </p>
                                        <p className="text-sm text-gray-700 hidden md:block ml-1">
                                            {new Date(
                                                contact.created_at
                                            ).toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </p>
                                        {contact.marked ? (
                                            <Flag
                                                size={16}
                                                className="text-yellow-400 fill-yellow-400"
                                            />
                                        ) : null}
                                    </div>
                                    <span className="text-xs text-gray-800 mt-1 flex gap-1">
                                        {contact.email}
                                        <p className="hidden md:block">
                                            | {contact.phone}
                                        </p>
                                    </span>
                                    <div className="text-sm truncate text-gray-800 mt-2">
                                        {contact.message
                                            ?.split(" ")
                                            .slice(0, 18)
                                            .join(" ") + "..."}
                                    </div>
                                </Link>
                                <div>
                                    <DropdownMenu modal={false}>
                                        <DropdownMenuTrigger asChild>
                                            <button className="p-1 rounded-md outline-none">
                                                <Ellipsis size={20} />
                                            </button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="end"
                                            className="w-40"
                                        >
                                            <DropdownMenuItem
                                                onClick={() =>
                                                    markContact(contact.id)
                                                }
                                                className={
                                                    contact.marked
                                                        ? "text-accentRed"
                                                        : "text-accentGreen"
                                                }
                                            >
                                                {contact.marked
                                                    ? "Remove Mark"
                                                    : "Mark"}
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-accentRed">
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </li>
                    ))
                ) : (
                    <p className="text-center font-medium text-accentRed">
                        Loading...
                    </p> //add lazy loading after complete
                )}
            </ul>
        </motion.div>
    );
}
