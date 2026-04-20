import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} {personalInfo.name}. Built with React, Three.js, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};