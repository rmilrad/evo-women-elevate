import { PortfolioItem } from "@/types/portfolio";

// Define video paths using import.meta.url for Vite compatibility
const videoBasePath = '/imgs/videos/';

/**
 * Collection of reel items for the portfolio section
 * Each item can be either an image or a video
 */
export const reelItems: PortfolioItem[] = [
  {
    id: 1,
    video: `${videoBasePath}video1.MP4`,
    mediaType: "video",
    titleKey: "parentingContent",
    descriptionKey: "whiningContent"
  },
  {
    id: 2,
    video: `${videoBasePath}video2.MP4`,
    mediaType: "video",
    titleKey: "parentingStrategy",
    descriptionKey: "behaviorContent"
  },
  {
    id: 3,
    video: `${videoBasePath}video3.MP4`,
    mediaType: "video",
    titleKey: "emotionalRegulation",
    descriptionKey: "kidsEmotions"
  },
  {
    id: 4,
    video: `${videoBasePath}video4.MP4`,
    mediaType: "video",
    titleKey: "parentingTips",
    descriptionKey: "triggerStrategies"
  },
  {
    id: 5,
    video: `${videoBasePath}video5.MP4`,
    mediaType: "video",
    titleKey: "backToSchool",
    descriptionKey: "stressManagement"
  }
];
