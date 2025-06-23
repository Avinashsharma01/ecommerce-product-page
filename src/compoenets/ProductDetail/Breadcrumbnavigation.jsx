import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcrumbnavigation = ({ product }) => {
    const navigate = useNavigate();

    return (
        <>
            <nav className="flex items-center text-sm text-gray-500 mb-6">
                <button
                    className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                    onClick={() => navigate("/")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Home
                </button>
                <span className="mx-2">/</span>
                <span className="text-gray-700 font-medium">
                    {product.title}
                </span>
            </nav>
        </>
    );
};

export default Breadcrumbnavigation;
