'use client';

import { dailyMenuData } from '@/app/content/dailyMenuData';
import Button from '../UI/Button';
import DailyMenuControls from './DailyMenuControls';
import MenuItem from './MenuItem';
import { useState } from 'react';
import useDateTime from '@/hooks/useDateTime';

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
    if (selectedDay > dayOfWeek) {
      setSelectedDay((prev) => prev - 1);
    }
  };

  const handleNextItem = () => {
    if (selectedDay < 4) {
      setSelectedDay((prev) => prev + 1);
    }
  };

  return (
    <section
      id="poledni-menu"
      className="container-base py-12 md:py-32 lg:py-40 flex justify-start flex-col gap-5 md:gap-8"
    >
      <div className="flex flex-col md:flex-row">
        <h3 className="w-full md:w-1/3 heading underline decoration-accent pb-4">Polední menu</h3>
        <div className="w-full md:w-2/3">
          <p className="paragraph pb-2">
            Také máte rádi přátelskou obsluhu, vše bez komplikací a výborné jídlo? Tak to jste u nás
            správně! Náš tým z Pizza Bohnice připraví jídlo pro každou příležitost.
          </p>
          <p className="paragraph">
            Nabízí také širokou škálu chutných pokrmů a osvěžujících nápojů. Čerstvost surovin je
            základ naší rozmanité italské kuchyně.
          </p>
        </div>
      </div>
      <article className="gradient-dark w-full flex h-[450px] lg:h-[450px] p-6 md:px-12 md:py-8 mt-8 md:mt-12 rounded-xl shadow-xl">
        <div className="relative flex-col justify-between w-full">
          <DailyMenuControls
            header={menuHeader}
            handleNextItem={handleNextItem}
            handlePreviousItem={handlePreviousItem}
          />
          <div className="my-8">{menuItems}</div>
          <div className="absolute bottom-0 w-full flex justify-center">
            <Button text="Celý týden" variant="primary" className="text-white" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default DailyMenu;
