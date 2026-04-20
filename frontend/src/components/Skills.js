import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { skills } from '../data/portfolioData';

export const Skills = () => {
  const skillCategories = Object.entries(skills);

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across the full AI/ML and development stack
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map(([category, skillList], index) => (
            <Card
              key={index}
              className="p-6 shadow-card border-border/50 hover:shadow-elegant transition-smooth hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-6 text-primary flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};