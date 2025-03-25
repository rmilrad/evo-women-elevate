import { PortfolioItem } from "@/types/portfolio";

/**
 * Collection of reel items for the portfolio section
 * Each item can be either an image or a video
 */
export const reelItems: PortfolioItem[] = [
  {
    id: 1,
    video: "/imgs/videos/video1.MP4",
    mediaType: "video",
    titleKey: "parentingContent",
    descriptionKey: "whiningContent"
  },
  {
    id: 2,
    video: "/imgs/videos/video2.MP4",
    mediaType: "video",
    titleKey: "parentingStrategy",
    descriptionKey: "behaviorContent"
  },
  {
    id: 3,
    video: "/imgs/videos/video3.MP4",
    mediaType: "video",
    titleKey: "emotionalRegulation",
    descriptionKey: "kidsEmotions"
  },
  {
    id: 4,
    video: "/imgs/videos/video4.MP4",
    mediaType: "video",
    titleKey: "parentingTips",
    descriptionKey: "triggerStrategies"
  },
  {
    id: 5,
    video: "/imgs/videos/video5.MP4",
    mediaType: "video",
    titleKey: "backToSchool",
    descriptionKey: "stressManagement"
  }
];
