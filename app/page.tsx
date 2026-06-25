import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
