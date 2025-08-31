"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco',
    date: '2024',
  },
  {
    title: 'Numpy For Data Science',
    issuer: 'Udemy',
    date: '2024',
  },
  {
    title: 'Advanced Python Course',
    issuer: 'NAVTECH',
    date: '2024',
  },
  {
    title: 'Information Technology Specialist: Python',
    issuer: 'Certiport / Pearson',
    date: 'June 25, 2024',
  },
  {
    title: 'Python 101 for Data Science',
    issuer: 'IBM / Cognitive Class',
    date: '2024',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Certifications & Credentials</h2>
          <p className="text-lg text-muted-foreground mt-2">My professional learning and achievements.</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {certifications.map((cert, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                 <motion.div
                  className="h-full"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  custom={index}
                >
                  <Card className="h-full flex flex-col items-start text-left p-6 transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader className="p-0 mb-4 flex-row items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-semibold">{cert.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <p className="text-muted-foreground text-sm font-medium">{cert.issuer}</p>
                      <p className="text-muted-foreground text-xs mt-1">{cert.date}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>
      </div>
    </section>
  );
}
