"use client";
import { useState } from "react";
import { Typography } from "@mui/material";
import { Loading } from "@nextui-org/react";
import ReactPlayer from "react-player";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  const videosPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVideo, setSelectedVideo] = useState();

  if (!exerciseVideos.length)
    return (
      <div className="flex justify-center items-center p-4">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center">
            <Loading type="points" />
          </div>
        </div>
      </div>
    );

  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = exerciseVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mt-10 px-4">
      <Typography className="text-2xl font-bold mb-4">
        Watch <span className="text-red-500 capitalize">{name}</span> exercise
        videos
      </Typography>
      {selectedVideo ? (
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Video Player</h2>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${selectedVideo}`}
            controls
            width="100%"
          />
        </div>
      ) : null}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentVideos.map((item, index) => (
          <div
            key={index}
            className="exercise-video bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => handleVideoClick(item.video.videoId)}
          >
            <img
              className="w-full h-72 object-cover object-center"
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <div className="p-4">
              <Typography className="text-lg font-bold mb-1">
                {item.video.title}
              </Typography>
              <Typography className="text-sm">
                {item.video.channelName}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 mb-8">
        <ul className="flex items-center space-x-2">
          {exerciseVideos.length > videosPerPage && (
            <>
              <li>
                <button
                  className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
                  onClick={() => paginate(1)}
                  disabled={currentPage === 1}
                >
                  First
                </button>
              </li>
              <li>
                <button
                  className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
            </>
          )}
          <li>
            <span className="px-2 py-1 rounded bg-gray-200">{currentPage}</span>
          </li>
          {exerciseVideos.length > videosPerPage && (
            <>
              <li>
                <button
                  className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={indexOfLastVideo >= exerciseVideos.length}
                >
                  Next
                </button>
              </li>
              <li>
                <button
                  className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300"
                  onClick={() =>
                    paginate(Math.ceil(exerciseVideos.length / videosPerPage))
                  }
                  disabled={indexOfLastVideo >= exerciseVideos.length}
                >
                  Last
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ExerciseVideos;
