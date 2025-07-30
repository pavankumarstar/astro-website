"use client";
import React from "react";

const Header = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 sm:py-0 dark:bg-neutral-900">
      <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative sm:flex sm:items-center">
          <div className="flex items-center justify-between">
            <a className="flex-none font-semibold text-xl text-black dark:text-white" href="#" aria-label="Brand">
              Brand
            </a>
            <div className="sm:hidden">
              {/* Toggle Button */}
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-white"
                id="hs-navbar-to-overlay-collapse"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="hs-navbar-to-overlay"
                aria-label="Toggle navigation"
                data-hs-overlay="#hs-navbar-to-overlay"
                data-hs-overlay-options='{"moveOverlayToBody": 640}'
              >
                {/* Hamburger Icon */}
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Menu Overlay Section */}
          <div id="hs-navbar-to-overlay" className="hs-overlay hidden sm:block sm:static sm:translate-x-0 sm:z-40">
            {/* Mobile Header */}
            <div className="sm:hidden flex justify-between items-center border-b py-3">
              <h3 className="font-medium text-gray-800 dark:text-neutral-200">Menu</h3>
              <button
                type="button"
                className="py-1.5 px-2 rounded-full border border-gray-200 text-xs text-gray-800 dark:text-neutral-200"
                data-hs-overlay="#hs-navbar-to-overlay"
              >
                Close
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-y-3 sm:gap-y-0 p-2 sm:p-0">
              <a className="sm:p-2 text-blue-500 font-medium" href="#">Home</a>
              <a className="sm:p-2 text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="/about">About</a>
              <a className="sm:p-2 text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="/services">Services</a>
              <a className="sm:p-2 text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="/location">Location</a>
              <a className="sm:p-2 text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
