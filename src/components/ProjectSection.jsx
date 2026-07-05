function ProjectSection() {
  return (
    // px-8: horizontal padding
    // py-20: vertical spacing
    // bg-white: white background
    // text-center: centers heading
    <section id="projects" className="px-8 py-20 bg-white text-center">

      {/* text-7xl: huge heading
          font-bold: bold
          mb-12: margin bottom */}
      <h2 className="text-5xl md:text-7xl font-bold mb-12">Projects</h2>

      {/* max-w-md: limits card width
          mx-auto: centers it
          p-8: padding inside card
          border: light grey border
          rounded-2xl: rounded corners
          hover:shadow-lg: shadow on hover
          transition: smooth hover effect
          block: makes the link a block element
          text-left: aligns text inside left */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <a
          href="https://james-weather.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition text-left"
        >
          <h3 className="text-2xl font-bold mb-3">🌤️ WEATHER APP</h3>

          <p className="text-gray-600 mb-4">
            Real-time weather forecasts using OpenWeatherMap API.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">React</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Tailwind CSS</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">useEffect</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">API</span>
          </div>

          <span className="text-sm font-medium">Visit site →</span>
        </a>

        <a
          href="https://james-ai-cover-letter-generator-lake.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition text-left"
        >
          <h3 className="text-2xl font-bold mb-3">AI COVER LETTER GENERATOR</h3>

          <p className="text-gray-600 mb-4">
            AI-powered cover letter generator for job applications.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">React</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Vite</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Tailwind CSS</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Async/Await</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Groq API</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Fetch API</span>
          </div>

          <span className="text-sm font-medium">Visit site →</span>
        </a>

        <a
          href="https://blade-fade-berlin.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition text-left"
        >
          <h3 className="text-2xl font-bold mb-3">BLADE FADE BERLIN</h3>

          <p className="text-gray-600 mb-4">
            Showcase site for a Berlin barber shop, featuring services, a gallery, and contact information.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">React</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Vite</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">JavaScript</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Tailwind CSS</span>
          </div>

          <span className="text-sm font-medium">Visit site →</span>
        </a>

        <a
          href="https://slayinbraid.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition text-left"
        >
          <h3 className="text-2xl font-bold mb-3">SLAYIN BRAID</h3>

          <p className="text-gray-600 mb-4">
            Site for a hair braiding business with an appointment booking feature.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">React</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Vite</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">TypeScript</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Tailwind CSS</span>
          </div>

          <span className="text-sm font-medium">Visit site →</span>
        </a>
      </div>
    </section>
  )
}

export default ProjectSection;