import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Career() {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <hr className="border-t-gray-400" />
            <div className="px-5 md:px-10 py-2">
                <p className="text-xl">Careers</p>
                <div className="md:flex justify-between py-6">
                    <p className="md:w-1/4 lg:w-2/5 text-lg font-medium">
                        Positions we needed
                    </p>
                    <p className="md:w-3/4 lg:w-3/5 text-gray-800 md:px-3 text-sm md:text-base mt-2 md:mt-0">
                        We're looking for passionate individuals to join us!
                        Explore our current openings and be part of an
                        innovative team. If you’re ready to grow with us, check
                        out the available positions and apply today.
                    </p>
                </div>
                <div className="my-5 md:my-8">
                    <div>
                        <hr className="border-t-gray-400" />
                        <div className="px-2 py-2 flex justify-between items-center">
                            <div className="w-[35%] md:w-[55%]">
                                <h1 className="font-medium">Delivery Man</h1>
                                <p className="text-gray-800 text-sm hidden md:block">
                                    can deliver on time, familiar with GPS apps,
                                    can drive well, good customer service, good
                                    problem-solving skills
                                </p>
                            </div>
                            <div className="w-[50%] md:w-[35%] px-5">
                                <p className="text-gray-900 text-sm md:text-base">
                                    $35-50 Per Hour
                                </p>
                                <p className="text-gray-800 text-sm md:text-base">
                                    Part-time
                                </p>
                            </div>
                            <div className="w-[15%] md:w-[10%]">
                                <Link
                                    to="Form"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="cursor-pointer"
                                >
                                    <ArrowDownRight size={28} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr className="border-t-gray-400" />
                        <div className="px-2 py-2 flex justify-between items-center">
                            <div className="w-[35%] md:w-[55%]">
                                <h1 className="font-medium">Delivery Man</h1>
                                <p className="text-gray-800 text-sm hidden md:block">
                                    can deliver on time, familiar with GPS apps,
                                    can drive well, good customer service, good
                                    problem-solving skills
                                </p>
                            </div>
                            <div className="w-[50%] md:w-[35%] px-5">
                                <p className="text-gray-900 text-sm md:text-base">
                                    $35-50 Per Hour
                                </p>
                                <p className="text-gray-800 text-sm md:text-base">
                                    Part-time
                                </p>
                            </div>
                            <div className="w-[15%] md:w-[10%]">
                                <Link
                                    to="Form"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="cursor-pointer"
                                >
                                    <ArrowDownRight size={28} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr className="border-t-gray-400" />
                        <div className="px-2 py-2 flex justify-between items-center">
                            <div className="w-[35%] md:w-[55%]">
                                <h1 className="font-medium">Delivery Man</h1>
                                <p className="text-gray-800 text-sm hidden md:block">
                                    can deliver on time, familiar with GPS apps,
                                    can drive well, good customer service, good
                                    problem-solving skills
                                </p>
                            </div>
                            <div className="w-[50%] md:w-[35%] px-5">
                                <p className="text-gray-900 text-sm md:text-base">
                                    $35-50 Per Hour
                                </p>
                                <p className="text-gray-800 text-sm md:text-base">
                                    Part-time
                                </p>
                            </div>
                            <div className="w-[15%] md:w-[10%]">
                                <Link
                                    to="Form"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="cursor-pointer"
                                >
                                    <ArrowDownRight size={28} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <hr className="border-t-gray-400" />
                        <div className="px-2 py-2 flex justify-between items-center">
                            <div className="w-[35%] md:w-[55%]">
                                <h1 className="font-medium">Delivery Man</h1>
                                <p className="text-gray-800 text-sm hidden md:block">
                                    can deliver on time, familiar with GPS apps,
                                    can drive well, good customer service, good
                                    problem-solving skills
                                </p>
                            </div>
                            <div className="w-[50%] md:w-[35%] px-5">
                                <p className="text-gray-900 text-sm md:text-base">
                                    $35-50 Per Hour
                                </p>
                                <p className="text-gray-800 text-sm md:text-base">
                                    Part-time
                                </p>
                            </div>
                            <div className="w-[15%] md:w-[10%]">
                                <Link
                                    to="Form"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="cursor-pointer"
                                >
                                    <ArrowDownRight size={28} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
