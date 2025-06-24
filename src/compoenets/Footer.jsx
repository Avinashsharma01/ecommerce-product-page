import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-indigo-800 text-white mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">ShopMart</h3>
                        <p className=" text-sm">
                            Your one-stop shop for all premium products at the
                            best prices.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm ">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `transition-colors ${
                                            isActive
                                                ? "text-white"
                                                : "hover:text-gray-500"
                                        }`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/products"
                                    className={({ isActive }) =>
                                        `transition-colors ${
                                            isActive
                                                ? "text-white"
                                                : "hover:text-gray-500"
                                        }`
                                    }
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/categories"
                                    className={({ isActive }) =>
                                        `transition-colors ${
                                            isActive
                                                ? "text-white"
                                                : "hover:text-gray-500"
                                        }`
                                    }
                                >
                                    Categories
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `transition-colors ${
                                            isActive
                                                ? "text-white"
                                                : "hover:text-gray-500"
                                        }`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">
                            Customer Service
                        </h3>
                        <ul className="space-y-2 text-sm ">
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `transition-colors ${
                                            isActive
                                                ? "text-white"
                                                : "hover:text-gray-500"
                                        }`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/faq"
                                    className={({ isActive }) =>
                                        `transition-colors ${
                                            isActive
                                                ? "text-white"
                                                : "hover:text-gray-500"
                                        }`
                                    }
                                >
                                    FAQs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/shipping"
                                    className={({ isActive }) =>
                                        `transition-colors ${
                                            isActive
                                                ? "text-white"
                                                : "hover:text-gray-500"
                                        }`
                                    }
                                >
                                    Shipping
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/returns"
                                    className={({ isActive }) =>
                                        `transition-colors ${
                                            isActive
                                                ? "text-white"
                                                : "hover:text-gray-500"
                                        }`
                                    }
                                >
                                    Returns
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                        <p className=" text-sm mb-4">
                            Subscribe to get updates on new products and special
                            offers
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 text-white rounded-l-md w-full"
                            />
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-sm  flex flex-col sm:flex-row justify-between items-center">
                    <p>© 2025 ShopMart. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 sm:mt-0">
                        <NavLink
                            to="/privacy"
                            className={({ isActive }) =>
                                `transition-colors ${
                                    isActive
                                        ? "text-white"
                                        : "hover:text-gray-500"
                                }`
                            }
                        >
                            Privacy Policy
                        </NavLink>
                        <NavLink
                            to="/terms"
                            className={({ isActive }) =>
                                `transition-colors ${
                                    isActive
                                        ? "text-white"
                                        : "hover:text-gray-500"
                                }`
                            }
                        >
                            Terms of Service
                        </NavLink>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
