import { useAuth } from "@/contexts/AuthContext";
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="text-black font-bold text-5xl">loading...</div>;
    }
    if (user) {
        return <div>{children}</div>;
    } else {
        return <Navigate to={"/login"} />;
    }
};

export default ProtectedRoute;
