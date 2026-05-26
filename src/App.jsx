import NavBarSection from './components/NavBarSection'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import { Routes, Route } from 'react-router-dom';


function App() {
  // outer div allows global app-level styling
  return (
    <div className="App bg-white">
      <NavBarSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

  
    </div>
  )
}
export default App;