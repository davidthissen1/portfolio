import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';

interface Project {
  id: string;
  name: string;
  year: string;
  imageUrl: string;
  description: string;
  techStack: string[];
  github: string;
}

const ProjectsSection = () => {
  const projects = [
    {
      id: 'costcheck',
      name: 'CostCheck',
      year: '2025',
      imageUrl: '/images/costcheck.png',
      description: `A modern price-tracking dashboard using Next.js (React, TypeScript), integrating real-time grocery and household item price data from the Bureau of Labor Statistics (BLS) and USDA APIs.

      Key Features:
      • Real-time price data integration from BLS and USDA APIs
      • Responsive, user-friendly UI with Tailwind CSS and shadcn/ui components
      • Dynamic tables and interactive charts
      • Live search and filter functionality
      • Serverless API routes for secure data aggregation`,
      techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'BLS API', 'USDA API', 'Tailwind CSS'],
      github: 'https://github.com/davidthissen1/CostCheck'
    },
    {
      id: 1,
      name: 'Nutrify',
      year: '2025',
      imageUrl: '/images/nutrify.jpeg',
      description: `A sophisticated web application built with Flask and Python that helps users track their nutrient intake and achieve their dietary goals. The application leverages the Gemini API for advanced food image analysis, providing users with detailed nutrient information.

      Key Features:
      • AI-Powered Food Analysis using Gemini API
      • User Authentication System
      • Comprehensive Nutrient Tracking
      • Interactive Dashboard
      • Progress Monitoring`,
      techStack: 'Python, Flask, SQLAlchemy, Gemini API, HTML/CSS, JavaScript, SQLite',
      github: 'https://github.com/davidthissen1/Nutrify'
    },
    {
      id: 'career-cloud',
      name: 'Career Cloud',
      year: '2025',
      imageUrl: '/images/coopercloud.png',
      description: 'An AI-powered career quiz application that helps users discover their ideal career path. Users answer a series of questions about their interests, skills, and preferences, and the AI algorithm provides personalized job recommendations based on their responses.',
      techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/Professional-Computing-Society/275Final'
    },
    {
      id: 'mynews',
      name: 'MyNews',
      year: '2024',
      imageUrl: '/images/mynews.jpeg',
      description: 'A news aggregation platform that uses AI to summarize and categorize news articles. Features include personalized news feeds, article summarization, and topic categorization.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'TensorFlow.js', 'News API', 'Tailwind CSS'],
      github: 'https://github.com/davidthissen1/mynews'
    }
    
  ];

  return (
    <section id="projects" className="py-16">
      <div className="section-container">
        <h2 className="section-header">Projects</h2>

        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-12">
          The future depends on what you do today.
          <footer className="text-sm mt-2">- Mahatma Gandhi -</footer>
        </blockquote>

        <div className="space-y-16">
          {projects.map((project) => (
            <Card key={project.id} className="bg-background/50 border-0">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <div className="text-sm text-muted-foreground mb-1">{project.year}</div>
                    <h3 className="text-xl font-semibold text-primary mb-4">{project.name}</h3>

                    <div className="mt-auto">
                      <div className="text-sm leading-relaxed space-y-4 whitespace-pre-line mb-4">
                        {project.description}
                      </div>

                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium text-primary">Tech Stack: </span>
                          <span className="text-sm text-muted-foreground">
                            {Array.isArray(project.techStack) ? project.techStack.join(', ') : project.techStack}
                          </span>
                        </div>

                        {project.github && (
                          <div>
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline inline-flex items-center gap-2"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                              </svg>
                              View on GitHub
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="relative h-[250px] w-full rounded-md overflow-hidden bg-background/30 flex items-center justify-center p-8">
                    <Image
                      src={project.imageUrl}
                      alt={project.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
