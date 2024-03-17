'use client';
import { PhoneArrowUpRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function NavigationMobile() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (): void => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="text-xl font-medium lg:hidden">
      <div className="container mx-auto flex items-center justify-end py-4 md:py-8">
        <button
          id="menu-btn"
          aria-label="Mobile hamburger icon"
          type="button"
          className="flex items-center p-3 md:p-6"
          onClick={() => toggleMobileMenu()}
        >
          {/* Hamburger icon */}
          <div
            className={`${
              mobileMenuOpen ? 'open' : ''
            }block hamburger lg:hidden focus:outline-none`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </div>
        </button>
      </div>

      {/* Mobile + tablet menu */}
      <div className="lg:hidden">
        <ul
          id="menu"
          className={`${
            !mobileMenuOpen && 'hidden'
          } absolute z-50 flex flex-col gap-4 items-start p-8 self-end py-8 rounded-lg paragraph font-medium
         bg-neutral-200 text-neutral-900 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md mx-auto md:mx-8`}
        >
          <li>
            <a
              href="#o-nas"
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              O nás
            </a>
          </li>
          <span className="w-full border border-solid border-b-1 border-gray-300 drop-shadow-sm" />
          <li>
            <a
              href="#poledni-menu"
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              Polední menu
            </a>
          </li>
          <span className="w-full border border-solid border-b-1 border-gray-300 drop-shadow-sm" />
          <li>
            <a
              href="/jidelni-listek"
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              Jídelní lístek
            </a>
          </li>
          <span className="w-full border border-solid border-b-1 border-gray-300 drop-shadow-sm" />
          <li>
            <a
              href="#kudy-k-nam"
              onClick={() => {
                toggleMobileMenu();
              }}
            >
              Kudy k nám?
            </a>
          </li>
          <span className="w-full border border-solid border-b-1 border-gray-300 drop-shadow-sm" />
          <li>
            <a className="flex items-center gap-2 font-normal paragraph" href="tel:+420123456789">
              <span className="rounded-full bg-accent p-2">
                <PhoneArrowUpRightIcon className="w-4 h-4 stroke-white animate-pulse" />
              </span>
              <p>+420 773 510 277</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
