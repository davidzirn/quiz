"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FirstQuestion() {
  const router = useRouter();
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);

  const answerHandler = () => {
    if (answer.toLocaleLowerCase() === "nikon") {
      router.push("/third-completed");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="h-[100vh] w-full px-[20px] flex flex-col justify-center gap-[30px]">
        <h1 className="text-center">3. otázka</h1>
        <p className="text-center">
          Milan se kouká přes sklíčko,
          <br /> nebo to je selfíčko? <br />
          Foťák nese pěkný název,
          <br /> ulož ho do databáze
        </p>
        <div className="relative w-full">
          <input
            onChange={(text) => {
              setError(false);
              setAnswer(text.currentTarget.value);
            }}
            type="text"
            placeholder="N _ _ _ _"
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
