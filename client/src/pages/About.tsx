import { ArrowUpRight, Binary, Braces, CircleDot, Figma, GitBranch, MousePointer2 } from "lucide-react";
import { Link } from "wouter";
import StoryWord from "../components/StoryWord";

const chapters = [
  { no: "01", title: "Python", icon: <Braces size={20} />, copy: <>I started programming with <StoryWord kind="python">Python</StoryWord> in 9th grade. That was the first tiny doorway into technology — the moment a blank screen started feeling like a place where I could make things happen.</> },
  { no: "02", title: "Engineering", icon: <Binary size={20} />, copy: <>I continued into computer science / engineering. Over time, technology became more than programming exercises. I became interested in actually building things — and in the decisions hidden inside them.</> },
  { no: "03", title: "Hackathons", icon: <GitBranch size={20} />, copy: <>During second year, I started participating in <StoryWord kind="hackathon">hackathons</StoryWord>. I learned HTML, CSS, JavaScript, React and more. I didn't just want to understand how software worked. I wanted to understand how people experienced it.</> },
  { no: "04", title: "HCI", icon: <MousePointer2 size={20} />, copy: <>That eventually led me toward <StoryWord kind="hci">Human ↔ Computer</StoryWord> interaction — the part where the system has to make room for the person, too.</> },
  { no: "05", title: "Figma", icon: <Figma size={20} />, copy: <>Then came <StoryWord kind="figma">Figma</StoryWord>. I started by moving rectangles around. Then I discovered <StoryWord kind="autolayout">Auto Layout</StoryWord>. Then components. Then <StoryWord kind="variables">variables</StoryWord>. Suddenly those rectangles started behaving like a real product.</> },
  { no: "06", title: "Product design", icon: <CircleDot size={20} />, copy: <>I started studying UI/UX and product design more seriously. IxDF material, starter projects, conversations with people in the field. I'm still learning — but I genuinely enjoy figuring out how technology and people meet.</> },
];

export default function About() {
  return (
    <div className="inner-page about-page">
      <section className="inner-hero about-hero"><div className="container inner-hero-inner"><span className="eyebrow">04 / the long way round</span><h1>From code<br /><em>to care.</em></h1><p>A small, honest timeline of how I moved from wanting to understand technology to wanting to understand the humans using it.</p></div></section>
      <section className="section-block story-full"><div className="container"><div className="story-full-heading"><span className="eyebrow">the timeline</span><h2>Every chapter added<br /><em>a new question.</em></h2></div><div className="chapter-list">{chapters.map((chapter) => <article className="chapter" key={chapter.no}><div className="chapter-number">{chapter.no}</div><div className="chapter-icon">{chapter.icon}</div><div className="chapter-copy"><span className="eyebrow">chapter {chapter.no}</span><h3>{chapter.title}</h3><p>{chapter.copy}</p></div><span className="chapter-dot" /></article>)}</div></div></section>
      <section className="about-ending"><div className="container about-ending-inner"><span className="eyebrow eyebrow-light">still in progress</span><h2>I know how to build.<br />I know how to think.<br /><em>I'm learning how to design better.</em></h2><p>And I genuinely enjoy this.</p><div><Link className="button button-light" href="/contact">Let's build together <ArrowUpRight size={18} /></Link></div></div></section>
    </div>
  );
}
