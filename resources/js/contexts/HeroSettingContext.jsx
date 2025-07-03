import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const SettingContext = createContext();

export const HeroSettingProvider = ({ children }) => {
    const [form, setForm] = useState({
        heroImg: "",
        header: "",
        body: "",
    });

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const getSetting = async () => {
        try {
            const res = await axios.get("/api/setting/hero");
            if (res.data.setting) {
                const setting = res.data.setting;
                setForm({
                    heroImg: setting.heroImg || "",
                    header: setting.header || "",
                    body: setting.body || "",
                });

                if (setting.heroImg) {
                    setImages(setting.heroImg); // optional, for preview
                }
            }
        } catch (err) {
            console.error("Failed to fetch setting", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getSetting();
    }, []);

    return (
        <SettingContext.Provider
            value={{ form, setForm, images, setImages, getSetting, loading }}
        >
            {children}
        </SettingContext.Provider>
    );
};

// Custom hook to use the setting context easily
export const useSetting = () => useContext(SettingContext);
