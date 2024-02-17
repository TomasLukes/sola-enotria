import { ReactElement } from 'react';

const Contacts = (): ReactElement => {
  return (
    <section className="w-full gradient-dark text-white">
      <div className="container-base pt-8 pb-4">
        <div>
          <h5 className="subheading pb-2">Kontakty</h5>
          <p className="paragraph">Adresa: Lodžská 850/6, 181 00 Praha 8</p>
          <p className="paragraph">Telefon: +420 773 510 277</p>
          <p className="paragraph">Email: info@solaenotria.cz</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
