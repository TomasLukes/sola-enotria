'use client';

import { ReactElement } from 'react';

import useDateTime from '@/hooks/useDateTime';
import { IOpeningHoursData, openingHoursData } from './openingHoursData';
import OpeningHoursItem from './OpeningHoursItem';

const OpeningHours = (): ReactElement => {
  const { dayOfWeek } = useDateTime();

  return (
    <div className="w-full md:w-1/2 h-[350px] md:h-[500px] bg-black p-8 grid place-items-center rounded-md">
      <h5 className="text-xl text-center pb-2">Otevírací doba</h5>
      {openingHoursData.map(({ dayName, openingHours }, index) => {
        const isCurrentDay: boolean = dayOfWeek === index;

        return (
          <OpeningHoursItem
            key={dayName}
            dayName={dayName}
            openingHours={openingHours}
            isCurrentDay={isCurrentDay}
          />
        );
      })}
    </div>
  );
};

export default OpeningHours;
