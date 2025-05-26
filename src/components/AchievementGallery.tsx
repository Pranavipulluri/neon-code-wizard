
import React from "react";
// Add your achievement photo paths here. Example names:
const achievementImages = [
  "/uploaded/achieve1.jpg",
  "/uploaded/achieve2.jpg",
  "/uploaded/achieve3.jpg",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
];

const achievementCaptions = [
  "Winner - AndroidX Workshop",
  "Hackathon Finalist",
  "Inter-college Milan Art Competition",
  "Speaker - TED Talks"
];

export default function AchievementGallery() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setIndex((i)=> (i+1)%achievementImages.length), 3100);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="mb-8">
      <div className="relative max-w-[360px] mx-auto rounded-xl overflow-hidden neon-border shadow-inner animate-fade-in">
        <img
          src={achievementImages[index]}
          alt={achievementCaptions[index]}
          className="w-full h-[220px] object-cover transition duration-700 ease-in-out rounded-xl shadow-lg ring-1 ring-fuchsia-400"
        />
        <div className="absolute bottom-2 left-0 w-full text-center bg-black/40 text-fuchsia-200 py-1 px-2 rounded-b-xl font-mono text-sm">{achievementCaptions[index]}</div>
        <div className="absolute flex gap-2 left-1/2 -translate-x-1/2 bottom-6">
        {achievementImages.map((_,i) =>
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full border border-fuchsia-200/30 transition-all duration-300 ${
              i === index ? "bg-fuchsia-400" : "bg-black/70"
            }`}
            aria-label={`View achievement ${i+1}`}
            onClick={()=>setIndex(i)}
          />
        )}
      </div>
      </div>
    </div>
  );
}
