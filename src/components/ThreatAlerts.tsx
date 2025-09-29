import { AlertTriangle, Clock, MapPin, Eye, ChevronRight, Zap, Bug, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const threatAlerts = [
  {
    id: 1,
    title: "Ransomware Campaign Targeting Healthcare",
    description: "New ransomware variant detected targeting hospital systems across multiple regions.",
    severity: "critical",
    timestamp: "2 minutes ago",
    location: "Global",
    affected: "Healthcare sector",
    icon: Bug,
    views: 1847
  },
  {
    id: 2,
    title: "Phishing Campaign Using AI-Generated Emails",
    description: "Sophisticated phishing campaign using large language models to create convincing emails.",
    severity: "high",
    timestamp: "15 minutes ago",
    location: "North America, Europe",
    affected: "Financial services",
    icon: AlertTriangle,
    views: 923
  },
  {
    id: 3,
    title: "Zero-Day Exploit in Popular CMS Platform",
    description: "Critical vulnerability discovered in widely-used content management system.",
    severity: "critical",
    timestamp: "1 hour ago",
    location: "Worldwide",
    affected: "Web applications",
    icon: Zap,
    views: 2156
  },
  {
    id: 4,
    title: "DDoS Attacks on Financial Infrastructure",
    description: "Coordinated distributed denial-of-service attacks targeting banking systems.",
    severity: "medium",
    timestamp: "3 hours ago",
    location: "Asia-Pacific",
    affected: "Banking sector",
    icon: Shield,
    views: 743
  }
];

const ThreatAlerts = () => {
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const severityFilters = ['all', 'critical', 'high', 'medium', 'low'];

  const filteredAlerts = selectedSeverity === 'all' 
    ? threatAlerts 
    : threatAlerts.filter(alert => alert.severity === selectedSeverity);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'destructive';
      case 'high': return 'destructive'; 
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'secondary';
    }
  };

  return (
    <section id="threats" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
            <AlertTriangle className="h-4 w-4 text-destructive" />
            <span className="text-sm text-muted-foreground">Live Threat Alerts</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real-time <span className="text-destructive">Security Alerts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Stay informed about the latest cybersecurity threats and vulnerabilities as they emerge globally.
          </p>

          {/* Severity Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {severityFilters.map((severity) => (
              <Button
                key={severity}
                variant={selectedSeverity === severity ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSeverity(severity)}
                className="capitalize"
              >
                {severity}
              </Button>
            ))}
          </div>
        </div>

        {/* Alert Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {filteredAlerts.map((alert) => {
            const IconComponent = alert.icon;
            return (
              <Card 
                key={alert.id}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-destructive/50 transition-all duration-300 group cursor-pointer"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-destructive/10 rounded-lg group-hover:bg-destructive/20 transition-colors">
                        <IconComponent className="h-5 w-5 text-destructive" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant={getSeverityColor(alert.severity)} className="text-xs uppercase">
                            {alert.severity}
                          </Badge>
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <Eye className="h-3 w-3" />
                            <span>{alert.views}</span>
                          </div>
                        </div>
                        <CardTitle className="text-lg group-hover:text-destructive transition-colors">
                          {alert.title}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{alert.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{alert.timestamp}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{alert.location}</span>
                      </div>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Affected: </span>
                      <span className="text-foreground font-medium">{alert.affected}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="group-hover:text-destructive"
                      onClick={() => window.open(`https://en.wikipedia.org/wiki/${alert.title.replace(/\s+/g, '_')}`, '_blank')}
                    >
                      View Details
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open('https://en.wikipedia.org/wiki/Cybersecurity', '_blank')}
                    >
                      Get Protection
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ThreatAlerts;