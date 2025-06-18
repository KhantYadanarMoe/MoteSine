import About from "@/Components/Jobs/About";
import ApplyForm from "@/Components/Jobs/ApplyForm";
import Career from "@/Components/Jobs/Career";
import Hero from "@/Components/Jobs/Hero";
import Loading from "@/Components/Loading";
import { useState } from "react";

export default function Jobs() {
    const [submitting, setSubmitting] = useState(false);
    return submitting ? (
        <Loading />
    ) : (
        <>
            <Hero />
            <About />
            <Career />
            <ApplyForm setSubmitting={setSubmitting} />
        </>
    );
}
