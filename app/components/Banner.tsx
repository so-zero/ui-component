import React from "react";
import { IoMdDesktop, IoIosCode, IoIosNavigate } from "react-icons/io";

const Banner = () => {
  const icons = [
    {
      id: 1,
      name: "컴포넌트 라이브러리",
      icon: <IoMdDesktop className="text-purple-500 text-[30px]" />,
      description:
        "모든 리액트 컴포넌트를 라이브러리에 정리하세요. 필요할 때마다 저장된 구성 요소를 쉽게 찾아보고 검색하고 액세스할 수 있습니다.",
    },
    {
      id: 2,
      name: "재사용 가능한 컴포넌트",
      icon: <IoIosCode className="text-purple-500 text-[30px]" />,
      description:
        "편집기에서 직접 리액트 컴포넌트를 만들고 편집하세요. 구문 강조 및 미리보기를 사용하여 JSX 코드를 작성하세요.",
    },
    {
      id: 3,
      name: "버전 관리 및 기록",
      icon: <IoIosNavigate className="text-purple-500 text-[30px]" />,
      description:
        "변경 사항을 추적하고 컴포넌트의 다양한 버전을 유지 관리하세요. 필요한 경우 이전 버전으로 되돌리세요.",
    },
  ];
  return (
    <div>
      <div className="mx-16 mt-[100px] flex flex-col items-center gap-6">
        <h2 className="font-bold text-2xl text-center">
          리액트 컴포넌트를 생성하세요.
        </h2>
        <p className="w-[500px] max-sm:w-full text-gray-500 text-[15px] text-center">
          자주 사용하는 컴포넌트 재사용하여 시간을 절약하세요. 중앙 집중식
          데이터베이스에 저장하고 새 컴포넌트를 쉽게 생성할 수 있습니다. 또한,
          재사용 가능한 구성 요소 라이브러리에 빠르게 액세스하여 개발 작업
          흐름을 향상하고 프로젝트 전반에 걸쳐 일관성을 보장합니다.
        </p>
        <button
          type="submit"
          className="block px-9 py-3 bg-purple-500 rounded-md text-sm font-medium text-white hover:bg-purple-600 duration-200"
        >
          시작하기
        </button>
      </div>
      <div className="mt-12 py-12 bg-gray-50">
        <div className="mx-auto px-4">
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {icons.map((icon, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full flex justify-center items-center bg-purple-100">
                  {icon.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-center text-purple-500">
                  {icon.name}
                </h3>
                <p className="w-[80%] mt-2 text-[13px] text-center text-gray-600">
                  {icon.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
