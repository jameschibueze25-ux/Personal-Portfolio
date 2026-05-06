function NavBarSection() {
   // <nav> is a semantic HTML5 element, which helps with SEO and accessibility

  return (
    <nav className="bg-white px-8 py-6 flex items-center justify-between">
      {/*
        bg-white: white background
        px-8: horizontal padding (32px each side)
        py-6: vertical padding (24px top/bottom)
        flex: enables flexbox layout
        items-center: vertically center child items
        justify-between: push items to opposite ends
      */}

        <h1 className="nav-logo text-4xl font-bold">James Eboka</h1>
        {/* text-2xl: large font size for the logo
          font-bold: makes the logo bold */}
        <ul className="nav-menu flex gap-8">
          {/* flex: lays the menu items horizontally
          gap-8: adds spacing (32px) between each item */}
          <li className="nav-item">
            <a href="#home" className="nav-link hover:underline">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link hover:underline">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link hover:underline">
              Contact
            </a>
          </li>
        </ul>
    </nav>
  );
}

export default NavBarSection;