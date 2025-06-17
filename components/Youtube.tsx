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
      <h2 className="text-4xl font-bold mb-20 text-center">
        YouTube 기반 개인 학습 메모장
      </h2>
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
              <span className="font-bold w-20 mb-6">주요 기술</span>
              <span className="block ml-0 mb-3">
                : FastAPI, Next.js, PostgreSQL, Redis, yt-dlp, SMTP, Ubuntu 서버
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-6">주요 작업</span>
              <div className="ml-0">
                <p className="mb-1 text-left flex gap-2">
                  <span>-</span>
                  <span>Ubuntu 환경 구축 및 포트 포워딩 설정</span>
                </p>
                <p className="mb-1 text-left flex gap-2">
                  <span>-</span>
                  <span>SMTP를 이용한 회원가입 및 이메일 인증 기능 구현</span>
                </p>
                <p className="mb-1 text-left flex gap-2">
                  <span>-</span>
                  <span>
                    Redis 및 쿠키를 활용한 세션 기반 로그인 인증 시스템 구현
                  </span>
                </p>
                <p className="mb-1 text-left flex gap-2">
                  <span>-</span>
                  <span>
                    메인/서브 구조의 계층형 카테고리 시스템 설계 및 적용
                  </span>
                </p>
                <p className="mb-3 text-left flex gap-2">
                  <span>-</span>
                  <span>YouTube 영상 저장 및 노트 작성 기능 구현</span>
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
              <p className="mb-3 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  session_id를 Redis에 TTL과 함께 저장하고, HTTPOnly 쿠키로
                  클라이언트에 전달
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
                  각 영상에 대한 노트 기능을 tiptap 에디터를 통해 제공하며,
                  작성된 노트는 편집/조회 가능
                </span>
              </p>
              <p className="mb-3 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  블로킹 I/O 작업(subprocess)은 run_in_executor를 통해
                  쓰레드풀에서 병렬 처리
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
                시작하게 되었습니다. 로그인과 회원가입처럼 보편적인 기능만
                구현하기보다는 실제 사용 가능한 서비스를 만들고 싶었고, 어떤
                형태로 확장할지 고민하던 중, 평소 YouTube로 공부를 많이 하던
                제게 필요한 기능으로 유튜브 영상을 다운받아 메모가 가능한
                페이지를 만드는 프로젝트를 시작하였습니다. 이 과정에서 로컬 서버
                운영을 직접 경험하기 위해 노트북에 Ubuntu를 설치하고,
                포트포워딩을 통해 외부 접속이 가능한 개발 환경을 구성하였으며,
                이를 통해 로컬 서버 운영에 대한 감각도 키울 수 있었고, 인증,
                세션 관리, 서버 구성 등 서비스의 기본적인 구조를 이해하는
                프로젝트가 되었습니다.
              </span>
            </li>
          </ul>
          <div>
            <a
              href="https://github.com/pyhilandjy/youtube-note"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold underline block"
            >
              Github Repo
            </a>
          </div>
        </div>
        <div className="space-y-10 flex flex-col justify-center items-center h-full md:h-screen">
          <Image
            src="/youtube-note-arch.png"
            alt="아키텍처"
            width={380}
            height={200}
            className="rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick("/youtube-note-arch.png")}
          />
          <Image
            src="/youtube-note-ui.png"
            alt="UI 예시"
            width={380}
            height={200}
            className="rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick("/youtube-note-ui.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default Youtube;
