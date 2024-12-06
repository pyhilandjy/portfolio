import React from "react";
import Image from "next/image";

const ClabMVP: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white text-black p-10 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-3">Talk-D 0.7 버전</h2>
      <h2 className="text-xl font-bold mb-20 text-center">(2024.07~현재)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <ul className="list-disc list-inside mb-4 leading-relaxed">
            <li className="flex flex-col items-start">
              <span className="font-bold mb-1">개요</span>
              <span className="block ml-4">
                ∙ MVP의 기본 구조를 기반으로 Plan, Mission, report를 도입하여
                사용자 맞춤형 서비스로 확장.
              </span>
              <span className="block ml-8">
                ∙ Plan: 사용자가 가입하여 가입하는 패키지 단위
                <br /> ∙ Mission: Plan 내에서 사용자가 수행하는 세부 과제
                <br /> ∙ Report: Plan의 정책에 따라 Mission 데이터를 분석해
                생성되는 결과물.
              </span>
              <span className="block ml-4 mb-6">
                ∙ 관리자의 후처리 작업을 줄이기 위해 ML과 LLM을 활용한 자동화 및
                효율성 개선.
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
              <span className="block ml-6 mb-6">
                ∙ Database Schema 확장 및 최적화 (Supabase)
                <br />∙ 관리자 사이트 기능 확장 (FastAPI, Next.js)
                <br />∙ 서비스 자동화 연동 (Naver Clova STT, LLM)
                <br />∙ 배포 환경 유지 및 확장 (Docker, AWS, Github, Github
                Action)
              </span>
            </li>
            <li className="flex flex-col items-start">
              <span className="font-bold mb-4">작업상세</span>
              <span className="block ml-2 mb-3">
                <span className="block font-bold mb-1">
                  1. 데이터베이스 재설계
                </span>
                <span className="block ml-4">
                  ∙ 서비스 프로세스의 변경으로 인한 테이블 추가 및 기존테이블
                  수정
                </span>
                <span className="block ml-4">
                  ∙ Plan-Mission-Report 간의 1:N 관계를 설계하여 계층형 데이터의
                  유연한 연결과 확장성을 확보
                </span>
              </span>
              <span className="block ml-2 mb-3">
                <span className="block font-bold mb-1">
                  2. Plan-Mission-Report 데이터 관리 API, 인터페이스 구축
                </span>
                <span className="block ml-4">
                  ∙ 계층형 구조에서 데이터가 상호 연결되도록 설계된 CRUD관리
                  시스템 구축
                </span>
                <span className="block ml-4">
                  ∙ 외래키 제약조간 제거로 인한 계층형 데이터 구조에서의 참조
                  무결성 보장을 위한 비즈니스 로직 설계
                </span>
                <span className="block ml-4">
                  ∙ 하위 데이터 존재 시 사용자 알림 시스템 구현으로 데이터
                  일관성 확보
                </span>
                <span className="block ml-8"></span>
              </span>
              <span className="block ml-2 mb-3">
                <span className="block font-bold mb-1">
                  3. 서비스 프로세스 관리 API, 인터페이스 구축
                </span>
                <span className="block ml-4">
                  ∙ 사용자별 데이터 후처리부터 레포트 관리까지 모든 프로세스의
                  작업을 통합적으로 관리하는 페이지 구현
                </span>
                <span className="block ml-4">
                  ∙ 관리자가 작업 우선도를 명확히 인지할 수 있도록 상태를 세분화
                </span>
                <span className="block ml-4">
                  ∙ 대량의 리스트 데이터를 효율적으로 처리하기 위한 페이지네이션
                  도입
                </span>
              </span>
              <span className="block ml-2 mb-5">
                <span className="block font-bold mb-1">
                  4. STT 데이터 후처리 기능 확장 및 개선
                </span>
                <span className="block ml-4">
                  ∙ MVP 피드백을 반영하여 API와 관리 인터페이스 개선
                </span>
                <span className="block ml-4">
                  ∙ ML 서버 연동을 통한 자동 문장 분류 시스템 구현
                </span>
                <span className="block ml-4">
                  ∙ LLM 기반 음성 데이터 분석 시스템 구축 및 프롬프트 관리
                  인터페이스 개발
                </span>
              </span>
            </li>
            <li className="flex flex-col items-start mb-6">
              <span className="font-bold w-20 mb-2">헙업 과정</span>
              <span className="block ml-4">
                ∙{" "}
                <strong className="font-bold">
                  주간 미팅: 프로젝트 전체 진행 상황 공유
                </strong>
              </span>
              <span className="block ml-8 mb-2">
                ∙ 참여자: 기획, UI/UX, 마케팅, 개발
                <br />∙ 목적: 각 팀의 진행 상황과 이슈를 공유하고, 우선순위를
                논의하며 전체 프로젝트의 방향성을 조율.
              </span>
              <span className="block ml-4">
                ∙{" "}
                <strong className="font-bold">
                  개발 미팅: 기술적 구현과 우선순위 조정
                </strong>
              </span>
              <span className="block ml-8">
                ∙ 참여자: UI/UX, 개발
                <br />∙ 진행 방식
              </span>
              <span className="block ml-12 mb-2">
                - 스프린트 기반 개발: 담당 업무를 주 단위로 관리하며 진행 상황
                이슈 공유
                <br />- UI/UX 최적화 협의: 로직이 복잡한 프로세스를 단순화하기
                위한 협의
              </span>
            </li>
            <li className="flex flex-col items-start mb-6">
              <span className="font-bold w-20 mb-2">회고</span>
              <span className="block ml-4">
                프로젝트를 진행하며 DB 설계의 중요성을 크게 깨달았습니다. API
                로직을 단순화하려는 의도로 계층형 데이터의 id 값을 text[] 형태로
                저장했지만, 이는 인덱스 설정이 불가능해 조회 성능이 크게
                저하되었습니다. 이를 수정하면서 API와 FE 모두를 변경해야 했고,
                설계 단계에서의 판단이 시스템 전반에 미치는 영향을 배우게
                되었습니다. 또한, 관리자의 작업 우선순위를 판단하는 기준을
                설정하기 위해 status를 세분화하고, 필터링 방식과 계산식, DB 적재
                구조를 설계하며 정책과 연결된 로직을 구현했습니다. 정책을
                시스템에 녹여내는 과정에서 API와 admin 페이지 개발에 깊은 고민이
                필요했고, 더 나은 설계를 탐구하는 계기가 되었습니다.
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
