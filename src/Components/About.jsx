import Asection from "./Asection"
function About() {
  

  

   
  return (
    <div className="">
      {/* Hero image / title */}
      <div className="aboutus-image ">
        <div className="relative text-6xl text-center text-white font-bold">
          <h1>About Us</h1>
          <p className="text-xl mt-4 font-normal">
            <span className="text-orange-400">Home</span> - About Us
          </p>
        </div>
      </div>
{/* left image */}
      <Asection></Asection>
    </div>
  )
}

export default About