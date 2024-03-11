'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { ReactElement, useState, useEffect } from 'react';
import Link from 'next/link';
import OpenedStatus from './OpenedStatus';
import Button from '../UI/Button';

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
      id="hero"
      className={clsx('gradient-dark pt-20 md:pt-22 text-light-primary overflow-hidden', className)}
    >
      <div className="container-base flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 flex flex-col gap-4 justify-start md:pt-24 z-40">
          <h1 className="heading leading-tight">Nejlepší pizza v Bohnicích</h1>
          <p className="paragraph">
            Přijďte do Sola Enotria ochutnat autentickou italskou kuchyni. Naše recepty s
            prvotřídními surovinami vytvářejí nezapomenutelný chuťový zážitek. Přijďte ochutnat,
            proč jsme nejlepší v Bohnicích!
          </p>
          <OpenedStatus />
          <div className="flex gap-4">
            <Link href={'#poledni-menu'}>
              <Button text="Polední menu" variant="primary" />
            </Link>
            <Link href={'#kudy-k-nam'}>
              <Button text="Kudy k nám?" variant="tertinary" />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-2/3 flex items-start justify-center md:items-end md:justify-end">
          <div className="relative -rotate-90 md:-rotate-45">
            <div className="absolute">
              <div className="relative w-[250px] h-[250px] md:w-[750px] md:h-[750px] flex-shrink-0 animate-into-view-mobile md:animate-into-view-desktop">
                <Image
                  fill
                  priority
                  src="/assets/pizza/homepage-pinsa.png"
                  alt="pinse"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
            <div className="relative w-[250px] h-[250px] md:w-[750px] md:h-[750px] flex-shrink-0 fade-in-delayed">
              <Image
                fill
                src={`/assets/pizza/pinsa-homepage-0${number}.png`}
                alt="pizza"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
