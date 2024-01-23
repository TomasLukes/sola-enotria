import clsx from 'clsx';
import Image from 'next/image';
import {
  CardsCarousel,
  CardsCarouselContent,
  CardsCarouselItem,
} from '../CardsCarousel/CardsCarousel';

const AboutUs = ({ className }: IClassName) => {
  return (
    <section className={clsx('bg-grain bg-cover', className)}>
      <div>
        <div className="h-[100dvh] py-16 md:py-32 lg:py-40 flex justify-start flex-col md:flex-row gap-5 md:gap-8">
          <div className="container-full w-full md:w-1/2">
            <h3 className="text-3xl underline decoration-accent pb-4">O nás</h3>
            <p>
              Také máte rádi přátelskou obsluhu, vše bez komplikací a výborné jídlo? Tak to jste u
              nás správně! Náš tým z Pizza Bohnice připraví jídlo pro každou příležitost, ale nabízí
              také širokou škálu chutných pokrmů a osvěžujících nápojů. Čerstvost surovin je základ
              naší rozmanité italské kuchyně.
            </p>
          </div>
          <div className="relative w-full md:w-1/2 h-[260px] md:h-[360px] rounded-md shadow-lg overflow-hidden hidden lg:block">
            <Image fill src="/assets/restaurant/interier-01.jpg" alt="Sola Enotria interier" />
          </div>
          <CardsCarousel className="w-full lg:hidden">
            <CardsCarouselContent>
              <CardsCarouselItem>
                <div className="relative w-[250px] h-[250px] rounded-md shadow-lg overflow-hidden">
                  <Image
                    fill
                    src="/assets/restaurant/interier-01.jpg"
                    alt="Sola Enotria interier"
                    objectFit="cover"
                  />
                </div>
              </CardsCarouselItem>
              <CardsCarouselItem>
                <div className="relative w-[250px] h-[250px] rounded-md shadow-lg overflow-hidden">
                  <Image
                    fill
                    src="/assets/restaurant/interier-02.jpg"
                    alt="Sola Enotria interier"
                    objectFit="cover"
                  />
                </div>
              </CardsCarouselItem>
              <CardsCarouselItem>
                <div className="relative w-[250px] h-[250px] rounded-md shadow-lg overflow-hidden">
                  <Image
                    fill
                    src="/assets/restaurant/interier-03.jpg"
                    alt="Sola Enotria interier"
                    objectFit="cover"
                  />
                </div>
              </CardsCarouselItem>
              <CardsCarouselItem>
                <div className="relative w-[250px] h-[250px] rounded-md shadow-lg overflow-hidden">
                  <Image
                    fill
                    src="/assets/restaurant/interier-04.jpg"
                    alt="Sola Enotria interier"
                    objectFit="cover"
                  />
                </div>
              </CardsCarouselItem>
              <CardsCarouselItem>
                <div className="relative w-[250px] h-[250px] rounded-md shadow-lg overflow-hidden">
                  <Image
                    fill
                    src="/assets/restaurant/interier-05.jpg"
                    alt="Sola Enotria interier"
                    objectFit="cover"
                  />
                </div>
              </CardsCarouselItem>
              <CardsCarouselItem>
                <div className="relative w-[250px] h-[250px] rounded-md shadow-lg overflow-hidden">
                  <Image
                    fill
                    src="/assets/restaurant/interier-06.jpg"
                    alt="Sola Enotria interier"
                    objectFit="cover"
                  />
                </div>
              </CardsCarouselItem>
              <CardsCarouselItem>
                <div className="relative w-[250px] h-[250px] rounded-md shadow-lg overflow-hidden">
                  <Image
                    fill
                    src="/assets/restaurant/interier-07.jpg"
                    alt="Sola Enotria interier"
                    objectFit="cover"
                  />
                </div>
              </CardsCarouselItem>
              <CardsCarouselItem>
                <div className="relative w-[250px] h-[250px] rounded-md shadow-lg overflow-hidden">
                  <Image
                    fill
                    src="/assets/restaurant/interier-08.jpg"
                    alt="Sola Enotria interier"
                    objectFit="cover"
                  />
                </div>
              </CardsCarouselItem>
            </CardsCarouselContent>
          </CardsCarousel>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
