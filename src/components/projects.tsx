"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink, Eye } from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    title: 'Agorz Genie – Text-to-SQL System',
    description: 'I designed and built Agorz Genie from scratch, a real-time Text-to-SQL engine that lets users query MS SQL Server databases using natural language. It integrates an Angular frontend with a FastAPI/Flask backend, powered by the Gemini LLM API. To ensure accuracy, I implemented a RAG pipeline with Haystack (BM25Retriever) that injects schema, SQL rules, and contextual examples into prompts. The system also includes voice-to-text input, Excel logging (via pandas & openpyxl), and optimized performance with SQLAlchemy connection pooling and response caching.',
    image: 'https://picsum.photos/600/400?random=1',
    tags: ['Angular', 'FastAPI', 'Gemini', 'RAG', 'SQLAlchemy'],
    liveUrl: '#',
    githubUrl: '#',
    dataAiHint: 'database query interface'
  },
  {
    title: 'Face Recognition Attendance System',
    description: 'I developed an AI-driven attendance system from scratch using face recognition technology. The solution automates daily attendance tracking by capturing and verifying employee faces in real-time. It eliminates manual errors, speeds up check-ins, and securely stores attendance data for reporting. The system was tailored to our office workflow, ensuring reliability, accuracy, and scalability.',
    image: 'https://picsum.photos/600/400?random=2',
    tags: ['Python', 'OpenCV', 'Face Recognition', 'AI'],
    liveUrl: '#',
    githubUrl: '#',
    dataAiHint: 'facial recognition'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects, built with Next.js, Tailwind CSS, and ShadCN UI for a modern and responsive design. It features smooth animations and a theme customizer, and is statically exported for fast performance on Firebase Hosting.',
    image: 'https://picsum.photos/600/400?random=3',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'ShadCN UI'],
    liveUrl: '#',
    githubUrl: '#',
    dataAiHint: 'personal website'
  },
  {
    title: 'AI-Powered Chatbot',
    description: 'A customer service chatbot developed using Google\'s Gemini model via Genkit. The project is integrated with Firebase for backend services, providing a scalable and intelligent conversational AI solution for user inquiries.',
    image: 'https://picsum.photos/600/400?random=4',
    tags: ['Next.js', 'Genkit', 'Firebase', 'Gemini'],
    liveUrl: '#',
    githubUrl: '#',
    dataAiHint: 'chatbot interface'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-lg text-muted-foreground mt-2">A selection of my recent work.</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader className="p-0">
                       <div className="aspect-video relative">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="object-cover"
                            data-ai-hint={project.dataAiHint}
                          />
                       </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                        <CardTitle className="mb-2">{project.title}</CardTitle>
                        <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                        </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 mt-auto">
                       <div className="flex w-full justify-between items-center">
                            <div className="flex gap-2">
                                <Button asChild variant="ghost" size="icon" aria-label="GitHub repository">
                                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github /></Link>
                                </Button>
                                <Button asChild variant="ghost" size="icon" aria-label="Live demo">
                                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink /></Link>
                                </Button>
                            </div>

                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline">
                                  <Eye className="mr-2 h-4 w-4" />
                                  Read More
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[625px]">
                                <DialogHeader>
                                  <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                                      <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={625}
                                        height={350}
                                        className="object-cover"
                                        data-ai-hint={project.dataAiHint}
                                      />
                                  </div>
                                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                                  <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                  </div>
                                </DialogHeader>
                                <DialogDescription className="text-base text-foreground pt-2">
                                  {project.description}
                                </DialogDescription>
                                <div className="flex gap-2 pt-4">
                                  <Button asChild>
                                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2" /> View Live
                                      </Link>
                                  </Button>
                                   <Button asChild variant="secondary">
                                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                        <Github className="mr-2" /> GitHub
                                      </Link>
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                       </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex ml-12" />
          <CarouselNext className="hidden md:flex mr-12" />
        </Carousel>
      </div>
    </section>
  );
}
