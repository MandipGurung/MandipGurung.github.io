'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HeroImg } from '@/assets';
import { FaArrowDown } from 'react-icons/fa'; // Importing the arrow icon

const HeroSection = () => {
  const textLines = [
    '> Hello, I am Mandip Gurung👋',
    '> I love building things',
    '> Do drop your contact for any digital needs. ',
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showScrollPrompt, setShowScrollPrompt] = useState(true);

  useEffect(() => {
    // Typing effect
    if (lineIndex < textLines.length) {
      if (charIndex < textLines[lineIndex].length) {
        setTimeout(() => {
          setDisplayedText((prev) => prev + textLines[lineIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 50);
      } else {
        setTimeout(() => {
          setDisplayedText((prev) => prev + '\n');
          setLineIndex(lineIndex + 1);
          setCharIndex(0);
        }, 500);
      }
    }
  }, [charIndex, lineIndex]);

  useEffect(() => {
    // Cursor blinking effect
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  useEffect(() => {
    // Detect scroll to hide the prompt
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScrollPrompt(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-green-400 font-mono px-4">
      <Image
        src={HeroImg}
        alt="Bear"
        width={300}
        height={300}
        className="mb-4"
      />
      <div className="w-full max-w-lg bg-gray-900 p-6 rounded-md shadow-lg border border-gray-700">
        <pre className="text-sm leading-relaxed whitespace-pre-wrap">
          {displayedText}
          {showCursor && '|'}
        </pre>
      </div>

      {/* Scroll Prompt */}
      {showScrollPrompt && (
        <div className="absolute bottom-8 animate-bounce z-50">
          <button
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            }}
            className="relative bg-green-400 text-black p-4 rounded-full shadow-md hover:bg-green-500 transition glow-button"
          >
            <FaArrowDown size={12} /> {/* Down arrow icon */}
          </button>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
