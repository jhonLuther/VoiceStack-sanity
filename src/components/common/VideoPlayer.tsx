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
  <source src="https://cdn.sanity.io/files/76tr0pyh/production/9209691db756a477af8ac42708e5899cc9e23e6e.mp4" type="video/mp4" />
</video>
    </div>
  );
}