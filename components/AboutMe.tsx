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
              <strong className="font-bold underline underline-offset-8">
                사용자에게 도움이 되는 서비스를 만드는 개발자, 최준용입니다.
              </strong>
              {'"'}
            </p>

            <p className="text-lg mb-3 mr-20 text-left leading-loose flex gap-2">
              <span>∙</span>
              <span>
                서비스 아이디어 회의부터{" "}
                <strong className="font-bold">
                  BackEnd, FrontEnd, Database 설계 및 구축, 빌드/배포
                </strong>
                까지 전 과정을 직접 담당하며 개발한 경험이 있습니다.
              </span>
            </p>
            <p className="text-lg mb-3 mr-20 text-left leading-loose flex gap-2">
              <span>∙</span>
              <span>
                협업과정에서는 목표를 명확히 공유하고,{" "}
                <strong className="font-bold">소통</strong>을 통해 문제를 함께
                해결해 나가는 과정을 중요하게 생각합니다.
              </span>
            </p>
            <p className="text-lg mb-3 mr-20 text-left leading-loose flex gap-2">
              <span>∙</span>
              <span>
                상황을 빠르게 파악하고, 실제 사용자의 입장에서 필요한 조치를{" "}
                <strong className="font-bold">주도적으로 제안</strong>합니다.
              </span>
            </p>
            <p className="text-lg mb-3 mr-20 text-left leading-loose flex gap-2">
              <span>∙</span>
              <span>
                익숙한 기술을 더 깊이 있게 다지고, 새로운 기술은 거부감 없이
                배우며 <strong className="font-bold">성장</strong>하는 것을
                즐깁니다.
              </span>
            </p>
            <p className="text-lg mb-3 mr-20 text-left leading-loose flex gap-2">
              <span>∙</span>
              <span>
                맡은 일에 <strong className="font-bold">책임감</strong>을 갖고
                끝까지 완수하며,{" "}
                <strong className="font-bold">신뢰받는 개발자</strong>로 성장해
                나가고자 합니다.
              </span>
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
