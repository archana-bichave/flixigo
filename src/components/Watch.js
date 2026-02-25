import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collapseSidebar, toggleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import {
  COMMENT_API,
  GOOGLE_API_KEY,
  VIDEO_DETAILS_API_BASE_URL,
} from "../utils/constants";
import Comment from "./Comment";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState({});
  const videoId = searchParams.get("v");
  const isSidebarOpen = useSelector((store) => store.app.isMenuOpen);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(collapseSidebar(false));
    getVideoDetails();
    getVideoComments();
  }, [dispatch]);

  const getVideoDetails = async () => {
    const data = await fetch(
      VIDEO_DETAILS_API_BASE_URL + videoId + "&key=" + GOOGLE_API_KEY,
    );
    const details = await data.json();
    setVideoDetails(details);
    console.log("videoDetails", details);
  };

  const getVideoComments = async () => {
    const data = await fetch(COMMENT_API + videoId + "&key=" + GOOGLE_API_KEY);
    const comments = await data.json();
    setComments(comments);
    console.log(comments);
  };

  return (
    <div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 sm:hidden"
          onClick={() => dispatch(toggleMenu())}
        />
      )}
      <div
        className={`p-6 pt-20 flex flex-col items-center ${isSidebarOpen ? "sm:ml-56" : ""}`}
      >
        <iframe
          className="rounded-lg w-full max-w-4xl aspect-video"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        {/* <div className="font-bold mt-2 text-xl">{videoDetails.items[0].title}</div> */}
        <div className="mt-2">
          {/* <span className="font-medium text-lg">{snippet.channelTitle}</span> */}
        </div>
        <div className="w-full max-w-4xl mt-4">
          <span className="font-bold text-lg mb-8 block">
            {comments?.items?.length} Comments
          </span>
          {comments.items?.map((comment) => {
            return <Comment details={comment} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Watch;
