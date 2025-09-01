import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState(null); // ✅ new state for mobile

    const menuRef = useRef(null);

    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const toggleMobileDropdown = (menu) => {
        setMobileDropdown(mobileDropdown === menu ? null : menu);
    };

    // Close dropdowns & menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setActiveDropdown(null);
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header ref={menuRef} className="w-full bg-black shadow-md z-50">
            <div
                className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-20"
            >
                {/* Mobile menu button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Left Navigation (Desktop) */}
                <nav className="hidden lg:flex items-center gap-8 font-medium">
                    <NavLink to="/" className={({ isActive }) =>
                        `transition ${isActive ? "text-white" : "text-amber-400 hover:text-white"
                        }`
                    }>
                        Home
                    </NavLink>

                    {/* Houseboats Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => toggleDropdown("houseboats")}
                            className="flex items-center gap-1 transition hover:text-amber-400 text-amber-400"
                        >
                            Rooms <ChevronDown size={16} />
                        </button>
                        {activeDropdown === "houseboats" && (
                            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-44 z-30">
                                <NavLink to="/super-deluxe" className="block px-4 py-2 hover:bg-gray-100">Super Deluxe</NavLink>
                                <NavLink to="/ac-royal-suite" className="block px-4 py-2 hover:bg-gray-100">Royal Suite</NavLink>
                                <NavLink to="/nageen-suite" className="block px-4 py-2 hover:bg-gray-100">Nageen Suite Room</NavLink>
                                <NavLink to="/premium-lake" className="block px-4 py-2 hover:bg-gray-100">Premium Lake View Room</NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink to="/tour" className={({ isActive }) =>
                        `transition ${isActive ? "text-white" : "text-amber-400 hover:text-white"
                        }`
                    }>
                        Tours
                    </NavLink>
                </nav>

                {/* Center Brand */}
                <div className="flex items-center">
                    <img
                        src="/Logo/Logo.jpg"
                        alt="Jewel of Kashmir"
                        className="h-12 w-auto md:h-14 lg:h-16 object-contain"
                    />
                </div>

                {/* Right Navigation (Desktop) */}
                <nav className="hidden lg:flex items-center gap-8 font-medium">
                    {/* Travel Guide Dropdown */}
                    <NavLink to="/about" className={({ isActive }) =>
                        `transition ${isActive ? "text-white" : "text-amber-400 hover:text-white"
                        }`
                    }>
                        About
                    </NavLink>

                    <NavLink to="/blog" className={({ isActive }) =>
                        `transition ${isActive ? "text-white" : "text-amber-400 hover:text-white"
                        }`
                    }>
                        Blog
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) =>
                        `transition ${isActive ? "text-white" : "text-amber-400 hover:text-white"
                        }`
                    }>
                        Contact
                    </NavLink>
                </nav>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white shadow-md py-4 space-y-3 text-gray-700 font-medium px-6">
                    <NavLink
                        to="/"
                        className="block hover:text-amber-600"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </NavLink>


                    {/* Mobile Houseboats Dropdown */}
                    <div>
                        <button
                            onClick={() => toggleMobileDropdown("houseboats")}
                            className="flex items-center justify-between w-full hover:text-amber-600"
                        >
                            Houseboats <ChevronDown size={16} />
                        </button>
                        {mobileDropdown === "houseboats" && (
                            <div className="ml-4 mt-2 space-y-2">
                                <NavLink to="/super-deluxe" onClick={() => setIsOpen(false)} className="block hover:text-amber-600">Super Deluxe</NavLink>
                                <NavLink to="/ac-royal-suite" onClick={() => setIsOpen(false)} className="block hover:text-amber-600">AC Royal Suite</NavLink>
                                <NavLink to="/nageen-suite" onClick={() => setIsOpen(false)} className="block hover:text-amber-600">Nageen Suite Room</NavLink>
                                <NavLink to="/premium-lake" onClick={() => setIsOpen(false)} className="block hover:text-amber-600">Premium Lake View Room</NavLink>
                            </div>
                        )}
                    </div>

                    <NavLink to="/tour" onClick={() => setIsOpen(false)} className="block hover:text-amber-600">Tours</NavLink>

                    <NavLink to="/about" onClick={() => setIsOpen(false)} className="block hover:text-amber-600">About</NavLink>

                    <NavLink to="/blog" onClick={() => setIsOpen(false)} className="block hover:text-amber-600">Blog</NavLink>
                    <NavLink to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-amber-600">Contact</NavLink>
                </div>
            )}
        </header>
    );
}