type ImagePlaceholderProps = {
  label: string;
  size?: string;
  ratio?: string;
  note?: string;
  tone?: "paper" | "ink" | "pink" | "yellow";
  className?: string;
};

export default function ImagePlaceholder({ label, size = "replace me later", ratio = "16 / 9", note, tone = "paper", className = "" }: ImagePlaceholderProps) {
  return (
    <div className={`image-placeholder tone-${tone} ${className}`} style={{ aspectRatio: ratio }} role="img" aria-label={`${label} placeholder. ${size}`}>
      <div className="placeholder-grid" />
      <span className="placeholder-index">{label}</span>
      <span className="placeholder-size">{size}</span>
      {note && <span className="placeholder-note">{note}</span>}
      <span className="placeholder-corner">↗</span>
    </div>
  );
}
