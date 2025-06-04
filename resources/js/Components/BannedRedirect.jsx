import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function BannedRedirect({ children }) {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && user?.banned === 1) {
            navigate("/banned", { replace: true });
        }
    }, [loading, user, navigate]);

    return children;
}
