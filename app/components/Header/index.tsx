import Image from 'next/image';
import Navigation from '../Navigation';
import { ReactElement } from 'react';
import clsx from 'clsx';

const Header = ({ className }: IClassName): ReactElement => {
  return (
    <header className={clsx('w-full fixed z-50 gradient-dark text-light-primary', className)}>
      <div className="container-base h-16 md:h-20 flex justify-between items-center">
        <div className="relative h-[80px] w-[120px] md:h-[160px] md:w-[240px] flex-shrink-0">
          <Image
            fill
            priority
            src={`/assets/logo.png`}
            alt="Sola Enotria logo"
            className="object-contain"
          />
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
