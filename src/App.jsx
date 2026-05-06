import NavBarSection from './components/NavBarSection'
import HeroSection from './components/HeroSection'
import ProjectSection from './components/ProjectSection'
import SocialMediaSection from './components/SocialMediaSection'
import ContactSection from './components/ContactSection'
import AboutSection from './components/AboutSection'
import SkillSection from './components/SkillSection'
function App() {
  // outer div allows global app-level styling
  return (
    <div className="App">
      <NavBarSection />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <SocialMediaSection />
      <ContactSection />

    </div>
  )
}
export default App;