/**
 * Social carousel portfolio items
 *
 * This file contains the data for social media carousel items displayed in the application.
 * Each item has a unique ID, image path, title key, and description key for localization.
 */

import { PortfolioItem } from "@/types/portfolio";

// Base path for carousel images
const CAROUSEL_PATH = "/imgs/carousel";

/**
 * Creates a social carousel item with proper image path
 * @param id - Unique identifier for the item
 * @param titleKey - Translation key for the title
 * @param descriptionKey - Translation key for the description
 * @returns A complete PortfolioItem object
 */
const createCarouselItem = (
  id: number,
  titleKey: string,
  descriptionKey: string
): PortfolioItem => ({
  id,
  image: `${CAROUSEL_PATH}/${id}.png`,
  titleKey,
  descriptionKey,
});

// Social carousel items with consistent image paths from the carousel folder
export const socialCarouselItems: PortfolioItem[] = [
  createCarouselItem(1, "socialCarousel1", "companyCulture"),
  createCarouselItem(2, "socialCarousel2", "careerGrowth"),
  createCarouselItem(3, "socialCarousel3", "burnoutWarning"),
  createCarouselItem(4, "socialCarousel4", "mindRacing"),
  createCarouselItem(5, "socialCarousel5", "burnoutTicket"),
  createCarouselItem(6, "socialCarousel6", "workResilience"),
  createCarouselItem(7, "socialCarousel7", "burnoutCycle"),
  createCarouselItem(8, "socialCarousel8", "healingBurnout"),
  createCarouselItem(9, "socialCarousel9", "corporateMentor"),
  createCarouselItem(10, "socialCarousel10", "workBalanceTips"),
  createCarouselItem(11, "socialCarousel11", "rekindlePassion"),
  createCarouselItem(12, "socialCarousel12", "relationshipBeginning"),
  createCarouselItem(13, "socialCarousel13", "complexityOfLife"),
  createCarouselItem(14, "socialCarousel14", "buildAnticipation"),
  createCarouselItem(15, "socialCarousel15", "fosterTrust"),
  createCarouselItem(16, "socialCarousel16", "useExperience"),
  createCarouselItem(17, "socialCarousel17", "shareWithPartner"),
];
