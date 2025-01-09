"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-2xl font-bold">Pins</span>
          </div>

          <nav className="hidden md:flex space-x-6 text-lg">
            <Link
              href="/"
              className="hover:text-blue-200 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-200 transition duration-300"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-blue-200 transition duration-300"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-200 transition duration-300"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/addpin">
              <button className="bg-white text-purple-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-100 transition duration-300">
                Add
              </button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="hover:text-blue-200 transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-blue-200 transition duration-300"
              >
                About
              </Link>
              <Link
                href="/services"
                className="hover:text-blue-200 transition duration-300"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-200 transition duration-300"
              >
                Contact
              </Link>
            </nav>
            <Link href="/from">
              <button className="mt-4 w-full bg-white text-purple-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-100 transition duration-300">
                Add
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

