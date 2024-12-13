export function Video( { elementHighlightLink, elementHighlightFallbackLink  } : {

    elementHighlightLink: string;
    elementHighlightFallbackLink: string;

} ) {
    return (
      <video 
      className="rounded-xl"
      muted autoPlay loop width="420" height="340" preload="none" playsInline>
        <source src={elementHighlightLink} type="video/webm" />
        <source src={elementHighlightFallbackLink} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }