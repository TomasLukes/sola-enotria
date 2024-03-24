'use client';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';

const DailyMenuControls = ({ header, handlePreviousItem, handleNextItem }: any) => {
  return (
    <div className="w-full lg:w-[500px] mx-auto flex items-center justify-between">
      <button onClick={handlePreviousItem}>
        <ArrowLeftCircleIcon className="w-8 h-8 text-white hover:scale-[102%] hover:text-yellow-500" />
      </button>
      <p className="text-xl text-white">{`${header?.dayName} ${header?.date}`}</p>
      <button onClick={handleNextItem}>
        <ArrowRightCircleIcon className="w-8 h-8 text-white hover:scale-[102%] hover:text-yellow-500" />
      </button>
    </div>
  );
};

export default DailyMenuControls;
