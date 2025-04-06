import Details from "@/Components/Blog/Details";
import Featured from "@/Components/Blog/Featured";
import React from "react";

export default function Blog() {
    return (
        <div className="w-[92%] md:w-[90%] lg:w-[75%] mx-auto mt-12">
            <Details />
            <Featured />
        </div>
    );
}
