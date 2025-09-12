"use client";

import React, { useState, useEffect } from "react";

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
}

const TextType: React.FC<TextTypeProps> = ({
  text,
  typingSpeed = 100,
  pauseDuration = 2000,
  showCursor = true,
  cursorCharacter = "|",
  className = "",
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursorBlink, setShowCursorBlink] = useState(true);

  useEffect(() => {
    const currentText = text[currentTextIndex];

    if (isTyping) {
      if (displayedText.length < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        // Finished typing current text
        setIsTyping(false);
        const pauseTimer = setTimeout(() => {
          setDisplayedText("");
          setCurrentTextIndex((prev) => (prev + 1) % text.length);
          setIsTyping(true);
        }, pauseDuration);
        return () => clearTimeout(pauseTimer);
      }
    }
  }, [
    displayedText,
    currentTextIndex,
    isTyping,
    text,
    typingSpeed,
    pauseDuration,
  ]);

  useEffect(() => {
    if (showCursor) {
      const cursorTimer = setInterval(() => {
        setShowCursorBlink((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorTimer);
    }
  }, [showCursor]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span
          className={`${
            showCursorBlink ? "opacity-100" : "opacity-0"
          } transition-opacity duration-100`}
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;
