'use client';
import { useState } from 'react';

export default function NavigationMobile() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleClick() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <nav className="text-xl font-medium">
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
          } absolute z-50 flex flex-col gap-4 items-center self-end py-8 font-bold rounded-lg
         bg-neutral-200 text-neutral-900 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md mx-auto md:mx-8`}
        >
          <a href="#about">O nás</a>
          <span className="w-4/5 mx-auto border border-solid border-b-1 border-gray-300 drop-shadow-sm"></span>
          <a href="#projects">Denní menu</a>
          <span className="w-4/5 mx-auto border border-solid border-b-1 border-gray-300 drop-shadow-sm"></span>
          <a href="#contacts">Jídelní lístek</a>
          <span className="w-4/5 mx-auto border border-solid border-b-1 border-gray-300 drop-shadow-sm"></span>
          <a href="#contacts">Kontakty</a>
        </div>
      </div>
    </nav>
  );
}
