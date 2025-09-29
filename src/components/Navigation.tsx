import { Shield, BarChart3, BookOpen, AlertTriangle, User, Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Shield className="h-8 w-8 text-primary animate-glow-pulse" />
            <span className="text-xl font-bold text-foreground">InfoSec</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('dashboard')}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <BarChart3 className="h-4 w-4" />
              <span>Dashboard</span>
            </button>
            <button 
              onClick={() => scrollToSection('knowledge')}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              <span>Knowledge Hub</span>
            </button>
            <button 
              onClick={() => scrollToSection('threats')}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <AlertTriangle className="h-4 w-4" />
              <span>Threat Alerts</span>
            </button>
            <button 
              onClick={() => scrollToSection('terms')}
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              <span>Terms</span>
            </button>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                <Button variant="outline" size="sm" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/auth')}
                >
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button 
                  size="sm" 
                  className="animate-glow-pulse"
                  onClick={() => navigate('/auth')}
                >
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('dashboard')}
                className="flex items-center space-x-3 w-full text-left p-3 rounded-lg hover:bg-card/50 transition-colors"
              >
                <BarChart3 className="h-5 w-5 text-primary" />
                <span>Dashboard</span>
              </button>
              <button 
                onClick={() => scrollToSection('knowledge')}
                className="flex items-center space-x-3 w-full text-left p-3 rounded-lg hover:bg-card/50 transition-colors"
              >
                <BookOpen className="h-5 w-5 text-accent" />
                <span>Knowledge Hub</span>
              </button>
              <button 
                onClick={() => scrollToSection('threats')}
                className="flex items-center space-x-3 w-full text-left p-3 rounded-lg hover:bg-card/50 transition-colors"
              >
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <span>Threat Alerts</span>
              </button>
              <button 
                onClick={() => scrollToSection('terms')}
                className="flex items-center space-x-3 w-full text-left p-3 rounded-lg hover:bg-card/50 transition-colors"
              >
                <BookOpen className="h-5 w-5 text-cyber-green" />
                <span>Cyber Terms</span>
              </button>
              <div className="pt-4 space-y-3">
                {user ? (
                  <>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground p-3">
                      <User className="h-4 w-4" />
                      <span>{user.email}</span>
                    </div>
                    <Button variant="outline" className="w-full" onClick={handleSignOut}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => navigate('/auth')}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                    <Button 
                      className="w-full animate-glow-pulse"
                      onClick={() => navigate('/auth')}
                    >
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;