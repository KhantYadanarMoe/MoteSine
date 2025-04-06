import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { History, Hash, UserRound, Utensils, Ellipsis } from "lucide-react";
import Profile from "../../../images/Profile.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ReservationHistories() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="w-full lg:w-[73%] flex flex-col gap-6 py-8 px-4 lg:ml-[28%]"
        >
            <div>
                <h1 className="text-xl font-medium flex gap-1 items-center">
                    <History size={20} /> Reservation Histories
                </h1>
                <p className="text-sm text-gray-700 mt-1">
                    You can canceled your order before 24 hours of your reserved
                    time.
                </p>
            </div>

            <div>
                <div className="mt-10">
                    <div className="flex gap-2 items-center">
                        <h1 className="text-xl font-medium">
                            Thursday, 15 March
                        </h1>
                        <span className="text-xl text-gray-600">2025</span>
                    </div>
                    <div className="mt-7">
                        <div className="flex mt-5 mb-4 items-center">
                            <span className="text-gray-700 basis-[28%] md:basis-[15%] border-r border-r-gray-500 mr-1">
                                12:30 PM
                            </span>
                            <div className="flex items-center basis-[28%] md:basis-[20%] text-accentRed">
                                <Hash size={20} />
                                <h1 className="font-medium">H3921</h1>
                            </div>
                            <div className="flex gap-1 items-center basis-[31%] md:basis-[20%]">
                                <UserRound size={20} />
                                <h1>3 guests</h1>
                            </div>
                            <div className="md:basis-[20%] hidden md:block">
                                <div className="flex gap-1 items-center">
                                    <Utensils size={16} />
                                    <div className="flex items-center gap-1">
                                        <h1>Table No.</h1>
                                        <span className=" text-accentRed">
                                            A34
                                        </span>{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="md:basis-[15%] hidden md:block">
                                <span className="text-accentGreen bg-green-100 px-2 py-1 text-sm rounded-md">
                                    Confirmed
                                </span>
                            </div>
                            <div className="basis-[8%] md:basis-[10%]">
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <button className="p-1 rounded-md hover:bg-gray-100 outline-none">
                                            <Ellipsis size={20} />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="end"
                                        className="w-40"
                                    >
                                        <DropdownMenuItem
                                            onClick={() => setIsOpen(true)}
                                        >
                                            View Details
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={() =>
                                                alert(
                                                    "Cancel Reservation Clicked"
                                                )
                                            }
                                            className="text-accentRed hover:text-hoverRed"
                                        >
                                            Cancel Reservation
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        <div className="flex mt-5 mb-4 items-center">
                            <span className="text-gray-700 basis-[28%] md:basis-[15%] border-r border-r-gray-500 mr-1">
                                12:30 PM
                            </span>
                            <div className="flex items-center basis-[28%] md:basis-[20%] text-accentRed">
                                <Hash size={20} />
                                <h1 className="font-medium">H3921</h1>
                            </div>
                            <div className="flex gap-1 items-center basis-[31%] md:basis-[20%]">
                                <UserRound size={20} />
                                <h1>3 guests</h1>
                            </div>
                            <div className="md:basis-[20%] hidden md:block">
                                <div className="flex gap-1 items-center">
                                    <Utensils size={16} />
                                    <div className="flex items-center gap-1">
                                        <h1>Table No.</h1>
                                        <span className=" text-accentRed">
                                            A34
                                        </span>{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="md:basis-[15%] hidden md:block">
                                <span className="text-accentGreen bg-green-100 px-2 py-1 text-sm rounded-md">
                                    Confirmed
                                </span>
                            </div>
                            <div className="basis-[8%] md:basis-[10%]">
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <button className="p-1 rounded-md hover:bg-gray-100 outline-none">
                                            <Ellipsis size={20} />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="end"
                                        className="w-40"
                                    >
                                        <DropdownMenuItem
                                            onClick={() => setIsOpen(true)}
                                        >
                                            View Details
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={() =>
                                                alert(
                                                    "Cancel Reservation Clicked"
                                                )
                                            }
                                            className="text-accentRed"
                                        >
                                            Cancel Reservation
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex gap-2 items-center">
                        <h1 className="text-xl font-medium">
                            Thursday, 15 March
                        </h1>
                        <span className="text-xl text-gray-600">2025</span>
                    </div>
                    <div className="mt-7">
                        <div className="flex mt-5 mb-4 items-center">
                            <span className="text-gray-700 basis-[28%] md:basis-[15%] border-r border-r-gray-500 mr-1">
                                12:30 PM
                            </span>
                            <div className="flex items-center basis-[28%] md:basis-[20%] text-accentRed">
                                <Hash size={20} />
                                <h1 className="font-medium">H3921</h1>
                            </div>
                            <div className="flex gap-1 items-center basis-[31%] md:basis-[20%]">
                                <UserRound size={20} />
                                <h1>3 guests</h1>
                            </div>
                            <div className="md:basis-[20%] hidden md:block">
                                <div className="flex gap-1 items-center">
                                    <Utensils size={16} />
                                    <div className="flex items-center gap-1">
                                        <h1>Table No.</h1>
                                        <span className=" text-accentRed">
                                            A34
                                        </span>{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="md:basis-[15%] hidden md:block">
                                <span className="text-accentGreen bg-green-100 px-2 py-1 text-sm rounded-md">
                                    Confirmed
                                </span>
                            </div>
                            <div className="basis-[8%] md:basis-[10%]">
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <button className="p-1 rounded-md hover:bg-gray-100 outline-none">
                                            <Ellipsis size={20} />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="end"
                                        className="w-40"
                                    >
                                        <DropdownMenuItem
                                            onClick={() => setIsOpen(true)}
                                        >
                                            View Details
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={() =>
                                                alert(
                                                    "Cancel Reservation Clicked"
                                                )
                                            }
                                            className="text-accentRed"
                                        >
                                            Cancel Reservation
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                        <div className="flex mt-5 mb-4 items-center">
                            <span className="text-gray-700 basis-[28%] md:basis-[15%] border-r border-r-gray-500 mr-1">
                                12:30 PM
                            </span>
                            <div className="flex items-center basis-[28%] md:basis-[20%] text-accentRed">
                                <Hash size={20} />
                                <h1 className="font-medium">H3921</h1>
                            </div>
                            <div className="flex gap-1 items-center basis-[31%] md:basis-[20%]">
                                <UserRound size={20} />
                                <h1>3 guests</h1>
                            </div>
                            <div className="md:basis-[20%] hidden md:block">
                                <div className="flex gap-1 items-center">
                                    <Utensils size={16} />
                                    <div className="flex items-center gap-1">
                                        <h1>Table No.</h1>
                                        <span className=" text-accentRed">
                                            A34
                                        </span>{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="md:basis-[15%] hidden md:block">
                                <span className="text-accentGreen bg-green-100 px-2 py-1 text-sm rounded-md">
                                    Confirmed
                                </span>
                            </div>
                            <div className="basis-[8%] md:basis-[10%]">
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <button className="p-1 rounded-md hover:bg-gray-100 outline-none">
                                            <Ellipsis size={20} />
                                        </button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="end"
                                        className="w-40"
                                    >
                                        <DropdownMenuItem
                                            onClick={() => setIsOpen(true)}
                                        >
                                            View Details
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={() =>
                                                alert(
                                                    "Cancel Reservation Clicked"
                                                )
                                            }
                                            className="text-accentRed"
                                        >
                                            Cancel Reservation
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetContent className="w-[93%] md:w-[48%]">
                    <SheetHeader>
                        <SheetTitle>
                            <div className="flex gap-1">
                                Reservation{" "}
                                <div className="flex items-center basis-[28%] md:basis-[20%] text-accentRed">
                                    <Hash size={20} />
                                    <h1 className="font-medium">H3921</h1>
                                </div>
                            </div>
                        </SheetTitle>
                    </SheetHeader>
                    <div className="mt-8">
                        <div className="flex items-center gap-2">
                            <img
                                src={Profile}
                                alt=""
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <h1 className="font-medium">
                                    Khant Yadanar Moe
                                </h1>
                                <span className="text-sm text-gray-700">
                                    Bahan, Yangon
                                </span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center mb-3">
                                <h1 className="font-medium">Date - </h1>
                                <span className="text-sm text-gray-800">
                                    31 Feb 2025
                                </span>
                            </div>
                            <div className="flex justify-between items-center mb-3">
                                <h1 className="font-medium">Time - </h1>
                                <span className="text-sm text-gray-800">
                                    12:30 PM
                                </span>
                            </div>
                            <div className="flex justify-between items-center mb-3">
                                <h1 className="font-medium">Guest - </h1>
                                <span className="text-sm text-gray-800">
                                    3 guests
                                </span>
                            </div>
                            <div className="flex justify-between items-center mb-3">
                                <h1 className="font-medium">Table - </h1>
                                <span className="text-sm text-accentRed">
                                    A46
                                </span>
                            </div>
                            <hr className="border-t-gray-400 mt-4 mb-5" />
                            <div className="flex justify-between items-center mb-3">
                                <h1 className="font-medium">Name - </h1>
                                <span className="text-sm text-gray-800">
                                    Khant Yadanar Moe
                                </span>
                            </div>
                            <div className="flex justify-between items-center mb-3">
                                <h1 className="font-medium">Phone - </h1>
                                <span className="text-sm text-gray-800">
                                    (917) 555-3462
                                </span>
                            </div>
                            <div className="flex justify-between items-center mb-3">
                                <h1 className="font-medium">Email - </h1>
                                <span className="text-sm text-gray-800">
                                    khantyadanarmoe587@gmail.com
                                </span>
                            </div>
                            <hr className="border-t-gray-400 mt-5 mb-3" />
                            <div>
                                <h1 className="font-medium">Message</h1>
                                <p className="text-gray-700 text-xs mt-3">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Dolor dolore suscipit
                                    consequatur veritatis reprehenderit sequi a,
                                    voluptatum in quod magni. Enim saepe
                                    doloremque praesentium deserunt aperiam
                                    architecto ea, distinctio quis?
                                </p>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </motion.div>
    );
}

/* <div>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-[99%] md:w-[90%] mx-auto"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2">
                <div className="p-1">
                  <Card className="bg-white border border-gray-400 shadow-lg border-t-2 border-t-accentRed">
                    <CardContent className="py-3 px-4">
                      <div className="flex justify-between">
                        <div className="flex gap-1 items-center">
                          <CalendarClock size={20} strokeWidth={1.5} />
                          <p className="text-sm font-medium">
                            18.10.2025 - 6:30 PM
                          </p>
                        </div>
                        <div>
                          <p className="px-1 py-1 rounded-md text-accentGreen bg-green-100 text-xs">
                            Confirmed
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between mt-5 mb-3">
                        <div className="flex gap-1">
                          <UsersRound size={20} strokeWidth={1.5} />
                          <p className="text-sm">3 guests</p>
                        </div>
                        <div className="flex gap-1">
                          <Armchair size={20} strokeWidth={1.5} />
                          <p className="text-sm">A47</p>
                        </div>
                      </div>
                      <hr className="border-t-gray-400" />
                      <div className="flex justify-between mt-3">
                        <p className="text-sm font-medium">Name - </p>
                        <p className="text-sm">Khant Yadanar Moe</p>
                      </div>
                      <div className="flex justify-between mt-3">
                        <p className="text-sm font-medium">Email - </p>
                        <p className="text-sm">khantyadanarmoe3478@gmail.com</p>
                      </div>
                      <div className="flex justify-between mt-3 mb-3">
                        <p className="text-sm font-medium">Phone - </p>
                        <p className="text-sm">09251231233</p>
                      </div>
                      <hr className="border-t-gray-400" />
                      <div className="my-3">
                        <p className="text-sm font-medium">Message</p>
                        <p className="text-xs mt-2 h-[3.5rem]">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Nemo, consequatur!
                        </p>
                      </div>
                      <hr className="border-t-gray-400" />
                      <div className="flex justify-end mt-3">
                        <Button
                          variant="default"
                          className="rounded-lg bg-[#E32737] text-white hover:bg-[#B51E2D] duration-300"
                        >
                          Cancel Reservation
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            {/* Carousel Navigation 
            <CarouselPrevious className="hidden md:inline-flex" />
            <CarouselNext className="hidden md:inline-flex" />
          </Carousel>
        </div> */
