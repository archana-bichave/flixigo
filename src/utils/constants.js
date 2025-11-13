export const GOOGLE_API_KEY = "AIzaSyD6RrLnnJxXj87p1J1E_LyAqlrJs_aNq5E";

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY;

export const COMMENT_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=";

export const VIDEO_DETAILS_API_BASE_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="; 

export const YOUTUBE_SEARCH_API_BASE_URL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=";