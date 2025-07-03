import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.div
            className="relative"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="py-9 ml-3">
                <h1 className="text-3xl font-medium mb-4">
                    How to Contact Us?
                </h1>
                <p className="lg:w-[75%] w-[93%] md:w-[85%] mb-8 text-sm md:text-base">
                    These are the ways to contact us. You can contact us for
                    anything you want to know. If you weren't satisfied with our
                    services, please let us know. We need your complaints to fix
                    the problem.
                </p>
                <hr className="border-t-gray-400"></hr>
            </div>
        </motion.div>
    );
}
