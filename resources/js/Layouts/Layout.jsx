import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className="pt-16">
                <Outlet />
            </div>

            <Footer />
        </>
    );
}
