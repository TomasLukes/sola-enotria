'use client';
import useDateTime from '@/app/lib/hooks/useDateTime';
import Link from 'next/link';
import { ReactElement } from 'react';

const Footer = (): ReactElement => {
  const { currentYear } = useDateTime();

  return (
    <footer className="w-full gradient-dark flex flex-col items-center text-white">
      <span className="w-4/5 md:w-3/4 mx-auto h-0.5 bg-light-primary"></span>
      <div className="container-base h-full flex items-center justify-between py-4 md:py-8">
        <p className="paragraph-small">Sola Enotria • {currentYear.toString()}</p>
        <p className="paragraph-small">
          Created by{' '}
          <Link
            href={'https://www.tomaslukes.com/'}
            target="_blank"
            className="hover:text-yellow-500 hover:scale-[102%]"
          >
            Tomas Lukes
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
