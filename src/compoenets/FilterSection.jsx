const FilterSection = () => {
    return (
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
            <h2 className="text-2xl font-bold text-gray-900">
                Featured Products
            </h2>
            <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm">Sort by:</span>
                <select className="border border-gray-300 rounded-md py-1 pl-2 pr-8 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Most Popular</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div>
        </div>
    );
};

export default FilterSection;
