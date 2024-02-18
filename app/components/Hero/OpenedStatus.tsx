'use client';

import { ReactElement } from 'react';
import clsx from 'clsx';
import useDateTime from '@/hooks/useDateTime';
const openedMessage = 'Právě máme otevřeno';
const closedMessage = 'Právě máme zavřeno';

const OpenedStatus = (): ReactElement => {
  const { currentHour } = useDateTime();
  const isOpened: boolean = currentHour > 10 && currentHour < 22;

  return (
    <div className="flex items-center gap-2">
      <span
        className={clsx('rounded-full w-2 h-2 animate-pulse', {
          'bg-green-500': isOpened,
          'bg-red-500': !isOpened,
        })}
      ></span>
      <p>{isOpened ? openedMessage : closedMessage}</p>
    </div>
  );
};

export default OpenedStatus;
