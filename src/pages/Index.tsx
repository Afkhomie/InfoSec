import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DashboardPreview from "@/components/DashboardPreview";
import KnowledgeHub from "@/components/KnowledgeHub";
import ThreatAlerts from "@/components/ThreatAlerts";
import CyberTerms from "@/components/CyberTerms";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <DashboardPreview />
        <KnowledgeHub />
        <ThreatAlerts />
        <CyberTerms />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
