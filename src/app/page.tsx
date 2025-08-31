import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Certifications } from "@/components/certifications";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Github, Linkedin, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 bg-secondary">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
          <div className="text-center md:text-left text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Yawar. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" aria-label="GitHub profile">
              <Link href="#" target="_blank" rel="noopener noreferrer"><Github /></Link>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="LinkedIn profile">
              <Link href="#" target="_blank" rel="noopener noreferrer"><Linkedin /></Link>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="YouTube channel">
              <Link href="#" target="_blank" rel="noopener noreferrer"><Youtube /></Link>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="Instagram profile">
              <Link href="#" target="_blank" rel="noopener noreferrer"><Instagram /></Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
