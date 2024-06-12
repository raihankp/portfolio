import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import OtherProject from "@/components/OtherProject";
import Profile from "@/components/Profile";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="min-h-screen border-0 max-w-screen-xl mx-auto px-8 py-16 md:py-32 flex flex-col gap-20 md:gap-40">
      <Profile />
      <AboutMe />
      <Project />
      <OtherProject />
      <Contact />
    </main>
  );
}
