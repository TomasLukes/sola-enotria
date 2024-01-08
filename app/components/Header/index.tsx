import Image from 'next/image';
import Navigation from '../Navigation';
import { ReactElement } from 'react';
import clsx from 'clsx';

const Header = ({ className }: IClassName): ReactElement => {
  return (
    <header className={clsx('bg-dark-primary text-light-primary', className)}>
      <div className="container-base h-20 flex justify-between items-center">
        <div className="relative h-[100px] w-[100px] md:h-[200px] md:w-[200px] flex-shrink-0">
          <Image
            fill
            priority
            src={`/assets/logo.png`}
            alt="Sola Enotria logo"
            style={{ objectFit: 'contain' }}
          />
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
