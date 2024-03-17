import Image from 'next/image';
import Navigation from '../Navigation';
import { ReactElement } from 'react';
import clsx from 'clsx';
import Logo from '../UI/Logo';

const Header = ({ className }: IClassName): ReactElement => {
  return (
    <header className={clsx('w-full fixed z-50 gradient-dark text-light-primary', className)}>
      <div className="container-base h-16 md:h-20 flex justify-between items-center">
        <Logo className="h-full w-[210px] flex-shrink-0" />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
