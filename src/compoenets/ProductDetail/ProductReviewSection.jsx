import React from "react";
import Rating from "./ReviewRating";
import ReviewRating from "./ReviewRating";

const ProductReviewSection = ({ product }) => {
    return (
        <>
            <div
                id="ReviewSection"
                className="ReviewSection w-full mt-10 border-t border-gray-200 pt-8"
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">
                        Customer Reviews
                    </h3>
                    <div className="flex items-center mt-2 md:mt-0">
                        <span className="ml-2 text-sm text-gray-500">
                            {product.reviews.length} reviews
                        </span>
                    </div>
                </div>

                <button className="mb-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 mr-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                    </svg>
                    Write a Review
                </button>

                <div className="space-y-6">
                    {product.reviews.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="border-b border-gray-200 pb-6 last:border-0"
                            >
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                                            {item.reviewerName.charAt(0)}
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-sm font-medium text-gray-900">
                                                {item.reviewerName}
                                                {item.reviewerName}
                                            </h4>
                                            {/* we can add here review rating star */}
                                            <ReviewRating
                                                rating={item.rating}
                                            />
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-500">
                                        {item.date}
                                    </span>
                                </div>

                                <p className="mt-4 text-sm text-gray-600">
                                    {item.comment}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Pagination for reviews */}
                <div className="mt-8">
                    <div className="flex items-center justify-center gap-2">
                        <button
                            className="px-3 py-1 border rounded border-gray-300 text-gray-500 hover:bg-gray-50"
                            aria-label="Previous page"
                        >
                            ← Previous
                        </button>
                        <span className="px-3 py-1 bg-blue-600 text-white rounded">
                            1
                        </span>
                        <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded">
                            2
                        </button>
                        <button className="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded">
                            3
                        </button>
                        <button
                            className="px-3 py-1 border rounded border-gray-400 text-gray-700 hover:bg-gray-50"
                            aria-label="Next page"
                        >
                            Next →
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductReviewSection;
