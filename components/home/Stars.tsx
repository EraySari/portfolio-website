"use client";

import { useEffect, useState } from "react";

export default function Stars() {
  const [stars, setStars] = useState<
    Array<{
      x: number;
      y: number;
      size: number;
      delay: number;
      opacity: number;
      duration: number;
    }>
  >([]);

  useEffect(() => {
    // Generate random stars
    const starCount = 150;
    const newStars = Array.from({ length: starCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5, // 0.5px to 2.5px
      delay: Math.random() * 3, // Random animation delay
      opacity: Math.random() * 0.6 + 0.3, // 0.3 to 0.9
      duration: 2 + Math.random() * 3, // 2s to 5s
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
