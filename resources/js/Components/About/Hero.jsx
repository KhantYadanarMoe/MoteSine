import Chef from "../../../images/chef.jpg";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

export default function AboutHero() {
    return (
        <motion.div
            className="py-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="w-[96%] lg:w-[90%] mx-auto mb-5 px-3">
                <h1 className="my-3 text-6xl font-medium">About us</h1>
                <hr className="border-t-gray-800" />
                <div className="block md:flex gap-3 mt-3">
                    <ul className="w-1/2 hidden md:flex space-x-3 lg:space-x-6 text-gray-800">
                        <li>
                            <Link
                                to="Aim"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="relative hover:text-gray-950 group cursor-pointer"
                            >
                                What We Aim For
                                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="Exist"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="relative hover:text-gray-950 group cursor-pointer"
                            >
                                Why We Exist
                                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="Work"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="relative hover:text-gray-950 group cursor-pointer"
                            >
                                How We Work
                                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-accentRed transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    </ul>
                    <p className="w-full lg:text-base text-sm mt-4 md:mt-0 md:w-1/2 text-gray-800">
                        Here's What we are aiming for, Why we are existing, and
                        How we are working for you to treat your homesick
                        through your taste bud. We, the team of Mote Sine, work
                        harder day by day to make you feel like you finally eat
                        the dishes your mom make for you in our restaurant. We
                        know no one can replace the definition of Mom and the
                        dishes she made for you, but let us try as much as
                        possible to take back home just in minutes.
                    </p>
                </div>
            </div>
            <img
                src={Chef}
                alt=""
                className="w-[90%] mx-auto h-[200px] md:h-[270px] lg:h-[340px] object-cover mt-12 rounded-lg"
            />
        </motion.div>
    );
}
