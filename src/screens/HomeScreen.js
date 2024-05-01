// import React, { useEffect, useState } from "react";

// export default function HomeScreen() {
//   const [videos, setVideos] = useState([]);

//   const URL =
//     "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyDWuD20UJwy_tv2QeZ5h2IwSrlYIUx1-m8&type=video";
//   async function fetchCategories() {
//     const response = await fetch(URL);
//     const data = await response.json();
//     setVideos(data);
//     console.log(data);
//   }
//   console.log(videos);
//   useEffect(() => {
//     fetchCategories();
//   }, []);
//   return (
//     <div className="bg-red-200 rounded-md">
//       <ul>
//         <div>YouTube</div>
//         {videos.map((video) => (
//           <div key={video.id}>
//             <li>{video.snippet.title}</li>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";

// export default function HomeScreen() {
//   const [videos, setVideos] = useState([]);

//   const URL =
//     "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=YOUR_YOUTUBE_API_KEY&type=video";

//   async function fetchVideos() {
//     try {
//       const response = await fetch(URL);
//       const data = await response.json();
//       setVideos(data.items); // Update state with the items array from the response
//       console.log(data.items);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }
//   console.log(videos);

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   return (
//     <div className="bg-red-200 rounded-md">
//       <ul>
//         {videos.map((video) => (
//           <li key={video.id.videoId}>{video.snippet.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";

// const YoutubeData = () => {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=YOUR_API_KEY&type=video"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         if (data.items && Array.isArray(data.items)) {
//           setVideos(data.items);
//         } else {
//           throw new Error("Invalid data format");
//         }
//       } catch (error) {
//         console.log("Error fetching data: ", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>YouTube Videos</h1>
//       <ul>
//         {videos.map((video) => (
//           <li key={video.id.videoId}>
//             <a
//               href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {video.snippet.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default YoutubeData;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const YoutubeData = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyDWuD20UJwy_tv2QeZ5h2IwSrlYIUx1-m8&type=video"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        if (data.items && Array.isArray(data.items)) {
          setVideos(data.items);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (error) {
        console.log("Error fetching data: ", error);
        setVideos([]); // Set videos to an empty array in case of error
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <h1>YouTube Videos</h1> */}
      <ul className="map">
        {videos.map((video) => (
          <Link to={`/Video${video.videoid}`} key={video.id}>
            <div className="card shadow-md rounded-md p-2  h-50 md:grid-cols-2 md:items-center  ">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                key={video.id}
              />
              <li className="font-bold" key={video.id.videoId}>
                {video.snippet.title}
              </li>
              <li>Channel : {video.snippet.channelTitle}</li>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default YoutubeData;
