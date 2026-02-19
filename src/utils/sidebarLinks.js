const SECTION_DESCRIPTIONS = {
  home: "Catch up on the latest picks curated for you.",
  shorts: "Bite-sized clips to keep you entertained in seconds.",
  subscriptions: "Updates from the channels you never want to miss.",
  history: "Revisit the videos you've recently watched.",
  playlists: "Organize and enjoy your saved playlists.",
  "watch-later": "Save videos to watch when you have more time.",
  "liked-videos": "All the videos you've given a thumbs up.",
  "music-subscriptions": "Fresh tracks and playlists tailored to you.",
  sports: "Highlights, analysis, and live moments from the sports world.",
  gaming: "Streams, reviews, and trailers from the gaming universe.",
  movies: "Featured films, trailers, and behind-the-scenes clips.",
  trending: "What's buzzing across YouTube right now.",
  shopping: "Discover products, hauls, and buying guides.",
  "music-explore": "Explore genres, artists, and live performances.",
  "movies-tv": "Dive into the latest in movies and television.",
  live: "Watch live streams happening around the globe.",
  news: "Stay informed with breaking news and in-depth coverage.",
};

export const sidebarSections = [
  {
    title: null,
    items: [
      { id: "home", label: "Home", to: "/" },
      { id: "shorts", label: "Shorts", to: "/shorts" },
      { id: "subscriptions", label: "Subscriptions", to: "/subscriptions" },
    ],
  },
  {
    title: "You",
    items: [
      { id: "history", label: "History", to: "/history" },
      { id: "playlists", label: "Playlists", to: "/playlists" },
      { id: "watch-later", label: "Watch later", to: "/watch-later" },
      { id: "liked-videos", label: "Liked Videos", to: "/liked-videos" },
    ],
  },
  {
    title: "Subscriptions",
    items: [
      { id: "music-subscriptions", label: "Music", to: "/music-subscriptions" },
      { id: "sports", label: "Sports", to: "/sports" },
      { id: "gaming", label: "Gaming", to: "/gaming" },
      { id: "movies", label: "Movies", to: "/movies" },
    ],
  },
  {
    title: "Explore",
    items: [
      { id: "trending", label: "Trending", to: "/trending" },
      { id: "shopping", label: "Shopping", to: "/shopping" },
      { id: "music-explore", label: "Music", to: "/music-explore" },
      { id: "movies-tv", label: "Movies & TV", to: "/movies-tv" },
      { id: "live", label: "Live", to: "/live" },
      { id: "news", label: "News", to: "/news" },
    ],
  },
];

const allSidebarItems = sidebarSections.flatMap((section) => section.items);

export const sidebarItemsById = allSidebarItems.reduce((acc, item) => {
  acc[item.id] = {
    ...item,
    description: SECTION_DESCRIPTIONS[item.id],
  };
  return acc;
}, {});


