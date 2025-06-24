import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../../compoenets/Footer";
import Breadcrumbnavigation from "./Breadcrumbnavigation";
import QuantityAndAddToCart from "./QuantityAndAddToCart";
import BuyButton from "./BuyButton";
import ShippingAndReturns from "./ShippingAndReturns";
import ProductDescription from "./ProductDescription";
import PriceSection from "./PriceSection";
import Rating from "./ReviewRating";
import ProductDiscount from "./ProductDiscount";
import ProductReviewSection from "./ProductReviewSection";

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [mainImage, setMainImage] = useState("");
    const [quantity, setQuantity] = useState(1);

    console.log("product id", productId);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://dummyjson.com/products/${productId}`
                );
                if (!response.ok) {
                    throw new Error("Product not found");
                }
                const data = await response.json();
                setProduct(data);
                setMainImage(data.thumbnail);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [productId]);
    if (loading)
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
            </div>
        );

    if (error)
        return (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg max-w-2xl mx-auto my-8 text-center">
                <div className="text-xl font-bold mb-2">Error</div>
                <div>{error}</div>
            </div>
        );

    if (!product)
        return (
            <div className="bg-gray-50 text-gray-600 p-4 rounded-lg max-w-2xl mx-auto my-8 text-center">
                <div className="text-xl font-bold mb-2">Product Not Found</div>
                <div>The requested product could not be found.</div>
            </div>
        );

    // Handle changing the main displayed image
    const changeMainImage = (img) => {
        setMainImage(img);
    };

    // Handle quantity changes
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQuantity = () => {
        if (quantity < product.stock) setQuantity(quantity + 1);
    };
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-b from-gray-50 to-white min-h-screen">
                {/* Breadcrumb navigation */}
                <Breadcrumbnavigation product={product} />

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Product header for mobile - will show on small screens */}
                    <div className="md:hidden bg-gradient-to-r from-blue-600 to-blue-700  text-white p-4">
                        <h1 className="text-xl font-bold">{product.title}</h1>
                        <div className="flex items-center mt-1">
                            {/* Product Rating */}
                            <Rating product={product} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 ">
                        {/* Product Images Section */}
                        <div>
                            <div className="mb-4 aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-inner">
                                <img
                                    src={mainImage}
                                    alt={product.title}
                                    className="w-full h-full object-contain p-4"
                                />
                            </div>
                            <div className="grid grid-cols-5 gap-2">
                                {product.images?.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:scale-105 ${
                                            mainImage === img
                                                ? "ring-2 ring-blue-500 shadow-md"
                                                : "border border-gray-200"
                                        }`}
                                        onClick={() => changeMainImage(img)}
                                    >
                                        <img
                                            src={img}
                                            alt={`${product.title} view ${
                                                index + 1
                                            }`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>{" "}
                        {/* Product Info Section */}
                        <div className="flex flex-col overflow-auto max-h-[80vh]  ">
                            {/* Hide this section on mobile as we show it at the top */}
                            <div className="hidden md:block">
                                {/* Product Discount */}
                                <ProductDiscount product={product} />
                                <h1 className="text-2xl mb-3 sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
                                    {product.title}
                                </h1>

                                {/* Product Rating */}
                                <div className="RattingAndReview flex items-center gap-2.5">
                                    <Rating product={product} />
                                    <h1 className=" text-blue-800 font-medium cursor-pointer">
                                        <Link to="#ReviewSection" smooth={true}>
                                            Reviews
                                        </Link>
                                    </h1>
                                </div>
                            </div>
                            {/* Price section with highlighted box */}
                            <PriceSection product={product} />
                            {/* Description */}
                            <ProductDescription product={product} />
                            {/* Quantity and Add to Cart */}
                            <div className="mt-8 space-y-4">
                                <QuantityAndAddToCart
                                    increaseQuantity={increaseQuantity}
                                    decreaseQuantity={decreaseQuantity}
                                    quantity={quantity}
                                    product={product}
                                />
                                {/* Buy Now button */}
                                <BuyButton />
                            </div>{" "}
                            {/* Shipping & Returns */}
                            <ShippingAndReturns />
                            {/* Review Section */}
                            <ProductReviewSection product={product} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetail;
