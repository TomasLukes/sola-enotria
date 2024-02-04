import clsx from 'clsx';
import { ReactElement } from 'react';

const Button = ({
  text,
  className,
  variant,
}: {
  text: string;
  variant: 'primary' | 'tertinary';
  className?: string;
}): ReactElement => {
  return (
    <button
      className={clsx(
        'px-6 py-2 md:px-9 md:py-3 text-center w-fit rounded-3xl drop-shadow-lg text-nowrap',
        className,
        {
          'bg-accent': variant === 'primary',
          'bg-transparent border-white border-2': variant === 'tertinary',
        }
      )}
    >
      {text}
    </button>
  );
};

export default Button;
