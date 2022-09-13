import React from 'react';
import { v4 } from 'uuid';
import VideoControls from '@/src/components/articles/VideoControls';

function ColumnVideo({ children, video: { url: videoURL } }) {
  const [videoID, setVideoID] = React.useState(null);

  React.useEffect(() => {
    setVideoID(v4().replace(/-/g, ''));
  }, []);

  return (
    <section className="flex flex-wrap-reverse w-full gap-10 my-5 post-column xl:flex-nowrap lg:flex-nowrap">
      <figure className="bg-zinc-300 relative border border-zinc-300 p-0 w-full overflow-hidden shadow-lg  rounded-xl xl:h-[20rem] lg:h-[20rem] md:h-[17rem] h-[13rem]">
        <video
          className="object-cover z-[3] w-full h-full"
          id={`video-${videoID}`}
          preload="metadata"
          type="video/mp4"
          autoPlay={false}
          src={videoURL}
          height="100%"
          width="100%"
          controls
          muted
        >
          <source src={videoURL} type="video/mp4" />
        </video>
        <VideoControls videoID={videoID} videoURL={videoURL} />
      </figure>
      <aside className="w-full -order-1 xl:max-w-[40%] lg:max-w-[40%] max-w-full">
        {children}
      </aside>
    </section>
  );
}

export default ColumnVideo;
