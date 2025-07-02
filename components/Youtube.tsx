import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

const Youtube: React.FC = () => {
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
        YouTube 기반 개인 학습 메모장
      </h2>
      <h2 className="text-xl font-bold mb-20 text-center">(2025.06~2025.06)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <ul className="list-disc list-inside mb-4 leading-relaxed">
            <li className="flex items-start">
              <span className="font-bold w-20 mb-6">개요</span>
              <p className="mb-3 ml-1 text-left flex gap-2">
                <span>:</span>
                <span>
                  YouTube로 공부를 자주 하는 사용자로서, 영상 시청 중 실시간
                  필기의 불편함을 느껴 이를 해결하고자 만든 프로젝트
                </span>
              </p>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-6">참여 인원</span>
              <p className="mb-3 ml-0 text-left flex gap-2">
                <span>:</span>
                <span>개인</span>
              </p>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-6">목표</span>
              <p className="mb-3 ml-0 text-left flex gap-2">
                <span>:</span>
                <span>
                  YouTube 학습 콘텐츠를 수집하고 메모할 수 있는 개인화된 환경
                  구축
                </span>
              </p>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-6">주요 작업</span>
              <div className="ml-0">
                <p className="mb-1 text-left flex gap-2">
                  <span>-</span>
                  <span>
                    Ubuntu 서버 환경 구축 및 포트 포워딩 설정을 통한 서비스 운영
                    기반 마련
                  </span>
                </p>
                <p className="mb-1 text-left flex gap-2">
                  <span>-</span>
                  <span>
                    SMTP 연동을 통한 회원가입 및 이메일 인증 플로우 구현
                  </span>
                </p>
                <p className="mb-1 text-left flex gap-2">
                  <span>-</span>
                  <span>
                    Redis와 쿠키 기반의 세션 로그인 인증 시스템 설계 및 적용
                  </span>
                </p>
                <p className="mb-1 text-left flex gap-2">
                  <span>-</span>
                  <span>
                    메인/서브 구조를 가진 계층형 카테고리 시스템 설계 및 콘텐츠
                    구조화
                  </span>
                </p>
                <p className="mb-1 text-left flex gap-2">
                  <span>-</span>
                  <span>
                    WebSocket을 활용한 콘텐츠 처리 상태의 실시간 UI 반영 기능
                    구현
                  </span>
                </p>
                <p className="mb-3 text-left flex gap-2">
                  <span>-</span>
                  <span>
                    YouTube 영상 다운로드 및 Tiptap 기반 노트 작성 기능 구현
                  </span>
                </p>
              </div>
            </li>
            <li className="flex flex-col items-start">
              <span className="font-bold w-20 mb-4">작업상세</span>
              <p className="mb-1 ml-2 text-left leading-loose flex gap-2">
                <span>1.</span>
                <span>
                  <strong className="font-bold">
                    개인 서버 구축 및 외부 접근 설정
                  </strong>
                </span>
              </p>
              <p className="mb-1 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>노트북에 Ubuntu 환경을 설치하고 개발 서버로 구성</span>
              </p>
              <p className="mb-3 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  포트포워딩을 통해 외부에서 접근 가능한 개인 서버 환경 구축
                </span>
              </p>
              <p className="mb-1 ml-2 text-left leading-loose flex gap-2">
                <span>2.</span>
                <span>
                  <strong className="font-bold">
                    이메일 인증 기반 회원가입 기능 구현
                  </strong>
                </span>
              </p>
              <p className="mb-1 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  SMTP 프로토콜을 활용하여 이메일 인증 절차 포함된 회원가입 흐름
                  설계
                </span>
              </p>
              <p className="mb-3 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  사용자 입력 이메일로 인증 코드를 전송하고, Redis에 일시적으로
                  저장하여 TTL 기반 만료 관리
                </span>
              </p>
              <p className="mb-1 ml-2 text-left leading-loose flex gap-2">
                <span>3.</span>
                <span>
                  <strong className="font-bold">
                    세션 기반 로그인 인증 시스템 구축
                  </strong>
                </span>
              </p>
              <p className="mb-1 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>FastAPI와 Redis를 활용해 session_id 기반 인증 구현</span>
              </p>
              <p className="mb-1 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  session_id를 Redis에 TTL과 함께 저장하고, HTTPOnly 쿠키로
                  클라이언트에 전달
                </span>
              </p>
              <p className="mb-3 ml-9 text-left flex gap-2">
                <span>문제점 :</span>
                <span>
                  FE, BE 도메인이 서로 달라서, 브라우저가 쿠키를 서드파티
                  요청으로 인식하고 차단함
                </span>
              </p>
              <p className="mb-1 ml-2 text-left leading-loose flex gap-2">
                <span>4.</span>
                <span>
                  <strong className="font-bold">
                    계층형 카테고리 시스템 설계
                  </strong>
                </span>
              </p>
              <p className="mb-1 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>메인과 서브로 구성된 계층형 카테고리 구조 설계</span>
              </p>
              <p className="mb-3 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  사이드바에서 선택된 카테고리 ID 및 펼침 상태를 로컬스토리지로
                  관리
                </span>
              </p>
              <p className="mb-1 ml-2 text-left leading-loose flex gap-2">
                <span>5.</span>
                <span>
                  <strong className="font-bold">
                    YouTube 영상 저장 및 노트 기능 구현
                  </strong>
                </span>
              </p>
              <p className="mb-1 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  yt-dlp를 활용하여 사용자가 입력한 YouTube URL의 영상과
                  썸네일을 다운로드하고 로컬 서버에 저장
                </span>
              </p>
              <p className="mb-1 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  다운로드 작업은 비동기 큐를 통해 처리되며, 서버 시작 시 워커가
                  자동으로 활성화
                </span>
              </p>
              <p className="mb-1 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  다운로드 진행 상태는 WebSocket을 통해 실시간으로 클라이언트에
                  전송되어 UI에 반영
                </span>
              </p>
              <p className="mb-1 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  각 영상에는 Tiptap 기반의 노트 에디터를 제공하고, 작성 내용은
                  자동으로 저장
                </span>
              </p>
              <p className="mb-3 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  사용자의 재생 위치는 로컬 스토리지에 저장되어, 이어보기 기능을
                  지원
                </span>
              </p>
            </li>
            <li className="flex flex-col items-start mb-6">
              <span className="font-bold w-20 mb-2">회고</span>
              <span className="block ml-4">
                이전 프로젝트에서는 프론트엔드에서 로컬스토리지를 통해 인증
                상태를 처리하는 구조였기에, 쿠키와 세션 관리에 대한 이해가
                부족하다고 느꼈습니다. 이를 보완하고자 Redis와 쿠키를 활용한
                세션 인증 구조를 직접 구현해보는 것을 목표로 삼고 프로젝트를
                시작하게 되었습니다. 이 과정에서 서로다른 도메인을 사용했기에,
                브라우저의 CORS 정책으로 인해 서드파티 쿠키가 차단되는 문제를
                겪었습니다. 이를 해결하기 위해, CSRF 방지를 위해 특정 도메인에
                대해서만 서드파티 쿠키를 허용하는 설정을 적용했습니다. 또한,
                개인 서버를 구축하여 외부에서 접근할 수 있는 환경을
                만들었습니다. 이 프로젝트를 통해 세션 관리와 인증 시스템에 대한
                이해도를 높일 수 있었고, 개인 서버 환경에서의 개발 경험을 쌓을
                수 있었습니다.
              </span>
            </li>
          </ul>
          <div>
            <a
              href="https://github.com/pyhilandjy/archive-be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold underline block"
            >
              Github BackEnd Repo
            </a>
          </div>
          <div>
            <a
              href="https://github.com/pyhilandjy/archive"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold underline block"
            >
              Github FrontEnd Repo
            </a>
          </div>
          <div>
            <a
              href="https://youtube-study-archive.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold underline block"
            >
              Project Page
            </a>
          </div>
          <div className="mt-4 text-sm text-red-500 leading-relaxed">
            이 프로젝트는 프론트엔드와 백엔드가 서로 다른 도메인에서 운영됩니다.
            <br />
            세션 인증에 쿠키를 사용하고 있어, 브라우저 설정에 따라 로그인이
            차단될 수 있습니다.
            <br />
            <strong>정상적인 이용을 위해 서드파티 쿠키 허용</strong>을
            활성화해주세요.
            <br />
            (예: Chrome &gt; 설정 &gt; 개인정보 및 보안 &gt; 서드파티 쿠키 허용)
          </div>
        </div>
        <div className="space-y-10 flex flex-col justify-center items-center">
          <Image
            src="/youtube-login.png"
            alt="아키텍처"
            width={380}
            height={200}
            className="rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick("/youtube-login.png")}
          />
          <Image
            src="/youtube-list.png"
            alt="아키텍처"
            width={380}
            height={200}
            className="rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick("/youtube-list.png")}
          />
          <Image
            src="/youtube-down-editor.png"
            alt="UI 예시"
            width={380}
            height={200}
            className="rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick("/youtube-down-editor.png")}
          />
          <Image
            src="/youtube-side-editor.png"
            alt="UI 예시"
            width={380}
            height={200}
            className="rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick("/youtube-side-editor.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default Youtube;
