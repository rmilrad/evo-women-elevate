/**
 * Digital product portfolio items
 *
 * This file contains the data for digital product portfolio items displayed in the application.
 * Each item has a unique ID, image path, title key, and description key for localization.
 */

import { PortfolioItem } from "@/types/portfolio";

// Import all digital product images directly
import img1 from '../../imgs/digital_products/1.png';
import img2 from '../../imgs/digital_products/2.png';
import img3 from '../../imgs/digital_products/3.png';
import img4 from '../../imgs/digital_products/4.png';
import img5 from '../../imgs/digital_products/5.png';
import img6 from '../../imgs/digital_products/6.png';
import img7 from '../../imgs/digital_products/7.png';
import img8 from '../../imgs/digital_products/8.png';
import img9 from '../../imgs/digital_products/9.png';
import img10 from '../../imgs/digital_products/10.png';
import img11 from '../../imgs/digital_products/11.png';
import img12 from '../../imgs/digital_products/12.png';
import img13 from '../../imgs/digital_products/13.png';
import img14 from '../../imgs/digital_products/14.png';
import img15 from '../../imgs/digital_products/15.png';
import img16 from '../../imgs/digital_products/16.png';
import img17 from '../../imgs/digital_products/17.png';

// Digital product items with directly imported images
export const digitalProductItems: PortfolioItem[] = [
  {
    id: 1,
    image: img1,
    titleKey: "digitalProduct1",
    descriptionKey: "empoweredParent"
  },
  {
    id: 2,
    image: img2,
    titleKey: "digitalProduct2",
    descriptionKey: "moduleIntro"
  },
  {
    id: 3,
    image: img3,
    titleKey: "digitalProduct3",
    descriptionKey: "selfCare"
  },
  {
    id: 4,
    image: img4,
    titleKey: "digitalProduct4",
    descriptionKey: "takeCareOfYourself"
  },
  {
    id: 5,
    image: img5,
    titleKey: "digitalProduct5",
    descriptionKey: "sneakInYouTime"
  },
  {
    id: 6,
    image: img6,
    titleKey: "digitalProduct6",
    descriptionKey: "connectBeforeCorrect"
  },
  {
    id: 7,
    image: img7,
    titleKey: "digitalProduct7",
    descriptionKey: "connectingReal"
  },
  {
    id: 8,
    image: img8,
    titleKey: "digitalProduct8",
    descriptionKey: "parentingTool"
  },
  {
    id: 9,
    image: img9,
    titleKey: "digitalProduct9",
    descriptionKey: "stressResets"
  },
  {
    id: 10,
    image: img10,
    titleKey: "digitalProduct10",
    descriptionKey: "aboutMe"
  },
  {
    id: 11,
    image: img11,
    titleKey: "digitalProduct11",
    descriptionKey: "ebookUsage"
  },
  {
    id: 12,
    image: img12,
    titleKey: "digitalProduct12",
    descriptionKey: "diaphragmaticBreathing"
  },
  {
    id: 13,
    image: img13,
    titleKey: "digitalProduct13",
    descriptionKey: "twoStepBreathing"
  },
  {
    id: 14,
    image: img14,
    titleKey: "digitalProduct14",
    descriptionKey: "journalExercise"
  },
  {
    id: 15,
    image: img15,
    titleKey: "digitalProduct15",
    descriptionKey: "progressiveMuscleRelaxation"
  },
  {
    id: 16,
    image: img16,
    titleKey: "digitalProduct16",
    descriptionKey: "pmrProcess"
  },
  {
    id: 17,
    image: img17,
    titleKey: "digitalProduct17",
    descriptionKey: "presentMomentAwareness"
  }
];
