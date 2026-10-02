import React, { useState } from 'react';
import { motion } from 'motion/react';

interface LiquidTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p' | 'div';
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const LiquidText: React.FC<LiquidTextProps> = ({
  text,
  className = '',
  as: Component = 'h1',
  delay = 0,
  highlightWords = [],
  highlightClassName = 'text-[#c5a059]'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const words = text.split(' ');

  return (
    <Component
      className={`inline-block select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex flex-wrap gap-x-[0.28em] gap-y-1">
        {words.map((word, wordIndex) => {
          const isHighlighted = highlightWords.some(
            (hw) => hw.toLowerCase() === word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
          );

          return (
            <span key={wordIndex} className="inline-flex overflow-hidden">
              {word.split('').map((char, charIndex) => {
                const globalIndex = wordIndex * 8 + charIndex;
                return (
                  <motion.span
                    key={charIndex}
                    initial={{ y: '100%', opacity: 0, filter: 'blur(8px)' }}
                    animate={{
                      y: '0%',
                      opacity: 1,
                      filter: 'blur(0px)',
                      ...(isHovered
                        ? {
                            y: [0, -4, 0],
                            transition: {
                              duration: 0.45,
                              delay: charIndex * 0.025,
                              ease: [0.16, 1, 0.3, 1],
                            },
                          }
                        : {}),
                    }}
                    transition={{
                      duration: 0.65,
                      delay: delay + globalIndex * 0.022,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`inline-block transition-colors duration-300 ${
                      isHighlighted ? highlightClassName : ''
                    }`}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          );
        })}
      </span>
    </Component>
  );
};
