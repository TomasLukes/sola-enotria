import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { ReactElement } from 'react';

const BackLink = ({ href, className }: { href: string; className: string }): ReactElement => {
  return (
    <Link href={href} className={clsx('flex items-center gap-1 hover:text-yellow-500', className)}>
      <ChevronLeftIcon className="h-5 w-5" />
      <p className="paragpraph ">Zpět</p>
    </Link>
  );
};

export default BackLink;
