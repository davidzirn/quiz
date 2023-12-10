"use client";

import Link from "next/link";

export default function FirstQuestion() {
  return (
    <>
      <div className="h-[100vh] w-full px-[20px] flex flex-col justify-center gap-[30px]">
        <h1 className="text-center">Správně</h1>
        <p className="text-center">První indicie je:</p>
        <h3 className="text-center">Rada tří starších...</h3>
        <Link href="/second-question">
          <button className="w-full">Další otázka</button>
        </Link>
      </div>
    </>
  );
}
