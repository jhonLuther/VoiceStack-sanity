import React, { useState, useEffect } from 'react';
import useMediaQuery from '~/utils/mediaQuery';

export default function VideoPlayer({videoData}) {
  const desktopVideoSrc = videoData?.bgVideoUrl || 'https://cdn.sanity.io/files/76tr0pyh/production/29c4fd446f073ca4f54cc3894cb9aebfeac2b62e.mp4';
  const mobileVideoSrc = videoData?.bgVideoUrlMobile || 'https://cdn.sanity.io/files/76tr0pyh/production/d2aed3780f97baf45a538423e7b9fc7fcaf80186.mp4';
  const fallBackVideoSrc = 'https://cdn.sanity.io/files/76tr0pyh/production/d2aed3780f97baf45a538423e7b9fc7fcaf80186.mp4';

  const isMobile = useMediaQuery(767);
  const [videoSrc, setVideoSrc] = useState(desktopVideoSrc);

  useEffect(() => {
    setVideoSrc(isMobile ? fallBackVideoSrc : desktopVideoSrc);
  }, [isMobile, mobileVideoSrc, desktopVideoSrc ,fallBackVideoSrc]);

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
      loop muted playsInline
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}