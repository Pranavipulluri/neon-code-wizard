
import React, { useEffect, useRef } from "react";

const animatedSections = [
  "#about",
  "#experience",
  "#projects",
  "#skills",
  "#certifications",
  "#contact",
];

const certifications = [
  {
    title: "DS Gen AI LLM (JNTU)",
    detail: "93.3% - Data Science Gen AI / Large Language Model",
    icon: "🤖",
  },
  {
    title: "BVrit 24hr Hackathon",
    detail: "Special Mention",
    icon: "🏅",
  },
  {
    title: "NPTEL – C++",
    detail: "Certified by NPTEL (C++)",
    icon: "💻",
  },
];

const skillsWeb = [
  { name: "WordPress", level: 90 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 94 },
  { name: "SQL", level: 88 },
];

const Index = () => {
  // Animate section appearance on scroll
  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    };
    const observer = new window.IntersectionObserver(callback, {
      threshold: 0.12,
    });
    animatedSections.forEach((id) => {
      const el = document.querySelector(id);
      if (el) {
        el.classList.add("opacity-0", "translate-y-8");
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, []);

  // Experience card tilt effect
  const expCardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const card = expCardRef.current;
    if (!card) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;
      card.style.transform = `rotateY(${x / 20}deg) rotateX(${-y / 20}deg) scale(1.03)`;
    };
    const resetTilt = () => {
      card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
    };
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", resetTilt);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", resetTilt);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Animated neon grid and floating icons */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Glowing gradients */}
        <div className="absolute w-full h-full bg-gradient-to-br from-cyan-900/10 via-purple-900/10 to-yellow-900/10" />
        {/* Floating icons */}
        <div className="absolute left-10 top-10 text-3xl animate-float duration-[6s] opacity-30 select-none">💻</div>
        <div className="absolute right-10 top-32 text-3xl animate-float delay-2000 opacity-30 select-none">🎨</div>
        <div className="absolute left-20 bottom-24 text-3xl animate-float delay-1000 opacity-30 select-none">⚡</div>
        <div className="absolute right-32 bottom-10 text-3xl animate-float delay-3000 opacity-30 select-none">🔥</div>
      </div>

      {/* Header */}
      <header className="fixed w-full top-0 z-40 bg-black/80 backdrop-blur-sm border-b border-cyan-400/40 px-6 py-3">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <span className="text-xl md:text-2xl font-bold text-cyan-400 tracking-widest neon-text">PP.dev</span>
          <ul className="hidden md:flex space-x-8 font-mono text-lg">
            <li><a href="#home" className="story-link">Home</a></li>
            <li><a href="#about" className="story-link">About</a></li>
            <li><a href="#experience" className="story-link">Experience</a></li>
            <li><a href="#projects" className="story-link">Projects</a></li>
            <li><a href="#skills" className="story-link">Skills</a></li>
            <li><a href="#certifications" className="story-link">Certifications</a></li>
            <li><a href="#contact" className="story-link">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero min-h-screen flex flex-col justify-center items-center text-center relative animate-fade-in pt-32">
        <h1 className="neon-text text-5xl md:text-6xl font-extrabold mb-2 tracking-widest">Pranavi Pulluri</h1>
        <p className="subtitle neon-text text-xl md:text-2xl mb-4 font-semibold">Full Stack Developer & AI Enthusiast</p>
        {/* Typing effect */}
        <TypingText />
        {/* Tech stack rotating carousel */}
        <div className="mt-8">
          <h3 className="text-lg md:text-xl text-cyan-300 mb-5 font-mono">Technologies &amp; Tools I Master</h3>
          <TechCarousel />
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="section max-w-3xl mx-auto py-20 md:py-32">
        <h2 className="neon-text text-3xl md:text-4xl font-bold mb-6 relative">About Me</h2>
        <div className="text-lg text-gray-200 mx-auto font-mono leading-relaxed animate-rainbow">
          <p>
            I'm a passionate Computer Science student specializing in Data Science with <span className="text-yellow-300 font-bold">9.23 GPA</span> at VNR VJIET.<br/>
            Currently working as a Student Developer at Campus Automation and interning at Saola Innovations.<br/>
            I excel in full-stack development, AI/ML, and mobile app development.
          </p>
          <br />
          <p>
            My expertise spans Python, React.js, Android development, and cutting-edge AI technologies like
            TensorFlow and Computer Vision. I've built innovative projects from AI-powered traffic systems to
            e-commerce platforms, always focusing on real-world impact and technical excellence.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section py-20 md:py-32 max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="neon-text text-3xl md:text-4xl font-bold mb-6 relative">Experience</h2>
        {/* Animated card tilt on hover */}
        <div ref={expCardRef} className="exp-card bg-gradient-to-br from-cyan-900/70 via-fuchsia-900/50 to-yellow-900/70 neon-border shadow-lg rounded-2xl p-8 md:p-12 max-w-xl transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-105 cursor-pointer mb-6">
          <div className="flex items-center mb-3">
            <span className="text-3xl mr-3">🧑‍💻</span>
            <span className="text-xl md:text-2xl font-semibold text-fuchsia-300">Full Stack Developer Intern</span>
          </div>
          <div className="font-mono text-gray-200 mb-2 text-lg">
            Rudraksha Welfare Foundation &bull; <span className="text-cyan-300">Present</span>
          </div>
          <ul className="list-disc ml-8 font-mono text-base text-gray-300 space-y-1 mt-2">
            <li>
              Building bespoke <span className="font-bold text-yellow-300">Law Firm Websites</span> using <span className="text-fuchsia-400">WordPress</span>, <span className="text-fuchsia-400">HTML</span>, <span className="text-fuchsia-400">CSS</span>, <span className="text-fuchsia-400">SQL</span>
            </li>
            <li>
              Direct, regular <span className="text-cyan-200 font-bold">client interactions</span> to gather requirements and deliver solutions
            </li>
            <li>
              Responsible for design, development, deployment, and ongoing support of client sites
            </li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            {skillsWeb.map((s) => (
              <span key={s.name} className="bg-cyan-900/80 border border-cyan-300 text-cyan-200 px-3 py-1 rounded-lg font-mono text-sm animate-pulse">{s.name}</span>
            ))}
          </div>
        </div>
        <span className="text-gray-400 text-sm mt-1 animate-fade-in">Making client's ideas come alive — the fun way 🚀</span>
      </section>

      {/* Projects */}
      <section id="projects" className="section max-w-6xl mx-auto py-20 md:py-32">
        <h2 className="neon-text text-3xl md:text-4xl font-bold mb-10">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {[
            {
              name: "LocalMart - AI Shopping Platform",
              desc: "Revolutionary platform boosting local businesses with AI-driven product matching, real-time inventory visibility, and community engagement features.",
              stack: ["Java", "Android Studio", "Firebase", "ML Kit"],
            },
            {
              name: "SmartVend - Digital Vending Interface",
              desc: "Web-based sanitary pad vending machine interface with digital payments, real-time monitoring, and seamless inventory management.",
              stack: ["Node.js", "Express.js", "MongoDB", "Razorpay API"],
            },
            {
              name: "SmartShield - AI Traffic Safety",
              desc: "AI-powered traffic safety system using YOLO-based helmet detection, real-time traffic density analysis, and asynchronous traffic signals.",
              stack: ["Python", "YOLO", "OpenCV", "TensorFlow"],
            },
            {
              name: "AllMadeEasy - Community Hub",
              desc: "Comprehensive web application for community engagement with content sharing, task management, marketplace, and integrated services.",
              stack: ["Flask", "SQLAlchemy", "JavaScript", "SQLite"],
            },
            {
              name: "Fake News Detection System",
              desc: "NLP-powered system using Naive Bayes classifier and TF-IDF vectorization to identify fake news articles with high accuracy.",
              stack: ["Python", "Scikit-learn", "NLTK", "NewsAPI"],
            },
            {
              name: "Weather App - AndroidX Winner",
              desc: "Clean UI weather application that won the AndroidX Workshop competition, selected as finalist after virtual concepts interview.",
              stack: ["Android", "Java", "XML", "API Integration"],
            },
          ].map((proj) => (
            <div key={proj.name} className="group bg-gradient-to-br from-black/70 via-cyan-900/40 to-fuchsia-900/70 neon-border rounded-xl shadow-lg p-8 transition-all hover:scale-105 hover:shadow-cyan-400/40 hover:shadow-xl hover:neon-text relative overflow-hidden">
              <h3 className="text-fuchsia-300 font-semibold text-lg mb-2">{proj.name}</h3>
              <p className="text-gray-300 text-base mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.stack.map((tech) => (
                  <span key={tech} className="bg-fuchsia-900/60 border border-fuchsia-300 text-fuchsia-100 px-3 py-1 rounded-2xl text-xs font-mono">{tech}</span>
                ))}
              </div>
              <div className="absolute left-0 bottom-0 h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section max-w-6xl mx-auto py-20 md:py-32">
        <h2 className="neon-text text-3xl md:text-4xl font-bold mb-10">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Programming */}
          <div className="bg-gradient-to-b from-black/70 via-cyan-900/20 to-yellow-900/30 neon-border rounded-xl px-8 py-7">
            <h3 className="text-fuchsia-300 font-semibold mb-4">Programming Languages</h3>
            <SkillBar label="Python" level={95} />
            <SkillBar label="Java" level={90} />
            <SkillBar label="C++" level={85} />
            <SkillBar label="R" level={80} />
          </div>
          {/* Web */}
          <div className="bg-gradient-to-b from-black/60 via-cyan-900/20 to-fuchsia-900/20 neon-border rounded-xl px-8 py-7">
            <h3 className="text-fuchsia-300 font-semibold mb-4">Web Development</h3>
            <SkillBar label="React.js" level={92} />
            <SkillBar label="Node.js & Express" level={88} />
            <SkillBar label="Flask & Django" level={90} />
            <SkillBar label="MongoDB & MySQL" level={85} />
            <SkillBar label="WordPress" level={90} highlight />
            <SkillBar label="HTML" level={95} highlight />
            <SkillBar label="CSS" level={94} highlight />
            <SkillBar label="SQL" level={88} highlight />
          </div>
          {/* AI & ML */}
          <div className="bg-gradient-to-b from-black/80 via-fuchsia-900/20 to-yellow-900/20 neon-border rounded-xl px-8 py-7">
            <h3 className="text-fuchsia-300 font-semibold mb-4">AI & Machine Learning</h3>
            <SkillBar label="TensorFlow & Keras" level={88} />
            <SkillBar label="Computer Vision" level={85} />
            <SkillBar label="NLTK & SpaCy" level={82} />
            <SkillBar label="Scikit-learn" level={90} />
          </div>
          {/* Mobile */}
          <div className="bg-gradient-to-b from-black/70 via-cyan-900/25 to-yellow-900/20 neon-border rounded-xl px-8 py-7">
            <h3 className="text-fuchsia-300 font-semibold mb-4">Mobile & Tools</h3>
            <SkillBar label="Android Studio" level={88} />
            <SkillBar label="Firebase" level={85} />
            <SkillBar label="AWS S3" level={80} />
            <SkillBar label="Git & GitHub" level={92} />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section max-w-4xl mx-auto py-20 md:py-32 flex flex-col items-center">
        <h2 className="neon-text text-3xl md:text-4xl font-bold mb-10">Certifications</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {certifications.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col items-center bg-gradient-to-br from-cyan-900/60 via-fuchsia-900/20 to-yellow-700/10 neon-border rounded-2xl p-6 shadow-md transition-transform hover:scale-105 animate-fade-in min-w-[240px] max-w-xs"
            >
              <span className="text-4xl mb-3 animate-bounce">{item.icon}</span>
              <div className="font-semibold text-xl text-yellow-200 mb-1 text-center">{item.title}</div>
              <div className="text-fuchsia-200 text-center text-sm">{item.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section max-w-xl mx-auto py-20 md:py-32">
        <h2 className="neon-text text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="bg-black/80 text-center py-8 border-t border-cyan-400/20">
        <div className="flex flex-wrap justify-center gap-8 mb-2">
          <FooterLink href="https://github.com/Pranavipulluri" icon="🐙">
            GitHub
          </FooterLink>
          <FooterLink href="https://linkedin.com/in/pranavi-pulluri" icon="💼">
            LinkedIn
          </FooterLink>
          <FooterLink href="mailto:pulluripranavi@gmail.com" icon="📧">
            Email
          </FooterLink>
          <FooterLink href="tel:+916304381870" icon="📱">
            Phone
          </FooterLink>
        </div>
        <p className="text-gray-400 text-sm">&copy; 2025 Pranavi Pulluri. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Typing animated text
function TypingText() {
  const phrases = [
    "Building AI-powered applications",
    "Creating innovative mobile solutions",
    "Developing full-stack web platforms",
    "Mastering computer vision & ML",
    "Turning ideas into reality",
  ];
  const [index, setIndex] = React.useState(0);
  const [disp, setDisp] = React.useState("");
  const [del, setDel] = React.useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!del && disp.length < phrases[index].length) {
      timeout = setTimeout(() => setDisp(phrases[index].slice(0, disp.length + 1)), 80);
    } else if (!del && disp.length === phrases[index].length) {
      timeout = setTimeout(() => setDel(true), 1300);
    } else if (del && disp.length > 0) {
      timeout = setTimeout(() => setDisp(phrases[index].slice(0, disp.length - 1)), 30);
    } else if (del && disp.length === 0) {
      setDel(false);
      setIndex((index + 1) % phrases.length);
    }
    return () => clearTimeout(timeout);
  }, [disp, del, index]);

  return (
    <div className="typing-text text-yellow-300 text-lg md:text-xl">
      {disp}
      <span className="opacity-70 animate-pulse">|</span>
    </div>
  );
}

