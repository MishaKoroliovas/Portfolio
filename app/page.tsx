import About from "@/components/About";
import Blog from "@/components/Blog";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import CTFLabs from "@/components/CTFLabs";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050807] text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Timeline />
        <Education />
        <CTFLabs />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
