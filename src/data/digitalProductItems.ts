/**
 * Digital product portfolio items
 *
 * This file contains the data for digital product portfolio items displayed in the application.
 * Each item has a unique ID, image path, title key, and description key for localization.
 */

import { PortfolioItem } from "@/types/portfolio";

// Base path for digital product images
const DIGITAL_PRODUCTS_PATH = "/imgs/digital_products";

/**
 * Creates a digital product item with proper image path
 * @param id - Unique identifier for the item
 * @param titleKey - Translation key for the title
 * @param descriptionKey - Translation key for the description
 * @returns A complete PortfolioItem object
 */
const createDigitalProductItem = (
  id: number,
  titleKey: string,
  descriptionKey: string
): PortfolioItem => ({
  id,
  image: `${DIGITAL_PRODUCTS_PATH}/${id}.png`,
  titleKey,
  descriptionKey,
});

// Digital product items with consistent image paths from the digital_products folder
export const digitalProductItems: PortfolioItem[] = [
  createDigitalProductItem(1, "digitalProduct1", "empoweredParent"),
  createDigitalProductItem(2, "digitalProduct2", "moduleIntro"),
  createDigitalProductItem(3, "digitalProduct3", "selfCare"),
  createDigitalProductItem(4, "digitalProduct4", "takeCareOfYourself"),
  createDigitalProductItem(5, "digitalProduct5", "sneakInYouTime"),
  createDigitalProductItem(6, "digitalProduct6", "connectBeforeCorrect"),
  createDigitalProductItem(7, "digitalProduct7", "connectingReal"),
  createDigitalProductItem(8, "digitalProduct8", "parentingTool"),
  createDigitalProductItem(9, "digitalProduct9", "stressResets"),
  createDigitalProductItem(10, "digitalProduct10", "aboutMe"),
  createDigitalProductItem(11, "digitalProduct11", "ebookUsage"),
  createDigitalProductItem(12, "digitalProduct12", "diaphragmaticBreathing"),
  createDigitalProductItem(13, "digitalProduct13", "twoStepBreathing"),
  createDigitalProductItem(14, "digitalProduct14", "journalExercise"),
  createDigitalProductItem(15, "digitalProduct15", "progressiveMuscleRelaxation"),
  createDigitalProductItem(16, "digitalProduct16", "pmrProcess"),
  createDigitalProductItem(17, "digitalProduct17", "presentMomentAwareness"),
];
