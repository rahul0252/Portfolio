import { Button } from '@/components/ui/button';
import { Download, Mail, ExternalLink } from 'lucide-react';
import profileImage from '@/assets/rahul-profile.jpg';
import heroBg from '@/assets/cyber-hero-bg.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/90 to-accent/10" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold font-heading">
                <span className="block">Kadiyam</span>
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Rahul Prasad
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Cybersecurity Enthusiast | Python Programmer | Open to Entry-Level Roles
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              I'm a Computer Science graduate specializing in Cybersecurity. Passionate about protecting 
              digital infrastructure and exploring threat detection, I'm actively seeking entry-level 
              opportunities to contribute and grow in the cybersecurity field.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-hero">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">2024</div>
                <div className="text-sm text-muted-foreground">Graduate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">5+</div>
                <div className="text-sm text-muted-foreground">Security Tools</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-hero">
                <img 
                  src={profileImage} 
                  alt="Kadiyam Rahul Prasad - Cybersecurity Professional"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg shadow-lg">
                <div className="text-sm font-medium">Cybersecurity</div>
                <div className="text-xs opacity-80">Specialist</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card border shadow-lg px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;