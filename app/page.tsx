"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "AI Legal Help Desk Assistant",
    category: "GENERATIVE AI / RAG",
    description:
      "A context-aware legal document assistant that turns complex collections of legal information into searchable, useful answers.",
    stack: ["Python", "LangChain", "RAG", "FAISS", "LLMs", "FastAPI"],
    visual: "legal",
    outcome: "Document intelligence"
  },
  {
    number: "02",
    title: "AI Sports Officiating System",
    category: "COMPUTER VISION",
    description:
      "A real-time vision pipeline that detects and tracks players and balls to support sports event monitoring and officiating.",
    stack: ["Python", "YOLOv8", "OpenCV", "Object Tracking"],
    visual: "sports",
    outcome: "Real-time detection"
  },
  {
    number: "03",
    title: "AI Exoplanet Discovery Engine",
    category: "DEEP LEARNING / SPACE",
    description:
      "A machine-learning workflow using Kepler and TESS mission data, stellar light curves and CNN classification to identify potential exoplanet candidates.",
    stack: ["TensorFlow", "CNN", "Lightkurve", "Kepler", "TESS", "Streamlit"],
    visual: "space",
    outcome: "Astronomical discovery"
  },
  {
    number: "04",
    title: "AI-Powered Meeting Assistant",
    category: "AI / AUTOMATION",
    description:
      "An AI-powered concept designed to improve meeting workflows and support global client collaboration.",
    stack: ["Artificial Intelligence", "Automation"],
    visual: "meeting",
    outcome: "Appreciation Award · Code'O'clock Hackathon"
  },
  {
    number: "05",
    title: "AI-Powered Farmer Assistant",
    category: "AI FOR GOOD",
    description:
      "An intelligent assistance solution focused on supporting rural and tribal farming communities.",
    stack: ["Artificial Intelligence", "Machine Learning"],
    visual: "farm",
    outcome: "Second Prize · Agri Symposium"
  },
  {
    number: "06",
    title: "Real-Time Object Detection System",
    category: "COMPUTER VISION",
    description:
      "A computer vision application that identifies objects from visual input using YOLO-based detection.",
    stack: ["Python", "YOLO", "OpenCV", "Computer Vision"],
    visual: "detect",
    outcome: "First Prize · Pi-Day Presentation"
  }
];

const skillGroups = [
  { title: "Generative AI", items: ["LLMs", "RAG", "Transformers", "Hugging Face", "FAISS", "NLP"] },
  { title: "Machine Learning", items: ["TensorFlow", "Scikit-learn", "Deep Learning", "CNN"] },
  { title: "Computer Vision", items: ["OpenCV", "YOLO", "Object Detection", "Object Tracking"] },
  { title: "Data & Programming", items: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "DSA", "OOP"] },
  { title: "Tools & Systems", items: ["Git", "Linux"] }
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "↓"}</span>;
}

