import { ReactElement } from 'react';

const Navigation = (): ReactElement => {
  return (
    <nav>
      <ul className="flex gap-6">
        <li>O nás</li>
        <li>Denní menu</li>
        <li>Jídelní lístek</li>
        <li>Kontakty</li>
      </ul>
    </nav>
  );
};

export default Navigation;
