import AboutMe from "@/components/AboutMe/AboutMe";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import Projects from "@/components/Projects/Projects"
import Skills from "@/components/Skills/Skills";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <NavBar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
    </div>
  );
}
