import React from "react";

const ProductDescription = ({ product }) => {
    return (
        <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Description
            </h3>
            <p className="text-gray-700 text-base leading-relaxed bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                {product.description}
            </p>
        </div>
    );
};

export default ProductDescription;
