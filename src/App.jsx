import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsCard from "./compoenets/ProductsCard";
import Pagination from "./compoenets/Pagination";
import ProductDetail from "./compoenets/ProductDetail/ProductDetail";
import Header from "./compoenets/Header";
import HeroSection from "./compoenets/HeroSection";
import FilterSection from "./compoenets/FilterSection";
import Footer from "./compoenets/Footer";

const App = () => {
    const [items, setitems] = useState([]);
    const fetchData = async () => {
        const fetchItem = await fetch(
            "https://dummyjson.com/products?limit=200"
        );
        const data = await fetchItem.json();
        setitems(data.products);
    };

    console.log(typeof items);
    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []);

    // pagination start from here
    const [currentPage, setCurrentPage] = useState(0);
    const OnePageItemSize = 8;
    const totatProducts = items.length;
    const totalPages = Math.ceil(totatProducts / OnePageItemSize);
    // console.log(totalPages);

    const start = currentPage * OnePageItemSize;
    const end = start + OnePageItemSize;

    console.log("Start:- ", start, " ---End:- ", end);

    const hanndlePageChange = (n) => {
        setCurrentPage(n);
    };

    const handlePrevious = () => {
        setCurrentPage((prev) => prev - 1);
    };

    const handleNext = () => {
        setCurrentPage((prev) => prev + 1);
    };
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
                                {/* Header with navigation */}
                                <Header />

                                {/* Hero banner */}
                                {/* <HeroSection /> */}

                                {/* Main content */}
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                                    {/* Filter Section */}
                                    <FilterSection />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {items
                                            .slice(start, end)
                                            .map((item, index) => (
                                                <ProductsCard
                                                    product={item}
                                                    key={index}
                                                />
                                            ))}
                                    </div>

                                    {/* pagination */}
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        handleNext={handleNext}
                                        handlePrevious={handlePrevious}
                                        hanndlePageChange={hanndlePageChange}
                                    />
                                </div>

                                {/* Footer */}
                                <Footer />
                            </div>
                        }
                    ></Route>
                    <Route
                        path="/detail/:productId"
                        element={<ProductDetail />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
