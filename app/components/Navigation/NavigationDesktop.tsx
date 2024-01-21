import Link from 'next/link';
import { ReactElement } from 'react';

const NavigationDesktop = (): ReactElement => {
  return (
    <nav className="hidden lg:block">
      <ul className="gap-6 hidden md:flex">
        <li>
          <Link className="font-semibold cursor-pointer" href={'/o-nas'}>
            O nás
          </Link>
        </li>
        <li>
          <Link className="font-semibold cursor-pointer" href={'/denni-menu'}>
            Denní menu
          </Link>
        </li>
        <li>
          <Link className="font-semibold cursor-pointer" href={'/jidelni-listek'}>
            Jídelní lístek
          </Link>
        </li>
        <li>
          <Link className="font-semibold cursor-pointer" href={'/kontakty'}>
            Kontakty
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationDesktop;