import React, { useEffect, useRef } from "react";
import { Rocket } from "lucide-react";

const animatedSections = [
  "#about",
  "#education",
  "#experience",
  "#projects",
  "#skills",
  "#certifications",
  "#achievements",
  "#activities",
  "#contact",
];

// Projects, skills, certifications, achievements, etc.
type Project = {
  name: string;
  desc: string;
  tech: string[];
  date: string;
};

const projects: Project[] = [
  {
    name: "LocalMart – AI-driven Local Shopping Platform",
    desc:
      "Centralizes local seller info. Empowers community & real-time inventory using e-commerce + AI.",
    tech: [
      "Java",
      "Android Studio",
      "Firebase",
      "ML Kit"
    ],
    date: "Oct '24"
  },
  {
    name: "SmartVend – Digitalized Sanitary Pad Vending Machine Interface",
    desc:
      "Web-based interface for vending, payments, monitoring and inventory management.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Razorpay API"
    ],
    date: "Feb '25"
  },
  {
    name: "SmartShield – AI-Powered Traffic Safety & Management",
    desc:
      "YOLO-based helmet detection. Real-time monitoring and asynchronous traffic control.",
    tech: [
      "Python",
      "YOLO",
      "OpenCV",
      "TensorFlow",
      "Flask"
    ],
    date: "Jan '25"
  },
  {
    name: "AllMadeEasy – Community Hub Web Application",
    desc:
      "Integrated platform: content, tasks, rental, messaging, jobs, and community marketplace.",
    tech: [
      "Python (Flask)",
      "SQLAlchemy",
      "HTML",
      "CSS",
      "JavaScript",
      "SQLite",
      "News API"
    ],
    date: "Feb '25"
  },
  {
    name: "Fake News Detection System",
    desc:
      "NLP+Naive Bayes for detecting fake news. TF-IDF similarity for accuracy.",
    tech: [
      "Scikit-learn",
      "NewsAPI",
      "Python"
    ],
    date: "2024"
  },
  {
    name: "Anime Web Scraping",
    desc:
      "Web scraping/anime analytics with BeautifulSoup, Pandas, custom DataFrames.",
    tech: [
      "Python",
      "BeautifulSoup",
      "Pandas"
    ],
    date: "2024"
  },
  {
    name: "WeatherApp – AndroidX Winner",
    desc:
      "Crisp UI weather app, won at national Android workshop, finalist after live interview.",
    tech: [
      "Android",
      "Java",
      "XML",
      "API Integration"
    ],
    date: "2024"
  }
];

const experiences = [
  {
    org: "Saola Innovations Pvt Ltd (Remote)",
    title: "Student Intern",
    date: "Feb 2025 - Present",
    points: [
      "UI refactoring for performance with large DBs.",
      "Expected: front-end dev, API integration, UX design.",
      "Awaiting onboarding for team collab & feature building."
    ],
    icon: "🛰️"
  },
  {
    org: "Campus Automation (Remote)",
    title: "Student Developer",
    date: "Feb 2025 - Present",
    points: [
      "Designed UI for Flutter app & Figma website.",
      "Implemented SSO to simplify authentication.",
      "Collaborated on the campus "mother app"."
    ],
    icon: "🏫"
  },
  {
    org: "VJ Codelabs (Remote)",
    title: "Core Team Member",
    date: "Nov 2024",
    points: [
      "Created beginner-friendly docs for multiple techs.",
      "Android Studio curriculum & guide for students.",
      "Impact: Content now on main college site."
    ],
    icon: "💡"
  },
  {
    org: "Rudraksha Welfare Foundation",
    title: "Full Stack Developer Intern",
    date: "2024 – Present",
    points: [
      "Building bespoke law firm websites (WordPress, HTML, CSS, SQL).",
      "Directly interact with clients for requirements/solutions.",
      "Design, dev, deployment, and site support."
    ],
    icon: "👩‍💻"
  }
];

const certifications = [
  {
    title: "DS Gen AI LLM (JNTU)",
    detail: "93.3% - Certified in Data Science, Gen AI/LLMs by JNTU",
    icon: "🤖"
  },
  {
    title: "NPTEL – C++",
    detail: "Certified by NPTEL (Govt. C++ Programming)",
    icon: "💻"
  },
  {
    title: "BVrit 24hr Hackathon",
    detail: "Special Mention",
    icon: "🏅"
  },
  // College-level trophies:
  {
    title: "3rd Place – Brandburst",
    detail: "Brand-centric creativity and marketing.",
    icon: "🥉"
  },
  {
    title: "2nd Place – Designathon",
    detail: "Innovative design solutions in tight deadlines.",
    icon: "🥈"
  },
  {
    title: "3rd Place – Ideathon",
    detail: "Problem-solving and ideas presentation.",
    icon: "🥉"
  },
  {
    title: "Finalist – Solution Sprint",
    detail: "Practical real-world solution pitch.",
    icon: "🚩"
  }
];

