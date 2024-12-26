import React, { useState, useEffect } from 'react';
import useMediaQuery from '~/utils/mediaQuery';

export default function VideoPlayer({videoData}) {
  const desktopVideoSrc = videoData?.bgVideoUrl || 'https://cdn.sanity.io/files/76tr0pyh/production/666e1638ad12147f6e2088f692a9e4ac5fb8981d.webm';
  const mobileVideoSrc = videoData?.bgVideoUrlMobile || 'https://cdn.sanity.io/files/76tr0pyh/production/6fca2173d8fa6e7704cf8b0deba9f489c56570a0.webm';

  const isMobile = useMediaQuery(767);
  const [videoSrc, setVideoSrc] = useState(desktopVideoSrc);

  useEffect(() => {
    setVideoSrc(isMobile ? mobileVideoSrc : desktopVideoSrc);
  }, [isMobile, mobileVideoSrc, desktopVideoSrc ]);

  return (
    <video
      key={videoSrc}
      style={{
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        backgroundSize: 0,
        backgroundPosition: 0,
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
      }}
      className="w-full h-full"
      autoPlay
      loop
      muted
    >
      <source src={videoSrc} type="video/webm" />
    </video>
  );
}