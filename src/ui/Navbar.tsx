import { Link } from "react-router-dom";
import { MenuItems } from "@/constant/NavbarData";
import Button from "./Button";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-20 w-full bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-semibold text-black">
              Quiz
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex rounded-md p-2 text-black transition-all duration-200 hover:bg-gray-100 focus:bg-gray-100 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // Close Icon
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Menu Icon
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex lg:items-center lg:space-x-10">
            {MenuItems.map(({ name, path }) => (
              <li key={path} className="list-none">
                <Link
                  to={path}
                  className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {name}
                </Link>
              </li>
            ))}
            <Button
              to="/signup"
              className="rounded-full bg-orange-500 px-5 py-2.5 font-semibold text-white transition-all duration-200 hover:bg-orange-600"
            >
              Get Started
            </Button>
          </ul>
        </div>
      </div>

      {/* Mobile Menu (Slide from Right) */}
      <div
        className={`fixed inset-y-0 right-0 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col items-start space-y-6 p-6">
          {MenuItems.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className="text-lg font-semibold text-black"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
          <Button
            to="/signup"
            className="rounded-full bg-orange-500 px-5 py-2.5 font-semibold text-white transition-all duration-200 hover:bg-orange-600"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Overlay (closes menu when clicked outside) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default Navbar;
