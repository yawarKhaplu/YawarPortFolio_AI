"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with Next.js, Stripe, and Sanity.',
    image: 'https://picsum.photos/600/400?random=1',
    tags: ['Next.js', 'Stripe', 'Sanity', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    dataAiHint: 'online store'
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects.',
    image: 'https://picsum.photos/600/400?random=2',
    tags: ['React', 'Framer Motion', 'GenAI'],
    liveUrl: '#',
    githubUrl: '#',
    dataAiHint: 'personal website'
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style task manager with drag-and-drop functionality.',
    image: 'https://picsum.photos/600/400?random=3',
    tags: ['React', 'TypeScript', 'dnd-kit'],
    liveUrl: '#',
    githubUrl: '#',
    dataAiHint: 'kanban board'
  },
  {
    title: 'AI-Powered Chatbot',
    description: 'A customer service chatbot using Google\'s Gemini model.',
    image: 'https://picsum.photos/600/400?random=4',
    tags: ['Next.js', 'Genkit', 'Firebase'],
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
                        <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                        </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                       <div className="flex w-full justify-between items-center">
                            <div className="flex gap-2">
                                <Button asChild variant="ghost" size="icon" aria-label="GitHub repository">
                                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github /></Link>
                                </Button>
                                <Button asChild variant="ghost" size="icon" aria-label="Live demo">
                                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer"><ExternalLink /></Link>
                                </Button>
                            </div>
                            <Button asChild>
                                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">View Live</Link>
                            </Button>
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
