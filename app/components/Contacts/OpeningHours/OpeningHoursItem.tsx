import { ReactElement } from 'react';
import clsx from 'clsx';

const OpeningHoursItem = ({
  dayName,
  openingHours,
  isCurrentDay,
}: {
  dayName: string;
  openingHours: string;
  isCurrentDay: boolean;
}): ReactElement => {
  return (
    <div
      className={clsx('w-full flex items-center justify-between', { 'text-accent': isCurrentDay })}
    >
      <p>{dayName}</p>
      <p>{openingHours}</p>
    </div>
  );
};

export default OpeningHoursItem;
