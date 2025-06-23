import React, { useEffect } from "react";

const Pagination = ({
    currentPage,
    totalPages,
    handleNext,
    handlePrevious,
    hanndlePageChange,
}) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);

    return (
        <div className="flex items-center justify-center flex-wrap gap-1 my-8">
            <button
                disabled={currentPage === 0}
                onClick={() => handlePrevious()}
                className={`px-3 py-1 border rounded ${
                    currentPage === 0
                        ? "border-gray-300 text-gray-300 cursor-not-allowed"
                        : "border-gray-400 hover:bg-gray-100"
                }`}
                aria-label="Previous page"
            >
                ⏮️
            </button>

            {[...Array(totalPages).keys()].map((item) => (
                <button
                    key={item}
                    onClick={() => hanndlePageChange(item)}
                    className={`px-3 py-1 rounded ${
                        item === currentPage
                            ? "bg-blue-600 text-white font-medium"
                            : "text-gray-700 hover:bg-gray-100"
                    }`}
                    aria-current={item === currentPage ? "page" : undefined}
                >
                    {item + 1}
                </button>
            ))}

            <button
                disabled={currentPage === totalPages - 1}
                onClick={() => handleNext()}
                className={`px-3 py-1 border rounded ${
                    currentPage === totalPages - 1
                        ? "border-gray-300 text-gray-300 cursor-not-allowed"
                        : "border-gray-400 hover:bg-gray-100"
                }`}
                aria-label="Next page"
            >
                ⏭️
            </button>
        </div>
    );
};

export default Pagination;

// import React, { useEffect, useState } from "react";

// const Pagination = ({
//     currentPage,
//     totalPages,
//     handleNext,
//     handlePrevious,
//     hanndlePageChange,
// }) => {
//     useEffect(() => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     }, [currentPage]);

//     // Determine visible page numbers based on screen size and current page
//     const [windowWidth, setWindowWidth] = useState(
//         typeof window !== "undefined" ? window.innerWidth : 0
//     );

//     useEffect(() => {
//         const handleResize = () => setWindowWidth(window.innerWidth);
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     // Calculate which page numbers to show based on screen width
//     const getVisiblePages = () => {
//         if (windowWidth < 480) {
//             // Mobile: show current page, prev and next
//             return [...Array(totalPages).keys()].filter(
//                 (page) =>
//                     Math.abs(page - currentPage) <= 1 ||
//                     page === 0 ||
//                     page === totalPages - 1
//             );
//         } else if (windowWidth < 640) {
//             // Small screens: show 3 pages around current
//             return [...Array(totalPages).keys()].filter(
//                 (page) =>
//                     Math.abs(page - currentPage) <= 1 ||
//                     page === 0 ||
//                     page === totalPages - 1
//             );
//         } else {
//             // Larger screens: show up to 7 pages
//             return [...Array(totalPages).keys()].filter(
//                 (page) =>
//                     Math.abs(page - currentPage) <= 3 ||
//                     page === 0 ||
//                     page === totalPages - 1
//             );
//         }
//     };

//     const visiblePages = getVisiblePages();

//     // Check if we need to show ellipsis
//     const renderPageButton = (pageNum) => {
//         // Is this page in our visible pages array?
//         const isVisible = visiblePages.includes(pageNum);

//         // Should we show ellipsis?
//         const prevPageVisible = visiblePages.includes(pageNum - 1);
//         const showLeftEllipsis =
//             pageNum > 0 && !prevPageVisible && pageNum !== totalPages - 1;

//         if (showLeftEllipsis) {
//             return (
//                 <span
//                     key={`ellipsis-${pageNum}`}
//                     className="px-3 py-1 text-gray-500"
//                 >
//                     ...
//                 </span>
//             );
//         }

//         if (isVisible) {
//             return (
//                 <button
//                     key={pageNum}
//                     onClick={() => hanndlePageChange(pageNum)}
//                     className={`px-3 py-1 rounded min-w-[36px] ${
//                         pageNum === currentPage
//                             ? "bg-blue-600 text-white font-medium"
//                             : "text-gray-700 hover:bg-gray-100"
//                     }`}
//                     aria-current={pageNum === currentPage ? "page" : undefined}
//                 >
//                     {pageNum + 1}
//                 </button>
//             );
//         }

//         return null;
//     };

//     return (
//         <div className="flex flex-wrap items-center justify-center gap-2 my-8 px-4">
//             <button
//                 disabled={currentPage === 0}
//                 onClick={() => handlePrevious()}
//                 className={`px-2 sm:px-3 py-1 border rounded ${
//                     currentPage === 0
//                         ? "border-gray-300 text-gray-300 cursor-not-allowed"
//                         : "border-gray-400 hover:bg-gray-100"
//                 }`}
//                 aria-label="Previous page"
//             >
//                 ⏮️
//             </button>

//             {/* Conditionally render page numbers based on screen size */}
//             <div className="flex flex-wrap justify-center items-center gap-1 sm:gap-2">
//                 {[...Array(totalPages).keys()].map(renderPageButton)}
//             </div>

//             <button
//                 disabled={currentPage === totalPages - 1}
//                 onClick={() => handleNext()}
//                 className={`px-2 sm:px-3 py-1 border rounded ${
//                     currentPage === totalPages - 1
//                         ? "border-gray-300 text-gray-300 cursor-not-allowed"
//                         : "border-gray-400 hover:bg-gray-100"
//                 }`}
//                 aria-label="Next page"
//             >
//                 ⏭️
//             </button>
//         </div>
//     );
// };

// export default Pagination;
