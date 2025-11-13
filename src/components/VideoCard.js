import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const formatViewCount = (viewCount) => {
  const value = Number(viewCount);
  if (Number.isNaN(value)) return null;

  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1)}B views`;
  }
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M views`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}K views`;
  }
  return `${value} views`;
};

const PREVIEW_DELAY_MS = 600;

const VideoCard = ({ video, videoId }) => {
  const { snippet, statistics } = video;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [isHovered, setIsHovered] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const previewTimeoutRef = useRef(null);

  const displayedViewCount =
    statistics?.viewCount !== undefined
      ? formatViewCount(statistics.viewCount)
      : null;

  useEffect(() => {
    return () => {
      if (previewTimeoutRef.current) {
        clearTimeout(previewTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (!videoId) return;
    setIsHovered(true);
    previewTimeoutRef.current = setTimeout(() => {
      setShowPreview(true);
    }, PREVIEW_DELAY_MS);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowPreview(false);
    if (previewTimeoutRef.current) {
      clearTimeout(previewTimeoutRef.current);
    }
  };

  return (
    <div
      className={`mr-5 mb-6 cursor-pointer rounded-md p-4 hover:shadow-md ${
        isMenuOpen ? "w-96" : "w-[28rem]"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-md bg-black">
        {!showPreview && (
          <img
            src={thumbnails?.medium?.url}
            alt={title}
            className="h-full w-full object-cover"
          />
        )}
        {showPreview && videoId && (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1&loop=1&playlist=${videoId}&playsinline=1`}
            title={`Preview of ${title}`}
            className="h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen={false}
          ></iframe>
        )}
        {isHovered && !showPreview && (
          <div className="absolute inset-0 bg-black/20" />
        )}
      </div>
      <ul className="mt-3 space-y-1 text-sm text-gray-700">
        <li className="font-semibold text-gray-900">{title}</li>
        <li className="text-gray-600">{channelTitle}</li>
        <li className="text-gray-500">
          {displayedViewCount ?? "View count unavailable"} •{" "}
          {publishedAt ? new Date(publishedAt).toLocaleDateString() : "Unknown"}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
