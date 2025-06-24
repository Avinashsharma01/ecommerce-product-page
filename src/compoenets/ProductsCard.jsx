import { useNavigate } from "react-router-dom";

const ProductsCard = ({ product }) => {
    const navigate = useNavigate();

    // Generate star rating display
    const renderRatingStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;

        // Add full stars
        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <svg
                    key={`full-${i}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                    />
                </svg>
            );
        }

        // Add half star if needed
        if (hasHalfStar) {
            stars.push(
                <svg
                    key="half"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                    />
                </svg>
            );
        }

        // Add empty stars
        for (let i = stars.length; i < 5; i++) {
            stars.push(
                <svg
                    key={`empty-${i}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                </svg>
            );
        }

        return stars;
    };

    return (
        <div
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200"
            onClick={() => navigate(`/detail/${product.id}`)}
        >
            {/* Image container with discount badge */}
            <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />

                {/* Discount badge */}
                {product.discountPercentage > 0 && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold rounded-full px-2.5 py-1.5 shadow-sm">
                        {Math.round(product.discountPercentage)}% OFF
                    </div>
                )}

                {/* Category tag */}
                <div className="absolute bottom-3 left-3 bg-blue-500/80 backdrop-blur-sm text-white text-xs rounded-full px-2.5 py-1 shadow-sm">
                    {product.category}
                </div>
            </div>

            {/* Product info */}
            <div className="p-4">
                <div className="mb-1 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500">
                        {product.brand}
                    </span>
                    <div className="flex items-center text-amber-500">
                        {renderRatingStars(product.rating)}
                    </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">
                    {product.title}
                </h3>
                <h6 className="text-gray-500">
                    <small>hello</small>
                </h6>

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-baseline">
                        <span className="text-xl font-bold text-blue-600">
                            ₹{product.price}
                        </span>
                        {product.discountPercentage > 0 && (
                            <span className="text-xs text-gray-500 line-through ml-2">
                                $
                                {Math.round(
                                    product.price /
                                        (1 - product.discountPercentage / 100)
                                )}
                            </span>
                        )}
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 font-medium rounded-full px-2 py-0.5">
                        {product.stock} in stock
                    </span>
                </div>

                {/* Quick action button - only visible on hover */}
                <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                    </svg>
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ProductsCard;
