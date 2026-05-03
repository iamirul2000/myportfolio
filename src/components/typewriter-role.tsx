"use client";

import { useState, useEffect } from "react";

const roles = [
  "Full Stack Developer",
  "Web Developer",
  "Software Engineer",
  "Back-End Developer",
  "Laravel Developer",
  "PHP Developer",
  "Mobile Developer",
  "API Developer"
];

export function TypewriterRole() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.substring(0, currentText.length + 1));
          setTypingSpeed(100);
        } else {
          // Finished typing, wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentRole.substring(0, currentText.length - 1));
          setTypingSpeed(50);
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <span className="inline-flex items-baseline">
      {currentText}
      <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-current" />
    </span>
  );
}
