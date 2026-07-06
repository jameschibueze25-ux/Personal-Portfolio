import JamesJpg from '../james.jpg';

function AboutSection() {
  return (
    // px-8: horizontal padding
    // py-20: vertical spacing
    // bg-white: white background
    <section className="px-4 md:px-8 pt-4 py-20 bg-white" id="about">

      {/* flex: side by side layout
          items-center: vertically center the items
          gap-12: spacing between text and image
          max-w-7xl: limit max width
          mx-auto: center the whole section */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-7xl mx-auto">

        {/* Left-side bio text
            flex-1: takes equal space */}
        <div className="flex-1">
          <p className="max-w-[16rem] md:max-w-[24rem] text-lg md:text-2xl text-gray-700 pt-4 leading-relaxed">
            Self-taught frontend developer building
  <br />  clean and responsive websites with React.
  <br /> From warehouse shifts to writing code,
  <br /> every line is a step forward in my journey.
          </p>
        </div>

        {/* Right-side bio photo
            flex-1: takes equal space
            rounded-[3rem]: rectangular photo
            object-cover: image fills the container nicely */}
        <div className="flex-1">
          <img 
            src={JamesJpg}
            alt="James Eboka" 
            className="w-64 h-64 md:w-96 md:h-96 rounded-[3rem] mx-auto"
          />
        </div>

      </div>
    </section>
  );
}

export default AboutSection;