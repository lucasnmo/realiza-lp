import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import SpecialtiesSection from "@/components/specialties-section"
import ResultsSection from "@/components/results-section"
import Footer from "@/components/footer"
import TestimonialsSection from "@/components/TestimonialsSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <ProjectsSection />
      <AboutSection />
      <SpecialtiesSection />
      <ResultsSection />
      <TestimonialsSection/>
      <Footer />
    </main>
  )
}
