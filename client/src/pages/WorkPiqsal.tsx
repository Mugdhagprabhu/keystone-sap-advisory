import { ArrowRight, Check, CircleDot } from "lucide-react";
import CaseStudyLayout, { CaseSection } from "../components/CaseStudyLayout";
import ImagePlaceholder from "../components/ImagePlaceholder";

export default function WorkPiqsal() {
  return (
    <CaseStudyLayout number="01" title="PIQSAL" subtitle="My first internship / product design experience — where I began noticing how a product's structure changes the way it feels." role="product design · UX direction" nextHref="/work/vanguard" nextLabel="next: Vanguard">
      <CaseSection number="01" eyebrow="the setup" title="What was the question?" intro="Piqsal was my first internship / product design experience. I was asked to work through the product's structure, flows and screens — and to make sense of a UX challenge that was bigger than any one screen.">
        <div className="case-feature-grid"><div className="case-note"><span className="quote-mark">“</span><p>I was learning that a product isn't just the thing you see. It's the path you take to get there.</p><span className="note-byline">— my first design rabbit hole</span></div><ImagePlaceholder label="PIQSAL / ORIGINAL SITEMAP" size="1920 × 1080" ratio="16 / 9" tone="ink" note="drop the original sitemap here" /></div>
      </CaseSection>
      <CaseSection number="02" eyebrow="messy basement" title="The Messy Basement" intro="Good design did not appear magically. Here are the first ideas, alternate directions, and the bits that taught me what not to keep.">
        <div className="messy-grid"><ImagePlaceholder label="early idea 01" size="1920 × 1080" ratio="16 / 9" tone="paper" note="why it didn't work" /><ImagePlaceholder label="rejected concept 02" size="1920 × 1080" ratio="16 / 9" tone="yellow" note="too much, too soon" /><ImagePlaceholder label="rough layout 03" size="1920 × 1080" ratio="16 / 9" tone="pink" note="what changed" /></div>
      </CaseSection>
      <CaseSection number="03" eyebrow="prototyping" title="From Boxes to Behaviour" intro="A visual timeline of how the thinking moved from broad shapes to a clearer interaction model.">
        <div className="timeline-grid">{["V1 / the sketch", "V2 / the first flow", "V3 / the clearer rhythm", "FINAL / the direction"].map((label, index) => <div className="timeline-step" key={label}><div className="timeline-step-top"><span>0{index + 1}</span><CircleDot size={14} /></div><ImagePlaceholder label={label} size="1920 × 1080" ratio="16 / 9" tone={index === 3 ? "ink" : "paper"} /><p>{["Everything starts as a box.", "The flow starts answering back.", "Less noise. More intent.", "A direction I could believe in."][index]}</p></div>)}</div>
      </CaseSection>
      <CaseSection number="04" eyebrow="the transformation" title="From First Screen to Final Product" intro="What changed in 2 months? Hierarchy, interaction, information architecture, visual language, component thinking and consistency — all becoming a little more deliberate.">
        <div className="comparison-grid"><div><span className="compare-label">original screen</span><ImagePlaceholder label="ORIGINAL SCREEN" size="1920 × 1080" ratio="16 / 9" tone="paper" /></div><div className="compare-arrow"><ArrowRight size={24} /></div><div><span className="compare-label">final screen</span><ImagePlaceholder label="FINAL SCREEN" size="1920 × 1080" ratio="16 / 9" tone="pink" /></div></div>
        <div className="change-list">{["hierarchy", "interaction", "information architecture", "visual language", "component system", "usability"].map((item) => <span key={item}><Check size={13} /> {item}</span>)}</div>
      </CaseSection>
      <div id="figma" className="case-figma-note"><span>Figma link</span><a href="#placeholder-figma">placeholder for the real file <ArrowRight size={15} /></a></div>
    </CaseStudyLayout>
  );
}