const achievements = [
  "AndroidX Workshop Winner – Weather app, top among 100+ teams.",
  "Inter-college Milan Art Competition – Winner (2024).",
  "Hackathon Finalist – 36hr event at Narsimha Reddy College.",
  "10th Board: 10 CGPA",
  "Intermediate: 97.9%",
  "JEE Mains: 94.84 percentile",
  "JEE Advanced: AIR 15182",
  "EAMCET: State rank 3393",
  "NRFI Talent Rewarder: Zonal 50th Rank",
  "NSTSE: AIR 3624",
  "NISO: Bronze Medal",
  "IEO: Silver Medal",
  "NIMO: Gold Medal",
  "SOF Science Olympiad: Gold Medal",
  "Master Orator – District 126",
  "TED Talks Speaker"
];

const education = [
  {
    school: "VNR Vignan Jyoti Institute of Technology, Hyderabad",
    degree: "B.Tech in Information Technology (CSE-DS)",
    date: "July 2023 – June 2027",
    gpa: "9.23/10",
    details: [
      "Coursework: Data Science, AI/ML, Web, Cloud, Comp. Science.",
      "Active member of campus technical/art clubs.",
    ]
  }
];

// Skills: show as animated skill bars & maybe a tabbed UI in large screens
type SkillBarType = { name: string; level: number };
type SkillCategory = {
  category: string;
  skills: SkillBarType[];
};

const skillsData: SkillCategory[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "C", level: 82 },
      { name: "R", level: 80 },
      { name: "Java", level: 90 }
    ]
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML", level: 94 },
      { name: "CSS", level: 93 },
      { name: "Tailwind CSS", level: 90 },
      { name: "React.js", level: 92 },
      { name: "Flask", level: 85 },
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 88 },
      { name: "Web Scraping", level: 86 }
    ]
  },
  {
    category: "Mobile & Tools",
    skills: [
      { name: "Android Studio", level: 88 },
      { name: "Firebase", level: 85 },
      { name: "XML", level: 80 },
      { name: "GIT", level: 89 },
      { name: "AWS S3", level: 80 },
      { name: "Figma", level: 82 },
      { name: "Canva", level: 86 },
      { name: "OpenToonz/Tahoma", level: 90 }
    ]
  },
  {
    category: "AI & ML",
    skills: [
      { name: "TensorFlow", level: 88 },
      { name: "Keras", level: 87 },
      { name: "Scikit-learn", level: 90 },
      { name: "NLTK", level: 82 },
      { name: "SpaCy", level: 80 },
      { name: "Neural Networks", level: 84 },
      { name: "GANs", level: 83 },
      { name: "ML Kit", level: 82 }
    ]
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Leadership", level: 95 },
      { name: "Event Management", level: 90 },
      { name: "Public Speaking", level: 92 },
      { name: "Time Management", level: 89 }
    ]
  }
];

const interests = [
  "Painting & Sketching ✏️",
  "Digital Arts 🖌️",
  "Chess ♟️"
];
const activities = [
  "Creative Arts Club: Wall paintings, custom art, event decoration.",
  "ISTE Club: Tech event PR and stage coordination.",
];

// Social links
const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Pranavipulluri",
    icon: "🐙"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pranavi-pulluri/",
    icon: "💼"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/pranavi_pulluri/",
    icon: "📸"
  },
  {
    name: "Email",
    href: "mailto:pulluripranavi@gmail.com",
    icon: "📧"
  },
  {
    name: "Phone",
    href: "tel:+916304381870",
    icon: "📱"
  },
];

