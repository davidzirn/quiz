"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FirstQuestion() {
  const router = useRouter();
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);

  const answerHandler = () => {
    if (
      answer.toLocaleLowerCase() === "porsche" ||
      answer.toLocaleLowerCase() === "porše"
    ) {
      router.push("/first-completed");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="h-[100vh] w-full px-[20px] flex flex-col justify-center gap-[30px]">
        <h1 className="text-center">1. Otázka</h1>
        <p className="text-center">
          Král David má vysnený kočár, šetřit na něj nezapočal
        </p>
        <div className="relative w-full">
          <input
            onChange={(text) => {
              setError(false);
              setAnswer(text.currentTarget.value);
            }}
            type="text"
            placeholder="P _ _ _ _ _ _ _"
            className="border-[1px] w-full px-[20px] py-[16px] rounded-lg"
          />
          {error && (
            <p className="text-[12px] font-bold text-red-500 mt-[4px]">
              Zkus to ještě jednou
            </p>
          )}
        </div>
        <button onClick={answerHandler} className="w-full">
          Odpovědět
        </button>
        {error && (
          <Link href="/first-clue">
            <p className="text-center underline">Nápověda?</p>
          </Link>
        )}
      </div>
    </>
  );
}
