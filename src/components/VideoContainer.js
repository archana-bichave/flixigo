import React, { useEffect, useState, useCallback } from "react";
import {
  YOUTUBE_VIDEOS_API,
  VIDEO_DETAILS_API_BASE_URL,
  GOOGLE_API_KEY,
  YOUTUBE_SEARCH_API_BASE_URL,
} from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ({ selectedCategory }) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTrendingVideos = useCallback(async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    if (!response.ok) {
      throw new Error("Unable to fetch trending videos right now.");
    }
    const json = await response.json();
    return json.items ?? [];
  }, []);

  const fetchVideosBySearch = useCallback(async (query) => {
    const response = await fetch(
      `${YOUTUBE_SEARCH_API_BASE_URL}${encodeURIComponent(query)}&key=${GOOGLE_API_KEY}`,
    );
    if (!response.ok) {
      throw new Error("Unable to fetch videos for this filter.");
    }
    const searchJson = await response.json();
    const videoIds = searchJson.items
      ?.map((item) => item.id?.videoId)
      .filter(Boolean);

    if (!videoIds || videoIds.length === 0) {
      return [];
    }

    const detailsResponse = await fetch(
      `${VIDEO_DETAILS_API_BASE_URL}${videoIds.join(",")}&key=${GOOGLE_API_KEY}`,
    );
    if (!detailsResponse.ok) {
      throw new Error("Unable to fetch video details right now.");
    }
    const detailsJson = await detailsResponse.json();
    return detailsJson.items ?? [];
  }, []);

  useEffect(() => {
    const getVideos = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (!selectedCategory || selectedCategory.id === "all") {
          const trendingVideos = await fetchTrendingVideos();
          setVideos(trendingVideos);
          return;
        }

        const filteredVideos = await fetchVideosBySearch(
          selectedCategory.query ?? selectedCategory.label,
        );
        setVideos(filteredVideos);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong.");
        setVideos([]);
      } finally {
        setIsLoading(false);
      }
    };

    getVideos();
  }, [fetchTrendingVideos, fetchVideosBySearch, selectedCategory]);

  const getVideoId = (video) => {
    if (!video?.id) return null;
    if (typeof video.id === "string") return video.id;
    return video.id.videoId ?? null;
  };

  return (
    <div className="mt-6">
      {isLoading && (
        <div className="mb-4 rounded-lg bg-slate-100 p-4 text-sm text-slate-600">
          Loading videos...
        </div>
      )}
      {error && (
        <div className="mb-4 rounded-lg bg-red-100 p-4 text-sm text-red-700">
          {error}
        </div>
      )}
      {!isLoading && !error && videos.length === 0 && (
        <div className="rounded-lg bg-slate-100 p-4 text-sm text-slate-600">
          No videos found for this filter. Try another one!
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-4">
        {videos.map((video) => {
          const videoId = getVideoId(video);
          if (!videoId) return null;
          return (
            <Link to={`/watch?v=${videoId}`} key={videoId}>
              <VideoCard video={video} videoId={videoId} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default VideoContainer;
