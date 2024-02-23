'use client';
import { PhoneArrowUpRightIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function NavigationMobile() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleClick() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <nav className="text-xl font-medium lg:hidden">
      <div className="container mx-auto flex items-center justify-end py-6 md:py-9">
        <button
          id="menu-btn"
          aria-label="Mobile hamburger icon"
          type="button"
          className="flex items-center p-3 md:p-6"
          onClick={handleClick}
        >
          {/* Hamburger icon */}
          <div
            className={`${
              mobileMenuOpen ? 'open' : ''
            } block hamburger lg:hidden focus:outline-none`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </div>
        </button>
      </div>

      {/* Mobile + tablet menu */}
      <div className="lg:hidden">
        <div
          id="menu"
          className={`${
            !mobileMenuOpen && 'hidden'
          } absolute z-50 flex flex-col gap-4 items-start p-8 self-end py-8 rounded-lg paragraph font-medium
         bg-neutral-200 text-neutral-900 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md mx-auto md:mx-8`}
        >
          <a href="#o-nas">O nás</a>
          <span className="w-full border border-solid border-b-1 border-gray-300 drop-shadow-sm"></span>
          <a href="#poledni-menu">Polední menu</a>
          <span className="w-full border border-solid border-b-1 border-gray-300 drop-shadow-sm"></span>
          <a href="/jidelni-listek">Jídelní lístek</a>
          <span className="w-full border border-solid border-b-1 border-gray-300 drop-shadow-sm"></span>
          <a href="#kudy-k-nam">Kudy k nám?</a>
          <span className="w-full border border-solid border-b-1 border-gray-300 drop-shadow-sm"></span>
          <a className="flex items-center gap-2 font-normal paragraph" href="tel:+420123456789">
            <span className="rounded-full bg-accent p-2">
              <PhoneArrowUpRightIcon className="w-4 h-4 stroke-white animate-pulse" />
            </span>
            +420 123 456 789
          </a>
        </div>
      </div>
    </nav>
  );
}
