import React from "react";
import Image from "next/image";

const ClabMVP: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white text-black p-10 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-3">
        Talk-D MVP(Connects-Lab)
      </h2>
      <h2 className="text-xl font-bold mb-20 text-center">(2024.03~2024.07)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <ul className="list-disc list-inside mb-4 leading-relaxed">
            <li className="flex flex-col items-start">
              <span className="font-bold mb-2">프로젝트 개요</span>
              <span className="block ml-4">
                ∙ 생애초기(0-4세) 뇌 신경망의 발달이 폭발적으로 일어나는 시기에
                가장 중요하게 작용하는{" "}
                <strong className="font-bold">{"부모의 말"}</strong>
              </span>
              <span className="block ml-8 mt-1">
                아이의 건강한 성장발달을 돕기 위해{" "}
                <strong className="font-bold">
                  아이와 부모의 대화내용을 분석 하여 부모에게 대화의
                </strong>
                <strong className="font-bold">방향성을 제시하는 서비스</strong>
              </span>
              <span className="block mb-3 ml-8 mt-1"></span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mb-3">주요 역할</span>
              <span className="block ml-6 mb-6">
                - Database Schema 설계 및 최적화 (Supabase)
                <br />- 관리자 사이트 API/FE 구축(FastAPI, Next.js)
                <br />- BE, FE 배포 파이프라인 구축 (Docker, AWS, Github, Github
                Action)
              </span>
            </li>
            <li className="flex flex-col items-start">
              <span className="font-bold mb-4">작업상세</span>
              <span className="block ml-2 mb-3">
                <span className="block font-bold mb-1">
                  1. 데이터베이스 설계 및 구현
                </span>
                <span className="block ml-4">
                  ∙ 정규화 원칙을 적용한 테이블 설계로 데이터 일관성 확보 및
                  중복 최소화 달성
                </span>
                <span className="block ml-4">
                  ∙ 설계 초기 빈번한 스키마 변경으로 외래키 제약조건 제거 후
                  인덱스 설정
                </span>
                <span className="block ml-8"></span>
              </span>
              <span className="block ml-2 mb-3">
                <span className="block font-bold mb-1">
                  2. 데이터 후처리 API/FE 구현
                </span>
                <span className="block ml-4">
                  ∙ Naver Clova STT API 연동 및 텍스트 데이터 후처리
                  워크스페이스 개발
                </span>
                <span className="block ml-4">
                  ∙ 대화 데이터의 순서 정합성을 보장하며 수정 작업을 처리하기
                  위한 API 설계
                </span>
                <span className="block ml-4">
                  ∙ 오류 복구 및 데이터 무결성 유지를 위한 트랜잭션 및 예외 처리
                  로직 구현
                </span>
                <span className="block ml-8"></span>
              </span>
              <span className="block ml-2 mb-5">
                <span className="block font-bold mb-1">
                  3. 데이터 분석 API/FE 구현
                </span>
                <span className="block ml-4">
                  ∙ Naver clova의 STT(Speech to Text) API를 통해 변환된 텍스트
                  데이터의 오탈자와 발화자 정보를 수정할 수 있는
                </span>
                <span className="block ml-8 mb-2">
                  인터페이스를 구축하였습니다.
                </span>
                <span className="block ml-4">
                  ∙ 데이터 분석을 위해 정제된 텍스트와 메타데이터를{" "}
                  <strong className="font-bold">ML서버와 연동</strong>하여 자동
                  문장 분류를 구현하였으며, 분류 결과를
                </span>
                <span className="block ml-8 mb-2">
                  수정할 수 있는 인터페이스를 구축하였습니다.
                </span>
                <span className="block ml-4">
                  ∙ 오디오 데이터를 통해 인사이트를 도출하기 위해{" "}
                  <strong className="font-bold">LLM 기반 분석 시스템</strong>을
                  구축하였고, 분석 품질을 지속적으로
                </span>
                <span className="block ml-8 mb-2">
                  개선하기 위해{" "}
                  <strong className="font-bold">프롬프트를 수정</strong>할 수
                  있는 인터페이스를 구축하였습니다.
                </span>
              </span>
            </li>
            <li className="flex flex-col items-start mb-6">
              <span className="font-bold w-20 mb-2">회고</span>
              <span className="block ml-4">
                사용자가 원하는 기능을 제공하기 위해 예외 상황과 다양한 변수를
                고려하며 설계를 진행하다 보니, 기초 지식과 사용자 경험 측면에서
                가장 크게 성장한 프로젝트였습니다. 이전 프로젝트에서는 기능
                구현에만 집중하여 사용자 관점을 충분히 고려하지 못했지만, 이번
                프로젝트에서는 사용자 입장에서 생각하며 진행했습니다. 예외
                상황과 변수를 생각하며 처음으로 백앤드와 프론트앤드를 구축했고,
                이러한 도전들을 통해 개발 전반에 대한 이해도가 높아졌고, 더
                효율적인 문제 해결 능력을 갖추게 된 계기가 되었습니다. 특히 실제
                서비스의 데이터베이스를 구축부터 서버 배포까지 전체적인
                프로세스를 경험하며, 개발자로서의 즐거움을 느낄 수 있었던
                프로젝트였습니다.
              </span>
            </li>
          </ul>
          <div>
            <a
              href="https://github.com/pyhilandjy/clab-api"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold underline block"
            >
              Admin BE repo
            </a>
            <a
              href="https://github.com/pyhilandjy/clab-api-user"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold underline block"
            >
              User BE repo
            </a>
            <a
              href="https://www.github.com/pyhilandjy/clab-admin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold underline block"
            >
              Admin FE repo
            </a>
          </div>
        </div>
        <div className="space-y-10 flex flex-col justify-center items-center md:h-screen">
          <Image
            src="/clab-mvp.png"
            alt="아키텍쳐"
            width={380}
            height={200}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/clab-admin-page.png"
            alt="STT수정 페이지"
            width={380}
            height={200}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/clab-admin-report.png"
            alt="report 데이터 추출 페이지"
            width={380}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ClabMVP;
