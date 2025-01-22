import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const createDots = () => {
      const newDots = [];
      const dotCount = Math.floor((window.innerWidth * window.innerHeight) / 15000); 

      for (let i = 0; i < dotCount; i++) {
        newDots.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1, 
        });
      }
      setDots(newDots);
    };

    createDots();
    window.addEventListener('resize', createDots);

    return () => window.removeEventListener('resize', createDots);
  }, []);

  return (
    <div className="fixed -z-50 inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gray-300"
          style={{
            width: dot.size,
            height: dot.size,
            x: dot.x,
            y: dot.y,
          }}
          animate={{
            x: [dot.x - 20, dot.x + 20, dot.x - 20],
            y: [dot.y - 20, dot.y + 20, dot.y - 20],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;

