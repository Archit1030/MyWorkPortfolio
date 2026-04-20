import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { about } from '../data/portfolioData';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about building intelligent solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 shadow-card border-border/50 hover:shadow-elegant transition-smooth">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Background</h3>
            <p className="text-muted-foreground leading-relaxed">
              {about.shortBio}
            </p>
          </Card>

          <Card className="p-8 shadow-card border-border/50 hover:shadow-elegant transition-smooth">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-xl font-semibold text-foreground">{about.education.institution}</h4>
                <p className="text-muted-foreground">{about.education.degree}</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Badge variant="secondary" className="text-sm">
                  {about.education.duration}
                </Badge>
                <Badge variant="outline" className="text-sm border-primary/30 text-primary">
                  CGPA: {about.education.cgpa}
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};