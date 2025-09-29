// src/components/shared/TabbedLinkList/index.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import type { PracticeLink } from '@/components/widgets/ExperienceHero/data';

interface Tab {
  id: string;
  label: string;
}

interface TabbedLinkListProps {
  tabs: Tab[];
  data: { [key: string]: PracticeLink[] };
  initialTab?: string;
}

export const TabbedLinkList = ({ tabs, data, initialTab }: TabbedLinkListProps) => {
  const [activeTab, setActiveTab] = useState(initialTab || tabs[0].id);

  const linksToShow = data[activeTab] || [];
  
  const columns = Array.from({ length: 3 }, (_, colIndex) =>
    linksToShow.filter((_, itemIndex) => itemIndex % 3 === colIndex)
  );

  const tabButtonClasses = (tabId: string) =>
    `w-full p-6 font-semibold text-lg transition-colors duration-300 rounded-lg ${
      activeTab === tabId
        ? 'bg-primary text-white shadow-lg'
        : 'bg-gray-200 text-black hover:bg-gray-300'
    }`;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={tabButtonClasses(tab.id)}>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 p-8 rounded-b-lg">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="space-y-3 border-l-2 border-primary pl-6">
            {column.map(link => (
              <Link
                key={link.label}
                href={link.url}
                className={`block hover:text-primary transition-colors ${
                  link.isHighlighted ? 'text-primary font-semibold' : 'text-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};