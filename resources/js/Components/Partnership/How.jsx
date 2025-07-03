import { motion } from "framer-motion";

export default function How() {
    return (
        <div className="w-[93%] mx-auto py-5">
            <div>
                <h2 className="text-2xl font-semibold mb-1 relative inline-block">
                    How Partnership Work?
                </h2>
                <div className="flex items-center">
                    <div className="w-28 h-[2px] bg-accentRed"></div>
                    <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                </div>
            </div>
            <div className="md:grid grid-cols-3 gap-2 lg:gap-3 my-5">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="px-2 py-3"
                >
                    <h1 className="font-medium text-3xl md:text-5xl text-accentRed">
                        01.
                    </h1>
                    <h1 className="font-medium text-lg">Partner With Us</h1>
                    <p className="text-gray-800 mt-2 text-sm">
                        Apply and collaborate with our team to plan and set up
                        your Burmese food venture.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="px-2 py-3 md:mt-10"
                >
                    <h1 className="font-medium text-3xl md:text-5xl text-accentRed">
                        02.
                    </h1>
                    <h1 className="font-medium text-lg">Launch & Grow</h1>
                    <p className="text-gray-800 mt-2 text-sm">
                        Bring authentic Burmese flavors to NYC with our support
                        in branding, marketing, and operations.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="px-2 py-3 md:mt-20"
                >
                    <h1 className="font-medium text-3xl md:text-5xl text-accentRed">
                        03.
                    </h1>
                    <h1 className="font-medium text-lg">Profit & Succeed</h1>
                    <p className="text-gray-800 mt-2 text-sm">
                        Build a successful venture with a growing customer base
                        and ongoing partnership benefits.
                    </p>
                </motion.div>
            </div>
            <hr className="border-t-gray-400" />
        </div>
    );
}
