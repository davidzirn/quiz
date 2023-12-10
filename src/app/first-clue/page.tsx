"use client";

import Link from "next/link";
import { ChevronLeft } from "react-feather";

export default function FirstQuestion() {
  return (
    <>
      <div className="h-[100vh] w-full px-[20px] flex flex-col justify-center gap-[30px] relative">
        <Link href="/first-question">
          <div className="w-[40px] absolute top-[40px] left-[20px] h-[40px] bg-black text-white flex items-center justify-center rounded-full">
            <ChevronLeft />
          </div>
        </Link>
        <h1 className="text-center">První nápověda</h1>
        <img className="w-[80%] mx-auto" src="/assets/images/clues/first.png" />
      </div>
    </>
  );
}
