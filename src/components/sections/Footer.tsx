import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Kadiyam Rahul Prasad
            </h3>
            <p className="text-muted-foreground mt-2">
              Cybersecurity Enthusiast
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('mailto:rahulprasad0205@gmail.com')}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('https://linkedin.com/in/rahulprasad0205', '_blank')}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('https://github.com/rahulprasad0205', '_blank')}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <Github className="h-5 w-5" />
            </Button>
          </div>

          {/* Right - Back to Top */}
          <div className="text-center md:text-right">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Kadiyam Rahul Prasad. All rights reserved. | 
            <span className="ml-1">Built with React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;