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
                  2. 데이터 전후처리 API/FE 구현
                </span>
                <span className="block ml-4">
                  ∙ 사용자 대기 시간을 최소화하기 위한 API 설계 및 백그라운드
                  스케줄러 로직 구현
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
                  ∙ 관리자용 데이터 분석 API를 통해 대화 내용의 통계데이터 생성
                </span>
                <span className="block ml-4">
                  ∙ 생성된 통계데이터 엑셀 파일로 내보내기
                </span>
                <span className="block ml-4 mb-2">
                  ∙ 제공된 엑셀 데이터를 기반으로 피그마에서 리포트 제작
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
                ∙<strong className="font-bold"> 스프린트 개발:</strong> 1주
                단위로 업무를 관리하며 진행 상황 공유
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
