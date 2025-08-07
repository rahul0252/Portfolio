import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Shield, Network, Monitor } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      color: 'bg-primary',
      skills: ['Python', 'C', 'SQL', 'JavaScript', 'HTML/CSS']
    },
    {
      icon: Shield,
      title: 'Security Tools',
      color: 'bg-accent',
      skills: ['Splunk', 'Burp Suite', 'Nmap', 'Nikto', 'Wireshark', 'Metasploit Framework']
    },
    {
      icon: Network,
      title: 'Networking & Security',
      color: 'bg-warning',
      skills: ['OWASP Top 10', 'OSI Model', 'TCP/IP Model', 'Network Packet Analysis', 'Vulnerability Assessment']
    },
    {
      icon: Monitor,
      title: 'Operating Systems',
      color: 'bg-gradient-to-r from-primary to-accent',
      skills: ['Windows', 'Kali Linux', 'macOS', 'Ubuntu', 'CentOS']
    }
  ];

  const certifications = [
    'Network Security Fundamentals',
    'Web Application Security',
    'Ethical Hacking Basics',
    'Digital Forensics'
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Technical <span className="bg-gradient-hero bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of programming languages, security tools, and technical expertise 
            developed through academic study and hands-on practice.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-smooth hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Certifications */}
        <Card className="border-0 shadow-smooth bg-gradient-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold">
              Relevant <span className="text-accent">Coursework & Training</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-background rounded-lg p-4 text-center border">
                  <div className="w-3 h-3 bg-accent rounded-full mx-auto mb-2"></div>
                  <p className="text-sm font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;