export function Video( { elementHighlightLink, elementHighlightFallbackLink, thumbnail  } : {

    elementHighlightLink: string;
    elementHighlightFallbackLink: string;
    thumbnail: string;

} ) {
    return (
      <video
      className="rounded-xl "
      width="420" height="340" loop playsInline muted preload="none" controls poster={thumbnail}>
        <source src={elementHighlightLink} type="video/webm" />
        <source src={elementHighlightFallbackLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }