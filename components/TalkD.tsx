import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

const ClabMVP: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="max-w-7xl mx-auto bg-white text-black p-10 rounded-lg shadow-lg">
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
          contentLabel="Image Modal"
          ariaHideApp={false}
        >
          {selectedImage && (
            <div
              className="relative bg-black rounded-lg p-4"
              onClick={closeModal}
            >
              <Image
                src={selectedImage}
                alt="Modal Content"
                layout="intrinsic"
                width={1200}
                height={950}
                className="max-w-full max-h-screen rounded-lg"
              />
            </div>
          )}
        </Modal>
      )}
      <h2 className="text-4xl font-bold text-center mb-3">Talk-D 0.7 버전</h2>
      <h2 className="text-xl font-bold mb-20 text-center">(2024.07~2025.02)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <ul className="list-disc list-inside mb-4 leading-relaxed">
            <li className="flex flex-col items-start">
              <span className="font-bold mb-1">개요</span>
              <span className="block ml-4 mb-6">
                ∙ 사용자 콘텐츠 추가 및 리포트 생성 방식 개선으로 사용자·관리자
                시스템 전면 개편
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
              <span className="block ml-4 mb-6">
                ∙ Database Schema 확장 및 최적화 (Supabase)
                <br />∙ 사용자 관리 시스템 전담 (FastAPI, Next.js)
                <br />∙ 사용자 API 전담 (FastAPI)
                <br />∙ 서비스 자동화 연동 (Naver Clova STT, LLM)
                <br />∙ 배포 환경 유지 및 확장 (Docker, AWS, Github, Github
                Action)
              </span>
            </li>
            <li className="flex flex-col items-start">
              <span className="font-bold mb-4">작업상세</span>
              <span className="block ml-4 mb-3">
                <span className="block font-bold mb-1">
                  1. 데이터베이스 재설계
                </span>
                <span className="block ml-4">
                  ∙ 사용자 콘텐츠 추가를 반영하여 테이블 구조 재설계 및 최적화
                </span>
                <span className="block ml-4">
                  ∙ 관리자 계정의 인증 정책과 접근 제어 설정
                </span>
              </span>
              <span className="block ml-4 mb-3">
                <span className="block font-bold mb-1">
                  2. 사용자 관리 API 확장
                </span>
                <span className="block ml-4">
                  ∙<strong className="font-bold"> 콘텐츠 관리</strong>
                  <span className="block ml-6">- 사용자 제공 컨텐츠 관리</span>
                  <span className="block ml-6">
                    - 계층형 데이터의 정합성과 유실 방지를 고려한 설계
                  </span>
                </span>
                <span className="block ml-4">
                  ∙<strong className="font-bold"> 사용자 관리</strong>
                  <span className="block ml-6">
                    - 레포트를 제공하기 위한 사용자 데이터 통합 관리
                  </span>
                  <span className="block ml-6">
                    - 사용자 증가에 대비한 대규모 데이터 처리 중심의 설계
                  </span>
                </span>
                <span className="block ml-4">
                  ∙<strong className="font-bold"> 리포트 관리</strong>
                  <span className="block ml-6">
                    - 통계된 사용자 데이터 검수 및 관리
                  </span>
                </span>
                <span className="block ml-8"></span>
              </span>
              <span className="block ml-4 mb-3">
                <span className="block font-bold mb-1">
                  2. 사용자 서비스 API 확장
                </span>
                <span className="block ml-4">
                  ∙<strong className="font-bold"> 사용자 콘텐츠 관리</strong>
                  <span className="block ml-6">
                    - 사용자 컨텐츠 조회 및 신청 가능 컨텐츠 목록 제공
                  </span>
                  <span className="block ml-6">
                    - 정책에 따른 데이터 검증 및 페이지 연동 로직 구현
                  </span>
                </span>
              </span>
              <span className="block ml-4 mb-3">
                <span className="block font-bold mb-1">
                  4. 관리자 워크스페이스 확장
                </span>
                <span className="block ml-4">
                  ∙ 데이터 후처리 및 레포트 작업을 통합 관리하는 관리자
                  워크스페이스 구축
                </span>
                <span className="block ml-4">
                  ∙ MVP 피드백 반영을 통한 UI/UX 개선
                </span>
              </span>
              <span className="block ml-4 mb-5">
                <span className="block font-bold mb-1">
                  5. 데이터 분석 자동화 연동
                </span>
                <span className="block ml-4">
                  ∙ LLM 기반 음성 데이터 분석 시스템 구축 및 프롬프트 개선 도구
                  개발
                </span>
                <span className="block ml-4">
                  ∙ ML 서버와의 데이터 연동 및 분석 로직 구현
                </span>
              </span>
            </li>
            <li className="flex flex-col items-start mb-6">
              <span className="font-bold w-20 mb-2">헙업 과정</span>
              <span className="block ml-4">
                ∙<strong className="font-bold"> 주간 미팅:</strong> 프로젝트
                전체 진행 상황 공유
              </span>
              <span className="block ml-4">
                ∙<strong className="font-bold"> 데일리 스크럼:</strong> 오늘 할
                일을 명료화하고, 협업을 위해 도움에 필요한 것 공유
              </span>
              <span className="block ml-4">
                ∙<strong className="font-bold"> 스프린트 개발:</strong> 1주
                단위로 업무를 관리하며 진행 상황 공유
              </span>
            </li>
          </ul>
          <div>
            <a
              href="https://talk-d-fe.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold underline block"
            >
              서비스 페이지
            </a>
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
            src="/clab-plans-page.png"
            alt="아키텍쳐"
            width={380}
            height={200}
            className="rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick("/clab-plans-page.png")}
          />
          <Image
            src="/clab-manage-page.png"
            alt="STT수정 페이지"
            width={380}
            height={200}
            className="rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick("/clab-manage-page.png")}
          />
          <Image
            src="/clab-reports-stt.png"
            alt="report 데이터 추출 페이지"
            width={380}
            height={200}
            className="rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick("/clab-reports-stt.png")}
          />
          <Image
            src="/clab-report1.png"
            alt="워드클라우드"
            width={380}
            height={200}
            className="rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick("/clab-report1.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default ClabMVP;
