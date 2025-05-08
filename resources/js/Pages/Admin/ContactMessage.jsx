import React, { useState } from "react";
import { Flag } from "lucide-react";
import { Textarea } from "../../Components/ui/textarea";
import { Button } from "../../Components/ui/button";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function ContactMessage() {
    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const [showReply, setShowReply] = useState(false);

    let getDetails = async (id) => {
        try {
            let res = await axios.get("/api/contacts/" + id);
            let data = res.data;
            setContact(data.contact);
        } catch (err) {
            console.error("Error fetching contact:", err);
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

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:h-[89vh] lg:h-full mx-2 md:mx-4 my-6"
        >
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
                <p className="text-center text-accentRed">Loading contact...</p>
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
