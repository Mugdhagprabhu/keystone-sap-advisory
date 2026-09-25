import { useState } from "react";
import { RotateCcw } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);
  return (
    <button className={`flip-card ${flipped ? "is-flipped" : ""}`} type="button" onClick={() => setFlipped((value) => !value)} aria-label="Flip between the original VVS screen and Mugdha's redesign">
      <span className="flip-inner">
        <span className="flip-face flip-front">
          <span className="flip-label">01 / original</span>
          <ImagePlaceholder label="VVS — original screen" size="dynamic screenshot" ratio="4 / 3" tone="ink" />
          <span className="flip-caption">the starting point</span>
        </span>
        <span className="flip-face flip-back">
          <span className="flip-label">02 / redesign</span>
          <ImagePlaceholder label="VVS — my redesign" size="dynamic screenshot" ratio="4 / 3" tone="pink" />
          <span className="flip-caption">what I would try next</span>
        </span>
      </span>
      <span className="flip-hint"><RotateCcw size={13} /> {flipped ? "tap to see original" : "tap / hover to flip"}</span>
    </button>
  );
}
