import React from "react";

const ProductDiscount = ({ product }) => {
    return (
        <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                {product.category}
            </span>
            <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                {product.brand}
            </span>
            {product.discountPercentage > 0 && (
                <span className="ml-auto px-2.5 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3 h-3"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                            clipRule="evenodd"
                        />
                    </svg>
                    {Math.round(product.discountPercentage)}% OFF
                </span>
            )}
        </div>
    );
};

export default ProductDiscount;
