"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Wind, Layers, Bot, BrainCircuit } from 'lucide-react';

const skills = [
  { name: 'React', level: 95, icon: <Code className="w-8 h-8" />, category: 'Frontend' },
  { name: 'Next.js', level: 90, icon: <Code className="w-8 h-8" />, category: 'Frontend' },
  { name: 'TypeScript', level: 90, icon: <BrainCircuit className="w-8 h-8" />, category: 'Language' },
  { name: 'Node.js', level: 85, icon: <Database className="w-8 h-8" />, category: 'Backend' },
  { name: 'Tailwind CSS', level: 98, icon: <Wind className="w-8 h-8" />, category: 'Styling' },
  { name: 'Framer Motion', level: 75, icon: <Layers className="w-8 h-8" />, category: 'Animation' },
  { name: 'GenAI', level: 80, icon: <Bot className="w-8 h-8" />, category: 'AI/ML' },
  { name: 'SQL', level: 80, icon: <Database className="w-8 h-8" />, category: 'Database' },
];

function SkillCard({ name, level, icon, category }: { name: string, level: number, icon: React.ReactNode, category: string }) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6 flex flex-col items-center justify-center text-center">
        <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        <Badge variant="secondary">{category}</Badge>
        <div className="absolute inset-0 bg-background/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-sm text-muted-foreground mb-2">Skill Level</p>
            <Progress value={level} className="w-3/4 h-2" />
            <p className="font-bold text-primary text-2xl mt-3">{level}%</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Tech Stack</h2>
          <p className="text-lg text-muted-foreground mt-2">Technologies I love to work with.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
