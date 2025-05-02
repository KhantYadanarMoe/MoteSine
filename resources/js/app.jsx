import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import "../css/app.css";

import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
    return (
        <AuthProvider>
            <RouterProvider router={routes} />
        </AuthProvider>
    );
}

createRoot(document.getElementById("app")).render(<App />);
