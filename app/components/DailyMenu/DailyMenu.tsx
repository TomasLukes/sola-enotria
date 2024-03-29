'use client';

import { useState } from 'react';
import { dailyMenuData } from '@/app/content/dailyMenuData';
import DailyMenuControls from '@/app/components/DailyMenu/DailyMenuControls';
import MenuItem from '@/app/components/DailyMenu/MenuItem';
import useDateTime from '@/app/lib/hooks/useDateTime';
import Button from '../UI/Button';
import Link from 'next/link';

const DailyMenu = () => {
  const { dayOfWeek } = useDateTime();
  const defaultSelectedDate = () => {
    if (dayOfWeek > 4 || dayOfWeek < 0) {
      return 0;
    } else {
      return dayOfWeek;
    }
  };
  const [selectedDay, setSelectedDay] = useState<number>(defaultSelectedDate);

  const menuHeader = dailyMenuData[selectedDay]?.day;
  const menuItems = dailyMenuData[selectedDay]?.menuItems.map(({ name, description, price }) => (
    <MenuItem key={name} name={name} description={description} price={price} />
  ));

  const handlePreviousItem = () => {
    if (selectedDay > 0) {
      setSelectedDay((prev) => prev - 1);
    }
  };

  const handleNextItem = () => {
    if (selectedDay < 4) {
      setSelectedDay((prev) => prev + 1);
    }
  };

  return (
    <section id="poledni-menu" className="bg-grain2 bg-no-repeat bg-contain">
      <div className="container-base pt-20 md:pt-36 pb-8 md:pb-12 flex justify-start flex-col gap-10 md:gap-16 bg-grain2">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <h3 className="w-full md:w-1/3 heading underline decoration-accent">Polední menu</h3>
          <div className="w-full md:w-2/3">
            <p className="paragraph pb-2">
              Také máte rádi přátelskou obsluhu, vše bez komplikací a výborné jídlo? Tak to jste u
              nás správně! Náš tým z Pizza Bohnice připraví jídlo pro každou příležitost.
            </p>
            <p className="paragraph">
              Nabízí také širokou škálu chutných pokrmů a osvěžujících nápojů. Čerstvost surovin je
              základ naší rozmanité italské kuchyně.
            </p>
          </div>
        </div>
        <article className="gradient-dark w-full flex h-[450px] lg:h-[450px] p-6 md:px-12 md:py-8 rounded-xl shadow-xl">
          <div className="relative flex-col justify-between w-full">
            <DailyMenuControls
              header={menuHeader}
              handleNextItem={handleNextItem}
              handlePreviousItem={handlePreviousItem}
            />
            <div className="my-8">{menuItems}</div>
            <Link href={'/poledni-menu'} className="absolute bottom-0 w-full flex justify-center">
              <Button text="Celý týden" variant="primary" className="text-white" />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default DailyMenu;