function ProjectVisual({ type }: { type: string }) {
  return (
    <div className={`project-visual ${type}`} aria-hidden="true">
      {type === "legal" && <div className="doc-stack"><i /><i /><i /><b>§</b><span>LEGAL / AI</span></div>}
      {type === "sports" && <div className="field"><span className="track t1" /><span className="track t2" /><span className="ball" /><span className="player p1" /><span className="player p2" /><label>YOLOv8 · TRACKING ACTIVE</label></div>}
      {type === "space" && <div className="orbit"><i /><i /><i /><b /><span>KEPLER / TESS</span></div>}
      {type === "meeting" && <div className="waveform"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><label>MEETING INTELLIGENCE</label></div>}
      {type === "farm" && <div className="farm-art"><span>✳</span><i /><i /><i /><label>AI FOR AGRICULTURE</label></div>}
      {type === "detect" && <div className="scan"><span className="scan-box one">OBJECT 01</span><span className="scan-box two">OBJECT 02</span><b>LIVE DETECTION</b></div>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let cleanups: (() => void)[] = [];
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!reduceMotion) {
        const ctx = gsap.context(() => {
          gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
            gsap.fromTo(element, { y: 34, opacity: 0 }, {
              y: 0, opacity: 1, duration: 0.85, ease: "power3.out",
              scrollTrigger: { trigger: element, start: "top 88%", once: true }
            });
          });
          gsap.from(".hero-line", {
            yPercent: 115, opacity: 0, duration: 1.05, stagger: 0.12,
            ease: "power4.out", delay: 0.15
          });
        });
        cleanups.push(() => ctx.revert());
      }
    };
    init();
    return () => cleanups.forEach((fn) => fn());
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="nav-wrap">
        <a className="brand" href="#top" onClick={closeMenu}>SA<span>®</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? "CLOSE −" : "MENU +"}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={closeMenu}>ABOUT</a>
          <a href="#expertise" onClick={closeMenu}>EXPERTISE</a>
          <a href="#work" onClick={closeMenu}>WORK</a>
          <a href="#contact" onClick={closeMenu}>CONTACT <Arrow diagonal /></a>
        </nav>
        <a className="availability" href="mailto:sanjayakash67@gmail.com"><span /> OPEN TO OPPORTUNITIES</a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-topline"><span>AI ENGINEER / BUILDER</span><span>INDIA · 2026</span></div>
        <div className="hero-main">
          <div className="hero-copy">
            <p className="eyebrow hero-line">HELLO, I&apos;M SANJAY AKASH V</p>
            <h1>
              <span className="hero-mask"><span className="hero-line">I BUILD</span></span>
              <span className="hero-mask"><span className="hero-line">INTELLIGENT</span></span>
              <span className="hero-mask"><span className="hero-line accent-text">SYSTEMS<span className="period">.</span></span></span>
            </h1>
            <p className="hero-description hero-line">
              I build intelligent systems that turn complex problems into real-world solutions.
            </p>
            <div className="hero-actions hero-line">
              <a className="button button-light" href="#work">EXPLORE MY WORK <Arrow diagonal /></a>
              <a className="text-link" href="#contact">LET&apos;S CONNECT <Arrow diagonal /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract generative AI-inspired visual">
            <div className="art-grid" />
            <div className="art-orbit orbit-a" /><div className="art-orbit orbit-b" /><div className="art-orbit orbit-c" />
            <div className="art-core"><span>AI</span></div>
            <div className="art-node node-a" /><div className="art-node node-b" /><div className="art-node node-c" />
            <div className="art-caption"><span>FIG. 001</span><span>INTELLIGENCE IN MOTION</span></div>
          </div>
        </div>
        <div className="hero-bottom"><span>GENERATIVE AI · MACHINE LEARNING · COMPUTER VISION</span><a href="#about">SCROLL TO EXPLORE <Arrow /></a></div>
      </section>

      <section className="intro section-shell section-pad" id="about">
        <div className="section-kicker reveal"><span>01 / ABOUT</span><span>A LITTLE CONTEXT</span></div>
        <div className="intro-grid">
          <h2 className="reveal">CURIOUS BY NATURE.<br/><em>ENGINEERED</em> TO BUILD.</h2>
          <div className="intro-text reveal">
            <p>I&apos;m Sanjay Akash V, an aspiring AI Engineer interested in building practical systems with machine learning, Generative AI and computer vision.</p>
            <p>From retrieval-augmented legal assistants to real-time vision systems and deep-learning experiments with astronomical data, I enjoy taking ideas from problem statement to working prototype.</p>
            <a className="text-link" href="https://github.com/SanjayAkash67" target="_blank" rel="noreferrer">EXPLORE MY GITHUB <Arrow diagonal /></a>
          </div>
        </div>
        <div className="stats-row reveal">
          <div><strong>06</strong><span>PROJECTS</span></div>
          <div><strong>03</strong><span>AWARDS & RECOGNITIONS</span></div>
          <div><strong>04+</strong><span>AI / DATA DOMAINS</span></div>
        </div>
      </section>

      <section className="expertise section-shell section-pad" id="expertise">
        <div className="section-kicker reveal"><span>02 / EXPERTISE</span><span>TOOLS OF THE TRADE</span></div>
        <div className="section-heading reveal"><h2>WHAT I<br/><em>WORK WITH.</em></h2><p>A growing toolkit for turning data, models and ideas into useful applications.</p></div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-group reveal" key={group.title}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="work section-shell section-pad" id="work">
        <div className="section-kicker reveal"><span>03 / SELECTED WORK</span><span>BUILT WITH CURIOSITY</span></div>
        <div className="section-heading work-heading reveal"><h2>IDEAS INTO<br/><em>INTELLIGENCE.</em></h2><p>A selection of projects exploring applied AI, machine learning and computer vision.</p></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card reveal" key={project.number}>
              <ProjectVisual type={project.visual} />
              <div className="project-meta"><span>{project.number} / {project.category}</span><span>{project.outcome}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="github-strip reveal">
          <div><span className="eyebrow">MORE EXPERIMENTS, CODE & REPOSITORIES</span><h3>THE WORK KEEPS<br/>EVOLVING.</h3></div>
          <a className="button button-outline" href="https://github.com/SanjayAkash67" target="_blank" rel="noreferrer">VISIT GITHUB <Arrow diagonal /></a>
        </div>
      </section>

      <section className="recognition section-shell section-pad">
        <div className="section-kicker reveal"><span>04 / RECOGNITION</span><span>BUILT. SHARED. RECOGNIZED.</span></div>
        <h2 className="recognition-title reveal">A FEW MOMENTS<br/><em>THAT MATTER.</em></h2>
        <div className="award-list">
          <div className="award reveal"><span>01</span><div><h3>Appreciation Award</h3><p>AI-Powered Meeting Assistant · Code&apos;O&apos;clock Hackathon</p></div><b>RECOGNITION ↗</b></div>
          <div className="award reveal"><span>02</span><div><h3>Second Prize</h3><p>AI-Powered Farmer Assistant · Agri Symposium</p></div><b>2ND PLACE ↗</b></div>
          <div className="award reveal"><span>03</span><div><h3>First Prize</h3><p>Real-Time Object Detection System · Pi-Day Presentation</p></div><b>1ST PLACE ↗</b></div>
        </div>
      </section>

      <section className="contact section-shell section-pad" id="contact">
        <div className="section-kicker reveal"><span>05 / GET IN TOUCH</span><span>THE NEXT IDEA STARTS HERE</span></div>
        <div className="contact-main reveal">
          <p className="eyebrow">HAVE A PROJECT, OPPORTUNITY OR IDEA?</p>
          <h2>LET&apos;S BUILD<br/><em>SOMETHING</em><br/>MEANINGFUL<span className="accent-text">.</span></h2>
          <a className="contact-email" href="mailto:sanjayakash67@gmail.com">sanjayakash67@gmail.com <Arrow diagonal /></a>
        </div>
        <div className="contact-links reveal">
          <a href="https://github.com/SanjayAkash67" target="_blank" rel="noreferrer">GITHUB <Arrow diagonal /></a>
          <a href="https://www.linkedin.com/in/sanjay-akash" target="_blank" rel="noreferrer">LINKEDIN <Arrow diagonal /></a>
          <a href="mailto:sanjayakash67@gmail.com">EMAIL <Arrow diagonal /></a>
        </div>
      </section>

      <footer className="footer section-shell">
        <a className="brand" href="#top">SA<span>®</span></a>
        <span>DESIGNED & BUILT WITH CURIOSITY.</span>
        <span>© 2026 SANJAY AKASH V</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}