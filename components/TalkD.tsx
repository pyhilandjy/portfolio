import React from "react";
import Image from "next/image";

const ClabMVP: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white text-black p-10 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-3">Talk-D 0.7 버전</h2>
      <h2 className="text-xl font-bold mb-20 text-center">(2024.07~현재)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <ul className="list-disc list-inside mb-4 leading-relaxed">
            <li className="flex flex-col items-start">
              <span className="font-bold mb-1">개요</span>
              <span className="block ml-4">
                ∙ MVP의 기본 구조를 기반으로 Plan, Mission, report를 도입하여
                사용자 맞춤형 서비스로 확장.
              </span>
              <span className="block ml-8">
                ∙ Plan: 사용자가 가입하여 가입하는 패키지 단위
                <br /> ∙ Mission: Plan 내에서 사용자가 수행하는 세부 과제
                <br /> ∙ Report: Plan의 정책에 따라 Mission 데이터를 분석해
                생성되는 결과물.
              </span>
              <span className="block ml-4 mb-6">
                ∙ 관리자의 후처리 작업을 줄이기 위해 ML과 LLM을 활용한 자동화 및
                효율성 개선.
              </span>
            </li>
            {/* <li className="flex flex-col items-start">
              <span className="font-bold w-20 mb-1">주요 기술</span>
              <span className="block ml-4 mb-6">
                ∙ <strong className="font-bold">백엔드</strong>: FastAPI, Nginx,
                Docker, AWS
                <br />∙ <strong className="font-bold">프론트엔드</strong>:
                Next.js
                <br />∙ <strong className="font-bold">DevOps</strong>: Docker,
                AWS, Github, Github Action
                <br />∙ <strong className="font-bold">사용 API</strong>:
                STT(Naver Clova), LLM(Request API)
              </span>
            </li> */}
            <li className="flex flex-col items-start">
              <span className="font-bold mb-1">주요 역할</span>
              <span className="block ml-6 mb-6">
                ∙ 데이터베이스 구조 확장 및 최적화 (Supabase)
                <br />∙ 관리자 인터페이스 기능 확장 (FastAPI, Next.js)
                <br />∙ 서비스 자동화 (Naver Clova STT, LLM)
                <br />∙ 배포 환경 유지 및 확장 (Docker, AWS, Github, Github
                Action)
              </span>
            </li>
            <li className="flex flex-col items-start">
              <span className="font-bold mb-4">작업상세</span>
              <span className="block ml-2 mb-3">
                <span className="block font-bold mb-1">
                  1. 데이터베이스 재설계
                </span>
                <span className="block ml-4">
                  ∙ 서비스 프로세스의 변경으로 인한 테이블 추가 및 기존테이블
                  수정
                </span>
                <span className="block ml-4">
                  ∙ Plan-Mission-Report 간의 1:N 관계를 설계하여 계층형 데이터의
                  유연한 연결과 확장성을 확보
                </span>
              </span>
              <span className="block ml-2 mb-3">
                <span className="block font-bold mb-1">
                  2. Plan-Mission-Report 데이터 관리 API, 인터페이스 구축
                </span>
                <span className="block ml-4">
                  ∙ 계층형 구조에서 데이터가 상호 연결되도록 설계된 CRUD관리
                  시스템 구축
                </span>
                <span className="block ml-4">
                  ∙ 참조 관계 변경 시 데이터 정합성을 유지하고, 부모-자식 관계를
                  효과적으로 관리할 수 있는 로직 구현.
                </span>
                <span className="block ml-8"></span>
              </span>
              <span className="block ml-2 mb-3">
                <span className="block font-bold mb-1">
                  3. 서비스 프로세스 관리 API, 인터페이스 구축
                </span>
                <span className="block ml-4">
                  ∙ 사용자별 데이터 후처리부터 레포트 관리까지 모든 프로세스의
                  작업을 통합적으로 관리하는 페이지 구현
                </span>
                <span className="block ml-4">
                  ∙ 관리자가 작업 우선도를 명확히 인지할 수 있도록 상태를 세분화
                </span>
              </span>
              <span className="block ml-2 mb-5">
                <span className="block font-bold mb-1">
                  4. STT 데이터 후처리 기능 확장 및 개선
                </span>
                <span className="block ml-4">
                  ∙ <strong className="font-bold">MVP 피드백 반영:</strong>{" "}
                  관리자가 STT 데이터 처리 과정에서의 불편사항을 요구사항에 맞게
                  API와 관리 인터페이스 개선
                </span>
                <span className="block ml-4">
                  ∙ DS팀의 ML 모델과 LLM 연동하여 화행 분류, 문장 분류, 주요
                  문장 및 인사이트 도출 기능 설계
                </span>
              </span>
            </li>
            <li className="flex flex-col items-start mb-6">
              <span className="font-bold w-20 mb-2">헙업 과정</span>
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
