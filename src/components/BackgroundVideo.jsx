import React from 'react';
import bgVideo from '/bgvid.mp4';

const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      {/* Optional overlay to darken the video slightly */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

export default BackgroundVideo;

