import {useState} from 'react'

function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
  e.preventDefault();

  // Send form data to Formspree using fetch
  const response = await fetch("https://formspree.io/f/xeenaqaw", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ name, email, message })
  });

  if (response.ok) {
    alert("Thanks! Your message has been sent.");
    setName('');
    setEmail('');
    setMessage('');
  } else {
    alert("Oops! Something went wrong. Please try again.");
  }
}

  return (
    // px-8: horizontal padding
    // py-20: vertical spacing
    // bg-white: white background
    // text-center: centers heading
    <section className="px-4 md:px-8 py-20 bg-white text-center" id="contact">

      {/* text-7xl: huge heading to match others
          font-bold: bold
          mb-12: margin bottom */}
      <h2 className="text-4xl md:text-7xl font-bold mb-12">Contact Me</h2>

      {/* max-w-xl: limits form width
          mx-auto: centers form horizontally
          flex flex-col: stacks inputs vertically
          gap-4: spacing between fields */}
      <form 
        className="max-w-xl mx-auto flex flex-col gap-4" 
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xeenaqaw"
      >

        {/* w-full: full width of parent
            p-4: padding inside the input
            border: adds border line
            border-gray-300: light grey border
            rounded-lg: rounded corners
            focus:outline-none: removes default focus ring
            focus:border-black: black border when typing */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
        />

        {/* h-32: taller height for the message box */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-lg h-32 focus:outline-none focus:border-black"
        />

        {/* bg-black: black background button
            text-white: white text
            py-4: vertical padding
            rounded-lg: rounded corners
            hover:bg-gray-800: lighter black on hover
            transition: smooth color change */}
        <button 
          type="submit" 
          className="bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition"
        >
          Send Message
        </button>

      </form>
    </section>
  );
}

export default ContactSection;