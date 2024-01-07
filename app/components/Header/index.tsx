import Image from 'next/image';
import Navigation from '../Navigation';
import { ReactElement } from 'react';
import clsx from 'clsx';

const Header = ({ className }: IClassName): ReactElement => {
  return (
    <header className={clsx('bg-dark-primary text-light-primary', className)}>
      <div className="container-base h-20 flex justify-between items-center">
        <Image width={200} height={200} src={`/assets/logo.png`} alt="Sola Enotria logo" />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
