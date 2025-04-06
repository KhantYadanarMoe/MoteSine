import { motion } from "framer-motion";

export default function JobAbout() {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="py-8">
                <hr className="border-t-gray-400" />
                <div className="px-5 md:px-10 py-6 md:flex justify-between">
                    <p className="md:w-1/4 lg:w-2/5 font-medium text-xl md:text-2xl lg:text-4xl">
                        About Us
                    </p>
                    <div className="md:w-3/4 lg:w-3/5">
                        <p className="md:text-lg py-3">
                            At Mote Sine, we serve authentic Burmese food for
                            those who miss home and those eager to try something
                            new. Whether you prefer dine-in or delivery, we
                            bring the rich flavors of Burma to your table.
                        </p>
                        <p className="text-sm md:text-base py-1 md:py-3">
                            Want to earn extra income while satisfying people’s
                            cravings? We’re hiring! Join our team and be part of
                            a restaurant that shares the taste of home. Apply
                            now!
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
