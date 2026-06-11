import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import ResultsSection from "@/components/results-section"
import Footer from "@/components/footer"
import TestimonialsSection from "@/components/testimonialsSection"
import MethodologySection from "@/components/nossametodologia"
import CostCondominiumSection from "@/components/cost-condominium-section"
import FinalCTASection from "@/components/final-cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <ProjectsSection />
      <CostCondominiumSection />
      <AboutSection />
      <ResultsSection />
      <MethodologySection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
