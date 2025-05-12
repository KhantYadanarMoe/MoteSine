import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import "../css/app.css";

import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

export default function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <RouterProvider router={routes} />
            </CartProvider>
        </AuthProvider>
    );
}

createRoot(document.getElementById("app")).render(<App />);
