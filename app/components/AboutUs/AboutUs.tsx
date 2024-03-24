import clsx from 'clsx';
import ImageGallery from '@/app/components/ImageGallery/ImageGallery';

const AboutUs = ({ className }: IClassName) => {
  return (
    <section
      id="o-nas"
      className={clsx('overflow-hidden bg-grain1 bg-no-repeat	bg-contain', className)}
    >
      <div>
        <div className="pt-20 md:pt-36 pb-8 md:pb-12 flex justify-start flex-col gap-10 md:gap-16">
          <div className="container-base flex flex-col md:flex-row gap-4 md:gap-8">
            <h3 className="w-full md:w-1/3 heading underline decoration-accent">O nás</h3>
            <div className="w-full md:w-2/3">
              <p className="paragraph pb-2">
                Také máte rádi přátelskou obsluhu, vše bez komplikací a výborné jídlo? Tak to jste u
                nás správně! Náš tým z Pizza Bohnice připraví jídlo pro každou příležitost.
              </p>
              <p className="paragraph">
                Nabízí také širokou škálu chutných pokrmů a osvěžujících nápojů. Čerstvost surovin
                je základ naší rozmanité italské kuchyně.
              </p>
            </div>
          </div>
          <ImageGallery />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
