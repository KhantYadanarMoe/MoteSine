import Loading from "@/Components/Loading";
import ApplyForm from "@/Components/Partnership/ApplyForm";
import Hero from "@/Components/Partnership/Hero";
import How from "@/Components/Partnership/How";
import Who from "@/Components/Partnership/Who";
import Why from "@/Components/Partnership/Why";
import { useState } from "react";

export default function Partnership() {
    const [submitting, setSubmitting] = useState(false);
    return submitting ? (
        <Loading />
    ) : (
        <>
            <Hero />
            <Why />
            <Who />
            <How />
            <ApplyForm setSubmitting={setSubmitting} />
        </>
    );
}
