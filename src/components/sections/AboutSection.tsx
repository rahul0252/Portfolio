import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Shield, Code, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'B.Tech in Computer Science & Engineering with Cybersecurity specialization from Parul University'
    },
    {
      icon: Shield,
      title: 'Security Focus',
      description: 'Specialized in threat detection, digital forensics, and security monitoring'
    },
    {
      icon: Code,
      title: 'Technical Skills',
      description: 'Proficient in Python, C, SQL with hands-on experience in security tools'
    },
    {
      icon: Target,
      title: 'Career Goal',
      description: 'Seeking entry-level opportunities to contribute and grow in cybersecurity field'
    }
  ];

  const coursework = [
    'Cryptography',
    'Reverse Engineering', 
    'Malware Analysis',
    'Security Monitoring',
    'Web Application Security',
    'Network Security',
    'Introduction to Cybersecurity'
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            About <span className="bg-gradient-hero bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate cybersecurity professional with a strong foundation in computer science 
            and a dedication to protecting digital assets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold font-heading">Educational Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                B.Tech in Computer Science and Engineering with specialization in Cybersecurity 
                from Parul University (Class of 2024). My academic journey has equipped me with 
                both theoretical knowledge and practical skills in protecting digital infrastructure.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold font-heading">Key Coursework</h3>
              <div className="grid grid-cols-2 gap-2">
                {coursework.map((course, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold font-heading">Professional Passion</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm deeply passionate about cybersecurity and have dedicated my studies to understanding 
                the evolving landscape of digital threats. My goal is to contribute meaningfully to 
                organizations by implementing robust security measures and staying ahead of emerging threats.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-0 shadow-smooth hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-hero p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;