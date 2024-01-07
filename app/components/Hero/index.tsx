'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { ReactElement, useState, useEffect } from 'react';

const Hero = ({ className }: IClassName): ReactElement => {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber((prev) => (prev < 5 ? prev + 1 : 1));
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className={clsx(
        'h-[90vh] bg-gradient-radial at-center bg-dark-primary to-dark-primary from-dark-secondary text-light-primary',
        className
      )}
    >
      <div className="container-base flex flex-col md:flex-row gap-8 px-8">
        <div className="w-full md:w-1/2 flex flex-col gap-4 justify-start md:pt-24 z-50">
          <h1 className="font-semibold text-4xl leading-tight">Nejlepší pizza v Bohnicích</h1>
          <p>
            Přijďte do Sola Enotria ochutnat autentickou italskou kuchyni. Naše recepty s
            prvotřídními surovinami vytvářejí nezapomenutelný chuťový zážitek. Přijďte ochutnat,
            proč jsme nejlepší v Bohnicích!
          </p>
          <div className="flex items-center gap-2">
            <span className="rounded-full w-2 h-2 bg-green-500 animate-pulse"></span>
            <p>Právě máme otevřeno</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-accent px-9 py-3 text-center w-fit rounded-3xl drop-shadow-lg">
              Denní menu
            </button>
            <button className="bg-transparent border-white border-2 px-9 py-3 text-center w-fit rounded-3xl drop-shadow-lg">
              Jak k nám?
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/3 flex items-center justify-start md:items-end md:justify-end -mt-32 md:mt-0">
          <div className="relative -rotate-90 md:-rotate-45">
            <Image
              width={450}
              height={450}
              src={`/assets/pizza/pinsa-homepage-0${number}.png`}
              alt="pizza"
              className="absolute"
              objectFit="contain"
            />
            <Image
              width={450}
              height={450}
              src="/assets/pizza/homepage-pinsa.png"
              alt="pinse"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
