import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
export const CustomButton = ({ title, type, handleClick }) => {
    const snap = useSnapshot(state);
    const generateStyle = (type) => {
        if (type === "filled") {
            return {
                backgroundColor: snap.color,
                color: "#fff",
            };
        }
    };
    return (
        <button
            onClick={handleClick}
            className="px-2 py-1.5 flex-1 rounded-md"
            style={generateStyle(type)}
        >
            {title}
        </button>
    );
};
