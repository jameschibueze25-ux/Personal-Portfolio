import { FaReact, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si';

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
        <div className="flex items-center gap-3 flex-1">
          <FaReact className="text-2xl text-emerald-600" />
          <span className="font-bold text-emerald-600">[01]</span>
        </div>
        <h3 className="text-2xl font-bold flex-1">React</h3>
        <p className="text-gray-600 flex-1">
          Building dynamic, component-based user interfaces with React and modern hooks.
        </p>
      </div>

      <div className="border-t py-8 flex flex-col md:flex-row gap-4 md:gap-12 items-start">
        <div className="flex items-center gap-3 flex-1">
          <SiJavascript className="text-2xl text-emerald-600" />
          <span className="font-bold text-emerald-600">[02]</span>
        </div>
        <h3 className="text-2xl font-bold flex-1">JavaScript</h3>
        <p className="text-gray-600 flex-1">
          Writing clean, modern JavaScript with ES6+ features for the web.
        </p>
      </div>

      <div className="border-t py-8 flex flex-col md:flex-row gap-4 md:gap-12 items-start">
        <div className="flex items-center gap-3 flex-1">
          <SiTypescript className="text-2xl text-emerald-600" />
          <span className="font-bold text-emerald-600">[03]</span>
        </div>
        <h3 className="text-2xl font-bold flex-1">TypeScript</h3>
        <p className="text-gray-600 flex-1">
          Adding static typing to JavaScript for improved code quality and developer experience.
        </p>
      </div>

      <div className="border-t py-8 flex flex-col md:flex-row gap-4 md:gap-12 items-start">
        <div className="flex items-center gap-3 flex-1">
          <FaGithub className="text-2xl text-emerald-600" />
          <span className="font-bold text-emerald-600">[04]</span>
        </div>
        <h3 className="text-2xl font-bold flex-1">Git & GitHub</h3>
        <p className="text-gray-600 flex-1">
          Managing version control and collaborating on projects using Git and GitHub.
        </p>
      </div>

      {/* Last row also has border-b to close it off */}
      <div className="border-t border-b py-8 flex flex-col md:flex-row gap-4 md:gap-12 items-start">
        <div className="flex items-center gap-3 flex-1">
          <SiTailwindcss className="text-2xl text-emerald-600" />
          <span className="font-bold text-emerald-600">[05]</span>
        </div>
        <h3 className="text-2xl font-bold flex-1">Tailwind CSS</h3>
        <p className="text-gray-600 flex-1">
          Creating mobile-friendly websites that look great on all devices with Tailwind CSS.
        </p>
      </div>

    </section>
  );
}

export default SkillSection;