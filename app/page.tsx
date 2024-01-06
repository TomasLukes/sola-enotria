'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber((prev) => (prev < 5 ? prev + 1 : 1));
    }, 1500);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <nav className="h-20 flex justify-between items-center px-8 py-4">
            <Image width={200} height={200} src={`/assets/logo.png`} alt="Sola Enotria logo" />
            <ul className="flex gap-4">
              <li>O nás</li>
              <li>Denní menu</li>
              <li>Jídelní lístek</li>
              <li>Kontakty</li>
            </ul>
          </nav>
          <main className="h-[90vh] flex flex-col lg:flex-row gap-8 px-8 ">
            <div className="w-1/2 flex flex-col gap-4 justify-start pt-24">
              <h1 className="font-bold text-6xl">Pizzeria header text</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words which
                dont look even slightly believable.
              </p>
              <button className="bg-yellow-500 px-9 py-3 text-center w-fit rounded-3xl drop-shadow-lg">
                Denní menu
              </button>
            </div>
            <div className="w-1/2">
              <div className="">
                <div className="absolute -rotate-45 -bottom-92 right-20">
                  <div className="relative">
                    <Image
                      width={500}
                      height={500}
                      src={`/assets/pizza/pinsa-homepage-0${number}.png`}
                      alt="pizza"
                      className="absolute top-0"
                    />
                    <Image
                      width={500}
                      height={500}
                      src="/assets/pizza/homepage-pinsa.png"
                      alt="pinse"
                      className="absolutetop-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="h-[500px] bg-white">
        <p>Random paragraph.</p>
      </div>
    </div>
  );
}
