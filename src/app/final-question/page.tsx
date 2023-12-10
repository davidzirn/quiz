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
      answer.toLocaleLowerCase() === "master chef" ||
      answer.toLocaleLowerCase() === "master šéf"
    ) {
      router.push("/final-completed");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="h-[100vh] w-full px-[20px] flex flex-col justify-center gap-[30px]">
        <h1 className="text-center">Finální otázka</h1>
        <p className="text-center">
          Posbírala si všechny 4 indície pro zodpovězení poslední hádanky.
          <br />
          Hádanka zní:
          <br />
          <span className="font-black">
            I mistr se někdy utne, nebo řízne do prstu v pořadu:
          </span>
        </p>
        <div className="relative w-full">
          <input
            onChange={(text) => {
              setError(false);
              setAnswer(text.currentTarget.value);
            }}
            type="text"
            placeholder="Odpověď"
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
      </div>
    </>
  );
}
