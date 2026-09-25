import { useState } from "react";

type StoryWordProps = {
  children: string;
  kind: "python" | "hci" | "figma" | "autolayout" | "variables" | "prototype" | "hackathon" | "product" | "frontend";
};

export default function StoryWord({ children, kind }: StoryWordProps) {
  const [active, setActive] = useState(false);
  const messages: Record<StoryWordProps["kind"], string> = {
    python: "s-s-snake peek!",
    hci: "human ↔ computer",
    figma: "frame assembled",
    autolayout: "boxes, but tidy",
    variables: "value changed",
    prototype: "tap → next screen",
    hackathon: "48:00 → go!",
    product: "make it make sense",
    frontend: "hello, browser",
  };

  return (
    <button
      type="button"
      className={`story-word story-${kind} ${active ? "is-active" : ""}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      onClick={() => setActive((value) => !value)}
      aria-label={`${children}: ${messages[kind]}`}
    >
      <span>{children}</span>
      <small>{messages[kind]}</small>
      {kind === "python" && <i className="snake-peek" aria-hidden="true">〰</i>}
      {kind === "hci" && <i className="hci-line" aria-hidden="true" />}
      {kind === "figma" && <i className="figma-frame" aria-hidden="true" />}
    </button>
  );
}
