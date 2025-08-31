"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';

const roles = ["Full-Stack Developer", "Python Developer", "Innovative Tech Explorer","AI-Driven Problem Solver"];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullRole = roles[currentRoleIndex];
      if (isDeleting) {
        setDisplayedRole(fullRole.substring(0, displayedRole.length - 1));
      } else {
        setDisplayedRole(fullRole.substring(0, displayedRole.length + 1));
      }

      if (!isDeleting && displayedRole === fullRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedRole === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const typingSpeed = isDeleting ? 100 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, currentRoleIndex]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Image
                src="https://picsum.photos/1920/1080"
                alt="Abstract background"
                fill
                quality={100}
                className="object-cover"
                data-ai-hint="abstract technology"
            />
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
                    Hi, I&apos;m Yawar
                </h1>
                <h2 className="text-2xl md:text-4xl font-medium text-primary mb-8">
                    A <span className="inline-block min-w-[200px] md:min-w-[400px]">{displayedRole}</span>
                    <span className="animate-pulse">|</span>
                </h2>
                <p className="max-w-xl mx-auto text-lg text-foreground/80 mb-10">
                I build reliable, efficient solutions with Python — from dynamic web applications to AI-powered systems. I love using technology to solve real-world problems that matter.
                </p>
                <div className="flex justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="#projects">View My Work</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="#contact">Get In Touch</Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
}
