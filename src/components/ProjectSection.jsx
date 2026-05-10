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
      <a 
        href="https://james-weather.vercel.app/"
        target="_blank" 
        rel="noopener noreferrer"
        className="block max-w-md mx-auto p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition text-left"
      >
        <h3 className="text-2xl font-bold mb-3">🌤️ Weather App</h3>
        
        <p className="text-gray-600 mb-4">
          Real-time weather forecasts using OpenWeatherMap API.
        </p>
        
        {/* Tech stack tags - small pills */}
        <div className="flex flex-wrap gap-2">
          <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">React</span>
          <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">Tailwind CSS</span>
          <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">useEffect</span>
          <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">API</span>
        </div>
      </a>

    </section>
  )
}

export default ProjectSection;