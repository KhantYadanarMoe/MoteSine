import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
