import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-purple-500 font-sans dark:bg-purple-900">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-purple-900 sm:items-center">
 
        <div className="flex flex-col items-center gap-6 text-center sm:items-center sm:text-center">
          <h1 className="max-w-xs text-6xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Feliz Carnaval!!
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
           Que sejam dias de alegria, música e muita diversão. Aproveite cada momento{" "}
           </p>
        </div>
      </main>
    </div>
  );
}
