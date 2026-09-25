import { useEffect, useState } from "react";
import { BookOpen, ChefHat, Guitar, Sparkles } from "lucide-react";

function MiniAvatar({ mode }: { mode: "book" | "cook" | "guitar" }) {
  return (
    <span className={`mini-avatar mini-avatar-${mode}`} aria-hidden="true">
      <span className="avatar-hair" />
      <span className="avatar-face"><span className="avatar-eye" /><span className="avatar-eye" /></span>
      <span className="avatar-body" />
      {mode === "book" && <span className="avatar-prop book-prop"><BookOpen size={16} /></span>}
      {mode === "cook" && <span className="avatar-prop pan-prop"><ChefHat size={16} /></span>}
      {mode === "guitar" && <span className="avatar-prop guitar-prop"><Guitar size={17} /></span>}
    </span>
  );
}

export default function HobbyBorders() {
  const [burst, setBurst] = useState(0);
  const [burstColor, setBurstColor] = useState("pink");
  const colors = ["pink", "orange", "cyan", "lime"];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setBurstColor(colors[burst % colors.length]);
      setBurst((value) => value + 1);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [burst]);

  const strum = () => {
    setBurstColor(colors[burst % colors.length]);
    setBurst((value) => value + 1);
  };

  return (
    <div className="hobby-frame" aria-label="Mugdha's hobby frame">
      <div className="hobby-top">
        <span className="hobby-label"><BookOpen size={13} /> reading fuel</span>
        <span className="top-track" />
        <MiniAvatar mode="book" />
      </div>
      <div className="hobby-right">
        <MiniAvatar mode="cook" />
        <span className="steam steam-one" /><span className="steam steam-two" />
        <span className="hobby-label"><ChefHat size={13} /> stirring ideas</span>
      </div>
      <div className="hobby-bottom">
        <span className="bottom-track" />
        <button className="guitar-button" type="button" onClick={strum} aria-label="Strum Mugdha's guitar">
          <MiniAvatar mode="guitar" />
          <span className="guitar-hint">strum for a tiny sound</span>
        </button>
      </div>
      {burst > 0 && <span key={burst} className={`sound-burst ${burstColor}`}><Sparkles size={18} /> pop!</span>}
    </div>
  );
}
