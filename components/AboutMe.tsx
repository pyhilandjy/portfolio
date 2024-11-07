import React from "react";
import Image from "next/image";
import profilePic from "../public/profile.jpg";

const AboutMe: React.FC = () => {
  return (
    <section className="text-center py-10">
      <h2 className="text-3xl font-semibold mb-4">About Me</h2>
      <Image
        src={profilePic}
        alt="Profile Picture"
        width={150}
        height={150}
        className="rounded-full mx-auto"
      />
      <p className="mt-4 text-lg">
        안녕하세요! 저는 프론트엔드 개발자입니다. 최신 웹 기술과 성능 최적화에
        관심이 많습니다.
      </p>
    </section>
  );
};

export default AboutMe;
