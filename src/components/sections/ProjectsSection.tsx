import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Shield, Search } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Malware Detection Using Machine Learning',
      description: 'Built an intelligent malware detection system leveraging machine learning algorithms including Decision Tree, Random Forest, and Support Vector Machine (SVM) to identify and classify potential threats with high accuracy.',
      icon: Shield,
      features: [
        'Implemented multiple ML algorithms for comparison',
        'Achieved high detection accuracy on test datasets',
        'Feature extraction from executable files',
        'Real-time threat classification system'
      ],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Git', 'GitHub'],
      category: 'Machine Learning',
      status: 'Completed'
    },
    {
      title: 'Vulnerability Assessment & Security Analysis',
      description: 'Comprehensive security testing project focusing on network and web application vulnerabilities. Performed systematic testing to uncover misconfigurations and security flaws including SQL injection and Cross-Site Scripting (XSS).',
      icon: Search,
      features: [
        'Network infrastructure vulnerability scanning',
        'Web application security testing',
        'OWASP Top 10 vulnerability identification',
        'Detailed security reports with remediation strategies'
      ],
      technologies: ['Kali Linux', 'Nmap', 'Wireshark', 'Nikto', 'OWASP ZAP', 'Git', 'GitHub'],
      category: 'Security Testing',
      status: 'Completed'
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Featured <span className="bg-gradient-hero bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Practical cybersecurity projects demonstrating expertise in threat detection, 
            vulnerability assessment, and security analysis using industry-standard tools and methodologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <CardHeader className="bg-gradient-card">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-hero p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2 text-xs">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-xl font-bold leading-tight">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <Badge 
                    variant="secondary"
                    className="bg-accent/20 text-accent border-accent/30"
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <div className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="border-0 shadow-smooth bg-gradient-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">More Projects Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                I'm continuously working on new cybersecurity projects and research. 
                Stay tuned for more innovative solutions in threat detection and security analysis.
              </p>
              <Button className="bg-gradient-hero hover:opacity-90">
                <Github className="h-4 w-4 mr-2" />
                View All Projects on GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;