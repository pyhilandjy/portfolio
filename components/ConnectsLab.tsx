import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

const ConnectsLab: React.FC = () => {
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
        인스타그램 데이터 수집 및 시각화(Connects Lab 기업연계 프로젝트)
      </h2>
      <h2 className="text-xl font-bold mb-20 text-center">(2024.10~2025.12)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <ul className="list-disc list-inside mb-4 leading-relaxed">
            <li className="flex items-start">
              <span className="font-bold w-20 mb-6">개요</span>
              <p className="mb-3 ml-2 text-left flex gap-2">
                <span>:</span>
                <span>
                  서비스를 개발 하기 이전에{" "}
                  <strong className="font-bold">
                    고객들의 고민이나 관심사를 파악
                  </strong>
                  하기 위해 인스타그램의{" "}
                  <strong className="font-bold">
                    육아 데이터를 수집하여 분석하고 시각화
                  </strong>
                </span>
              </p>
            </li>

            <li className="flex items-start">
              <span className="font-bold w-20 mb-6">참여 인원</span>
              <p className="mb-3 ml-0 text-left flex gap-2">
                <span>:</span>
                <span>4명</span>
              </p>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-6">목표</span>
              <p className="mb-3 ml-0 text-left flex gap-2">
                <span>:</span>
                <span>양적분석을 위한 데이터 수집 및 시각화</span>
              </p>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-6">주요 기술</span>
              <span className="block ml-0 mb-3">
                : Airflow, Crawl, AWS, Docker, AWS, MongoDB, Dash
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-6">주요 작업</span>
              <div className="ml-0">
                <p className="mb-1 text-left flex gap-2">
                  <span>-</span>
                  <span>인스타그램 데이터 수집</span>
                </p>
                <p className="mb-1 text-left flex gap-2">
                  <span>-</span>
                  <span>수집된 데이터 전처리</span>
                </p>
                <p className="mb-3 text-left flex gap-2">
                  <span>-</span>
                  <span>데이터 시각화</span>
                </p>
              </div>
            </li>
            <li className="flex flex-col items-start">
              <span className="font-bold w-20 mb-4">작업상세</span>
              <p className="mb-1 ml-2 text-left leading-loose flex gap-2">
                <span>1.</span>
                <span>
                  <strong className="font-bold">데이터 수집</strong>
                </span>
              </p>
              <p className="mb-1 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  META에서 제공하는 API를 확인해본 결과 원하는 데이터를 수집할
                  수 없어서 크롤링을 진행하였습니다.
                </span>
              </p>
              <p className="mb-3 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  크롤링이라는 특성상 에러핸들링이 많이 필요했습니다. 이를
                  해결하기 위해 Discord에 에러로그를 전송하도록 설정하였습니다.
                </span>
              </p>
              <p className="mb-1 ml-2 text-left leading-loose flex gap-2">
                <span>2.</span>
                <span>
                  <strong className="font-bold">
                    Airflow task 병렬처리 및 스케줄링
                  </strong>
                </span>
              </p>
              <p className="mb-1 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  시간의 흐름에 따라 육아의 고민이나 관심사가 바뀔 수 있기
                  때문에, 인스타그램의 육아 관련 해시태그를 데일리
                  크롤링하였습니다.
                </span>
              </p>
              <p className="mb-3 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  크롤링을 통해 데이터를 수집하기 때문에 시간이 오래 걸렸습니다.
                  이를 해결하기 위해 Task를 병렬처리를 진행하려 했으나,
                  Firefox의 Container 실행이 원활하지 못하여 실패하였습니다.
                </span>
              </p>
              <p className="mb-1 ml-2 text-left leading-loose flex gap-2">
                <span>3.</span>
                <span>
                  <strong className="font-bold">코드 관리</strong>
                </span>
              </p>
              <p className="mb-1 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  이전 프로젝트에서 복잡한 로직이 단일 함수에 집중되어 있어 코드
                  재사용이 어렵고, 새로운 기능 추가 시 광범위한 코드 수정이
                  필요했었기에 이번 프로젝트에서는 모듈화를 적용하기 위해
                  노력했습니다.
                </span>
              </p>
              <p className="mb-1 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  각 함수는 단일 책임 원칙을 준수하도록 노력했으며, 이를 통해
                  코드의 가독성과 재사용성이 향상되었습니다.
                </span>
              </p>
              <p className="mb-3 ml-4 text-left flex gap-2">
                <span>∙</span>
                <span>
                  특히 모듈화된 구조는 단위 테스트 작성 시 많은 도움이 되었고,
                  버그 수정 시간 또한 단축시킬 수 있었습니다.
                </span>
              </p>
            </li>
            <li className="flex flex-col items-start mb-6">
              <span className="font-bold w-20 mb-2">회고</span>
              <span className="block ml-4">
                이전 프로젝트를 진행하며, Airflow와 Docker에 대한 이해도가
                부족했고, 코드 모듈화가 제대로 이루어지지 않아 코드의 가독성과
                유지보수성이 떨어지는 문제점이 있었습니다. 이를 개선하고자, 해당
                프로젝트에서는 아키텍처 설계부터 Airflow와 Docker 세팅, 팀원들의
                코드를 모듈화하는 리팩토링에 집중했습니다. 이 과정에서 모듈화의
                필요성을 체감하며, 더 효율적인 코드 구조를 고민하는 시간을
                가졌습니다. 특히 Docker 컨테이너를 분할하여 Airflow를 통해
                병렬처리를 시도하면서 이전보다 Docker와 Airflow 사용에 대한
                이해도 또한 높아지는 계기가 되었습니다.
              </span>
            </li>
          </ul>
          <div>
            <a
              href="https://github.com/pyhilandjy/connects-lab"
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
            src="/connects-lab.png"
            alt="아키텍쳐"
            width={380}
            height={200}
            className="rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick("/connects-lab.png")}
          />
          <Image
            src="/connects-lab-dash.png"
            alt="dashboard"
            width={380}
            height={200}
            className="rounded-lg shadow-md cursor-pointer"
            onClick={() => handleImageClick("/connects-lab-dash.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectsLab;
