import { HomeIcon, PhoneArrowUpRightIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { ReactElement } from 'react';

const Contacts = (): ReactElement => {
  return (
    <section className="w-full gradient-dark text-white">
      <div className="container-base py-8">
        <div>
          <h5 className="subheading pb-2 underline decoration-accent">Kontakty</h5>
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-2">
              <HomeIcon className="w-4 h-4" />
              <p className="paragraph">Adresa: Lodžská 850/6, 181 00 Praha 8</p>
            </li>
            <li className="flex items-center gap-2">
              <PhoneArrowUpRightIcon className="w-3.5 h-3.5" />
              <p className="paragraph">Telefon: +420 773 510 277</p>
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="w-4 h-4" />
              <p className="paragraph">Email: info@solaenotria.cz</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
