import { ArrowDownRight, ArrowUpRight, BookOpen, Code2, Mail, MoveRight } from "lucide-react";
import { Link } from "wouter";
import ProjectCard, { SideQuestCard } from "../components/ProjectCard";
import StoryWord from "../components/StoryWord";

function AvatarArt() {
  return (
    <div className="hero-avatar" aria-label="A small abstract illustrated avatar of Mugdha">
      <span className="avatar-orbit orbit-one" /><span className="avatar-orbit orbit-two" />
      <span className="avatar-note note-one">✦</span><span className="avatar-note note-two">+</span>
      <svg viewBox="0 0 220 260" role="img" aria-hidden="true">
        <path className="avatar-shadow" d="M36 224c22-24 126-33 151 0" />
        <path className="avatar-hair-shape" d="M71 83c-12-46 20-67 54-63 42 4 54 48 27 86l-20-17-48 7z" />
        <ellipse className="avatar-skin" cx="108" cy="96" rx="43" ry="50" />
        <path className="avatar-hair-front" d="M67 84c6-48 55-57 87-26 4 5 7 12 8 22-14-14-33-21-51-18-15 3-28 12-44 22z" />
        <circle className="avatar-eye-dot" cx="94" cy="97" r="3" /><circle className="avatar-eye-dot" cx="124" cy="97" r="3" />
        <path className="avatar-smile" d="M101 116c7 5 14 5 20 0" />
        <path className="avatar-body-shape" d="M55 232c3-52 29-80 55-80s54 29 59 80z" />
        <path className="avatar-shirt-line" d="M79 172l29 29 29-29" />
        <path className="avatar-arm" d="M60 190c-15 9-23 22-25 36M160 190c15 9 23 22 25 36" />
      </svg>
      <span className="avatar-caption">hi, I'm Mugdha</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container hero-inner">
          <div className="hero-topline"><span>01 — portfolio, but make it personal</span><span>scroll to explore <ArrowDownRight size={16} /></span></div>
          <div className="hero-copy">
            <div className="hero-hello">Hello, I'm <span>Mugdha</span> <span className="hello-star">✦</span></div>
            <h1>I make technology<br /><em>feel more human.</em></h1>
            <p className="hero-description">UI/UX and product design enthusiast with an engineering brain, a soft spot for tiny interactions, and a habit of asking, “but how does this feel?”</p>
            <div className="hero-actions"><a className="button button-dark" href="#work">See the work <ArrowDownRight size={18} /></a><Link className="text-link" href="/about">meet the person <ArrowUpRight size={16} /></Link></div>
          </div>
          <AvatarArt />
          <div className="hero-footer-note"><span className="scribble">currently learning ↗</span><span>HCI · interaction design · product thinking</span></div>
        </div>
      </section>

      <section className="marquee-strip" aria-label="Portfolio themes"><div className="marquee-track"><span>technology × people</span><i>✦</i><span>systems with a pulse</span><i>✦</i><span>curiosity as a design tool</span><i>✦</i><span>technology × people</span><i>✦</i><span>systems with a pulse</span><i>✦</i></div></section>

      <section className="section-block work-section" id="work">
        <div className="container">
          <div className="section-intro split-intro"><div><span className="eyebrow">02 / selected work</span><h2>Pieces I've<br /><em>put together.</em></h2></div><p>Two case studies, still in progress — because good work is usually a trail of decisions, not just a shiny final screen.</p></div>
          <div className="project-grid">
            <ProjectCard href="/work/piqsal" number="01" title="PIQSAL" subtitle="My first internship / product design experience — from original sitemap to a more thoughtful product direction." tags={["product design", "internship", "2 months"]} tone="ink" />
            <ProjectCard href="/work/vanguard" number="02" title="VANGUARD" subtitle="A complete brand experience, shaped under a very real constraint: 48 hours." tags={["brand experience", "UI", "48 hours"]} tone="pink" ratio="5 / 4" size="dynamic screenshots" />
          </div>
        </div>
      </section>

      <section className="section-block side-quests-section" id="side-quests">
        <div className="container">
          <div className="section-intro split-intro"><div><span className="eyebrow">03 / experiments</span><h2>Side quests<br /><em>& fun stuff.</em></h2></div><p>Small submissions, quick redesigns, and the occasional “what if we tried this?”</p></div>
          <div className="side-quest-grid">
            <SideQuestCard label="UX Hacks / concept" title="Razorpay" description="A quick redesign exercise: making a familiar financial flow feel a little less intimidating." tone="yellow" />
            <SideQuestCard label="UX Hacks / concept" title="Adobe" description="Exploring how a visual tool might feel more welcoming from the first click." tone="paper" />
            <SideQuestCard label="UX Hacks / recognition" title="Airtel Xstream" description="A concept that received an honourable mention — a small nod, a useful nudge." tone="pink" />
          </div>
          <Link className="section-tail-link" href="/fun-projects">See all side quests <MoveRight size={18} /></Link>
        </div>
      </section>

      <section className="section-block story-preview" id="about">
        <div className="container">
          <div className="section-intro split-intro"><div><span className="eyebrow">04 / the long way round</span><h2>What I bring<br /><em>to the table.</em></h2></div><p>I didn't start with design. I started with <StoryWord kind="python">Python</StoryWord>. The rest was a slow, happy drift toward the human side of technology.</p></div>
          <div className="story-map">
            <div className="story-node node-pink"><span>01</span><strong><StoryWord kind="python">Python</StoryWord></strong><small>the beginning</small></div>
            <div className="story-connector"><span>→</span></div>
            <div className="story-node"><span>02</span><strong>engineering</strong><small>building things</small></div>
            <div className="story-connector"><span>→</span></div>
            <div className="story-node node-yellow"><span>03</span><strong><StoryWord kind="hackathon">hackathons</StoryWord></strong><small>front-end energy</small></div>
            <div className="story-connector"><span>→</span></div>
            <div className="story-node"><span>04</span><strong><StoryWord kind="hci">HCI</StoryWord></strong><small>the human bit</small></div>
            <div className="story-connector"><span>→</span></div>
            <div className="story-node node-cyan"><span>05</span><strong>product</strong><small>still learning</small></div>
          </div>
          <Link className="button button-light" href="/about">Read the full story <ArrowUpRight size={18} /></Link>
        </div>
      </section>

      <section className="invite-section" id="contact">
        <div className="container invite-inner">
          <span className="eyebrow eyebrow-light">05 / one last thing</span>
          <h2>Let's build<br /><em>something with a pulse.</em></h2>
          <p>Have a product, a question, or a half-formed idea? I like the early, messy part. Bring it over.</p>
          <div className="invite-links"><a href="mailto:mugdhagprabhu@gmail.com"><Mail size={18} /> mugdhagprabhu@gmail.com</a><Link href="/contact">Other ways to say hello <ArrowUpRight size={16} /></Link></div>
          <div className="invite-stamp"><BookOpen size={16} /> bring curiosity</div>
        </div>
      </section>
    </div>
  );
}
