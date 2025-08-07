import { Button } from '@/components/ui/button';
import { Download, Mail, Shield, Code, Target, Star } from 'lucide-react';
import heroBg from '@/assets/cyber-hero-bg.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with multiple layers */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/95 to-accent/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-accent/10 rounded-full animate-float delay-1000 blur-sm"></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-warning/10 rounded-full animate-float delay-2000 blur-sm"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-primary/10 rounded-full animate-float delay-3000 blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 animate-scale-in">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Cybersecurity Professional</span>
          </div>
          
          {/* Main heading */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block bg-gradient-hero bg-clip-text text-transparent animate-glow">
                Kadiyam Rahul Prasad
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl text-muted-foreground font-medium max-w-4xl mx-auto leading-relaxed">
              Cybersecurity Enthusiast | Python Programmer | 
              <span className="text-primary font-semibold"> Open to Entry-Level Roles</span>
            </p>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Computer Science graduate specializing in Cybersecurity. Passionate about protecting 
            digital infrastructure and exploring threat detection, actively seeking opportunities 
            to contribute and grow in the cybersecurity field.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in delay-500">
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-hero text-lg px-8 py-4 animate-glow">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          {/* Enhanced stats with icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto animate-fade-in delay-700">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-hero p-4 rounded-2xl w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:animate-glow">
                <Code className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-primary">2024</div>
              <div className="text-sm text-muted-foreground">Fresh Graduate</div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-accent p-4 rounded-2xl w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:animate-glow">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-accent">5+</div>
              <div className="text-sm text-muted-foreground">Security Tools</div>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-warning p-4 rounded-2xl w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:animate-glow">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-warning">100%</div>
              <div className="text-sm text-muted-foreground">Passionate</div>
            </div>
          </div>

          {/* Specialty tags */}
          <div className="flex flex-wrap justify-center gap-3 pt-8 animate-fade-in delay-1000">
            {['Penetration Testing', 'Vulnerability Assessment', 'Malware Analysis', 'Network Security'].map((skill, index) => (
              <div 
                key={index}
                className="bg-card border border-border/50 rounded-full px-4 py-2 text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                <Star className="inline h-3 w-3 mr-1 text-primary" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
