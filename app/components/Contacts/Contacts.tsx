import clsx from 'clsx';
import { ReactElement } from 'react';

const Contacts = ({ className }: { className?: string }): ReactElement => {
  return (
    <section id="kontakty" className={clsx('overflow-hidden', className)}>
      <div>
        <div className="container-base min-h-screen py-16 md:py-32 lg:py-40 flex justify-start flex-col gap-5 md:gap-8">
          <div className="flex flex-col md:flex-row">
            <h3 className="w-full md:w-1/2 heading underline decoration-accent pb-4">
              Kde nás najdete?
            </h3>
            <div className="w-full md:w-1/2">
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
            <div className="w-full md:w-1/2 h-[350px] md:h-[500px] bg-black p-8 grid place-items-center rounded-md">
              <h5 className="text-xl text-center pb-2">Otevírací doba</h5>
              <div className="w-full flex items-center justify-between">
                <p>Pondělí</p>
                <p> 11:00-22:00</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <p>Úterý</p>
                <p> 11:00-22:00</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <p>Středa</p>
                <p> 11:00-22:00</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <p>Čtvrtek</p>
                <p> 11:00-22:00</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <p>Pátek</p>
                <p> 11:00-22:00</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <p>Sobota</p>
                <p> 11:00-22:00</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <p>Neděle</p>
                <p> 11:00-22:00</p>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.7933716771395!2d14.414829477143462!3d50.12758837153229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bead92484e85d%3A0xdc77b846bf84237c!2sPIZZERIE%20SOLA%20ENOTRIA!5e0!3m2!1sen!2scz!4v1707649082552!5m2!1sen!2scz"
              className="w-full md:w-1/2 h-[350px] md:h-[500px] mx-auto border-none rounded-md"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
