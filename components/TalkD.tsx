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
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeModal} // 클릭 시 모달 닫기
          />
          {selectedImage && (
            <div
              className="relative bg-black rounded-lg p-4 z-10 overflow-auto max-h-screen cursor-pointer"
              onClick={closeModal} // 클릭 시 모달 닫기
            >
              <Image
                src={selectedImage}
                alt="Modal Content"
                layout="responsive"
                width={1200}
                height={950}
                className="max-w-full rounded-lg object-contain transition-transform duration-300 scale-100"
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
                <br />∙ 서비스 관리 시스템 전담 (FastAPI, Next.js)
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
                  2. 서비스 운영 관리 기능 확장
                </span>
                <span className="block ml-4">
                  ∙<strong className="font-bold"> 콘텐츠 데이터 관리</strong>
                  <span className="block ml-6">
                    - 사용자 제공 콘텐츠의 상태 관리 및 CRUD
                  </span>
                  <span className="block ml-6">
                    - 상위-하위 데이터 간의 연관성을 고려한 데이터 무결성 보장
                    설계
                  </span>
                </span>
                <span className="block ml-4">
                  ∙<strong className="font-bold"> 사용자 데이터 관리</strong>
                  <span className="block ml-6">
                    - 레포트 제공을 위한 사용자 데이터 통합 관리 및 상태 기반
                    처리
                  </span>
                  <span className="block ml-6">
                    - 동적 필터링과 페이지네이션을 통해 데이터 접근성 향상
                  </span>
                </span>
                <span className="block ml-4">
                  ∙<strong className="font-bold"> 리포트 데이터 관리</strong>
                  <span className="block ml-6">
                    - 가공된 사용자 데이터 기반 통계 생성, 시각화, 수정 기능
                    제공
                  </span>
                  <span className="block ml-6">
                    - 관리자 UI와 연동되는 데이터 흐름 설계 및 API 구현
                  </span>
                </span>
                <span className="block ml-8"></span>
              </span>
              <span className="block ml-4 mb-3">
                <span className="block font-bold mb-1">
                  3. 사용자 서비스 API 확장
                </span>
                <span className="block ml-4">
                  ∙
                  <strong className="font-bold">
                    {" "}
                    콘텐츠 흐름 제어 로직 설계
                  </strong>
                  <span className="block ml-6">
                    - 콘텐츠 유형과 상태 조건에 따라 리포트 생성 및 다음 콘텐츠
                    접근 제어
                  </span>
                  <span className="block ml-6">
                    - 예외 처리 및 상태 관리 로직을 통한 흐름의 일관성 확보
                  </span>
                </span>
              </span>
              <span className="block ml-4 mb-3">
                <span className="block font-bold mb-1">
                  4. 관리자 워크스페이스 개선
                </span>
                <span className="block ml-4">
                  ∙ MVP 피드백 기반 구조 개선 및 사용성 중심 UI/UX 리디자인
                </span>
                <span className="block ml-4">
                  ∙ 데이터 후처리/레포트 작업 통합 관리
                </span>
                <span className="block ml-4">
                  ∙ 작업 흐름 단순화 및 핵심 기능 집중으로 생산성 향상
                </span>
              </span>
              <span className="block ml-4 mb-5">
                <span className="block font-bold mb-1">
                  5. 데이터 분석 자동화 연동
                </span>
                <span className="block ml-4">
                  ∙ LLM 기반 사용자 데이터 분석 파이프라인 구축
                </span>
                <span className="block ml-4">
                  ∙ 프롬프트 관리 도구 개발 및 분석 정확도 개선
                </span>
              </span>
            </li>
            <li className="flex flex-col items-start mb-6">
              <span className="font-bold w-20 mb-2">헙업 과정</span>
              <span className="block ml-4">
                ∙<strong className="font-bold"> 주간 미팅:</strong> 프로젝트
                전반 공유 및 기능 조율
              </span>
              <span className="block ml-4">
                ∙<strong className="font-bold"> 데일리 스크럼:</strong> 작업
                목표 명확화 및 협업 요청 공유
              </span>
              <span className="block ml-4">
                ∙<strong className="font-bold"> 스프린트 개발:</strong> 단기
                목표 기반 개발 사이클 운영
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
        <div className="space-y-10 flex flex-col justify-center items-center">
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
            className="rounded-lg shadow-md cursor-pointer object-cover h-48"
            onClick={() => handleImageClick("/clab-report1.png")}
          />
          <Image
            src="/report.jpg"
            alt="리포트"
            width={380}
            height={200}
            className="rounded-lg shadow-md cursor-pointer object-cover h-48"
            onClick={() => handleImageClick("/report.jpg")}
          />
        </div>
      </div>
    </div>
  );
};

export default ClabMVP;
