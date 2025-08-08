import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Send an Email',
      link: 'mailto:rahulprasad0205@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect On LinkedIn',
      link: 'https://linkedin.com/in/rahulprasad0205'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Open to Remote & Relocation',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Get In <span className="bg-gradient-hero bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to contribute to your cybersecurity team? Let's discuss how my skills and passion 
            for digital security can help protect your organization.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 text-center">
            <div>
              <h3 className="text-2xl font-semibold font-heading mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                I'm actively seeking entry-level opportunities in cybersecurity. Whether you're looking 
                for a Security Analyst, SOC Analyst, or Cybersecurity Specialist, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-smooth hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-hero p-4 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{info.label}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-primary hover:text-primary-dark transition-colors font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground font-medium">{info.value}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-hero hover:opacity-90 shadow-hero text-lg px-8 py-4"
                onClick={() => window.open('mailto:rahulprasad0205@gmail.com')}
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4"
                onClick={() => window.open('https://linkedin.com/in/rahulprasad0205', '_blank')}
              >
                <Linkedin className="h-5 w-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </div> */}

            {/* Additional CTA */}
            <Card className="border-0 shadow-smooth bg-gradient-card mt-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Ready to Secure Your Organization?</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
                  Let's discuss how my cybersecurity expertise and passion for digital protection 
                  can contribute to your team's success and help safeguard your digital assets.
                </p>
                <Button asChild className="bg-gradient-hero hover:opacity-90">
                <a
                    href="/Rahul_Prasad_Resume_2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View My Resume
                  </a>
                </Button>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;