const Index = () => {
  // Cool fade-in & floating animation on sections
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
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Cyberpunk Floating Symbols */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute w-full h-full animate-fade-in" style={{
          background:
            "radial-gradient(circle at 20% 55%, rgba(0,255,255,0.09) 0%, transparent 70%)," +
            "radial-gradient(circle at 80% 20%, rgba(255,0,255,0.08) 0%, transparent 65%)," +
            "radial-gradient(circle at 50% 80%, rgba(255,255,0,0.08) 0%, transparent 60%)",
        }} />
        <div className="absolute left-12 top-16 text-4xl animate-float opacity-40 select-none">💻</div>
        <div className="absolute right-16 top-36 text-4xl animate-float delay-2000 opacity-40 select-none">🎨</div>
        <div className="absolute left-24 bottom-28 text-4xl animate-float delay-1000 opacity-40 select-none">⚡</div>
        <div className="absolute right-24 bottom-12 text-4xl animate-float delay-3000 opacity-40 select-none">🔥</div>
      </div>
      {/* Header */}
      <header className="fixed w-full top-0 z-30 bg-black/85 backdrop-blur-sm border-b border-cyan-400/40 px-6 py-3">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <span className="text-2xl font-bold text-cyan-400 neon-text tracking-widest flex items-center gap-1">
            <Rocket className="inline mb-1 text-fuchsia-400" size={28} />
            PP.dev
          </span>
          <ul className="hidden md:flex space-x-8 font-mono text-lg">
            <li><a href="#home" className="story-link">Home</a></li>
            <li><a href="#about" className="story-link">About</a></li>
            <li><a href="#education" className="story-link">Education</a></li>
            <li><a href="#experience" className="story-link">Experience</a></li>
            <li><a href="#projects" className="story-link">Projects</a></li>
            <li><a href="#skills" className="story-link">Skills</a></li>
            <li><a href="#certifications" className="story-link">Certifications</a></li>
            <li><a href="#achievements" className="story-link">Achievements</a></li>
            <li><a href="#activities" className="story-link">Clubs/Activities</a></li>
            <li><a href="#contact" className="story-link">Contact</a></li>
          </ul>
        </nav>
      </header>
      {/* Hero Section */}
      <section id="home" className="hero min-h-screen flex flex-col justify-center items-center text-center relative animate-fade-in pt-44 z-10">
        <h1 className="neon-text text-6xl font-extrabold mb-2 tracking-widest text-cyan-400 drop-shadow-[0_0_30px_cyan]">Pranavi Pulluri</h1>
        <p className="subtitle neon-text text-2xl mb-4 font-semibold text-fuchsia-300">
          Full Stack Developer & AI Enthusiast
        </p>
        <TypingText />
        <div className="mt-10">
          <h3 className="text-xl text-cyan-200 mb-5 font-mono tracking-wide animate-pulse">Technologies & Tools I Master</h3>
          <TechCarousel />
        </div>
      </section>
      {/* About Me */}
      <section id="about" className="section max-w-3xl mx-auto py-20 animate-fade-in z-10">
        <h2 className="neon-text text-4xl font-bold mb-6 relative text-center text-cyan-400">About Me</h2>
        <div className="text-lg text-gray-200 font-mono text-center animate-rainbow leading-relaxed">
          <p>
            I'm a passionate Computer Science student—Data Science, AI/ML, and full-stack projects. <br />
            GPA: <span className="text-yellow-300 font-bold">9.23</span> at VNR VJIET.
            <br />
            Currently at <span className="text-fuchsia-300 font-semibold">Campus Automation</span> &amp; 
            <span className="text-yellow-300 font-semibold"> Saola Innovations</span>, with a flair for creativity and community impact.
          </p>
          <br />
          <p>
            I master: <span className="text-fuchsia-200">Python</span>, <span className="text-cyan-200">React.js</span>, <span className="text-yellow-200">TensorFlow</span>, 
            <span className="text-pink-200">Android Studio</span>, <span className="text-fuchsia-200">Node.js</span>, modern AI, and more.
          </p>
        </div>
      </section>
      {/* Education */}
      <section id="education" className="section max-w-2xl mx-auto py-12 animate-fade-in z-10">
        <h2 className="neon-text text-3xl font-bold mb-6 text-cyan-400">Education</h2>
        <div className="bg-gradient-to-br from-cyan-900/70 via-fuchsia-900/20 to-yellow-900/30 neon-border rounded-xl p-8 mb-3">
          <h3 className="text-lg text-yellow-200 font-semibold mb-1">{education[0].school}</h3>
          <p className="text-fuchsia-200 mb-1">{education[0].degree}</p>
          <p className="text-cyan-200 mb-1">{education[0].date}</p>
          <span className="font-mono block mb-3">GPA: <span className="text-yellow-300">{education[0].gpa}</span></span>
          <ul className="list-disc ml-8 text-gray-300 leading-7 text-base">
            {education[0].details.map((ed) => <li key={ed}>{ed}</li>)}
          </ul>
        </div>
      </section>
      {/* Experience */}
      <section id="experience" className="section max-w-3xl mx-auto py-20 animate-fade-in z-10">
        <h2 className="neon-text text-3xl md:text-4xl font-bold mb-8 text-cyan-400">Experience</h2>
        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.org}
              className="group bg-gradient-to-br from-cyan-900/70 via-fuchsia-900/20 to-yellow-900/30 neon-border shadow-lg rounded-xl p-6 transition-all hover:scale-105 hover:shadow-cyan-200/50 relative overflow-hidden animate-fade-in"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl animate-bounce">{exp.icon}</span>
                <span className="font-semibold text-fuchsia-200 text-lg">{exp.title}</span>
                <span className="text-cyan-300 font-mono ml-auto text-sm">{exp.date}</span>
              </div>
              <div className="font-mono text-yellow-300">{exp.org}</div>
              <ul className="list-disc ml-6 mt-2 text-gray-200 text-base space-y-1 font-mono">
                {exp.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* Projects (rotating dynamic carousel on md+ screens, simple grid below) */}
      <section id="projects" className="section max-w-6xl mx-auto py-20 animate-fade-in z-10">
        <h2 className="neon-text text-3xl md:text-4xl font-bold mb-10 text-cyan-400">Featured Projects</h2>
        <ProjectRotator projects={projects} />
      </section>
      {/* Skills */}
      <section id="skills" className="section max-w-6xl mx-auto py-20 animate-fade-in z-10">
        <h2 className="neon-text text-3xl md:text-4xl font-bold mb-10 text-cyan-400">Technical Skills</h2>
        <SkillTabs skillsData={skillsData} />
      </section>
      {/* Certifications */}
      <section id="certifications" className="section max-w-4xl mx-auto py-20 animate-fade-in z-10">
        <h2 className="neon-text text-3xl font-bold mb-10 text-cyan-400">Certifications</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {certifications.map((cert) => (
            <div key={cert.title} className="flex flex-col items-center bg-gradient-to-br from-cyan-900/60 via-fuchsia-900/20 to-yellow-700/10 neon-border rounded-2xl p-6 shadow mb-1 animate-fade-in min-w-[215px] max-w-xs">
              <span className="text-4xl mb-3 animate-bounce">{cert.icon}</span>
              <div className="text-yellow-200 font-semibold text-lg text-center mb-1">{cert.title}</div>
              <div className="text-fuchsia-200 text-center text-sm">{cert.detail}</div>
            </div>
          ))}
        </div>
      </section>
      {/* Achievements */}
      <section id="achievements" className="section max-w-5xl mx-auto py-16 animate-fade-in z-10">
        <h2 className="neon-text text-3xl font-bold mb-6 text-cyan-400 text-center">Achievements & Distinctions</h2>
        <ul className="px-2 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-12 font-mono text-lg text-yellow-200 animate-pulse">
          {achievements.map((ach) => (
            <li key={ach} className="flex items-center gap-3">
              <span className="text-fuchsia-400">★</span>
              {ach}
            </li>
          ))}
        </ul>
      </section>
      {/* Clubs/Activities */}
      <section id="activities" className="section max-w-4xl mx-auto py-16 animate-fade-in z-10">
        <h2 className="neon-text text-3xl font-bold mb-6 text-cyan-400">Clubs & Activities</h2>
        <ul className="text-lg font-mono text-yellow-100 list-disc ml-8 space-y-2">
          {activities.map((act) => <li key={act}>{act}</li>)}
        </ul>
        <div className="text-lg text-cyan-200 mt-6">
          <b>Interests: </b>
          {interests.join(", ")}
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="section max-w-2xl mx-auto py-20 animate-fade-in z-10">
        <h2 className="neon-text text-3xl font-bold mb-8 text-cyan-400">Get In Touch</h2>
        <ContactForm />
      </section>
      {/* Footer */}
      <footer className="bg-black/80 text-center py-10 border-t border-cyan-400/15 z-10">
        <div className="flex flex-wrap justify-center gap-8 mb-2">
          {socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-200 font-mono text-base hover:scale-110 hover:text-fuchsia-400 transition-transform duration-200">
              <span className="text-2xl">{s.icon}</span> {s.name}
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-sm">&copy; 2025 Pranavi Pulluri. All rights reserved.</p>
      </footer>
    </div>
  );
};

