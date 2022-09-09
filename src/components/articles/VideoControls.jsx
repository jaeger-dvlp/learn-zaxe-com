import React from 'react';
import {
  BsFillPauseFill,
  BsFillPlayFill,
  BsVolumeMuteFill,
  BsVolumeUpFill,
  BsArrowsFullscreen,
  BsLink45Deg,
} from 'react-icons/bs';

function VideoControls({ videoID, videoURL }) {
  const [videoSound, setVideoSound] = React.useState(false);
  const [videoState, setVideoState] = React.useState(false);
  const [video, setVideo] = React.useState(null);

  React.useEffect(() => {
    if (videoID) setVideo(document.querySelector(`video#video-${videoID}`));
  }, [videoID]);

  const HandleVideoState = (state) => {
    if (video) {
      if (state) {
        video.play();
      } else {
        video.pause();
      }
      setVideoState(state);
    }
  };

  const HandleVideoSound = (state) => {
    if (video) {
      if (state) {
        video.muted = false;
      } else {
        video.muted = true;
      }
      setVideoSound(state);
    }
  };

  const RequestFullScreen = () => {
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  };

  React.useEffect(() => {
    if (video) {
      video.addEventListener('play', () => setVideoState(true));
      video.addEventListener('pause', () => setVideoState(false));
      video.addEventListener('end', () => setVideoState(false));
      video.addEventListener('volumechange', (e) => {
        if (e.target.muted || e.target.volume === 0) {
          return setVideoSound(false);
        }
        e.target.muted = false;
        return setVideoSound(true);
      });
    }
  }, [video]);

  return (
    <span
      key={`video-${videoID}`}
      className="z-[5] absolute flex items-center justify-center gap-3 right-3 top-3"
    >
      <button
        onClick={() => HandleVideoState(!videoState)}
        className="flex items-center justify-center p-2 m-0 text-white transition-all duration-150 rounded-md hover:bg-zaxe bg-black/50 backdrop-blur-sm "
        type="button"
      >
        {videoState ? (
          <BsFillPauseFill className="w-5 h-5" />
        ) : (
          <BsFillPlayFill className="w-5 h-5" />
        )}
      </button>
      <button
        onClick={() => HandleVideoSound(!videoSound)}
        className="flex items-center justify-center p-2 m-0 text-white transition-all duration-150 rounded-md hover:bg-zaxe bg-black/50 backdrop-blur-sm "
        type="button"
      >
        {videoSound ? (
          <BsVolumeUpFill className="w-5 h-5" />
        ) : (
          <BsVolumeMuteFill className="w-5 h-5" />
        )}
      </button>
      <button
        className="flex items-center justify-center p-2 m-0 text-white transition-all duration-150 rounded-md hover:bg-zaxe bg-black/50 backdrop-blur-sm "
        type="button"
        onClick={() => RequestFullScreen()}
      >
        <BsArrowsFullscreen className="w-5 h-5" />
      </button>
      <a
        className="flex items-center justify-center p-2 m-0 text-white transition-all duration-150 rounded-md image-button hover:bg-zaxe bg-black/50 backdrop-blur-sm "
        rel="noreferrer"
        href={videoURL}
        target="_blank"
      >
        <BsLink45Deg className="w-5 h-5" />
      </a>
    </span>
  );
}

export default VideoControls;
