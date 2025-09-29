// src/components/widgets/PracticeCaseModal/index.tsx
"use client";

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
// import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { PracticeCase } from '@/types/interfaces';
import { twMerge as cn } from 'tailwind-merge';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  caseData: PracticeCase | null;
}

export const PracticeCaseModal = ({ isOpen, onClose, caseData }: Props) => {
  if (!caseData) return null;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
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
              <Dialog.Panel className={cn("w-full transform overflow-hidden rounded-2xl bg-white p-8 md:p-12 text-left align-middle shadow-xl transition-all", caseData.documentScanUrl ? "max-w-4xl" : "max-w-xl")}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800">
                  <X size={28} />
                </button>

                <div className={cn("grid grid-cols-1 gap-8", caseData.documentScanUrl ? " md:grid-cols-2" : "md:grid-cols-1")}>
                  {/* Левая колонка */}
                  <div className="flex flex-col">
                    <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-gray-900">
                      {caseData.title}
                    </Dialog.Title>
                    <div className="mt-6">
                      <p className="font-semibold">Запрос клиента:</p>
                      <p className="text-sm text-gray-600">{caseData.clientRequest}</p>
                    </div>
                    <div className="mt-4">
                      <p className="font-semibold">Наши действия:</p>
                      <p className="text-sm text-gray-600">{caseData.ourActions}</p>
                    </div>
                    <div className="mt-auto pt-6">
                      <p className="font-semibold">Результат:</p>
                      {caseData.mainContent}
                      <div className="flex items-center gap-2 text-gray-600">
                        <Image src="/images/tick.png" alt="tick" width={24} height={24} />
                        <span>{caseData.resultText}</span>
                      </div>
                    </div>
                  </div>

                  {/* Правая колонка */}
                  {caseData.documentScanUrl && (
                    <div className="flex items-center justify-center bg-gray-100 rounded-lg min-h-[300px]">
                      <Image src={caseData.documentScanUrl} alt="Скан документов" width={400} height={500} className="object-contain" />
                    </div>)
                  }
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};