import { ArrowRight, Clock3, Layers3, Sparkles } from "lucide-react";
import CaseStudyLayout, { CaseSection } from "../components/CaseStudyLayout";
import ImagePlaceholder from "../components/ImagePlaceholder";

const stages = [
  { no: "01", title: "Logo", note: "the first mark" },
  { no: "02", title: "Brand identity", note: "tone starts to show" },
  { no: "03", title: "Visual system", note: "rules, not decoration" },
  { no: "04", title: "UI", note: "the system meets a screen" },
  { no: "05", title: "Final prototype", note: "48 hours, held together" },
];

export default function WorkVanguard() {
  return (
    <CaseStudyLayout number="02" title="VANGUARD" subtitle="A fast brand experience exercise: from a first visual thought to a complete prototype under a strict timeframe." role="brand experience · UI · interaction" nextHref="/fun-projects" nextLabel="next: side quests">
      <CaseSection number="01" eyebrow="the brief" title="A clear ask. A tight constraint." intro="Vanguard came with a request for an entire brand experience. I was responsible for shaping the visual direction, the interface, and the prototype — while making decisions quickly enough to keep moving.">
        <div className="brief-board"><div className="brief-board-copy"><span className="brief-marker">requested</span><h3>One complete brand experience.</h3><p>What was requested, what the challenge was, what I owned, and what the final prototype needed to communicate — all within a very small window.</p></div><div className="brief-board-stats"><span><strong>48</strong>hours</span><span><strong>01</strong>direction</span><span><strong>05</strong>moves</span></div></div>
      </CaseSection>
      <CaseSection number="02" eyebrow="the visual search" title="The Messy Basement" intro="Moodboards, first thoughts, second directions, and the concepts that simply didn't feel right. The evolution is part of the work.">
        <div className="direction-grid"><ImagePlaceholder label="first thought" size="dynamic moodboard" ratio="4 / 3" tone="paper" note="first thought" /><ImagePlaceholder label="second direction" size="dynamic moodboard" ratio="4 / 3" tone="yellow" note="second direction" /><ImagePlaceholder label="rejected direction" size="dynamic moodboard" ratio="4 / 3" tone="ink" note="didn't feel right" /><ImagePlaceholder label="final direction" size="dynamic moodboard" ratio="4 / 3" tone="pink" note="final direction" /></div>
      </CaseSection>
      <CaseSection number="03" eyebrow="the sprint" title="48 HOURS." intro="I had 48 hours to create an entire brand experience. Not enough time to polish every edge — enough time to make a meaningful set of decisions.">
        <div className="vanguard-clock"><Clock3 size={18} /><span>48:00</span><small>start with a mark. end with a system.</small></div>
        <div className="vanguard-timeline">{stages.map((stage, index) => <div className={`vanguard-stage stage-${index + 1}`} key={stage.no}><div className="stage-number">{stage.no}</div><div className="stage-icon">{index === 0 ? <Sparkles size={19} /> : index === 1 ? <Layers3 size={19} /> : <span>{index + 1}</span>}</div><h3>{stage.title}</h3><p>{stage.note}</p>{index < stages.length - 1 && <ArrowRight className="stage-arrow" size={20} />}</div>)}</div>
        <div className="vanguard-final"><ImagePlaceholder label="VANGUARD / FINAL PROTOTYPE" size="dynamic — preserve original aspect ratio" ratio="16 / 8" tone="ink" note="replace with the real prototype screens" /></div>
      </CaseSection>
      <div id="figma" className="case-figma-note"><span>Figma link</span><a href="#placeholder-figma">placeholder for the real file <ArrowRight size={15} /></a></div>
    </CaseStudyLayout>
  );
}
