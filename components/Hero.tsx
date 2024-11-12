// components/Hero.tsx
import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      {/* GIF 배경 이미지 */}
      <Image
        src="/hero-backround.gif"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* 텍스트 오버레이 */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold">Backend Developer</h1>
        <p className="text-2xl mt-4">최준용</p>
      </div>

      {/* 배경 어두운 오버레이 추가 */}
      <div className="absolute inset-0 bg-black opacity-50 z-5"></div>
    </div>
  );
};

export default Hero;
