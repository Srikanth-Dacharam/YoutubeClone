// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const YoutubeData = () => {
//   const [videos, setVideos] = useState([]);
//   const [searchVideos, setSearchVideos] = useState("");
//   const [filterVideos, setFilterVideos] = useState(videos);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=AIzaSyDWuD20UJwy_tv2QeZ5h2IwSrlYIUx1-m8&type=video"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         if (data.items && Array.isArray(data.items)) {
//           setFilterVideos(data.items);
//         } else {
//           throw new Error("Invalid data format");
//         }
//       } catch (error) {
//         console.log("Error fetching data: ", error);
//         setVideos([]); // Set videos to an empty array in case of error
//         setFilterVideos([]);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const result = videos.filter((video) =>
//       video.snippet.title
//         .toLocaleLowerCase()
//         .includes(searchVideos.toLocaleLowerCase())
//     );
//     setFilterVideos(result);

//     console.log(filterVideos);
//   }, [searchVideos, videos]);

//   return (
//     <div>
//       <div className=" search flex">
//         {/* <input
//           type="search"
//           placeholder="search"
//           className="search-input  px-4 py-2 mx-2 border  rounded-lg"
//         /> */}
//         <input
//           type="search"
//           onChange={(e) => {
//             setSearchVideos(e.target.value);
//           }}
//           value={searchVideos}
//           placeholder="search"
//           className="search-input  px-4 py-2 mx-2 border  rounded-lg"
//         />
//         <button>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             class="w-6 h-6"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* <h1>YouTube Videos</h1> */}
//       <ul className="map">
//         {filterVideos.map((video) => (
//           <Link to={`/Videos/${video.id.videoId}`} key={video.videoId}>
//             <div className="card shadow-md rounded-md p-2  h-50 md:grid-cols-2 md:items-center  ">
//               <img
//                 src={video.snippet.thumbnails.medium.url}
//                 alt={video.snippet.title}
//                 key={video.id}
//               />
//               <li className="font-bold" key={video.id.videoId}>
//                 {video.snippet.title}
//               </li>
//               <li>Channel : {video.snippet.channelTitle}</li>
//             </div>
//           </Link>
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
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);

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
          setFilteredVideos(data.items);
        } else {
          throw new Error("Invalid data format");
        }
      } catch (error) {
        console.log("Error fetching data: ", error);
        setVideos([]); // Set videos to an empty array in case of error
        setFilteredVideos([]); // Set filtered videos to an empty array in case of error
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const result = videos.filter((video) =>
      video.snippet.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVideos(result);
  }, [searchTerm, videos]);

  return (
    <div>
      <div className="search flex">
        <input
          type="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search"
          className="search-input px-4 py-2 mx-2 border rounded-lg"
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>

      <ul className="map">
        {filteredVideos.map((video) => (
          <Link to={`/Videos/${video.id.videoId}`} key={video.id.videoId}>
            <div className="card shadow-md rounded-md p-2 h-50 md:grid-cols-2 md:items-center">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <li className="font-bold">{video.snippet.title}</li>
              <li>Channel: {video.snippet.channelTitle}</li>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default YoutubeData;
