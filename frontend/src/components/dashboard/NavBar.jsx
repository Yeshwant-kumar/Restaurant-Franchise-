import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import logo from "../../assets/pics/7105.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linksRef = useRef([]);

  // Animate Links from Top on Mount
  useEffect(() => {
    gsap.from(linksRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2, // Delays each link slightly for a nice effect
    });
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 w-full z-20 fixed top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo & Brand Name */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-8 rounded" alt="Logo" />
          <span className="self-center text-2xl font-semibold dark:text-white">
            Flavors & Finesse
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
          <ul className="flex space-x-8 text-lg font-medium">
            {["Home", "About", "Services","Terms & Conditions", "Contact"].map((item, index) => (
              <li key={item} ref={(el) => (linksRef.current[index] = el)}>
                <NavLink
                  to={`/${item.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                  className={({ isActive }) =>
                    `block py-2 px-3 transition-all duration-300 ${
                      isActive ? "text-rose-600 font-bold" : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-gray-400"
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 md:hidden shadow-md">
            <ul className="flex flex-col items-center p-4 space-y-4">
              {["Home", "About", "Services","Terms & Conditions", "Contact"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `block py-2 px-3 ${
                        isActive ? "text-rose-600 font-bold" : "text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-gray-400"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
