import Partnership from "../../../images/Partnership.jpg";
import { motion } from "framer-motion";

export default function Who() {
    return (
        <section
            className="relative h-[400px] bg-fixed bg-cover bg-center"
            style={{
                backgroundImage: `url(${Partnership})`,
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="relative z-10 flex items-center justify-end h-full"
            >
                <div className="bg-[rgba(227,39,55,0.8)] w-[90%] md:w-[60%] lg:w-[45%] text-white p-4">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Who can be our partner?
                    </h2>
                    <p className="text-sm md:text-base mb-6">
                        We welcome passionate food entrepreneurs, restaurant
                        owners, and investors who want to bring authentic
                        Burmese flavors to NYC. Join us in sharing rich culinary
                        traditions with the world!
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
