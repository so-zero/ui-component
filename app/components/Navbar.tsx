import React from "react";
import Link from "next/link";
import { SiNextui } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="m-5 max-sm:mt-9 mx-8 flex justify-between items-center max-sm:flex-col">
      <div className="flex items-center gap-2">
        <div className="p-[6px] bg-purple-500 flex justify-center items-center rounded-md">
          <div className="w-[26px] h-[26px] flex justify-center items-center">
            <SiNextui className="text-white text-[22px]" />
          </div>
        </div>
        <div className="text-purple-500 font-semibold text-[18px]">
          component
        </div>
      </div>
      <div className="max-sm:w-full max-sm:mt-8 flex max-sm:flex-col gap-3 text-center">
        <Link
          href="/sign-up"
          className="max-sm:w-full text-sm border border-purple-500 text-white bg-purple-500 p-[8px] px-6 rounded-md hover:opacity-80 duration-200"
        >
          회원가입
        </Link>
        <Link
          href="/sign-in"
          className="max-sm:w-full text-sm border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white p-[8px] px-6 rounded-md duration-200"
        >
          로그인
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
