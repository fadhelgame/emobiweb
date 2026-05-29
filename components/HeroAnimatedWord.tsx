"use client";

import { useEffect, useState } from "react";

const words = ["Terpercaya", "Inovatif", "Andal", "Terjangkau"];

export default function HeroAnimatedWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 300);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      style={{
        transition: "opacity 0.3s ease, transform 0.3s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        display: "inline-block",
      }}
    >
      {words[index]}
    </span>
  );
}
