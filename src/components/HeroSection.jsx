import JamesPng from '../james.png';
function HeroSection() {
  return (
    // px-8: horizontal padding
    // py-32: lots of vertical padding for big spacing
    // bg-white: white background to match navbar
    <section className="HeroSection bg-white px-4 md:px-8 py-16 md:py-32 text-center" id="home">

      {/* RESPONSIVE FONT SIZES:
    text-4xl: smaller on mobile (default)
    md:text-7xl: bigger on tablets (768px+)
    lg:text-8xl: huge on desktops (1024px+) */}
     <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-tight">
  Hello there <br />
  I am James Eboka <br />
  Frontend Developer
     </h1>
    </section>
  );
}

export default HeroSection;