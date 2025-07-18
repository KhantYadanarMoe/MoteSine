import { useAuth } from "../contexts/AuthContext"; // or wherever your auth context is
import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
    const { user } = useAuth();

    if (!user || Number(user.isAdmin) !== 1) {
        return <Navigate to="/" replace />;
    }

    return children;
}
