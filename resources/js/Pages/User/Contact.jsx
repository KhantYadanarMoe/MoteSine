import ContactForm from "@/Components/Contact/ContactForm";
import FAQs from "@/Components/Contact/FAQs";
import Hero from "@/Components/Contact/Hero";
import Map from "@/Components/Contact/Map";
import Loading from "@/Components/Loading";
import { useState } from "react";

export default function Contact() {
    const [submitting, setSubmitting] = useState(false);
    return submitting ? (
        <Loading />
    ) : (
        <div className="w-[96%] lg:w-[90%] mx-auto">
            <Hero />
            <ContactForm setSubmitting={setSubmitting} />
            <Map />
            <FAQs />
        </div>
    );
}
