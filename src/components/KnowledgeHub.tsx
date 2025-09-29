import { BookOpen, Shield, Wifi, Bug, Zap, AlertTriangle, Lock, Search, ChevronDown, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";

const attackTypes = [
  {
    icon: Wifi,
    title: "Phishing Attacks",
    description: "Learn to identify and prevent email and website phishing attempts",
    severity: "high",
    color: "destructive"
  },
  {
    icon: Bug,
    title: "Malware Protection",
    description: "Understanding different types of malicious software and defense strategies",
    severity: "critical",
    color: "destructive"
  },
  {
    icon: Lock,
    title: "Ransomware Defense",
    description: "Prevention techniques and recovery strategies for ransomware attacks",
    severity: "critical", 
    color: "destructive"
  },
  {
    icon: Zap,
    title: "DDoS Attacks",
    description: "Distributed denial of service attack patterns and mitigation methods",
    severity: "medium",
    color: "warning"
  },
  {
    icon: Shield,
    title: "Social Engineering",
    description: "Human-based attack vectors and psychological manipulation tactics",
    severity: "high",
    color: "destructive"
  },
  {
    icon: AlertTriangle,
    title: "Zero-Day Exploits",
    description: "Understanding and preparing for unknown security vulnerabilities",
    severity: "critical",
    color: "destructive"
  }
];

const KnowledgeHub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState('all');

  // Filter attack types based on search term and severity
  const filteredAttackTypes = attackTypes.filter(attack => {
    const matchesSearch = attack.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         attack.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = selectedSeverity === 'all' || attack.severity === selectedSeverity;
    return matchesSearch && matchesSeverity;
  });

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <section id="knowledge" className="py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <BookOpen className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">Knowledge Hub</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Master <span className="text-accent">Cybersecurity</span> Fundamentals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Interactive learning modules covering the most common cyber threats and proven defense strategies.
          </p>
          
          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text"
                  placeholder="Search attack types, defenses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                />
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Severity Filter */}
              <div className="flex gap-2">
                <Button
                  variant={selectedSeverity === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedSeverity('all')}
                >
                  All
                </Button>
                <Button
                  variant={selectedSeverity === 'critical' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedSeverity('critical')}
                >
                  Critical
                </Button>
                <Button
                  variant={selectedSeverity === 'high' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedSeverity('high')}
                >
                  High
                </Button>
                <Button
                  variant={selectedSeverity === 'medium' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedSeverity('medium')}
                >
                  Medium
                </Button>
              </div>
            </div>

            {/* Search Results Info */}
            {searchTerm && (
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Found {filteredAttackTypes.length} result{filteredAttackTypes.length !== 1 ? 's' : ''} for "{searchTerm}"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Attack Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAttackTypes.length > 0 ? (
            filteredAttackTypes.map((attack, index) => {
            const IconComponent = attack.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {attack.title}
                        </CardTitle>
                      </div>
                    </div>
                    <Badge 
                      variant={attack.severity === "critical" ? "destructive" : 
                               attack.severity === "high" ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {attack.severity}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{attack.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Interactive lesson</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="group-hover:text-primary"
                      onClick={() => window.open(`https://en.wikipedia.org/wiki/${attack.title.replace(/\s+/g, '_')}`, '_blank')}
                    >
                      Learn More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })
          ) : (
            <div className="col-span-full text-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters
              </p>
              <Button variant="outline" onClick={clearSearch}>
                Clear Search
              </Button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card/30 backdrop-blur-sm rounded-xl p-8 border border-border">
          <h3 className="text-2xl font-bold mb-4">Ready to Become a Cybersecurity Expert?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Access our complete library of interactive tutorials, real-world scenarios, and hands-on labs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="animate-glow-pulse"
              onClick={() => window.open('https://en.wikipedia.org/wiki/Cybersecurity', '_blank')}
            >
              Start Learning Journey
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Browse All Topics
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem onClick={() => window.open('https://en.wikipedia.org/wiki/Phishing', '_blank')}>
                  Phishing Attacks
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open('https://en.wikipedia.org/wiki/Malware', '_blank')}>
                  Malware Protection
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open('https://en.wikipedia.org/wiki/Ransomware', '_blank')}>
                  Ransomware Defense
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open('https://en.wikipedia.org/wiki/Denial-of-service_attack', '_blank')}>
                  DDoS Attacks
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open('https://en.wikipedia.org/wiki/Social_engineering_(security)', '_blank')}>
                  Social Engineering
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open('https://en.wikipedia.org/wiki/Zero-day_(computing)', '_blank')}>
                  Zero-Day Exploits
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open('https://en.wikipedia.org/wiki/Network_security', '_blank')}>
                  Network Security
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;