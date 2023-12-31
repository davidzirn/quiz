"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-[100vh] w-full px-[20px] flex flex-col justify-center gap-[30px]">
        <h1 className="text-center">Vítej v tajemném kvízu</h1>
        <p className="text-center">
          Odpovídej správně a dostaneš{" "}
          <span className="font-bold">indície</span> k šifře. Pakliže šifru
          uhodneš dostaneš se k <span className="font-bold">pokladu</span>
        </p>
        <Link href="/first-question">
          <button className="w-full">Jsem připravena</button>
        </Link>
      </div>
    </>
  );
}
