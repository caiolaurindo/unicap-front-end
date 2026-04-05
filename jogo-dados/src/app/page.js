"use client";

import Image from "next/image";
import Dado from "./components/Dado";
import { useState } from "react";
import JogoDados from "./components/JogoDasos";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-blue-700">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-blue-700 sm:items-start">
        <JogoDados/>
      </main>
    </div>
  );
}
