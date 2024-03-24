import clsx from 'clsx';
import { ReactElement, Suspense } from 'react';
import OpeningHours from './OpeningHours/OpeningHours';

const FindUs = ({ className }: { className?: string }): ReactElement => {
  return (
    <section
      id="kudy-k-nam"
      className={clsx('overflow-hidden bg-grain3 bg-bottom bg-no-repeat bg-contain', className)}
    >
      <div>
        <div className="container-base py-20 md:py-36 flex justify-start flex-col gap-10 md:gap-16">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <h3 className="w-full md:w-1/3 heading underline decoration-accent">
              Kde nás najdete?
            </h3>
            <div className="w-full md:w-2/3">
              <p className="paragraph pb-2">
                <strong>MHD</strong> zastávka Krakov u obchodního centra. Možné alternativy:
                Zhořelecká, Na Pazderce, Poliklinika Mazurská. Z metra Kobylisy: autobusy č. 102 (7
                min) a č. 177 (9 min). Z Čimic, Dolních Chaber a Ďáblic: autobus č. 202. Z Troji:
                autobus č. 236.
              </p>
              <p className="paragraph pb-2">
                <strong>Autem</strong> se k nám dostanete z ulice Hnězdenská. Zaparkovat můžete na
                nadzemním parkovišti či v pozemních garážích.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 text-white">
            <Suspense
              fallback={
                <div className="w-full md:w-1/2 h-[350px] md:h-[500px] bg-black rounded-md">
                  Loading...
                </div>
              }
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.7933716771395!2d14.414829477143462!3d50.12758837153229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bead92484e85d%3A0xdc77b846bf84237c!2sPIZZERIE%20SOLA%20ENOTRIA!5e0!3m2!1sen!2scz!4v1707649082552!5m2!1sen!2scz"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full md:w-1/2 h-[350px] md:h-[500px] mx-auto border-none rounded-md overflow-hidden"
              />
            </Suspense>
            <OpeningHours />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
