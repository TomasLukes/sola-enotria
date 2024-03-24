import BackLink from '@/app/components/UI/BackLink';
import Logo from '@/app/components/UI/Logo';

const PoledniMenu = () => {
  return (
    <main className="h-screen w-screen gradient-dark text-white">
      <div className="bg-white bg-grain1 bg-no-repeat bg-cover text-black h-40 md:h-64 pt-16 flex items-center">
        <h1 className="heading w-full text-center underline decoration-accent">Polední menu</h1>
      </div>
      <div className="container-base">
        <div>
          <BackLink href="/" className="inset-0 pt-12" />
          <p className="pt-12">... bude doplněno 🍕</p>
        </div>
      </div>
    </main>
  );
};

export default PoledniMenu;
