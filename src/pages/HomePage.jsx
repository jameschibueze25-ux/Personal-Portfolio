import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <HeroSection />

      <section className="px-4 md:px-8 py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <Link to="/project" className="text-sm font-medium underline underline-offset-4">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://james-weather.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition text-left"
            >
              <h3 className="text-xl font-bold mb-2">🌤️ Weather App</h3>
              <p className="text-gray-600 text-sm mb-4">
                Real-time weather forecasts using OpenWeatherMap API.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">React</span>
                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Tailwind CSS</span>
                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">API</span>
              </div>
            </a>

            <a
              href="https://james-ai-cover-letter-generator-lake.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition text-left"
            >
              <h3 className="text-xl font-bold mb-2">AI Cover Letter Generator</h3>
              <p className="text-gray-600 text-sm mb-4">
                AI-powered cover letter generator for job applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">React</span>
                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Groq API</span>
                <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Tailwind CSS</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
