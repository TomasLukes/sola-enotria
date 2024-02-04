import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';

const DailyMenuControls = () => {
  return (
    <div className="w-[500px] mx-auto flex items-center justify-between mt-12">
      <button>
        <ArrowLeftCircleIcon className="w-8 h-8 text-white" />
      </button>
      <p className="text-xl text-white">Pondělí 5.2.2024</p>
      <button>
        <ArrowRightCircleIcon className="w-8 h-8 text-white" />
      </button>
    </div>
  );
};

export default DailyMenuControls;
