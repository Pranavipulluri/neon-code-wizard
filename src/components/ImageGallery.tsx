
import React from "react";

// Place your image file names in this array (adjust the paths as needed)
// If files are in /public/uploads/ or similar, change accordingly. For now using Unsplash placeholders:
const images = [
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "/uploaded/1.jpg",
  "/uploaded/2.jpg",
  "/uploaded/3.jpg"
];

export default function ImageGallery() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setIndex(i => (i+1)%images.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative w-full max-w-xl mx-auto rounded-xl overflow-hidden neon-border shadow-inner animate-fade-in">
      <img
        src={images[index]}
        alt={`Gallery ${index+1}`}
        className="w-full h-[320px] object-cover transition duration-700 ease-in-out rounded-xl shadow-lg ring-2 ring-cyan-400"
        style={{animation:'fade-in 0.4s'}}
      />
      <div className="absolute flex gap-2 left-1/2 -translate-x-1/2 bottom-4">
        {images.map((_,i) =>
          <button
            key={i}
            className={`w-3 h-3 rounded-full border border-white/40 transition-all duration-300 ${
              i === index ? "bg-cyan-400 shadow" : "bg-black/70"
            }`}
            aria-label={`View image ${i+1}`}
            onClick={()=>setIndex(i)}
          />
        )}
      </div>
    </div>
  );
}
