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
    <section className="container-base">
      <article className="gradient-dark w-full flex-col justify-between px-12 py-8 my-24 rounded-xl shadow-xl">
        <h3 className="heading text-white underline decoration-accent mb-12">Polední menu</h3>
        <div>{menuItems}</div>
        <DailyMenuControls />
      </article>
    </section>
  );
};

export default DailyMenu;
