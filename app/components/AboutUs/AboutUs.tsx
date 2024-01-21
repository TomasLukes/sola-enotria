import clsx from 'clsx';
import Image from 'next/image';

const AboutUs = ({ className }: IClassName) => {
  return (
    <section
      className={clsx(
        'container-base h-[100dvh] py-16 md:py-32 lg:p  y-40 flex justify-start flex-col md:flex-row gap-5 md:gap-8 bg-grain bg-contain',
        className
      )}
    >
      <div className="w-full md:w-1/2">
        <h3 className="text-3xl underline decoration-accent pb-4">O nás</h3>
        <p>
          Také máte rádi přátelskou obsluhu, vše bez komplikací a výborné jídlo? Tak to jste u nás
          správně! Náš tým z Pizza Bohnice připraví jídlo pro každou příležitost, ale nabízí také
          širokou škálu chutných pokrmů a osvěžujících nápojů. Čerstvost surovin je základ naší
          rozmanité italské kuchyně.
        </p>
      </div>
      <div className="relative w-full md:w-1/2 h-[260px] md:h-[360px] rounded-md shadow-lg overflow-hidden">
        <Image fill src="/assets/restaurant/interier.jpg" alt="Sola Enotria interier" />
      </div>
    </section>
  );
};

export default AboutUs;
