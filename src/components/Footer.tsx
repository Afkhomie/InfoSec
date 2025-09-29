import { Shield, Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary animate-glow-pulse" />
              <span className="text-xl font-bold text-foreground">InfoSec</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Advanced cybersecurity platform providing real-time threat intelligence, 
              interactive learning, and comprehensive security analytics.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Platform</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('dashboard')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Dashboard
              </button>
              <button 
                onClick={() => scrollToSection('knowledge')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Knowledge Hub
              </button>
              <button 
                onClick={() => scrollToSection('threats')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Threat Alerts
              </button>
              <button 
                onClick={() => scrollToSection('terms')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Cyber Terms
              </button>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Resources</h3>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Security Blog
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Research Reports
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                API Documentation
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                White Papers
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Community Forum
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>infosecx64@platform.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+977 1234567890</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Biratnagar, Nepal</span>
              </div>
            </div>
            <div className="pt-4">
              <Button className="w-full animate-glow-pulse">
                Get Security Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 InfoSec Platform. All rights reserved. | Built for cybersecurity awareness and education.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;