import React from "react";
import Ban from "../../../images/Ban.jpg";

export default function Banned() {
    return (
        <div className="col-span-full flex justify-center h-screen items-center py-6">
            <div className="text-center font-medium text-accentRed">
                <img
                    src={Ban}
                    alt="Banned User"
                    className="mx-auto w-60 opacity-80"
                />
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    You are banned.
                </h2>
                <p className="text-gray-500 mb-4 text-sm">
                    You aren't allow to use our service because you don't follow
                    our rules.
                </p>
            </div>
        </div>
    );
}
