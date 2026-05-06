import MaintenanceGif from '../Maintenance.gif'

function ProjectSection() {
  return (
    // px-8: horizontal padding
    // py-20: vertical spacing
    // bg-white: white background
    // text-center: centers all child text
    <section className="px-4 md:px-8 py-20 bg-white text-center">

      {/* text-7xl: massive heading to match other sections
          font-bold: bold heading
          mb-12: margin bottom for spacing */}
      <h2 className="text-4xl md:text-7xl font-bold mb-12">Projects</h2>

      {/* w-64: fixed width
          mx-auto: centers the image horizontally
          mb-8: margin bottom to separate from text */}
      <img 
        src={MaintenanceGif} 
        alt="Maintenance" 
        className="w-64 mx-auto mb-8" 
      />

      {/* text-xl: larger text for the message
          text-gray-600: soft grey color
          max-w-2xl: limit width for cleaner reading
          mx-auto: center the paragraph */}
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        🚧 Projects in progress. Currently building real-world projects. Check back soon!
      </p>
      
    </section>
  )
}

export default ProjectSection;