
import React from "react";
import { CheckCircle, Cpu, Database, Code2, Server, Smartphone, Figma, GitBranch } from "lucide-react";

// Example skills data with associated icons
const skillIcons: {[k:string]: React.ReactNode} = {
  "Python": <Cpu className="text-yellow-300" size={35}/>,
  "Java": <Code2 className="text-fuchsia-300" size={35}/>,
  "React.js": <CheckCircle className="text-cyan-300" size={35}/>,
  "Node.js": <Server className="text-green-300" size={35}/>,
  "MongoDB": <Database className="text-green-400" size={35}/>,
  "Android Studio": <Smartphone className="text-fuchsia-400" size={35}/>,
  "Figma": <Figma className="text-pink-300" size={35}/>,
  "GIT": <GitBranch className="text-yellow-500" size={35}/>
};

const skills = [
  { name: "Python", level: 95 },
  { name: "Java", level: 90 },
  { name: "React.js", level: 92 },
  { name: "Node.js", level: 90 },
  { name: "MongoDB", level: 86 },
  { name: "Android Studio", level: 88 },
  { name: "Figma", level: 82 },
  { name: "GIT", level: 89 }
];

export default function AnimatedSkills() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(idx => (idx+1)%skills.length), 2200);
    return () => clearInterval(t);
  }, []);
  const currentSkill = skills[i];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-[160px] h-[160px] mb-4 animate-fade-in scale-100 transition-transform duration-700">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/10 via-pink-200/10 to-yellow-200/10 animate-pulse" />
        <div className="flex items-center justify-center h-full text-5xl">{skillIcons[currentSkill.name]}</div>
      </div>
      <div className="font-mono text-xl text-yellow-200 mb-1">{currentSkill.name}</div>
      <div className="w-64 h-3 bg-black/50 rounded-lg mb-2 relative overflow-hidden">
        <div
          className="h-full rounded-lg bg-gradient-to-r from-yellow-400 via-fuchsia-400 to-cyan-400 animate-pulse"
          style={{ width: `${currentSkill.level}%`, transition: "width 1s" }}
        ></div>
      </div>
      <div className="font-mono text-cyan-300 text-sm">{currentSkill.level}% proficiency</div>
    </div>
  );
}
