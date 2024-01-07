import clsx from 'clsx';

const AboutUs = ({ className }: IClassName) => {
  return (
    <section className={clsx('container-base my-16 md:my-32 lg:my-40', className)}>
      <h3 className="w-full text-3xl underline underline-accent">O nás</h3>
      <p className="w-1/2">
        Také máte rádi přátelskou obsluhu, vše bez komplikací a výborné jídlo? Tak to jste u nás
        správně! Náš tým z Pizza Bohnice připraví jídlo pro každou příležitost, ale nabízí také
        širokou škálu chutných pokrmů a osvěžujících nápojů. Čerstvost surovin je základ naší
        rozmanité italské kuchyně.
      </p>
    </section>
  );
};

export default AboutUs;
