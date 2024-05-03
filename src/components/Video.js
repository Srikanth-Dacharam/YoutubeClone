// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";

// export default function Video() {
//   const [video, setVideo] = useState(null);
//   const { videoId } = useParams();

//   const URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyAXA4H_sNE1BBT7iANqYr5MvezJObMEjgI`;

//   async function fetchCategories() {
//     const response = await fetch(URL);
//     const data = await response.jason();
//     setVideo(data);
//     console.log(data);
//   }
//   useEffect(() => {
//     fetchCategories();
//   }, [videoId]);
//   console.log(video);
//   return (
//     <div>
//       {/* <h1>{video.snippet.title}</h1> */}
//       <p>{video.snippet.description}</p>
//       <img
//         src={video.snippet.thumbnails.medium.url}
//         alt={video.snippet.title}
//       />
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { YoutubeData } from "../screens/HomeScreen";

const Video = () => {
  const [video, setVideo] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyAXA4H_sNE1BBT7iANqYr5MvezJObMEjgI`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch video data");
        }
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setVideo(data.items[0]);
        } else {
          throw new Error("Video not found");
        }
      } catch (error) {
        console.error("Error fetching video data: ", error);
      }
    };

    fetchVideo();
  }, [videoId]);
  // console.log(setVideo);
  console.log(video);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <ul className="map">
        {video.map((videos) => (
          // <Link to={`/Videos/${video.id.videoId}`} key={video.videoId}>
          <div className="card shadow-md rounded-md p-2  h-50 md:grid-cols-2 md:items-center  ">
            <img
              src={videos.snippet.thumbnails.medium.url}
              alt={videos.snippet.title}
              key={videos.id}
            />
            <li className="font-bold" key={video.id.videoId}>
              {videos.snippet.title}
            </li>
            <li>Channel : {video.snippet.channelTitle}</li>
          </div>
          // </Link>
        ))}
      </ul> */}

      <div className="video-main">
        {video ? (
          <div>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="video-main rounded-md"
            ></iframe>

            <h2 className="  font-bold">{video.snippet.title}</h2>
            <div className="flex mt-10 sub">
              <h2 className="font-bold flex gap-20 ">
                {video.snippet.channelTitle}
                <div className="flex  gap-7 ">
                  <h2 className=" font-bold px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                    Subscribe
                  </h2>
                  <h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                      />
                    </svg>
                  </h2>
                </div>
              </h2>
            </div>
            <p className="discription mt-10">{video.snippet.description}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Video;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const Video = () => {
//   const [video, setVideo] = useState(null);
//   const { videoId } = useParams();

//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         const response = await fetch(
//           `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyAXA4H_sNE1BBT7iANqYr5MvezJObMEjgI`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch video data");
//         }
//         const data = await response.json();
//         if (data.items && data.items.length > 0) {
//           setVideo(data.items[0]);
//         } else {
//           throw new Error("Video not found");
//         }
//       } catch (error) {
//         console.error("Error fetching video data: ", error);
//       }
//     };

//     fetchVideo();
//   }, [videoId]);
//   console.log(video);

//   if (!video) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{video.snippet.title}</h1>
//       <p>{video.snippet.description}</p>
//       <img
//         src={video.snippet.thumbnails.medium.url}
//         alt={video.snippet.title}
//       />
//     </div>
//   );
// };

// export default Video;
