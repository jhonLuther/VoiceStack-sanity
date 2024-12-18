import React from 'react';

export default function VideoPlayer() {
  return (
    <div>
<video
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
  <source src="https://cdn.sanity.io/files/76tr0pyh/production/666e1638ad12147f6e2088f692a9e4ac5fb8981d.webm" type="video/mp4" />
</video>
    </div>
  );
}