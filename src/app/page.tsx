import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="md:w-2/3 lg:w-3/5 xl:w-2/5 mx-auto px-2 mt-5">
      <div className="flex flex-col justify-between">
        <Navbar />
        <Projects />
        <Skills />
        <Socials />
        <Footer />
      </div>
    </div>
  );
}
