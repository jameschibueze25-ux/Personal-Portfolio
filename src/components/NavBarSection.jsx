import { Link } from 'react-router-dom';

function NavBarSection() {
   // <nav> is a semantic HTML5 element, which helps with SEO and accessibility

  return (
    <nav className="sticky top-0 z-50 bg-white px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">

        <h1 className="nav-logo text-xl md:text-4xl font-bold">James Eboka</h1>
        {/* text-2xl: large font size for the logo
          font-bold: makes the logo bold */}
        <ul className="nav-menu flex gap-4 md:gap-8 text-sm md:text-base">
          {/* flex: lays the menu items horizontally
          gap-8: adds spacing (32px) between each item */}
          <li className="nav-item">
            <Link to="/" className="nav-link hover:underline">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link hover:underline">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link hover:underline">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/project" className="nav-link hover:underline">
              Projects
            </Link>
          </li>
        </ul>
    </nav>
  );
}

export default NavBarSection;