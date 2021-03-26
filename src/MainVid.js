import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import itemV from "./instrumentos/violins";

const MainVid = () => {
  const [index, setIndex] = useState(2);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const { video } = itemV[index];

  function handlePlayer() {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    if (isPlaying) {
      setIsPlaying(false);
    }
  }

  const prevVideo = () => {
    setIndex(index - 1);
    setIsPlaying(false);
  };

  const nextVideo = () => {
    setIndex(index + 1);
    setIsPlaying(false);
    console.log(index);
  };

  function handleDuration(onDuration) {
    const minutos = Math.floor(onDuration / 60);
    console.log(minutos);
    let segundos = Math.floor(onDuration % 60);
    console.log(segundos);
    segundos = segundos > 9 ? segundos : `0${segundos}`;
    const vidDuration = {
      duration: `${minutos}:${segundos}`,
    };
    setDuration(vidDuration.duration);
  }

  useEffect(() => {
    handleDuration();
  }, [setIndex]);
  return (
    <div className="App">
      <div className="player">
        <div className="player-wrapper ">
          <ReactPlayer
            className="react-player"
            url={video}
            width="100%"
            height="100%"
            playing={isPlaying}
            onDuration={handleDuration}
          />
        </div>
        {/* mostrar controles  */}
        <div className="show-controls">
          {/* container de controler  */}
          <div className="controls-container">
            {/* barra de progresso  */}
            <div className="progress-range" title="Selecione">
              <div className="progress-bar"></div>
            </div>
            <div className="control-group">
              {/* controles da esquerda  */}
              <div className="controls-left">
                {/* controles de volume  */}
                <div className="volume">
                  <div className="volume-icon">
                    <i
                      className="fas fa-volume-up"
                      title="mute"
                      id="volume-icon"
                    ></i>
                  </div>
                  <div className="volume-range" title="controle de volume">
                    <div className="volume-bar"></div>
                  </div>
                </div>
              </div>
              {/* controles do centro  */}
              <div className="play-controls">
                {/* voltar vídeo */}
                <i className="fas fa-backward" onClick={prevVideo}></i>
                {/* play/pause */}
                <i
                  className={isPlaying ? "fas fa-pause" : "fas fa-play"}
                  title="play"
                  onClick={() => handlePlayer()}
                ></i>
                {/* próximo vídeo */}
                <i className="fas fa-forward" onClick={nextVideo}></i>
              </div>
              {/* controles da direita */}
              <div className="controls-right">
                {/* velocidade  */}
                <div className="speed">
                  <select name="playbackRate" className="player-speed">
                    <option value="0.5">0.5 x</option>
                    <option value="0.75">0.75 x</option>
                    <option value="1" defaultValue>
                      1 x
                    </option>
                    <option value="1.5">1.5 x</option>
                    <option value="2">2 x</option>
                  </select>
                </div>
                {/* time */}
                <div className="time">
                  <span className="time-elapsed"> 00:00 / </span>
                  <span className="time-duration">{duration}</span>
                </div>
                {/* Fullscreen */}
                <div className="fullscreen">
                  <i className="fas fa-expand"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVid;
