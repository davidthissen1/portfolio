import type React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-secondary/10">
      <div className="section-container">
        <h2 className="section-header">Contact</h2>

        <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-12">
          If opportunity doesn't knock, build a door.
          <footer className="text-sm mt-2">- Milton Berle -</footer>
        </blockquote>

        <p className="mb-8 text-muted-foreground">
          If you want to collaborate on crafting amazing web apps, web sites, e-commerces and mobile
          applications for people. You are very welcome to contact me.
        </p>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">David Thissen</h3>
          <p className="text-sm text-muted-foreground">Web and Mobile Application Development & Craft.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SocialLink
              href="mailto:david.a.thissen@gmail.com"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              }
              text="david.a.thissen@gmail.com"
            />

            <SocialLink
              href="https://www.linkedin.com/in/david-thissen-777312307"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              }
              text="LinkedIn"
            />

            <SocialLink
              href="https://github.com/davidthissen1"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              }
              text="GitHub"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => {
  return (
    <Button
      variant="outline"
      className="flex items-center justify-start gap-3 h-auto py-3 px-4 w-full"
      asChild
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {icon}
        <span>{text}</span>
      </Link>
    </Button>
  );
};

export default ContactSection;
