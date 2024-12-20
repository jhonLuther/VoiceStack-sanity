import * as React from 'react'
import { CloseIcon } from '@sanity/icons'

type VideoPlatform = 'vimeo' | 'vidyard' | 'youtube'

export interface VideoItem {
  _id?: string
  platform: VideoPlatform
  videoId: string
  title?: string
}

interface VideoProps {
  videoDetails: VideoItem | VideoItem[]
  className?: string
  isPopup?: boolean
  onClose?: () => void
  video?: VideoItem | VideoItem[]
}

const getIframeUrl = (platform: VideoPlatform, videoId: string): string => {
  switch (platform) {
    case 'vimeo':
      return `https://player.vimeo.com/video/${videoId}`
    case 'vidyard':
      return `https://play.vidyard.com/${videoId}`
    case 'youtube':
      return `https://www.youtube.com/embed/${videoId}`
    default:
      throw new Error(`Unsupported platform: ${platform}`)
  }
}

// Move VideoIframe outside of the main component to avoid re-creation on each render
const VideoIframe: React.FC<VideoItem> = ({
  platform,
  videoId,
  title = '',
}) => (
  <iframe
    src={getIframeUrl(platform, videoId)}
    title={title}
    frameBorder="0"
    allowFullScreen
    className="w-full h-full"
  />
)

export const VideoModal: React.FC<VideoProps> = ({
  videoDetails,
  className = '',
  isPopup = false,
  onClose,
  video,
}) => {
  const videoData = video || videoDetails

  if (!videoData) {
    return null
  }
  console.log({videoData});
  

  return (
    <div
    onClick={isPopup ? onClose : undefined}
      className={`${
        isPopup
          ? 'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'
          : ''
      } ${className}`}
    >
      <div
        className={`${
          isPopup
            ? 'relative w-full max-w-[800px] aspect-[16/9] b rounded-lg'
            : 'w-full aspect-[16/9] relative'
        }`}
      >
        {isPopup && onClose && (
          <button
            className="absolute -top-10 -right-5  hover:text-gray-800 transition-colors duration-200 p-1 rounded-full"
            onClick={onClose}
            aria-label="Close video"
          >
            <CloseIcon color="white" height={30} />
          </button>
        )}

        {Array.isArray(videoData) ? (
          videoData.map((item) => (
            <VideoIframe
              key={item._id || `${item.platform}-${item.videoId}`}
              {...item}
            />
          ))
        ) : (
          <VideoIframe {...videoData} />
        )}
      </div>
    </div>
  )
}

export { getIframeUrl }
