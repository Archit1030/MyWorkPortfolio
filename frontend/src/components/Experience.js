import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { experience } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional journey in AI/ML engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <Card
              key={index}
              className="shadow-card border-border/50 hover:shadow-elegant transition-smooth border-l-4 border-l-primary"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-grow">
                    <CardTitle className="text-2xl mb-2">{exp.role}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge variant="secondary" className="w-fit">
                      {exp.duration}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <span className="text-accent text-xl mr-3 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};