import ContactForm from "@/Components/Contact/ContactForm";
import FAQs from "@/Components/Contact/FAQs";
import Hero from "@/Components/Contact/Hero";
import Map from "@/Components/Contact/Map";

export default function Contact() {
    return (
        <div className="w-[96%] lg:w-[90%] mx-auto">
            <Hero />
            <ContactForm />
            <Map />
            <FAQs />
        </div>
    );
}
