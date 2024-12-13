export function Video( { elementHighlightLink } : {

    elementHighlightLink: string;

} ) {
    return (
      <video 
      className="rounded-xl"
      muted autoPlay loop width="420" height="340" preload="none" playsInline>
        <source src={elementHighlightLink} type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    )
  }