"use client";

import { useEffect, useState } from 'react';

export function ChristmasSnow() {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; animationDuration: number; size: number; color: string }>>([]);

  useEffect(() => {
    const createSnowflake = () => {
      const id = Date.now();
      const left = Math.random() * 100;
      const animationDuration = 5 + Math.random() * 10;
      const size = 12 + Math.random() * 12;
      const colors = [
        'rgba(255, 255, 255, 0.6)',
        'rgba(214, 237, 255, 0.5)',
        'rgba(173, 216, 255, 0.4)'
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      setSnowflakes(prev => [...prev, { id, left, animationDuration, size, color }]);

      setTimeout(() => {
        setSnowflakes(prev => prev.filter(flake => flake.id !== id));
      }, animationDuration * 1000);
    };

    const interval = setInterval(createSnowflake, 300); // Reduced frequency
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {snowflakes.map(({ id, left, animationDuration, size, color }) => (
        <div
          key={id}
          className="absolute top-0"
          style={{
            left: `${left}%`,
            animation: `fall ${animationDuration}s linear`,
            fontSize: `${size}px`,
            color: color,
            filter: 'drop-shadow(0 0 8px rgba(147, 197, 253, 0.4))',
            textShadow: '0 0 10px rgba(147, 197, 253, 0.3), 0 0 20px rgba(147, 197, 253, 0.2)',
          }}
        >
          ❄
        </div>
      ))}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-5vh) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
            transform: translateY(0) rotate(45deg) scale(1);
          }
          90% {
            opacity: 0.7;
            transform: translateY(90vh) rotate(315deg) scale(1);
          }
          100% {
            transform: translateY(105vh) rotate(360deg) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}