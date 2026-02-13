import { PRICES, OLD_PRICES } from '../config/constants';

/**
 * ROOM DATA CONFIGURATION
 * =======================
 *
 * INSTRUCTIONS FOR ADDING ROOM PHOTOS:
 *
 * 1. Create folders in /public/img/ for each room type:
 *    - /public/img/standart/
 *    - /public/img/econom/
 *
 * 2. Add your room photos to these folders
 *
 * 3. Update the 'images' arrays below with your photo paths:
 *    - Use full paths like "/img/standart/room1.jpg"
 *    - Or use descriptive labels like "Стандарт A" for placeholder images
 *
 * 4. For best results, use consistent image dimensions (recommended: 1200x900px)
 *
 * 5. Supported formats: JPG, PNG, WebP
 *
 * PRICES:
 * Edit prices in /src/config/constants.js
 */
export const rooms = [
  // ====== STANDARD ROOMS ======
  {
    slug: "standart-2-13",
    title: "«Стандарт» для двоих",
    subtitle: "Уютная комната для двоих, где современный стиль и комфорт продуманы до мелочей!",
    price: PRICES.priceS2,
    oldPrice: OLD_PRICES.oldPriceS2,
    features: ["Отдельный санузел", "Кондиционер", "Холодильник", "Зона отдыха"],
    // UPDATE THESE PATHS TO YOUR ACTUAL ROOM PHOTOS:
    images: [
      "/img/standart/2/13-1.webp",
      "/img/standart/2/13-2.webp",
      "/img/standart/001.webp",
      "/img/standart/002.webp"
    ]
  },
  {
    slug: "standart-2-14",
    title: "«Стандарт» для двоих",
    subtitle: "Уютная комната для двоих, где современный стиль и комфорт продуманы до мелочей! Площадь — 12 м²",
    price: PRICES.priceS2,
    oldPrice: OLD_PRICES.oldPriceS2, 
    features: ["Отдельный санузел", "Кондиционер", "Холодильник", "Зона отдыха"],
    // ADD YOUR PHOTOS HERE - REPLACE PLACEHOLDER LABELS:
    images: [
      "/img/standart/2/14-1.webp",
      "/img/standart/2/14-2.webp",
      "/img/standart/001.webp",
      "/img/standart/002.webp"
    ]
  },
  {
    slug: "standart-2-12",
    title: "«Стандарт» для двоих",
    subtitle: "Уютная комната для двоих, где современный стиль и комфорт продуманы до мелочей! Площадь — 12 м²",
    price: PRICES.priceS2,
    oldPrice: OLD_PRICES.oldPriceS2,
    features: ["Отдельный санузел", "Кондиционер", "Холодильник", "Зона отдыха"],
    images: [
      "/img/standart/2/12-1.webp",
      "/img/standart/2/12-2.webp",
      "/img/standart/001.webp",
      "/img/standart/002.webp"
    ]
  },
    {
    slug: "standart-2-15",
    title: "«Стандарт» для двоих",
    subtitle: "Уютная комната для двоих, где современный стиль и комфорт продуманы до мелочей! Площадь — 12 м²",
    price: PRICES.priceS2,
    oldPrice: OLD_PRICES.oldPriceS2,
    features: ["Отдельный санузел", "Кондиционер", "Холодильник", "Зона отдыха"],
    images: [
      "/img/standart/2/15-1.webp",
      "/img/standart/2/15-2.webp",
      "/img/standart/001.webp",
      "/img/standart/002.webp"
    ]
  },
  {
    slug: "standart-3-2",
    title: "«Стандарт» для троих",
    subtitle: "Просторная комната для троих с полным набором удобств — для отдыха всей семьёй. Площадь — 15 м²",
    price: PRICES.priceS3,
    oldPrice: OLD_PRICES.oldPriceS3,
    features: ["Отдельный санузел", "Кондиционер", "Холодильник", "Зона отдыха"],
    images: [
      "/img/standart/3/2-1.webp",
      "/img/standart/3/2-2.webp",
      "/img/standart/001.webp",
      "/img/standart/002.webp"
    ]
  },
  {
    slug: "standart-3-1",
    title: "«Стандарт» для троих",
    subtitle: "Просторная комната для троих с полным набором удобств — для отдыха всей семьёй. Площадь — 15 м²",
    price: PRICES.priceS3,
    oldPrice: OLD_PRICES.oldPriceS3,
    features: ["Отдельный санузел", "Кондиционер", "Холодильник", "Зона отдыха"],
    images: [
      "/img/standart/3/1-1.webp",
      "/img/standart/3/1-2.webp",
      "/img/standart/001.webp",
      "/img/standart/002.webp"
    ]
  },
  {
    slug: "standart-3-3",
    title: "«Стандарт» для троих",
    subtitle: "Просторная комната для троих с полным набором удобств — для отдыха всей семьёй. Площадь — 15 м²",
    price: PRICES.priceS3,
    oldPrice: OLD_PRICES.oldPriceS3, 
    features: ["Отдельный санузел", "Кондиционер", "Холодильник", "Зона отдыха"],
    images: [
      "/img/standart/3/3-1.webp",
      "/img/standart/3/3-2.webp",
      "/img/standart/001.webp",
      "/img/standart/002.webp"
    ]
  },

  // ====== ECONOMY ROOMS ======
  {
    slug: "econom-2-1",
    title: "«Эконом» для двоих",
    subtitle: "Бюджетная комната для двоих с ТВ и вентилятором — комфортный отдых по выгодной цене. Площадь — 8 м²",
    price: PRICES.priceE2,
    oldPrice: OLD_PRICES.oldPriceE2,
    features: ["Зона отдыха", "Общий санузел", "Вентилятор"],
    images: ["Эконом 2-мест 1", "Эконом 2-мест 2", "Эконом 2-мест 3"]
  },
  {
    slug: "econom-2-2",
    title: "«Эконом» для двоих",
    subtitle: "Бюджетная комната для двоих с ТВ и вентилятором — комфортный отдых по выгодной цене. Площадь — 8 м²",
    price: PRICES.priceE2,
    oldPrice: OLD_PRICES.oldPriceE2,
    features: ["Зона отдыха", "Общий санузел", "Вентилятор"], 
    images: ["Эконом 2 A", "Эконом 2 B"]
  },
  {
    slug: "econom-2-3",
    title: "«Эконом» для двоих",
    subtitle: "Бюджетная комната для двоих с ТВ и вентилятором — комфортный отдых по выгодной цене. Площадь — 8 м²",
    price: PRICES.priceE2,
    oldPrice: OLD_PRICES.oldPriceE2,
    features: ["Зона отдыха", "Общий санузел", "Вентилятор"],
    images: ["Эконом 2 X", "Эконом 2 Y", "Эконом 2 Z"]
  },
  {
    slug: "econom-3-1",
    title: "«Эконом» для троих",
    subtitle: "Комната для троих с холодильником, вентилятором и ТВ — простор и уют для вашей семьи, отдых у самого моря без лишних переплат. Площадь — 12 м²",
    price: PRICES.priceE3,
    oldPrice: OLD_PRICES.oldPriceE3,
    features: ["Холодильник", "Зона отдыха", "Общий санузел", "Вентилятор"],
    images: ["Эконом 3-мест 1", "Эконом 3-мест 2", "Эконом 3-мест 3"]
  },
  {
    slug: "econom-3-2",
    title: "«Эконом» для троих",
    subtitle: "Комната для троих с холодильником, вентилятором и ТВ — простор и уют для вашей семьи, отдых у самого моря без лишних переплат. Площадь — 12 м²",
    price: PRICES.priceE3,
    oldPrice: OLD_PRICES.oldPriceE3, 
    features: ["Холодильник", "Зона отдыха", "Общий санузел", "Вентилятор"],
    images: ["Эконом 3 A", "Эконом 3 B"]
  },
  {
    slug: "econom-3-3",
    title: "«Эконом» для троих",
    subtitle: "Комната для троих с холодильником, вентилятором и ТВ — простор и уют для вашей семьи, отдых у самого моря без лишних переплат. Площадь — 12 м²",
    price: PRICES.priceE3,
    oldPrice: OLD_PRICES.oldPriceE3,
    features: ["Холодильник", "Зона отдыха", "Общий санузел", "Вентилятор"], 
    images: ["Эконом 3 X", "Эконом 3 Y", "Эконом 3 Z"]
  },
  {
    slug: "econom-4-1",
    title: "«Эконом» для четверых",
    subtitle: "Идеально для большой семьи — холодильник, вентилятор, ТВ и шаг до пляжа по доступной цене. Площадь — 18 м²",
    price: PRICES.priceE4,
    oldPrice: OLD_PRICES.oldPriceE4,
    features: ["Холодильник", "Зона отдыха", "Общий санузел", "Вентилятор"],
    images: ["Эконом 4-мест 1", "Эконом 4-мест 2", "Эконом 4-мест 3"]
  }
];

/**
 * Gets rooms filtered by category
 */
export const getRoomsByCategory = (category) => {
  if (category === 'standard') {
    return rooms.filter(room => room.slug.includes('standart'));
  }
  if (category === 'economy') {
    return rooms.filter(room => room.slug.includes('econom'));
  }
  return rooms;
};

/**
 * Finds a specific room by slug
 */
export const findRoomBySlug = (slug) => {
  return rooms.find(room => room.slug === slug);
};
