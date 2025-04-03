import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';

const SkillGroup = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <div className="mb-6">
      <h4 className="font-medium mb-3 text-primary/80">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-background/30 px-3 py-1 rounded-full text-sm hover:bg-background/50 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProfileSection = () => {
  const programmingLanguages = [
    'Python',
    'TypeScript',
    'JavaScript',
    'Java',
    'C',
    'C++',
    'ASM',
    'R',
    'HTML',
    'CSS'
  ];

  const developmentTools = [
    'WebEz',
    'Node.js',
    'React',
    'Git',
    'SQL',
    'Flask'
  ];

  const coreSkills = [
    'Data Analysis',
    'Software Development',
    'Database Management',
    'Version Control',
    'Data Structures',
    'Algorithms',
    'Documentation'
  ];

  return (
    <section id="profile" className="py-16 bg-secondary/10">
      <div className="section-container">
        <h2 className="section-header">Profile</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex flex-col space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Name:</h3>
                <p>David Thissen</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Location:</h3>
                <p>Arlington, Virginia</p>
              </div>

              <div className="space-y-4">
                <div className="relative aspect-square w-full max-w-[300px] mx-auto md:mx-0 overflow-hidden rounded-lg">
                  <Image
                    src="/images/wmremove-transformed copy.jpeg"
                    alt="David Thissen"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 max-w-[300px] mx-auto md:mx-0">
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                    <Image
                      src="/images/fam.jpeg"
                      alt="David Thissen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                    <Image
                      src="/images/formal.jpeg"
                      alt="David Thissen"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">About Me</h3>
                  <p className="text-muted-foreground mb-4">
                    Computer Science student at the University of Delaware with a passion for data science and software development. When I'm not coding, you can find me working on projects with the Professional Computing Society or participating in hackathons.
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    <a
                      href="mailto:david.a.thissen@gmail.com"
                      className="flex items-center gap-3 bg-background/30 px-4 py-2 rounded-lg text-primary hover:bg-background/50 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm">david.a.thissen@gmail.com</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/david-thissen-777312307"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-background/30 px-4 py-2 rounded-lg text-primary hover:bg-background/50 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span className="text-sm">LinkedIn Profile</span>
                    </a>
                    <a
                      href="https://github.com/davidthissen1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-background/30 px-4 py-2 rounded-lg text-primary hover:bg-background/50 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="text-sm">GitHub Profile</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <Card className="h-full bg-background/50 border-0">
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-8">
                  An emerging data scientist and demonstrated self-starter with relevant and practiced technical skills seeking opportunities 
                  to tackle challenging research and business growth needs through data processing, analysis, and visualization by engaging 
                  and collaborating with motivated and results-seeking professionals.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-4">Leadership & Achievements</h3>
                  
                  <div className="bg-background/30 p-4 rounded-lg mb-4">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="relative w-16 h-16 overflow-hidden rounded">
                        <Image
                          src="/images/IMG_8352 copy.jpeg"
                          alt="Professional Computing Society"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">President & Founder</h4>
                        <p className="text-sm text-muted-foreground">Professional Computing Society</p>
                        <p className="text-sm text-primary">September 2023 - Present</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Founded and lead a student organization focused on collaborating and building real-world application 
                      projects, fostering innovation and hands-on experience among members. Guide teams in developing 
                      impactful projects, coordinating brainstorming sessions, and ensuring the successful delivery of 
                      solutions addressing real-world challenges.
                    </p>
                  </div>

                  <div className="bg-background/30 p-4 rounded-lg">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="relative w-16 h-16 overflow-hidden rounded">
                        <Image
                          src="/images/IMG_8376 copy.jpeg"
                          alt="HenHacks Award"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">HenHacks 2025 Award Winner</h4>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="8" r="6" />
                            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                          </svg>
                        </div>
                        <p className="text-sm text-muted-foreground">Best Utilization of Gemini API</p>
                        <p className="text-sm text-primary">March 2025</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Led the development of Nutrify, an innovative AI-powered nutrition tracking application that won recognition among over 1,000 participants for its creative use of the Gemini API. The project demonstrated exceptional technical implementation and user experience design.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-4">Education</h3>
                  <div className="bg-background/30 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
                        <p className="text-sm text-muted-foreground">University of Delaware</p>
                      </div>
                      <p className="text-sm text-primary">2023 - 2027</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-6">Technical Expertise</h3>
                  <div className="space-y-6">
                    <SkillGroup title="Programming Languages" skills={programmingLanguages} />
                    <SkillGroup title="Development Tools" skills={developmentTools} />
                    <SkillGroup title="Core Competencies" skills={coreSkills} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
