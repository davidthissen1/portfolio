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

              <div className="relative aspect-square w-full max-w-[300px] mx-auto md:mx-0 overflow-hidden rounded-lg">
                <Image
                  src="/images/wmremove-transformed copy.jpeg"
                  alt="David Thissen"
                  fill
                  className="object-cover"
                  priority
                />
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
