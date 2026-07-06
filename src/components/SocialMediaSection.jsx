function SocialMediaSection() {
  return (
    // px-8: horizontal padding
    // py-20: vertical spacing
    // bg-gray-50: subtle grey background to separate from other sections
    // text-center: center all text
    <section className="px-4 md:px-8 py-20 bg-gray-50 text-center">

      {/* text-7xl: huge matching heading
          font-bold: bold
          mb-12: margin bottom for breathing space */}
      <h2 className="text-4xl md:text-7xl font-bold mb-12">Connect with me</h2>

      {/* flex: lays the links horizontally
          gap-8: spacing between each link
          justify-center: centers them on the page
          text-lg: larger text for better readability */}
      <ul className="flex flex-wrap gap-6 md:gap-8 justify-center text-lg">

        {/* hover:underline: adds underline on hover for nice interaction */}
        <li>
          <a 
            href="https://github.com/jameschibueze25-ux"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 transition-colors"
          >
            GitHub
          </a>
        </li>

        <li>
          <a 
            href="https://www.linkedin.com/in/james-eboka-a99a77235/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 transition-colors"
          >
            LinkedIn
          </a>
        </li>

        <li>
          <a 
            href="mailto:JamesChibueze25@gmail.com"
            className="hover:text-emerald-600 transition-colors"
          >
            Email
          </a>
        </li>

      </ul>
    </section>
  );
}

export default SocialMediaSection;