// ======= Sub-components below for modularity =======

// Typing animated text
function TypingText() {
  const phrases = [
    "Building AI-powered applications",
    "Creating innovative mobile solutions",
    "Developing full-stack web platforms",
    "Mastering computer vision & ML",
    "Turning ideas into reality"
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
      timeout = setTimeout(() => setDisp(phrases[index].slice(0, disp.length - 1)), 35);
    } else if (del && disp.length === 0) {
      setDel(false);
      setIndex((index + 1) % phrases.length);
    }
    return () => clearTimeout(timeout);
  }, [disp, del, index]);
  return (
    <div className="typing-text text-yellow-300 text-lg md:text-xl animate-pulse">
      {disp}
      <span className="opacity-70 animate-pulse">|</span>
    </div>
  );
}

// Tech carousel: rotating text/section
function TechCarousel() {
  const techs = [
    "Python & Machine Learning",
    "React.js & Node.js",
    "Android Studio & Firebase",
    "TensorFlow & Computer Vision",
    "MongoDB & Express.js",
    "AWS & Flask Development",
    "Java & Data Structures",
    "YOLO & OpenCV"
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
          className={`absolute transition-all duration-700 px-6 py-3 rounded-xl backdrop-blur-sm neon-border text-cyan-100 font-mono text-lg font-semibold shadow focus:outline-none ${
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

// Rotating (animated) project carousel for projects
function ProjectRotator({ projects }: { projects: Project[] }) {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setIndex((idx) => (idx + 1) % projects.length), 3200);
    return () => clearInterval(t);
  }, [projects.length]);
  return (
    <div className="w-full flex flex-col items-center">
      {/* Rotating card */}
      <div className="group bg-gradient-to-br from-black/70 via-cyan-900/50 to-fuchsia-800/60 neon-border rounded-xl shadow-lg p-9 max-w-2xl mx-auto mb-8 relative animate-scale-in duration-700 transition-all hover:scale-[1.03] hover:shadow-cyan-400/40 hover:neon-text min-h-[250px]">
        <h3 className="text-fuchsia-200 font-semibold text-xl mb-1">{projects[index].name}</h3>
        <span className="text-xs bg-fuchsia-900/40 text-fuchsia-200 px-2 py-1 rounded-full mb-3">{projects[index].date}</span>
        <p className="text-gray-300 text-base mb-3 font-mono">{projects[index].desc}</p>
        <div className="flex flex-wrap gap-2 mt-1">
          {projects[index].tech.map((tech) => (
            <span key={tech} className="bg-fuchsia-900/60 border border-fuchsia-300 text-fuchsia-100 px-3 py-1 rounded-2xl text-xs font-mono">{tech}</span>
          ))}
        </div>
      </div>
      {/* Small dots below for manual navigation */}
      <div className="flex gap-2 mt-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full border transition-all duration-300 ${
              i === index ? "bg-cyan-400 border-cyan-300" : "bg-black border-cyan-800"
            }`}
            aria-label={`View project ${i + 1}`}
          />
        ))}
      </div>
      {/* All projects grid below on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8">
        {projects.map((proj) => (
          <div key={proj.name} className="group bg-gradient-to-br from-black/70 via-cyan-900/40 to-fuchsia-900/70 neon-border rounded-xl shadow-lg p-7 transition-all hover:scale-105 hover:shadow-cyan-400/40 hover:neon-text relative overflow-hidden">
            <h3 className="text-fuchsia-300 font-semibold text-lg mb-2">{proj.name}</h3>
            <span className="text-xs bg-cyan-900/40 text-cyan-200 px-2 py-1 rounded-full mb-2 inline-block">{proj.date}</span>
            <p className="text-gray-300 text-base mb-2">{proj.desc}</p>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map((tech) => (
                <span key={tech} className="bg-fuchsia-900/60 border border-fuchsia-300 text-fuchsia-100 px-3 py-1 rounded-2xl text-xs font-mono">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Skills as tabs (category tabs, animated bars)
function SkillTabs({ skillsData }: { skillsData: SkillCategory[] }) {
  const [active, setActive] = React.useState(0);
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {skillsData.map((cat, idx) => (
          <button
            key={cat.category}
            onClick={() => setActive(idx)}
            className={`px-5 py-2 rounded-lg font-mono font-semibold border transition 
              ${active === idx
                ? "bg-cyan-400 text-black neon-text border-cyan-300 animate-scale-in"
                : "bg-black/70 text-cyan-200 border-cyan-700 hover:bg-cyan-950/40"
              }`}
          >
            {cat.category}
          </button>
        ))}
      </div>
      <div className="max-w-2xl mx-auto">
        {skillsData[active].skills.map((s) => (
          <SkillBar key={s.name} label={s.name} level={s.level} />
        ))}
      </div>
    </div>
  );
}

// SkillBar visual
function SkillBar({ label, level }: { label: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between font-mono mb-1">
        <span className="text-yellow-300">{label}</span>
        <span className="text-cyan-300">{level}%</span>
      </div>
      <div className="h-2 w-full bg-cyan-100/10 rounded">
        <div
          className={`h-full rounded transition-all duration-800 bg-gradient-to-r from-yellow-300 via-fuchsia-400 to-cyan-400 pulse`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

// Contact form (keep existing logic, style for cool pulse/button effect)
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

export default Index;
