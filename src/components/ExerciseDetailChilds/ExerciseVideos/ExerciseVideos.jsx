import React from "react";
import "./ExerciseVideos.css";
const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <div className="exerciseVidoesContainer">
      <h3>
        Watch 3/4 <span>{name}</span> videos.
      </h3>

      <div className="videos">
        {exerciseVideos?.slice(0, 6).map((item, i) => (
          <a
            key={i}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="exerciseVideo"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <h5 style={{ width: "320px" }}>{item.video.title}</h5>
            <h6>By: {item.video.channelName}</h6>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
