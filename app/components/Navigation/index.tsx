import { ReactElement } from 'react';

const Navigation = (): ReactElement => {
  return (
    <nav>
      <ul className="gap-6 hidden md:flex">
        <li>O nás</li>
        <li>Denní menu</li>
        <li>Jídelní lístek</li>
        <li>Kontakty</li>
      </ul>
    </nav>
  );
};

export default Navigation;
