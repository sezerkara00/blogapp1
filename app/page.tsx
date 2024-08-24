import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Archive from "@/components/Archive/Archive";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col bg-mycolor-400">
      <Navbar />
      <div className="container mt-24 md:mt-36 px-12 py-4 ">
        <Hero/>
        <Archive />
        <About/>
        <Projects/>
      </div>
    </main>
    
    </>
  );
}
