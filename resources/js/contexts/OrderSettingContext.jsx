import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const SettingContext = createContext();

export const OrderSettingProvider = ({ children }) => {
    const [form, setForm] = useState({
        deliveryFee: "",
        minOrder: "",
        type: "",
        allow: true,
    });
    const [loading, setLoading] = useState(true);

    const getOrderSetting = async () => {
        try {
            const res = await axios.get("/api/setting/order");
            if (res.data.setting) {
                const setting = res.data.setting;
                setForm({
                    deliveryFee: setting.deliveryFee || "",
                    minOrder: setting.minOrder || "",
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
        getOrderSetting();
    }, []);

    return (
        <SettingContext.Provider
            value={{ form, setForm, getOrderSetting, loading }}
        >
            {children}
        </SettingContext.Provider>
    );
};

// Custom hook to use the setting context easily
export const useOrderSetting = () => useContext(SettingContext);
