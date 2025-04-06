import ReservationBg from "../../../images/ReservationBg.jpg";
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Input } from "../ui/input";

export default function Hero() {
    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <img
                src={ReservationBg}
                alt="Reservation Background"
                className="w-full h-60 md:h-72 lg:h-[22rem] object-cover"
            />

            <div className="md:absolute md:bottom-0 md:left-0 md:ml-4 lg:ml-12 md:translate-y-1/2 w-[97%] mx-auto md:mx-0 md:w-auto bg-white md:shadow-xl p-3 mt-4 md:mt-0 rounded-lg">
                <div className="mb-5 block md:hidden">
                    <h2 className="text-xl font-semibold mb-1 relative inline-block">
                        Check Availability
                    </h2>
                    <div className="flex items-center">
                        <div className="w-28 h-[2px] bg-accentRed"></div>
                        <div className="w-1 h-1 bg-accentRed rounded-full ml-2"></div>
                    </div>
                </div>
                <form className="flex flex-col md:flex-row gap-4 md:items-end">
                    <div className="flex flex-col gap-1 px-2">
                        <label htmlFor="guest" className="font-medium">
                            Guest
                        </label>
                        <Input
                            id="guest"
                            type="number"
                            placeholder="Enter number"
                            className="mt-1 border-gray-500"
                        />
                    </div>

                    <div className="flex flex-col gap-1 px-2">
                        <label htmlFor="Time" className="font-medium">
                            Time
                        </label>
                        <TimePicker minTime={540} maxTime={1320} />
                    </div>

                    <div className="flex flex-col gap-1 px-2">
                        <label htmlFor="Date" className="font-medium">
                            Date
                        </label>
                        <DatePicker />
                    </div>

                    <Button
                        variant="outline"
                        className="rounded-lg border-accentRed text-accentRed hover:bg-gray-100 hover:text-hoverRed hover:border-hoverRed duration-300"
                    >
                        Check Availability
                    </Button>
                </form>
            </div>
        </motion.div>
    );
}
