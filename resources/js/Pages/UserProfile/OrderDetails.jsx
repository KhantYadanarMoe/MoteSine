import Mohinga from "../../../images/Mohinga.png";
import Logo from "../../../images/Logo.png";
import { motion } from "framer-motion";

export default function OrderDetails() {
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-[73%] flex flex-col gap-6 py-8 px-4 lg:ml-[28%]"
        >
            <div className="md:flex gap-3">
                <div className="md:w-3/5">
                    <h1 className="text-2xl font-medium">
                        Order <span className="text-accentRed">#J3489</span>
                    </h1>
                    <div className="mt-6">
                        <ul className="flex items-center justify-between border-t-2 border-t-accentRed py-5 px-3 shadow-md">
                            <li className="basis-[53%] md:basis-[45%] ml-1 text-sm">
                                Order Items
                            </li>
                            <li className="basis-[15%] md:basis-[12%] ml-1 text-sm">
                                QTY
                            </li>
                            <li className="md:basis-[18%] hidden md:block ml-1 text-sm">
                                Price
                            </li>
                            <li className="basis-[32%] md:basis-[25%] ml-1 text-sm">
                                Total
                            </li>
                        </ul>
                        <ul className="flex items-center justify-between mt-2 py-3 px-3 shadow-md">
                            <li className="basis-[53%] md:basis-[45%] ml-1 text-sm flex gap-1 items-center">
                                <img
                                    src={Mohinga}
                                    alt="mohinga"
                                    className="w-12 h-12 object-cover"
                                />
                                <h1 className="font-medium text-sm">Mohinga</h1>
                            </li>
                            <li className="basis-[15%] md:basis-[12%] ml-1 text-sm">
                                x 2
                            </li>
                            <li className="md:basis-[18%] hidden md:block ml-1 text-sm">
                                6.12 $
                            </li>
                            <li className="basis-[32%] md:basis-[25%] ml-1 text-sm">
                                12.24 $
                            </li>
                        </ul>
                        <ul className="flex items-center justify-between mt-2 py-3 px-3 shadow-md">
                            <li className="basis-[53%] md:basis-[45%] ml-1 text-sm flex gap-1 items-center">
                                <img
                                    src={Mohinga}
                                    alt="mohinga"
                                    className="w-12 h-12 object-cover"
                                />
                                <h1 className="font-medium text-sm">Mohinga</h1>
                            </li>
                            <li className="basis-[15%] md:basis-[12%] ml-1 text-sm">
                                x 2
                            </li>
                            <li className="md:basis-[18%] hidden md:block ml-1 text-sm">
                                6.12 $
                            </li>
                            <li className="basis-[32%] md:basis-[25%] ml-1 text-sm">
                                12.24 $
                            </li>
                        </ul>
                        <ul className="flex items-center justify-between mt-2 py-3 px-3 shadow-md">
                            <li className="basis-[53%] md:basis-[45%] ml-1 text-sm flex gap-1 items-center">
                                <img
                                    src={Mohinga}
                                    alt="mohinga"
                                    className="w-12 h-12 object-cover"
                                />
                                <h1 className="font-medium text-sm">Mohinga</h1>
                            </li>
                            <li className="basis-[15%] md:basis-[12%] ml-1 text-sm">
                                x 2
                            </li>
                            <li className="md:basis-[18%] hidden md:block ml-1 text-sm">
                                6.12 $
                            </li>
                            <li className="basis-[32%] md:basis-[25%] ml-1 text-sm">
                                12.24 $
                            </li>
                        </ul>
                        <ul className="flex items-center justify-between mt-2 py-3 px-3 shadow-md">
                            <li className="basis-[53%] md:basis-[45%] ml-1 text-sm flex gap-1 items-center">
                                <img
                                    src={Mohinga}
                                    alt="mohinga"
                                    className="w-12 h-12 object-cover"
                                />
                                <h1 className="font-medium text-sm">Mohinga</h1>
                            </li>
                            <li className="basis-[15%] md:basis-[12%] ml-1 text-sm">
                                x 2
                            </li>
                            <li className="md:basis-[18%] hidden md:block ml-1 text-sm">
                                6.12 $
                            </li>
                            <li className="basis-[32%] md:basis-[25%] ml-1 text-sm">
                                12.24 $
                            </li>
                        </ul>
                    </div>
                    <div className="mt-3">
                        <div className="flex items-center justify-between mt-2 py-3 px-3">
                            <h1 className="text-base">Total - </h1>
                            <h1 className="font-medium mr-4">23.07 $</h1>
                        </div>
                    </div>
                    <div className="py-5 px-3 mt-3 shadow-md rounded-md">
                        <div className="flex justify-between mb-3">
                            <h1 className="text-sm font-medium">
                                Customer Name -
                            </h1>
                            <p className="text-sm">Khant Yadanar Moe</p>
                        </div>
                        <div className="flex justify-between mb-3">
                            <h1 className="text-sm font-medium">
                                Phone Number -
                            </h1>
                            <p className="text-sm">(917) 555-3462</p>
                        </div>
                        <div className="flex justify-between mb-3">
                            <h1 className="text-sm font-medium">Email -</h1>
                            <p className="text-sm">khant239@gmail.com</p>
                        </div>
                    </div>
                    <div className="my-5 px-3 py-4 border-t-2 border-t-accentRed bg-white shadow-lg rounded-md">
                        <h1 className="text-lg font-medium">
                            Scheduled Delivery
                        </h1>
                        <div className="py-5">
                            <div className="flex justify-between mb-3">
                                <h1 className="text-sm font-medium">
                                    Scheduled Date -
                                </h1>
                                <p className="text-sm">23.3.2025</p>
                            </div>
                            <div className="flex justify-between mb-3">
                                <h1 className="text-sm font-medium">
                                    Scheduled Time -
                                </h1>
                                <p className="text-sm">12:45 PM</p>
                            </div>
                            <div className="mb-3">
                                <h1 className="text-sm font-medium">Note -</h1>
                                <p className="mt-1 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Quidem, consequuntur
                                    corrupti sequi qui libero dolorem sed
                                    doloribus nobis, ullam enim, sunt labore
                                    voluptatibus tenetur incidunt quia odio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-2/5">
                    <img
                        src={Logo}
                        alt="Mote Sine"
                        className="w-24 h-auto my-3"
                    />
                    <p className="text-sm text-gray-700">
                        If you want to change something for this order, contact
                        us via phone.
                    </p>
                    <div className="mt-3 py-3 px-3 shadow-md rounded-md">
                        <div className="flex justify-between items-center mb-5">
                            <h1 className="text-sm font-medium">
                                Order Summary
                            </h1>
                            <p className="text-accentGreen bg-[#d7ffc7] rounded-lg p-1 text-sm">
                                Pending
                            </p>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <h1 className="text-sm font-medium">Date -</h1>
                            <p className="text-sm">12.1.2025</p>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <h1 className="text-sm font-medium">Time -</h1>
                            <p className="text-sm">12:32 PM</p>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <h1 className="text-sm font-medium">Subtotal - </h1>
                            <p className="text-sm">23.07 $</p>
                        </div>
                        <div className="flex justify-between items-center mb-3">
                            <h1 className="text-sm font-medium">
                                Delivery fee -
                            </h1>
                            <p className="text-sm">0 $</p>
                        </div>
                    </div>
                    <div className="mt-3 py-3 px-3 shadow-md rounded-md border-t-2 border-t-accentRed">
                        <h1 className="text-base font-medium">
                            Delivery Address
                        </h1>
                        <p className="text-gray-900 mt-2 text-sm">
                            843 West 57th Street, Apt 12C, New York, NY 10019,
                            USA
                        </p>
                    </div>
                    <div className="mt-3 py-3 px-3 shadow-md rounded-md">
                        <h1 className="font-medium text-sm">Note</h1>
                        <p className="text-sm text-gray-800">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    {/* <div className="mt-3 py-3 px-3 shadow-md rounded-md">
            <h1 className="text-sm font-medium">Scheduled Delivery</h1>
            <div className="flex justify-between items-center mt-5 mb-3">
              <h1 className="text-sm font-medium">Scheduled Date -</h1>
              <p className="text-sm">23.3.2025</p>
            </div>
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-sm font-medium">Scheduled Time -</h1>
              <p className="text-sm">12:45 PM</p>
            </div>
            <div className="mb-3">
              <h1 className="text-sm font-medium">Note - </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
                exercitationem delectus sapiente asperiores, dolores libero
                dolore! Nesciunt iure quia eveniet? Quis at atque,
                necessitatibus molestias sed reprehenderit!
              </p>
            </div>
          </div> */}
                </div>
            </div>
        </motion.div>
    );
}
