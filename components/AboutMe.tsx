// components/AboutMe.tsx
import React from "react";
import Image from "next/image";
import Skills from "./Skills";

const AboutMe: React.FC = () => {
  return (
    <section className="py-20 px-10 bg-gradient-to-b from-gray-900 to-gray-500 text-white">
      <h1 className="text-5xl font-bold text-center mb-16">∙About Me∙</h1>
      <div className="max-w-7xl mx-auto bg-white text-black p-10 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-20 text-center">∙ Intro ∙</h1>
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div className="flex-shrink-0 ml-10 mb-6 md:mb-22 w-full md:w-1/3 text-center md:text-left">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={180}
              height={170}
              className="rounded-full mx-auto md:mx-10"
            />
            <h2 className="text-3xl font-semibold mt-10 mb-5">최준용 (Jun)</h2>
            <p className="mb-3 flex items-center justify-center md:justify-start">
              <Image
                src="/email-icon.svg"
                alt="Email Icon"
                width={20}
                height={20}
                className="mr-2"
              />{" "}
              Email: hilandjy@gmail.com
            </p>
            <p className="mb-3 flex items-center justify-center md:justify-start">
              <Image
                src="/phone-icon.svg"
                alt="Phone Icon"
                width={20}
                height={20}
                className="mr-2"
              />{" "}
              Phone: 010-2456-3254
            </p>
            <p className="mb-3 flex items-center justify-center md:justify-start">
              <Image
                src="/github-mark.svg"
                alt="GitHub Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <a
                href="https://github.com/pyhilandjy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Github: https://github.com/pyhilandjy
              </a>
            </p>
          </div>
          <div className="w-full md:w-2/3">
            <p className="text-2xl mb-10 mr-20 text-center">
              {'"'}
              <strong className="font-bold">도전</strong>과{" "}
              <strong className="font-bold">경험</strong>속에서 끊임없이 배우며
              성장하는 개발자 최준용입니다.{'"'}
            </p>
            <p className="text-lg mr-20 text-left">
              ∙ 서비스 아이디어 회의부터{" "}
              <strong className="font-bold">
                BackEnd, FrontEnd, Database 설계 및 구축
              </strong>
            </p>
            <p className="text-lg mb-4 ml-4 mr-20 text-left">
              <strong className="font-bold">빌드/배포</strong>한 경험이
              있습니다.
            </p>
            <p className="text-lg mb-0 mr-20 text-left leading-loose">
              ∙ 이해관계자와의{" "}
              <strong className="font-bold">커뮤니케이션</strong>
              에서는 복잡한 내용을 일상적인 예시로 풀어 설명하며,{" "}
            </p>
            <p className="text-lg mb-4 ml-4 mr-20 text-left leading-loose">
              <strong className="font-bold">커뮤니케이션 능력</strong>을 꾸준히
              개발하고 있습니다.
            </p>
            <p className="text-lg mb-0 mr-20 text-left leading-loose">
              ∙ <strong className="font-bold">새로운 기술에</strong> 거부감이
              없이 배우고 <strong className="font-bold">성장</strong>하는 과정을
              즐며, 이를 통해 프로젝트에서
            </p>
            <p className="text-lg mb-4 ml-4 mr-20 text-left leading-loose">
              <strong className="font-bold">더 나은 결과</strong>를 만드는
              방법을 고민합니다.
            </p>
            <p className="text-lg mb-0 mr-20 text-left">
              ∙ <strong className="font-bold">책임감</strong>을 갖고 맡은 일을
              <strong className="font-bold"> 최선을 다해 마무리</strong>하며
              주변사람들에게 <strong className="font-bold">신뢰</strong>를
              얻으려 노력합니다.
            </p>
          </div>
        </div>
        <hr className="border-t-2 border-gray-300 my-10" />

        <div className="mt-20 ml-10 mr-10 mb-20">
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
