// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";

// export default function Video() {
//   const [video, setVideo] = useState(null);
//   const { id } = useParams();

//   const URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${Id}&key=AIzaSyAXA4H_sNE1BBT7iANqYr5MvezJObMEjgI`;

//   async function fetchCategories() {
//     const response = await fetch(URL);
//     const data = await response.jason();
//     setVideo(data);
//     console.log(data);
//   }
//   useEffect(() => {
//     fetchCategories();
//   }, [Id]);
//   return (
//     <div>
//       <h1>{video.title}</h1>
//       <img src={video.thumbnails.default.url} />
//       <p>{video.description}</p>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleVideo = () => {
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
  console.log(video);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{video.snippet.title}</h1>
      <p>{video.snippet.description}</p>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={video.snippet.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default SingleVideo;
