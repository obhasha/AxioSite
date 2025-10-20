import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={`${import.meta.env.BASE_URL}bgvid.mp4`} type="video/mp4" />
      </video>
      {/* Optional overlay to darken the video slightly */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  );
};

export default BackgroundVideo;

