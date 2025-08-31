"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BookOpenCheck, NotebookPen } from 'lucide-react';

const certifications = [
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco',
    icon: <BookOpenCheck className="w-10 h-10 text-primary" />,
  },
  {
    title: 'Numpy For Data Science: Real Time Exercises',
    issuer: 'Udemy',
    icon: <Award className="w-10 h-10 text-primary" />,
  },
  {
    title: 'Advanced Python Course',
    issuer: 'NAVTECH at Essence ware Technologies, Rawalpindi',
    icon: <NotebookPen className="w-10 h-10 text-primary" />,
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Certifications & Credentials</h2>
          <p className="text-lg text-muted-foreground mt-2">My professional learning and achievements.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="p-0 mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  {cert.icon}
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <CardTitle className="mb-2 text-lg font-semibold">{cert.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{cert.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
