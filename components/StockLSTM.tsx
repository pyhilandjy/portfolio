import React from "react";
// import Image from "next/image";

const StockLSTM: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto bg-white text-black p-10 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-20 text-center">
        Stock price prediction
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <ul className="list-disc list-inside mb-4 leading-relaxed">
            <li className="flex items-start">
              <span className="font-bold w-20 mb-6">개요</span>
              <span className="block mb-3">
                : 코스피, 코스닥의 주식 가격을 시계열을 이용하여 예측하는
                프로젝트
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-3">목표</span>
              <span className="block ml-0 mb-6">: 데이터 파이프라인 구축</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-6">주요 기술</span>
              <span className="block ml-0 mb-3">
                : Airflow, Crawl, LSTM, AWS
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-6">참여 인원</span>
              <span className="block mb-3">: 4명</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold w-20 mb-3">주요 작업</span>
              <span className="block ml-2 mb-6">
                - 주식 데이터 수집 및 적재
                <br />
                - LSTM 모델 학습 및 예측
                <br />- Airflow를 이용한 데이터 파이프라인 구축
              </span>
            </li>
            <li className="flex flex-col items-start mb-6">
              <span className="font-bold w-20 mb-4">작업상세</span>
              <span className="block ml-2 mb-3">
                <span className="block font-bold">1. 데이터 수집</span>
                <span className="block ml-4">
                  ∙ 간단한 워크플로우였지만 종속성 관리와 확장성을 고려하여
                  Airflow를 통해 데이터 수집 및 적재하였습니다.
                </span>
                <span className="block ml-4">
                  ∙ 경험이 부족했기에 많은 양의 데이터를 수집할 때 병렬처리로
                  진행하지 않고 순차적으로 데이터를 수집하였습니다.
                </span>
                <span className="block ml-8"></span>
              </span>
              <span className="block ml-2 mb-3">
                <span className="block font-bold">2. 주가 예측</span>
                <span className="block ml-4">
                  ∙ 주가는 시간 흐름에 따라 특정한 추세와 패턴을 가지고 있다고
                  판단하여 LSTM을 사용하여 주가를 예측하였습니다.
                </span>
                <span className="block ml-4">
                  ∙ 예측 결과가 다소 아쉬웠지만, 이를 통해 시계열 데이터의 특성,
                  LSTM의 작동원리, 하이퍼파라미터 튜닝을 경험하며
                </span>
                <span className="block ml-8">
                  딥러닝에 대한 이해도를 높일 수 있는 계기가 되었습니다.
                </span>
              </span>
              <span className="block ml-2 mb-3">
                <span className="block font-bold">
                  3. Airflow 데이터 파이프라인 구축
                </span>
                <span className="block ml-4">
                  ∙ 처음 접해본 프레임워크였기에 초기 설정과 DAG의 작동원리를
                  이해하기 위해 노력했습니다.
                </span>
                <span className="block ml-4">
                  ∙ 데이터 수집 및 적재 이후 모델 학습 및 예측을 진행하는
                  파이프라인을 구축하였습니다.
                </span>
              </span>
            </li>
            <li className="flex flex-col items-start mb-6">
              <span className="font-bold w-20 mb-4">회고</span>
              <span className="block ml-2 mb-3">
                <span className="block ml-4">
                  부트캠프에서 팀원을 배정받고, 아이디에이션 과정에서 2명의
                  수강생이 중도 하차를 하였고, 남은 한명의 수강생은
                </span>
                <span className="block ml-4">
                  지속적으로 소통을 요구하였지만 연락이 되지 않아 프로젝트를
                  혼자 진행하게 되었습니다. 이로 인해 프로젝트의
                </span>
                <span className="block ml-4">
                  완성도가 떨어지게 되었지만, 혼자서 프로젝트를 진행하면서 여러
                </span>
              </span>
            </li>
          </ul>
          <div>
            <a
              href="https://github.com/pyhilandjy/stock_price"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold underline block"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockLSTM;
