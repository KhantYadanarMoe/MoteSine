import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const SettingContext = createContext();

export const GeneralSettingProvider = ({ children }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        from: "",
        to: "",
        logo: "",
    });

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);

    const getSetting = async () => {
        try {
            const res = await axios.get("/api/setting/general");
            if (res.data.setting) {
                const setting = res.data.setting;
                setForm({
                    name: setting.name || "",
                    email: setting.email || "",
                    phone: setting.phone || "",
                    address: setting.address || "",
                    from: setting.from || "",
                    to: setting.to || "",
                    logo: setting.logo || "",
                });

                if (setting.logo) {
                    setImage(setting.logo); // optional, for preview
                }
            }
        } catch (err) {
            console.error("Failed to fetch setting", err);
        } finally {
            setLoading(false); // <-- hide loading
        }
    };

    useEffect(() => {
        getSetting();
    }, []);

    return (
        <SettingContext.Provider
            value={{ form, setForm, image, setImage, getSetting, loading }}
        >
            {children}
        </SettingContext.Provider>
    );
};

// Custom hook to use the setting context easily
export const useSetting = () => useContext(SettingContext);
