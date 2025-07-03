import React, { useState } from "react";
import { Flag, ChevronRight } from "lucide-react";
import { Textarea } from "../../Components/ui/textarea";
import { Button } from "../../Components/ui/button";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function ContactMessage() {
    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const [showReply, setShowReply] = useState(false);
    const [loading, setLoading] = useState(false);

    let getDetails = async (id) => {
        setLoading(true);
        try {
            let res = await axios.get("/api/contacts/" + id);
            let data = res.data;
            setContact(data.contact);
        } catch (err) {
            console.error("Error fetching contact:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getDetails(id);
    }, [id]);

    const markContact = async (id, currentMarked) => {
        try {
            const newMarked = currentMarked ? 0 : 1;

            const res = await axios.post(`/api/contacts/marked/${id}`, {
                marked: newMarked,
            });

            // Update the single contact state directly
            setContact((prevContact) => ({
                ...prevContact,
                marked: newMarked,
            }));
        } catch (error) {
            console.error("Failed to mark contact:", error);
        }
    };

    const [replyText, setReplyText] = useState("");

    const handleReply = async () => {
        try {
            const res = await axios.post(`/api/contacts/reply/${contact.id}`, {
                message: replyText,
            });

            if (res.data.contact) {
                setShowReply(false);
                setContact(res.data.contact); // update UI
                setReplyText(""); // clear box
            }
        } catch (err) {
            console.error("Failed to send reply:", err);
        }
    };

    const ContactSkeleton = () => (
        <>
            <div className="flex items-center gap-1 animate-pulse">
                <div className="h-3 w-24 bg-gray-300 rounded" />
                <div className="h-3 w-32 bg-gray-300 rounded" />
            </div>
            <div className="mt-4 bg-white border-l-2 border-l-gray-300 px-3 py-4 rounded-md shadow-md animate-pulse">
                <div className="flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                        <div className="h-3 w-24 bg-gray-300 rounded" />
                        <div className="h-3 w-3 bg-gray-300 rounded-full" />
                    </div>
                    <div className="h-3 w-16 bg-gray-300 rounded" />
                </div>
                <div className="text-sm flex items-center gap-1 mt-1">
                    <div className="h-2 w-32 bg-gray-300 rounded" />
                    <div className="h-2 w-20 bg-gray-300 rounded hidden md:block" />
                </div>
                <hr className="my-3 border-l-gray-300" />
                <div className="h-3 w-full bg-gray-300 rounded mb-2" />
                <div className="h-3 w-3/4 bg-gray-300 rounded mb-2" />
                <div className="h-3 w-2/3 bg-gray-300 rounded" />
                <div className="flex gap-2 justify-end mt-6">
                    <div className="h-7 w-20 bg-gray-300 rounded" />
                    <div className="h-7 w-20 bg-gray-300 rounded" />
                </div>
            </div>
        </>
    );

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:h-[89vh] lg:h-full mx-2 md:mx-4 my-6"
        >
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                <Link to="/admin/contact" className="hover:text-primary">
                    Contacts
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground">Message</span>
            </nav>
            {contact ? (
                <>
                    <div className="flex items-center gap-1">
                        <p className="text-gray-800">Message from</p>
                        <h1 className="font-medium">{contact.name}</h1>
                    </div>
                    <div className="mt-4 bg-white border-l-2 border-l-accentRed px-3 py-4 rounded-md shadow-md">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-3 items-center">
                                <h1 className="font-medium">{contact.name}</h1>
                                {contact.marked ? (
                                    <Flag
                                        size={16}
                                        className="text-yellow-400 fill-yellow-400"
                                    />
                                ) : null}
                            </div>
                            <p className="text-sm md:text-base text-gray-800">
                                {new Date(
                                    contact.created_at
                                ).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </p>
                        </div>
                        <div className="text-gray-800 text-sm flex items-center gap-1 mt-1">
                            <p>{contact.email}</p>
                            <p className="hidden md:block">
                                {" "}
                                | {contact.phone}
                            </p>
                        </div>
                        <hr className="my-3 border-l-gray-400" />
                        <p className="text-sm md:text-base text-gray-800">
                            {contact.message}
                        </p>
                        <div className="flex gap-1 items-center justify-end mt-6">
                            <Button
                                className="bg-accentGreen hover:bg-hoverGreen text-white"
                                onClick={() => setShowReply(!showReply)}
                            >
                                Reply
                            </Button>
                            <Button
                                onClick={() =>
                                    markContact(contact.id, contact.marked)
                                }
                                className="bg-accentYellow hover:bg-hoverYellow text-black"
                            >
                                {contact.marked ? "Unmark" : "Mark"}
                            </Button>
                        </div>
                    </div>
                </>
            ) : (
                <ContactSkeleton />
            )}
            {showReply && (
                <div className="mt-4 bg-white border-l-2 border-l-accentRed px-3 md:px-4 py-4 md:py-8 rounded-md shadow-md">
                    <Textarea
                        placeholder="Type your reply here..."
                        className="w-full"
                        name="message"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                    />
                    <div className="flex justify-end mt-3">
                        <Button
                            onClick={handleReply}
                            className="mt-2 bg-accentGreen text-white"
                        >
                            Send
                        </Button>
                    </div>
                </div>
            )}
        </motion.div>
    );
}
