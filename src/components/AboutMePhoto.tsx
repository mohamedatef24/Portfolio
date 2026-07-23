"use client";

import React from "react";
import Image from "next/image";

const AboutMePhoto = () => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div className="flex-1 min-w-[220px] flex flex-col items-center">
      <Image
        src="/my_photo.jpg"
        alt="Mohamed Atef"
        width={320}
        height={320}
        className="rounded-3xl object-cover transition-all duration-400"
        style={{
          boxShadow: "var(--shadow-glow-hover)",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </div>
  );
};

export default AboutMePhoto;
