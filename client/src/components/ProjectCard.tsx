import { ArrowUpRight, Clock3 } from "lucide-react";
import { Link } from "wouter";
import ImagePlaceholder from "./ImagePlaceholder";

type ProjectCardProps = {
  href: string;
  number: string;
  title: string;
  subtitle: string;
  tags: string[];
  tone?: "paper" | "ink" | "pink" | "yellow";
  ratio?: string;
  size?: string;
};

export default function ProjectCard({ href, number, title, subtitle, tags, tone = "ink", ratio = "16 / 9", size = "1920 × 1080" }: ProjectCardProps) {
  return (
    <Link href={href} className="project-card">
      <div className="project-card-media">
        <ImagePlaceholder label={`${number} / ${title}`} size={size} ratio={ratio} tone={tone} />
        <span className="project-arrow"><ArrowUpRight size={20} /></span>
      </div>
      <div className="project-card-copy">
        <div className="project-card-kicker"><span>{number}</span><span>case study ↗</span></div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <div className="tag-row">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </Link>
  );
}

export function SideQuestCard({ title, label, description, tone = "yellow", href = "/fun-projects" }: { title: string; label: string; description: string; tone?: "yellow" | "pink" | "paper" | "ink"; href?: string }) {
  return (
    <Link href={href} className={`side-quest-card tone-${tone}`}>
      <div className="side-quest-icon"><Clock3 size={20} /></div>
      <span className="side-quest-label">{label}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="side-quest-link">peek inside <ArrowUpRight size={15} /></span>
    </Link>
  );
}
