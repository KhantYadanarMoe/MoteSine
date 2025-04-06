import { motion } from "framer-motion";

export default function JobHero() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="py-5">
                <div className="px-5 md:px-10 py-8">
                    <p className="text-sm text-gray-800 w-[75%] md:w-[45%] lg:w-[25%] mb-2">
                        Be part of a dynamic environment where your skills
                        shine. Apply today!
                    </p>
                    <h1 className="text-4xl md:text-5xl font-medium">
                        Join Our Team!
                    </h1>
                </div>
            </div>
        </motion.div>
    );
}
