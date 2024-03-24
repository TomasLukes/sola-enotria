import Link from 'next/link';
import { ReactElement } from 'react';

const NavigationDesktop = (): ReactElement => {
  return (
    <nav className="hidden lg:block ml-auto">
      <ul className="gap-6 hidden md:flex">
        <li>
          <Link
            className="font-semibold cursor-pointer hover:text-yellow-500 hover:scale-[102%]"
            href={'/#o-nas'}
          >
            O nás
          </Link>
        </li>
        <li>
          <Link
            className="font-semibold cursor-pointer hover:text-yellow-500 hover:scale-[102%]"
            href={'/#poledni-menu'}
          >
            Polední menu
          </Link>
        </li>
        <li>
          <Link
            className="font-semibold cursor-pointer hover:text-yellow-500 hover:scale-[102%]"
            href={'/jidelni-listek'}
          >
            Jídelní lístek
          </Link>
        </li>
        <li>
          <Link
            className="font-semibold cursor-pointer hover:text-yellow-500 hover:scale-[102%]"
            href={'/#kudy-k-nam'}
          >
            Kudy k nám?
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationDesktop;
