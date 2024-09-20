"use client";
import Landing from "./Components/header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const cursor = document.getElementById('cursor');

    const handleMouseMove = (e) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    const bgColors = ['bg-prim', 'bg-green1', 'bg-green2', 'bg-lp', 'bg-nbl', 'bg-black', 'bg-lb'];
    const textColors = ['text-prim', 'text-green1', 'text-green2', 'text-lp', 'text-nbl', 'text-black', 'text-lb'];

    // Groups of colors with similar contrast
    const similarContrastColors = ['prim', 'green1', 'lp', 'lb'];
    const similarContrastColors2 = ['green2', 'nbl', 'black'];

    // Randomly select a background color
    let randomBgColor = bgColors[Math.floor(Math.random() * bgColors.length)];

    // Randomly select a text color
    let randomTextColor = textColors[Math.floor(Math.random() * textColors.length)];

    // Get the base color name without the prefix (e.g., 'prim', 'green1')
    const bgColorBase = randomBgColor.split('-')[1];
    const textColorBase = randomTextColor.split('-')[1];

    // Ensure the text color doesn't match the background color or have the same contrast
    if (
      randomBgColor === `bg-${textColorBase}` ||
      (similarContrastColors.includes(bgColorBase) && similarContrastColors.includes(textColorBase)) ||
      (similarContrastColors2.includes(bgColorBase) && similarContrastColors2.includes(textColorBase))
    ) {
      // If they match or have the same contrast, select a new text color that doesn't have the same contrast
      do {
        randomTextColor = textColors[Math.floor(Math.random() * textColors.length)];
      } while (
        randomBgColor === `bg-${randomTextColor.split('-')[1]}` ||
        (similarContrastColors.includes(bgColorBase) && similarContrastColors.includes(randomTextColor.split('-')[1])) ||
        (similarContrastColors2.includes(bgColorBase) && similarContrastColors2.includes(randomTextColor.split('-')[1]))
      );
    }

    // Apply the random background and text colors to the body
    
    document.body.classList.add(randomBgColor, randomTextColor);
    return () => {
      document.body.classList.remove(randomBgColor, randomTextColor);
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="cursor" id="cursor"></div>
      <Landing />
      <Body />
      <Footer />
    </div>
  );
}
