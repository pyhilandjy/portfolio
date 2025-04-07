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
                ∙ 아이의 건강한 성장발달을 돕기 위해{" "}
                <strong className="font-bold">
                  아이와 부모의 대화내용을 분석하여 부모에게 대화의{" "}
                </strong>
                <strong className="font-bold">방향성을 제시하는 서비스</strong>
              </span>
              <span className="block mb-3 ml-8 mt-1"></span>
            </li>
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
              <span className="font-bold mb-4">작업 상세</span>

              <span className="block ml-2 mb-4">
                <span className="block font-bold mb-1">
                  1. 데이터베이스 설계 및 구현
                </span>
                <span className="block ml-4">
                  ∙ 정규화 원칙에 따라 테이블을 설계하여 데이터 일관성과
                  재사용성 확보
                </span>
                <span className="block ml-4">
                  ∙ 초기 변경이 잦은 구조를 고려해 외래 키 대신 인덱스 기반 참조
                  적용
                </span>
              </span>

              <span className="block ml-2 mb-4">
                <span className="block font-bold mb-1">
                  2. API 및 프론트엔드 기능 개발
                </span>
                <span className="block ml-4">
                  ∙ 사용자 대기 시간을 줄이기 위한 비동기 API 및 백그라운드
                  스케줄러 구현
                </span>
                <span className="block ml-4">
                  ∙ Clova STT 연동 및 후처리용 워크스페이스 개발
                </span>
                <span className="block ml-4">
                  ∙ 대화 순서 정합성을 보장하는 수정 기능 및 트랜잭션 처리 로직
                  구현
                </span>
                <span className="block ml-4">
                  ∙ 관리자 전용 통계 API 설계 및 엑셀 내보내기 기능 구현
                </span>
                <span className="block ml-4">
                  ∙ 분석 결과를 기반으로 피그마에서 리포트 제작
                </span>
              </span>

              <span className="block ml-2 mb-4">
                <span className="block font-bold mb-1">
                  3. 배포 인프라 구성 및 자동화
                </span>
                <span className="block ml-4">
                  ∙ AWS EC2 인스턴스, S3 버킷 생성 및 리소스 구조 구성
                </span>
                <span className="block ml-4">
                  ∙ Docker 기반 컨테이너 환경 구성 및 Nginx 리버스 프록시 설정
                </span>
                <span className="block ml-4">
                  ∙ GitHub Actions 기반 CI/CD 파이프라인 구현
                </span>
                <span className="block ml-4">
                  ∙ 프론트엔드 정적 사이트 Vercel 배포
                </span>
              </span>
            </li>

            <li className="flex flex-col items-start mb-6">
              <span className="font-bold w-20 mb-2">협업 과정</span>
              <span className="block ml-4">
                ∙ <strong className="font-bold">주간 미팅:</strong> 프로젝트
                전반 진행 상황 공유
              </span>
              <span className="block ml-4">
                ∙ <strong className="font-bold">스프린트 개발:</strong> 1주 단위
                목표 기반 작업 관리
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
            className="rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick("/clab-mvp.png")}
          />
          <Image
            src="/clab-admin-page.png"
            alt="STT수정 페이지"
            width={380}
            height={200}
            className="rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick("/clab-admin-page.png")}
          />
          <Image
            src="/clab-admin-report.png"
            alt="report 데이터 추출 페이지"
            width={380}
            height={200}
            className="rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick("/clab-admin-report.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default ClabMVP;
