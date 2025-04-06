import { Input } from "@/components/ui/input";
import Logo from "../../../images/Logo.png";
import AuthBg from "../../../images/auth-bg.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="block md:flex">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="md:w-2/5 lg:w-1/2"
            >
                <img
                    src={AuthBg}
                    alt=""
                    className="h-48 md:h-screen w-full object-cover"
                />
            </motion.div>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="md:w-3/5 lg:w-1/2 px-5 flex items-center lg:my-0 my-5 lg:h-screen"
            >
                <div className="w-[97%] md:w-[90%] lg:w-[87%] mx-auto">
                    <img src={Logo} alt="" className="w-28 h-auto mb-2" />
                    <p className="text-sm text-gray-800">
                        Order the food that can make your taste bud feel like
                        you're HOME.
                    </p>
                    <form action="" className="mt-5">
                        <div className="mb-5">
                            <h2 className="text-2xl font-semibold mb-1 relative inline-block">
                                Login
                            </h2>
                            <div className="flex items-center">
                                <div className="w-12 h-[2px] bg-accentRed"></div>
                                <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="mb-1">
                                Name
                            </label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                className="mt-1 border-gray-500"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="mb-1">
                                Password
                            </label>
                            <Input
                                id="password"
                                type="text"
                                placeholder="Enter your password"
                                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson focus:border-crimson text-gray-700"
                            />
                        </div>
                        <a href="" className="text-sm text-gray-800 ">
                            Forgot Password?
                        </a>
                        <Button
                            variant="default"
                            className="rounded-lg bg-accentRed mt-4 text-white w-full hover:bg-hoverRed duration-300"
                        >
                            Login
                        </Button>
                        <p className="text-sm text-gray-800 text-center mt-1">
                            Don't have an Account?{" "}
                            <Link
                                to="/register"
                                className="text-accentRed underline"
                            >
                                Register
                            </Link>
                        </p>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
