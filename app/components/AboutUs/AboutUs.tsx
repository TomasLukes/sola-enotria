import clsx from 'clsx';
import ImageGallery from '@/app/components/ImageGallery/ImageGallery';

const AboutUs = ({ className }: IClassName) => {
  return (
    <section className={clsx('overflow-hidden', className)}>
      <div>
        <div className="h-screen py-16 md:py-32 lg:py-40 flex justify-start flex-col gap-5 md:gap-8">
          <div className="container-base flex flex-col md:flex-row">
            <h3 className="w-full md:w-1/3 heading underline decoration-accent pb-4">O nás</h3>
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
