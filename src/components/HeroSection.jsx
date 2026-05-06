import JamesPng from '../james.png';
function HeroSection() {
  return (
    // px-8: horizontal padding
    // py-32: lots of vertical padding for big spacing
    // bg-white: white background to match navbar
    <section className="HeroSection bg-white px-8 py-32 text-center" id="home">

      {/* text-7xl: massive font size (matches Martin template)
          font-bold: makes it heavy and bold
          leading-tight: tightens line spacing for the big text */}
      <h1 className="text-8xl font-bold leading-tight">
        Hello there <br />
        I am James Eboka <br />
        Frontend Developer
      </h1>
    </section>
  );
}

export default HeroSection;