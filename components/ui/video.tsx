export function Video( { elementHighlightLink, elementHighlightFallbackLink, thumbnail, videowidth=620  } : {

    elementHighlightLink: string;
    elementHighlightFallbackLink: string;
    thumbnail: string;
    videowidth?: number;

} ) {
    return (
      <video
      className="rounded-xl "
      width={videowidth} height="440" autoPlay loop playsInline muted preload="none" controls poster={thumbnail}>
        <source src={elementHighlightLink} type="video/webm" />
        <source src={elementHighlightFallbackLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }