import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQs() {
    return (
        <motion.div
            className="block md:flex gap-3"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className="px-3 w-full md:w-1/2">
                <p className="text-base text-gray-800">FAQs</p>
                <h1 className="text-3xl lg:text-5xl font-medium">
                    Frequently Asked Questions.
                </h1>
            </div>
            <div className="px-4 md:my-0 my-4 w-full md:w-1/2">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Can I order food from everywhere?
                        </AccordionTrigger>
                        <AccordionContent>
                            No, sorry. We only can delivery our dishes in NYC.
                            But if you want some instant food like Mohinga
                            paste, you can order from everywhere.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            How can I make a table reservation?
                        </AccordionTrigger>
                        <AccordionContent>
                            You can reserve a table online through our website.
                            Just visit the Reservation page, select your
                            preferred date and time, check it is available and
                            confirm your booking.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            What are your delivery hours?
                        </AccordionTrigger>
                        <AccordionContent>
                            Our delivery service is available from 10:00 AM to
                            9:00 PM every day. Orders placed after this time
                            will be scheduled for the next day.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Do you accept cash on delivery (COD)?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, we only accept COD for better customer
                            experience. You can trust us to order food and paid
                            for it at your doorstep.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            Can I modify or cancel my reservation?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, you can modify or cancel your reservation
                            through your account. If you need assistance, feel
                            free to contact us.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </motion.div>
    );
}
