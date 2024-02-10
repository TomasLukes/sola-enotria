'use client';
import useDateTime from '@/hooks/useDateTime';
import Link from 'next/link';
import { ReactElement } from 'react';

const Footer = (): ReactElement => {
  /* const currentYear = useDateTime().year; */

  return (
    <footer className="gradient-dark h-10 text-white w-full">
      <div className="container-base h-full border-t-2 border-light-primary flex items-center justify-between">
        {/* <p className="paragraph">Sola Enotria • {currentYear.toString()}</p> */}
        <p className="paragraph">
          Created by <Link href={'https://www.tomaslukes.com/'}>Tomas Lukes</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
