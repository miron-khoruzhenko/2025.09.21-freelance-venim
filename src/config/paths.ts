// src/config/paths.ts

import { ANCHORS } from "./anchors";

export const PATHS = {
  home: '/',
  // about: '/about',
  about: `/#${ANCHORS.about}`,
  partners: `/#${ANCHORS.partners}`,
  promo: '/promo',
  experience: '/experience',
  blog: `/#${ANCHORS.blog}`,
  reviews: '/reviews',
  contacts: `/#${ANCHORS.contact}`,
  privacyPolicy: '/privacy-policy',
  cookiesPolicy: '/cookies-policy',
  
  services: {
    root: '/services',
    individuals: '/services/individuals',
    business: '/services/business',
  },
};