import React from "react";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <section className="py-20 px-10 bg-gradient-to-b from-blue-300 to-blue-100 text-gray-800">
      <h1 className="text-5xl font-bold text-center mb-16">∙ Projects ∙</h1>
      <div className="max-w-7xl mx-auto bg-white text-black p-10 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-20 text-center">C-Lab MVP개발</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <ul className="list-disc list-inside mb-4 leading-relaxed">
              <li className="flex items-start">
                <span className="font-bold w-20 mb-3">개요</span>
                <span className="block ml-0 mb-3">
                  : 생애초기(0-4세) 뇌 신경망의 발달이 폭발적으로 일어나는
                  시기에 가장 중요하게 작용하는{" "}
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
                  : Fast-api, Next.js, Nginex, Docker, AWS, Github,
                  Github-Action, Request(LLM), STT(Naver Clova)
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-bold w-20 mb-3">프로세스</span>
                <span className="block ml-2 mb-3">
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
                <span className="block ml-2 mb-3">
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
                  <span className="block font-bold">
                    1. 데이터베이스 모델링
                  </span>
                  <span className="block ml-4">
                    ∙ 프로젝트 초기 단계에서 빈번한 스키마 변경이 예상되어,
                    데이터 일관성과 중복 최소화를 위한 정규화 원칙을
                  </span>
                  <span className="block ml-8 mb-2">
                    적용하되 유연한 구조 확보를 위해 외래키 제약조건은 제외하여
                    설계를 진행했습니다.
                  </span>
                  <span className="block ml-4">
                    ∙ 정규화를 적용한 결과, 테이블 간 관계가 복잡해지고 참조해야
                    하는 테이블이 많아지면서 API 설계 과정에서
                  </span>
                  <span className="block ml-8">
                    어려움을 겪었지만, 이를 통해 복잡한 테이블 구조에서의 API
                    설계 능력을 향상시킬 수 있었고, 앞으로는 정규화
                  </span>
                  <span className="block ml-8">
                    수준을 서비스의 실제 요구사항과 개발 복잡도를 고려하여 더
                    효율적으로 적용할 수 있을 것 같습니다.
                  </span>
                  <span className="block ml-8"></span>
                </span>
                <span className="block ml-2 mb-3">
                  <span className="block font-bold">
                    2. REST API 아키텍처 설계
                  </span>
                  <span className="block ml-4">
                    ∙ 외래키가 없는 테이블 구조에서 데이터 무결성 관리에 중점을
                    두어 설계했으며, 특히 상위 테이블의 데이터 삭제 시
                  </span>
                  <span className="block ml-8 mb-2">
                    발생할 수 있는 고아 데이터 문제를 해결하기 위해
                    고민했습니다.
                  </span>
                  <span className="block ml-4">
                    ∙ 하위 데이터가 존재하는 경우 삭제 시도를 차단하는 보호
                    장치를 구현하고, 사용자에게 하위 데이터의 존재를 알리고
                  </span>
                  <span className="block ml-8">
                    전체 삭제 여부를 확인하는 알림 시스템을 도입하여 데이터의
                    일관성을 유지하면서 사용자가 데이터 삭제의 영향을
                  </span>
                  <span className="block ml-8">
                    명확히 인지하고 결정할 수 있도록 했습니다.
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
    </section>
  );
};

export default Projects;
