import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ProfileSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
