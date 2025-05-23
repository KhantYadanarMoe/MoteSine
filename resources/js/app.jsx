import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import "../css/app.css";

import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { GeneralSettingProvider } from "./contexts/GeneralSettingContext";
import { ReservationSettingProvider } from "./contexts/ReservationSettingContext";

export default function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <GeneralSettingProvider>
                    <ReservationSettingProvider>
                        <RouterProvider router={routes} />
                    </ReservationSettingProvider>
                </GeneralSettingProvider>
            </CartProvider>
        </AuthProvider>
    );
}

createRoot(document.getElementById("app")).render(<App />);
