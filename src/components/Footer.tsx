import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-background border-t border-border/20">
      <div className="section-container">
        <div className="text-center text-muted-foreground text-sm">
          © {currentYear} David Thissen. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
