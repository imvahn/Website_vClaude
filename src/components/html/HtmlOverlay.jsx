import { NavBar } from './NavBar'
import { HeroSection } from './HeroSection'
import { AboutSection } from './AboutSection'
import { ProjectsSection } from './ProjectsSection'

export function HtmlOverlay() {
  return (
    <div className="bau-overlay">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  )
}
