import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects } from '../data/portfolioData';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing production-ready AI/ML applications and full-stack platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col shadow-card border-border/50 hover:shadow-elegant transition-smooth hover:-translate-y-1 overflow-hidden group"
            >
              {/* Gradient top accent */}
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {project.date}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {project.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tech.length - 4} more
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3 mt-auto">
                <Button
                  size="sm"
                  variant="default"
                  className="flex-1"
                  onClick={() => window.open(project.links.demo, '_blank')}
                >
                  View Demo
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.open(project.links.github, '_blank')}
                >
                  GitHub
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};