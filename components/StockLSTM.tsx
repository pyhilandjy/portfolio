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
              <span className="font-bold w-20 mb-6">참여 인원</span>
              <span className="block mb-3">: 4명</span>
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
              <span className="font-bold w-20 mb-2">회고</span>
              <span className="block ml-4">
                부트캠프에서 처음 데이터 아키텍처를 설계한한 프로젝트로 제한된
                리소스와 시간, 그리고 팀원들의 중도 하차 등 여러 변수로 인해
                계획대로 프로젝트를 진행 하기에 여러 어려움이 있었습니다. 이러한
                어려움들로 인해 결과물의 완성도에 집중하기 보다는, 해당
                프로젝트를 통해 데이터 파이프라인 구축과 데이터 흐름에 대한
                이해를 높이는 것을 목표로 하였습니다. 비록 기대했던 것처럼
                완벽하게 마무리 짓지는 못하였지만, 데이터 아키텍처 설계와
                파이프라인 구축에 대한 전반적 이해 및 실전 경험을 쌓을 수
                있었습니다.
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
