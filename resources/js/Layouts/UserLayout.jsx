import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import UserSidebar from "@/Pages/User/UserSidebar";

export default function AdminLayout() {
    return (
        <div>
            <UserSidebar />
            <div className="lg:pt-24 pt-20 pl-3 pr-3 bg-white min-h-screen">
                <Outlet />
            </div>
        </div>
    );
}
