import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegCopy } from "react-icons/fa";

const HireMeButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="p-2 flex items-center space-x-2 bg-black text-white cursor-pointer rounded-md text-sm hover:bg-gray-800 transition"
        >
            <IoIosAddCircleOutline size={18} />
            <span>Hire me</span>
        </button>
    );
};

const CopyButton = ({ onClick, label = "Copy Email" }) => {
    return (
        <button
            onClick={onClick}
            className="bg-gray-300 p-2 flex items-center space-x-2 cursor-pointer rounded-md text-sm hover:bg-gray-400 transition"
        >
            <FaRegCopy size={16} />
            <span>{label}</span>
        </button>
    );
};

export { HireMeButton, CopyButton };
