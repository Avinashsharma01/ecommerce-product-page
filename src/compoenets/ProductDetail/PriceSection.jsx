import React from "react";

const PriceSection = ({ product }) => {
    return (
        <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-bold text-blue-700">
                    ₹{product.price}
                </span>
                {product.discountPercentage > 0 && (
                    <span className="text-sm line-through text-gray-500">
                        ₹
                        {Math.round(
                            product.price /
                                (1 - product.discountPercentage / 100)
                        )}
                    </span>
                )}
            </div>

            <div className="mt-2 flex items-center text-sm">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-green-600 mr-1"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <span className="text-green-700 font-medium">In stock</span>
                <span className="mx-1 text-gray-500">•</span>
                <span className="text-gray-600">
                    {product.stock} units available
                </span>
            </div>
        </div>
    );
};

export default PriceSection;
