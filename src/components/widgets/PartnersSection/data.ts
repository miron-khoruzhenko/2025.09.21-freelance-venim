// src/components/widgets/PartnersSection/data.ts

export interface Partner {
  name: string;
  logo: string;
  url: string | null;
}

export const partnersData: Partner[] = [
  // Page 1
  { name: 'КонсультантПлюс', logo: '/images/7.Partners/partner_1.png', url: '#' },
  { name: 'Авангард', logo: '/images/7.Partners/partner_2.png', url: '#' },
  { name: 'Доктор Борменталь', logo: '/images/7.Partners/partner_3.png', url: '#' },
  { name: 'Wine & Whiskey', logo: '/images/7.Partners/partner_4.png', url: '#' },
  { name: 'Sartoria Nuova', logo: '/images/7.Partners/partner_5.png', url: '#' },
  { name: 'AVA DIGITAL', logo: '/images/7.Partners/partner_6.png', url: '#' },
  // Page 2
  { name: 'КонсультантПлюс', logo: '/images/7.Partners/partner_7.png', url: null },
];