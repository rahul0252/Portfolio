import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experience = {
    company: 'Oasis Infobyte',
    position: 'Security Analyst Intern',
    duration: '2024',
    location: 'Remote',
    description: 'Conducted comprehensive security assessments on networks and web applications using industry-standard tools. Identified OWASP Top 10 vulnerabilities and provided detailed mitigation strategies to enhance security posture.',
    achievements: [
      'Performed network security assessments using Nmap and Wireshark',
      'Conducted web application vulnerability testing',
      'Identified critical security vulnerabilities including SQLi and XSS',
      'Documented findings and provided actionable remediation strategies',
      'Gained hands-on experience with penetration testing methodologies'
    ],
    tools: ['Nmap', 'Wireshark', 'Nikto', 'OWASP ZAP', 'Burp Suite', 'Kali Linux']
  };

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Professional <span className="bg-gradient-hero bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience in cybersecurity through internships and practical projects, 
            developing real-world skills in threat assessment and vulnerability analysis.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-hero text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                <div>
                  <CardTitle className="text-2xl font-bold">{experience.position}</CardTitle>
                  <div className="flex items-center space-x-4 mt-2 text-white/90">
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{experience.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="space-y-8">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Role Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">{experience.description}</p>
                </div>

                {/* Key Achievements */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Key Achievements</h3>
                  <div className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Used */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.tools.map((tool, index) => (
                      <Badge 
                        key={index}
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Future Goals */}
          <Card className="mt-8 border-0 shadow-smooth bg-gradient-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Looking Forward</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Building on this foundation, I'm eager to contribute to a dynamic cybersecurity team 
                where I can apply my skills in threat detection, vulnerability assessment, and security 
                monitoring while continuing to learn and grow in this rapidly evolving field.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;