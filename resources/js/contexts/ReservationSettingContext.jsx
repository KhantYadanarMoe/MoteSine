import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const SettingContext = createContext();

export const ReservationSettingProvider = ({ children }) => {
    const [form, setForm] = useState({
        maxGuests: "",
        type: "",
        allow: true,
    });

    const [loading, setLoading] = useState(true);

    const getReservationSetting = async () => {
        try {
            const res = await axios.get("/api/setting/reservation");
            if (res.data.setting) {
                const setting = res.data.setting;
                setForm({
                    maxGuests: setting.maxGuests || "",
                    type: setting.type || "",
                    allow: setting.allow || "",
                });
            }
        } catch (err) {
            console.error("Failed to fetch setting", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getReservationSetting();
    }, []);

    return (
        <SettingContext.Provider
            value={{ form, setForm, getReservationSetting, loading }}
        >
            {children}
        </SettingContext.Provider>
    );
};

// Custom hook to use the setting context easily
export const useReservationSetting = () => useContext(SettingContext);
