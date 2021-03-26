import { useState } from "react";
import items from "./instrumentos/violins";

const VideoList = () => {
  const [idNumber, setIdNumber] = useState(0);
  const { id, title, video, thumb } = items[idNumber];

  return (
    <div className="video-list">
      <div className="listed-vid">
        <div className="listed">
          <a href="" target="_blank">
            <img src={thumb} alt="" className="thumbs" />
            <h2 className="text">{title}</h2>
          </a>
        </div>
      </div>
      <div className="listed-vid">
        <div className="listed">
          <a href="" target="_blank">
            <img src={thumb} alt="" className="thumbs" />
            <h2 className="text">{title}</h2>
          </a>
        </div>
      </div>
      <div className="listed-vid">
        <div className="listed">
          <a href="" target="_blank">
            <img src={thumb} alt="" className="thumbs" />
            <h2 className="text">{title}</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoList;
