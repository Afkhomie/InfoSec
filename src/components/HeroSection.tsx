import { Shield, ArrowRight, Zap, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-32 bg-primary/20 animate-data-stream delay-0" />
        <div className="absolute top-40 right-20 w-2 h-24 bg-accent/20 animate-data-stream delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-2 h-28 bg-cyber-green/20 animate-data-stream delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Advanced Cybersecurity Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="text-foreground">Stay Ahead of</span>{" "}
            <span className="text-primary animate-glow-pulse relative inline-block px-4 py-2">
              Cyber Attacks
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm rounded-lg border border-primary/30 -z-10"></div>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed animate-fade-in-up max-w-4xl mx-auto">
            Comprehensive cybersecurity awareness, real-time threat analytics, 
            and interactive learning—all in one powerful platform designed to protect your digital future.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up">
            <Button 
              size="lg" 
              className="group animate-glow-pulse"
              onClick={() => scrollToSection('dashboard')}
            >
              <span>Explore Platform</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('knowledge')}
            >
              View Demo
            </Button>
          </div>

          {/* Feature Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
            <div className="flex flex-col items-center p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 transition-all">
              <Zap className="h-8 w-8 text-primary mb-3" />
              <div className="text-2xl font-bold text-foreground">Real-time</div>
              <div className="text-muted-foreground">Threat Detection</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border hover:border-accent/50 transition-all">
              <Globe className="h-8 w-8 text-accent mb-3" />
              <div className="text-2xl font-bold text-foreground">Global</div>
              <div className="text-muted-foreground">Attack Analytics</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border hover:border-cyber-green/50 transition-all">
              <Users className="h-8 w-8 text-cyber-green mb-3" />
              <div className="text-2xl font-bold text-foreground">Interactive</div>
              <div className="text-muted-foreground">Learning Hub</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scan Line Effect */}
      <div className="absolute top-0 h-px w-px bg-primary animate-scan-line opacity-60" />
    </section>
  );
};

export default HeroSection;