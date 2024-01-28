import clsx from 'clsx';
import Image from 'next/image';
import {
  CardsCarousel,
  CardsCarouselContent,
  CardsCarouselItem,
} from '../CardsCarousel/CardsCarousel';
import ImageModal from '../ImageModal/ImageModal';

const AboutUs = ({ className }: IClassName) => {
  const numberOfImages = Array.from({ length: 8 });

  return (
    <section className={clsx('bg-grain bg-cover', className)}>
      <div>
        <div className="h-[100dvh] py-16 md:py-32 lg:py-40 flex justify-start flex-col md:flex-row gap-5 md:gap-8">
          <div className="container-base w-full md:w-1/2">
            <h3 className="text-4xl underline decoration-accent pb-4">O nás</h3>
            <p className="paragraph pb-2">
              Také máte rádi přátelskou obsluhu, vše bez komplikací a výborné jídlo? Tak to jste u
              nás správně! Náš tým z Pizza Bohnice připraví jídlo pro každou příležitost.
            </p>
            <p className="paragraph">
              Nabízí také širokou škálu chutných pokrmů a osvěžujících nápojů. Čerstvost surovin je
              základ naší rozmanité italské kuchyně.
            </p>
          </div>
          <div className="relative w-full md:w-1/2 h-[260px] md:h-[360px] rounded-md shadow-lg overflow-hidden hidden lg:block">
            <Image fill src="/assets/restaurant/interier-01.jpg" alt="Sola Enotria interier" />
          </div>
          <CardsCarousel className="w-full lg:hidden">
            <CardsCarouselContent>
              {numberOfImages.map((_, index) => {
                return (
                  <CardsCarouselItem key={`CardsCarousel-Image-${index}`}>
                    <ImageModal imgSrc={`/assets/restaurant/interier-0${index + 1}.jpg`} />
                  </CardsCarouselItem>
                );
              })}
            </CardsCarouselContent>
          </CardsCarousel>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
