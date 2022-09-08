import React from 'react';
import { v4 } from 'uuid';
import VideoControls from './VideoControls';

function ColumnVideo({ children, video: { url: videoURL } }) {
  const [videoID, setVideoID] = React.useState(null);

  React.useEffect(() => {
    setVideoID(v4().replace(/-/g, ''));
  }, []);

  return (
    <section className="flex flex-wrap-reverse w-full gap-10 my-5 post-column xl:flex-nowrap lg:flex-nowrap">
      <figure
        className="relative bg-zinc-800 border border-zinc-300 p-0 w-full overflow-hidden shadow-2xl shadow-black/25
      rounded-xl xl:h-[20rem] lg:h-[20rem] md:h-[17rem] h-[13rem]"
      >
        <VideoControls videoID={videoID} videoURL={videoURL} />
        <video
          id={`video-${videoID}`}
          controls
          muted
          autoPlay={false}
          className="object-cover z-[3] w-full h-full"
        >
          <track kind="captions" />
          <source src={videoURL} />
        </video>
      </figure>
      <article className="w-full -order-1 xl:max-w-[40%] lg:max-w-[40%] max-w-full">
        {children}
      </article>
    </section>
  );
}

export default ColumnVideo;
