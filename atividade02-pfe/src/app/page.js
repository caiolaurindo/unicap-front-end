import Profile from "./components/profile";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-blue-500 text-white font-sans text-center">
      <h1 className="title">
        Site criado para a disciplina Programação Front-End
      </h1>

      <Profile />
    </div>
  );
}