import React from "react";
import ProjectRotator from "./ProjectRotator";

const projects = [
  {
    label: "FRAMEWORK: ReactJS",
    labelColor: "#ff00ff",
    title: "Debugging the Matrix",
    subtitle: "The Version Control Mirror",
    description:
      "I saw my code, but not as it is now. The mirror of Git showed all my branches... The error messages multiplied, haunting my console...",
    link: "https://github.com/matrix-debug"
  },
  {
    label: "LANGUAGE: Python",
    labelColor: "#00ffff",
    title: "First Line of Code",
    subtitle: "Deployment Dream",
    description:
      "Every server feels familiar, yet subtly different... The blurred lines between staging and production are thinning...",
    link: "https://github.com/firstline"
  },
  {
    label: "CONCEPT: Algorithms",
    labelColor: "#ff0099",
    title: "The Algorithm Library",
    subtitle: "The Abstract Void",
    description:
      "Nothing concrete exists here, yet the logic flows... The Abstract Void is a quantum foam of design patterns and optimization...",
    link: "https://github.com/algovoid"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 text-center bg-black">
      <h1 className="text-4xl text-white font-bold mb-12">🧠 Codeverse Carousel</h1>
      <ProjectRotator projects={projects} />
    </section>
  );
}
