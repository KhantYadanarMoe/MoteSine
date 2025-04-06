import React from "react";
import { motion } from "framer-motion";

export default function () {
    return (
        <motion.div
            className="my-16"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.250854129098!2d-73.95863912510056!3d40.77849893354363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258bcff650315%3A0xd0e7db23e51d4f29!2s1257%20Lexington%20Ave%20%234b%2C%20New%20York%2C%20NY%2010028%2C%20USA!5e0!3m2!1sen!2smm!4v1740748924372!5m2!1sen!2smm"
                height="350"
                allowFullScreen=""
                loading="lazy"
                className="mx-auto border-none border-r-2 shadow-md w-[90%] md:w-full"
            ></iframe>
        </motion.div>
    );
}
