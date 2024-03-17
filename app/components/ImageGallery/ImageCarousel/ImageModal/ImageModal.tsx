'use client';

import { ReactElement, Fragment, useState } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';

const ImageModal = ({
  imgSrc,
  className,
  variant,
}: {
  imgSrc: string;
  className?: string;
  variant: string;
}): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = (): void => setIsOpen((val) => !val);

  return (
    <>
      <button
        className={clsx('relative shadow-lg overflow-hidden', className, {
          'w-[250px] h-[250px] rounded-md': variant === 'mobile',
        })}
        onClick={toggleIsOpen}
      >
        <Image fill src={imgSrc} alt="Sola Enotria interier" objectFit="cover" priority />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={toggleIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed z-[999] inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed z-[999] inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full">
                  <div className="relative w-full h-[250px] rounded-md shadow-lg overflow-hidden">
                    <Image
                      src={imgSrc}
                      alt="Sola Enotria interier"
                      className="w-full h-full object-contain"
                      fill
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ImageModal;
