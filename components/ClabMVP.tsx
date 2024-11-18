import React from "react";
import Image from "next/image";

const ClabMVP: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white text-black p-10 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-20 text-center">C-Lab MVP</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <ul className="list-disc list-inside mb-4 leading-relaxed">
            <li className="flex items-start">
              <span className="font-bold w-20 mb-3">개요</span>
              <span className="block ml-0 mb-3">
                : 생애초기(0-4세) 뇌 신경망의 발달이 폭발적으로 일어나는 시기에
                가장 중요하게 작용하는{" "}
                <strong className="font-bold">
                  {'"'}부모의 말{'"'}
                </strong>
                <span className="block ml-2 mt-1">
                  아이의 건강한 성장발달을 돕기 위해{" "}
                  <strong className="font-bold">
                    아이와 부모의 대화내용을 ML, LLM을 통해 분석 하여 부모에게
                    피드백을
                  </strong>
                </span>
                <span className="block mb-3 ml-2 mt-1">
                  <strong className="font-bold">제공하는 서비스</strong>
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-3">목표</span>
              <span className="block ml-0 mb-6">: 서비스 핵심 기능 개발</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-6">주요 기술</span>
              <span className="block ml-0 mb-3">
                : Fast-api, Next.js, Nginex, Docker, AWS, Github, Github-Action,
                Request(LLM), STT(Naver Clova)
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-3">프로세스</span>
              <span className="block ml-2 mb-6">
                1. 사용자로부터 오디오 파일을 수집
                <br />
                2. STT 이후 오탈자, 발화자 정보 수정
                <br />
                3. 분석에 필요한 데이터 가공
                <br />
                4. 피드백 리포트 제공
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-3">주요 작업</span>
              <span className="block ml-2 mb-6">
                - Database Modeling
                <br />
                - 데이터 전처리 및 데이터 가공 API 및 워크스페이스 구축
                <br />
                - 통계된 데이터 확인 및 후처리 API 및 워크스페이스 구축
                <br />- BE, FE 서버 배포
              </span>
            </li>
            <li className="flex flex-col items-start">
              <span className="font-bold w-20 mb-4">작업상세</span>
              <span className="block ml-2 mb-3">
                <span className="block font-bold mb-1">
                  1. 데이터베이스 모델링
                </span>
                <span className="block ml-4">
                  ∙ 데이터 일관성과 중복 최소화를 위한{" "}
                  <strong className="font-bold">정규화 원칙을 적용</strong>
                  하되, 프로젝트 초기 단계에서{" "}
                  <strong className="font-bold">빈번한 스키마 변경이</strong>
                </span>
                <span className="block ml-8 mb-2">
                  <strong className="font-bold">예상</strong>되어, 유연한 구조
                  확보를 위해{" "}
                  <strong className="font-bold">외래키 제약조건은 제외</strong>
                  하여 설계를 진행했습니다.
                </span>
                <span className="block ml-4">
                  ∙ 정규화를 적용한 결과, 테이블 간 관계가 복잡해지고 참조해야
                  하는 테이블이 많아지면서 API 설계 과정에서
                </span>
                <span className="block ml-8">
                  어려움을 겪었습니다. 이로인해 API 설계 시 로직을 메모 하는
                  습관이 생겼고, 이후 API 설계 및 구현에 있어서
                </span>
                <span className="block ml-8 mb-4">
                  더 빠르게 진행할 수 있었습니다.
                </span>
                <span className="block ml-8"></span>
              </span>
              <span className="block ml-2 mb-3">
                <span className="block font-bold mb-1">
                  2. REST API 아키텍처 설계
                </span>
                <span className="block ml-4">
                  ∙ 외래키가 없는 테이블 구조에서{" "}
                  <strong className="font-bold">
                    데이터 무결성 관리에 중점을 두어 설계
                  </strong>
                  했으며, 특히 상위 테이블의 데이터 삭제 시
                </span>
                <span className="block ml-8 mb-2">
                  발생할 수 있는 고아 데이터 문제를 해결하기 위해 고민했습니다.
                </span>
                <span className="block ml-4">
                  ∙ 하위 데이터가 존재하는 경우 사용자에게 하위 데이터의 존재를
                  알리고, 전체 삭제 여부를 확인하는 알림을 추가하여
                </span>
                <span className="block ml-8 mb-4">
                  데이터의 일관성을 유지하면서 사용자가 데이터 삭제의 영향을
                  인지하고 결정할 수 있도록 설계했습니다.
                </span>
                <span className="block ml-8"></span>
              </span>
              <span className="block ml-2 mb-3">
                <span className="block font-bold mb-1">
                  3. 계층형 데이터 버전 관리
                </span>
                <span className="block ml-4">
                  ∙ 계층형 데이터 구조에서 하위 데이터 수정 시 발생하는{" "}
                  <strong className="font-bold">데이터 정합성 문제</strong>를
                  해결하기 위해 하위 데이터 수정 시
                </span>
                <span className="block ml-8">
                  상위 데이터의 버전을 관리하여 기존 사용자와 신규 업데이트
                  사용자 간의 데이터의 일관성을 보장하도록
                </span>
                <span className="block ml-8 mb-2">설계했습니다.</span>

                <span className="block ml-4">
                  ∙ 데이터의 버전 관리와 시스템의 확장성을 고려한 아키텍처
                  설계를 진행하며 버전 관리의 중요성,사용자 경험을 고려한
                </span>
                <span className="block ml-8 mb-4">
                  설계의 필요성, 그리고 확장 가능한 아키텍처 설계를
                  경험하였습니다.
                </span>
              </span>
              <span className="block ml-2 mb-5">
                <span className="block font-bold mb-1">
                  4. 데이터 후처리 및 분석
                </span>
                <span className="block ml-4">
                  ∙ Naver clova의 STT(Speech to Text) API를 통해 변환된 텍스트
                  데이터의 오탈자와 발화자 정보를 수정할 수 있는
                </span>
                <span className="block ml-8 mb-2">
                  인터페이스를 구축하였습니다.
                </span>
                <span className="block ml-4">
                  ∙ 데이터 분석을 위해 정제된 텍스트와 메타데이터를 ML서버와
                  연동하여 자동 문장 분류를 구현하였으며, 분류 결과를
                </span>
                <span className="block ml-8 mb-2">
                  수정할 수 있는 인터페이스를 구축하였습니다.
                </span>
                <span className="block ml-4">
                  ∙ 오디오 데이터를 통해 인사이트를 도출하기 위해 LLM 기반 분석
                  시스템을 구축하였고, 분석 품질을 지속적으로
                </span>
                <span className="block ml-8 mb-2">
                  개선하기 위해 프롬프트를 수정할 수 있는 인터페이스를
                  구축하였습니다.
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
