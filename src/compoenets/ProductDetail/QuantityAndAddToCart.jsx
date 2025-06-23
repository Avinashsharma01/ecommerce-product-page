import React from "react";

const QuantityAndAddToCart = ({
    product,
    increaseQuantity,
    quantity,
    decreaseQuantity,
}) => {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-lg shadow-sm bg-white">
                <button
                    className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                        />
                    </svg>
                </button>
                <span className="px-4 py-2 font-medium text-gray-800 w-12 text-center">
                    {quantity}
                </span>
                <button
                    className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={increaseQuantity}
                    disabled={quantity >= product.stock}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>
                </button>
            </div>
            <button className="w-full sm:flex-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-md hover:shadow-lg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                </svg>
                Add to Cart
            </button>
        </div>
    );
};

export default QuantityAndAddToCart;
