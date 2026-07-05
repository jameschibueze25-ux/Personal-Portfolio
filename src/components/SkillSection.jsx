function SkillSection() {
  return (
    // px-8: horizontal padding
    // py-20: vertical spacing
    // bg-gray-50: light grey background
    <section className="px-4 md:px-8 py-20 bg-gray-50">

      <h2 className="text-4xl md:text-7xl font-bold mb-16">What I do?</h2>

      {/* Each skill row:
          border-t: line on top of each row
          py-8: padding top/bottom inside the row
          flex: side by side layout
          gap-12: space between columns
          items-start: align items to top */}
      
      <div className="py-8 flex flex-col md:flex-row gap-4 md:gap-12 items-start">
        <p className="font-bold flex-1">[01]</p>
        <h3 className="text-2xl font-bold flex-1">React</h3>
        <p className="text-gray-600 flex-1">
          Building dynamic, component-based user interfaces with React and modern hooks.
        </p>
      </div>

      <div className="border-t py-8 flex flex-col md:flex-row gap-4 md:gap-12 items-start">
        <p className="font-bold flex-1">[02]</p>
        <h3 className="text-2xl font-bold flex-1">JavaScript</h3>
        <p className="text-gray-600 flex-1">
          Writing clean, modern JavaScript with ES6+ features for the web.
        </p>
      </div>

      <div className="border-t py-8 flex flex-col md:flex-row gap-4 md:gap-12 items-start">
        <p className="font-bold flex-1">[03]</p>
        <h3 className="text-2xl font-bold flex-1">Typescript</h3>
        <p className="text-gray-600 flex-1">
          Adding static typing to JavaScript for improved code quality and developer experience.
        </p>
      </div>

      <div className="border-t py-8 flex flex-col md:flex-row gap-4 md:gap-12 items-start">
        <p className="font-bold flex-1">[04]</p>
        <h3 className="text-2xl font-bold flex-1">Git & GitHub</h3>
        <p className="text-gray-600 flex-1">
          Managing version control and collaborating on projects using Git and GitHub.
        </p>
      </div>

      {/* Last row also has border-b to close it off */}
      <div className="border-t border-b py-8 flex flex-col md:flex-row gap-4 md:gap-12 items-start">
        <p className="font-bold flex-1">[05]</p>
        <h3 className="text-2xl font-bold flex-1">Tailwind CSS</h3>
        <p className="text-gray-600 flex-1">
          Creating mobile-friendly websites that look great on all devices with Tailwind CSS.
        </p>
      </div>

    </section>
  );
}

export default SkillSection;