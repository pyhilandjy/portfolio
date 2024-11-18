import React from "react";
import Image from "next/image";

const ConnectsLab: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white text-black p-10 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-20 text-center">
        Connects-lab 기업연계 팀 프로젝트
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <ul className="list-disc list-inside mb-4 leading-relaxed">
            <li className="flex items-start">
              <span className="font-bold w-20 mb-3">개요</span>
              <span className="block ml-0 mb-3">
                : 서비스를 개발 하기 이전에{" "}
                <strong className="font-bold">
                  고객들의 고민이나 관심사를 파악
                </strong>
                하기 위해 인스타그램의{" "}
                <strong className="font-bold">육아 데이터를 수집하여</strong>
                <span className="block ml-2 mt-1">
                  <strong className="font-bold"> 분석하고 시각화</strong>
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-3">목표</span>
              <span className="block ml-0 mb-6">
                : 양적분석을 위한 데이터 수집
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-6">주요 기술</span>
              <span className="block ml-0 mb-3">
                : Airflow, Crawl, AWS, Docker, AWS, MongoDB, Dash
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-3">주요 작업</span>
              <span className="block ml-2 mb-3">
                - 인스타그램 크롤링
                <br />
                - 수집된 데이터 전처리
                <br />- 데이터 시각화
              </span>
            </li>
            <li className="flex flex-col items-start">
              <span className="font-bold w-20 mb-4">작업상세</span>
              <span className="block ml-2 mb-3">
                <span className="block font-bold">1. 데이터 크롤링</span>
                <span className="block ml-4">
                  ∙ 양적분석을 위해 육아 관련 데이터가 풍부한 인스타그램을
                  크롤링의 대상으로 선정하였습니다.
                </span>
                <span className="block ml-8 mb-2"></span>
                <span className="block ml-4">
                  ∙ META에서 제공하는 API를 확인해본 결과 원하는 데이터를 수집할
                  수 없어서 크롤링을 진행하였습니다.
                </span>
                <span className="block ml-8 mb-2"></span>
                <span className="block ml-4">
                  ∙ 크롤링이라는 특성상 에러핸들링이 많이 필요했습니다. 이를
                  해결하기 위해 Discord에 에러로그를 전송하도록
                </span>
                <span className="block ml-8 mb-2">설정하였습니다.</span>
              </span>
              <span className="block ml-2 mb-3">
                <span className="block font-bold">
                  2. Airflow task 병렬처리 및 스케줄링
                </span>
                <span className="block ml-4 ">
                  ∙ 시간의 흐름에 따라 육아의 고민이나 관심사가 바뀔 수 있기
                  때문에, 인스타그램의 육아 관련 해시태그를 데일리
                </span>
                <span className="block ml-8 mb-2">크롤링하였습니다.</span>
                <span className="block ml-4">
                  ∙ 크롤링을 통해 데이터를 수집하기 때문에 시간이 오래
                  걸렸습니다. 이를 해결하기 위해 Task를 병렬처리를 진행하려
                </span>
                <span className="block ml-8 mb-2">
                  했으나, Firefox의 Container 실행이 원활하지 못하여
                  실패하였습니다.
                </span>
              </span>
              <span className="block ml-2 mb-3">
                <span className="block font-bold">3. 코드 관리</span>
                <span className="block ml-4 ">
                  ∙ 이전 프로젝트에서 복잡한 로직이 단일 함수에 집중되어 있어
                  코드 재사용이 어렵고, 새로운 기능 추가 시 광범위한
                </span>
                <span className="block ml-8 mb-2">
                  코드 수정이 필요했었기에 이번 프로젝트에서는 모듈화를
                  적용하기위해 노력했습니다.
                </span>
                <span className="block ml-4">
                  ∙ 각 함수는 단일 책임 원칙을 준수하도록 노력했으며, 이를 통해
                  코드의 가독성과 재사용성이 향상되었습니다.
                </span>
                <span className="block ml-8 mb-2">
                  특히 모듈화된 구조는 단위 테스트 작성 시 많은 도움이 되었고,
                  버그 수정 시간 또한 단축시킬 수 있었습니다.
                </span>
              </span>
            </li>
          </ul>
          <div>
            <a
              href="https://www.github.com/pyhilandjy/clab-admin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold underline block"
            >
              Admin BE repo
            </a>
            <a
              href="https://www.github.com/pyhilandjy/clab-admin"
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
        <div className="space-y-10">
          <Image
            src="/connects-lab.png"
            alt="아키텍쳐"
            width={380}
            height={200}
            className="rounded-lg shadow-md"
          />
          <Image
            src="/connects-lab-dash.png"
            alt="dashboard"
            width={380}
            height={200}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectsLab;