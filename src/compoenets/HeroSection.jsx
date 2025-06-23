const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 h-60 sm:h-80 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                <div className="text-white z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Discover Premium Products
                    </h1>
                    <p className="text-lg text-blue-100 max-w-xl">
                        Explore our wide range of high-quality products with
                        special discounts
                    </p>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500 to-transparent opacity-50"></div>
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-400 rounded-full opacity-20"></div>
        </div>
    );
};

export default HeroSection;