// Tech carousel
function TechCarousel() {
  const techs = [
    "Python & Machine Learning",
    "React.js & Node.js",
    "Android Studio & Firebase",
    "TensorFlow & Computer Vision",
    "MongoDB & Express.js",
    "AWS & Flask Development",
    "Java & Data Structures",
    "YOLO & OpenCV",
  ];
  const [current, setCurrent] = React.useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % techs.length), 2000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative h-14 flex items-center justify-center">
      {techs.map((t, i) => (
        <span
          key={t}
          className={`absolute transition-all duration-700 px-6 py-3 rounded-xl backdrop-blur-sm neon-border text-cyan-100 font-mono text-base md:text-lg font-semibold shadow focus:outline-none ${
            i === current
              ? "opacity-100 scale-100 z-10 animate-scale-in bg-cyan-900/70"
              : "opacity-0 scale-90 z-0 pointer-events-none"
          }`}
          aria-hidden={i !== current}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

// SkillBar component
const SkillBar = ({ label, level, highlight }: { label: string; level: number; highlight?: boolean }) => (
  <div className="mb-4">
    <div className="flex justify-between font-mono mb-1">
      <span className={highlight ? "text-yellow-300 font-bold" : ""}>{label}</span>
      <span className={highlight ? "text-yellow-300" : "text-cyan-300"}>{level}%</span>
    </div>
    <div className="h-2 w-full bg-cyan-100/10 rounded">
      <div
        className={`h-full rounded transition-all duration-700 ${
          highlight
            ? "bg-gradient-to-r from-yellow-300 via-fuchsia-400 to-cyan-400 pulse"
            : "bg-gradient-to-r from-cyan-200 via-cyan-400 to-fuchsia-400"
        }`}
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

// Contact form (with animation)
function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        formRef.current?.reset();
      }, 1800);
    }, 1200);
  };
  return (
    <form
      ref={formRef}
      className="contact-form bg-gradient-to-br from-black/60 via-fuchsia-900/25 to-cyan-900/25 neon-border rounded-2xl px-8 py-8 shadow-md"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <div className="mb-6">
        <label htmlFor="name" className="block font-mono text-cyan-200 mb-2">
          Name
        </label>
        <input
          className="w-full px-4 py-2 rounded-lg bg-black/30 border border-cyan-400 text-white font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          type="text"
          name="name"
          id="name"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block font-mono text-cyan-200 mb-2">
          Email
        </label>
        <input
          className="w-full px-4 py-2 rounded-lg bg-black/30 border border-cyan-400 text-white font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          type="email"
          name="email"
          id="email"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block font-mono text-cyan-200 mb-2">
          Message
        </label>
        <textarea
          className="w-full px-4 py-2 rounded-lg bg-black/30 border border-cyan-400 text-white font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          name="message"
          id="message"
          rows={5}
          required
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className={`btn bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-300 px-8 py-3 rounded-full font-bold text-black text-lg transition-transform duration-300 shadow-lg relative overflow-hidden hover:scale-105 focus:outline-none animate-pulse
            ${
              status === "sending"
                ? "opacity-70"
                : status === "sent"
                ? "bg-gradient-to-r from-yellow-300 to-cyan-400 text-black animate-pulse shadow-yellow-200/40"
                : ""
            }`}
          disabled={status === "sending" || status === "sent"}
        >
          {status === "idle"
            ? "Send Message"
            : status === "sending"
            ? "Sending..."
            : "Message Sent! ✨"}
        </button>
      </div>
    </form>
  );
}

// Footer social links
const FooterLink = ({
  href,
  icon,
  children,
}: {
  href: string;
  icon: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-cyan-200 font-mono text-base transition-transform duration-200 hover:scale-110 hover:text-fuchsia-400 hover:neon-text"
  >
    <span className="text-2xl">{icon}</span>
    {children}
  </a>
);

export default Index;
