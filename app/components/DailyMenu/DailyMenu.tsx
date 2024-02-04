import Button from '../UI/Button';
import DailyMenuControls from './DailyMenuControls';
import MenuItem from './MenuItem';

const menuItemsData = [
  {
    heading: 'Gnocchi s kuřecím masem',
    subheading: 'listový špenát, parmezán, smetanová omáčka',
    price: 155,
  },
  {
    heading: 'Hovězí rajská pečeně s těstovinou',
    price: 159,
  },
  {
    heading: 'Smažený květák',
    subheading: 'vařené brambory, tatarka',
    price: 149,
  },
];

const menuItems = menuItemsData.map(({ heading, subheading, price }) => (
  <MenuItem key={heading} heading={heading} subheading={subheading} price={price} />
));

const DailyMenu = () => {
  return (
    <section className="container-base py-16 md:py-32 lg:py-40 flex justify-start flex-col gap-5 md:gap-8">
      <div className="flex flex-col md:flex-row">
        <h3 className="w-full md:w-1/3 heading underline decoration-accent pb-4">Polední menu</h3>
        <div className="w-full md:w-2/3">
          <p className="paragraph pb-2">
            Také máte rádi přátelskou obsluhu, vše bez komplikací a výborné jídlo? Tak to jste u nás
            správně! Náš tým z Pizza Bohnice připraví jídlo pro každou příležitost.
          </p>
          <p className="paragraph">
            Nabízí také širokou škálu chutných pokrmů a osvěžujících nápojů. Čerstvost surovin je
            základ naší rozmanité italské kuchyně.
          </p>
        </div>
      </div>
      <article className="gradient-dark w-full flex-col justify-between p-6 md:px-12 md:py-8 mt-8 md:mt-12 rounded-xl shadow-xl">
        <DailyMenuControls />
        <div className="my-8">{menuItems}</div>
        <div className="w-full flex justify-center">
          <Button text="Celý týden" variant="primary" className="text-white" />
        </div>
      </article>
    </section>
  );
};

export default DailyMenu;
