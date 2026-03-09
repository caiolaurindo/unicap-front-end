import Image from "next/image";
import Profile from "./components/profile";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="title">Site criado para a disciplina Programação Front-End</h1>
      <Profile/>
    </div>
  );
}
