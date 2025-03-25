import { PortfolioItem } from "@/types/portfolio";

// Import videos with ?url suffix to get their URLs
import video1Url from '../../imgs/videos/video1.MP4?url';
import video2Url from '../../imgs/videos/video2.MP4?url';
import video3Url from '../../imgs/videos/video3.MP4?url';
import video4Url from '../../imgs/videos/video4.MP4?url';
import video5Url from '../../imgs/videos/video5.MP4?url';

/**
 * Collection of reel items for the portfolio section
 * Each item can be either an image or a video
 */
export const reelItems: PortfolioItem[] = [
  {
    id: 1,
    video: video1Url,
    mediaType: "video"
  },
  {
    id: 2,
    video: video2Url,
    mediaType: "video"
  },
  {
    id: 3,
    video: video3Url,
    mediaType: "video"
  },
  {
    id: 4,
    video: video4Url,
    mediaType: "video"
  },
  {
    id: 5,
    video: video5Url,
    mediaType: "video"
  }
];
