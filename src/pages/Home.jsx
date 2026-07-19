import { Dot } from 'lucide-react'
import React from 'react'
import l1 from '../assets/L1.png'
import l2 from '../assets/L10.png'
import l3 from '../assets/L11.png'
import l4 from '../assets/L12.png'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import Demo from '../Components/Demo'
import a1 from '../assets/ans.jpg'
import a2 from '../assets/ansb.jpg'
import Asection from '../Components/Asection'
import Buildsection from '../Components/Buildsection'

function Home() {
  let data = [{
    icon: "icon",
    title: "Building Service",
    Text: "Suspendisse accumsan quis nulla eget cursus. Nulla est mi, rhoncus eu nulla sed, placerat placerat neque."
  },
  {
    icon: "icon",
    title: "Renovation Service",
    Text: "Suspendisse accumsan quis nulla eget cursus. Nulla est mi, rhoncus eu nulla sed, placerat placerat neque."
  },
  {
    icon: "icon",
    title: "Flooring Service",
    Text: "Suspendisse accumsan quis nulla eget cursus. Nulla est mi, rhoncus eu nulla sed, placerat placerat neque."
  },
  {
    icon: "icon",
    title: "Electrical Service",
    Text: "Suspendisse accumsan quis nulla eget cursus. Nulla est mi, rhoncus eu nulla sed, placerat placerat neque."
  },
  {
    icon: "icon",
    title: "Design Service",
    Text: "Suspendisse accumsan quis nulla eget cursus. Nulla est mi, rhoncus eu nulla sed, placerat placerat neque."
  }
  ]
  return (
    <div>

      <section className='worker text-white relative w-full h-screen overflow-hidden slideshow flex flex-col justify-center px-4'>
        <div className='text-white absolute z-10 max-w-4xl px-4'>
          <div className='flex flex-wrap md:flex-nowrap items-center'>
            <div className='text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold'>
              <h1>Building</h1>
              <h1>Building</h1>
            </div>
            <div className='text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-amber-600 animate-slide-up'>
              <h1>Better</h1>
              <h1>Stronger</h1>
            </div>
          </div>
          <p className='mt-4 text-base sm:text-lg md:text-xl max-w-prose'>
            For over 40 years, our construction firm has earned trust from 500+ clients...
          </p>
          <div className='flex flex-wrap gap-4 mt-6'>
            <button className='bg-amber-500 px-6 py-2 text-lg hover:bg-white hover:text-amber-600'>Services</button>
            <button className='border border-white px-6 py-2 text-lg hover:text-amber-600 hover:border-amber-600'>Contact Us</button>
          </div>
        </div>
      </section>

      <section className='bg-black text-white grid grid-cols-1 md:grid-cols-4 flex-wrap  gap-6 justify-center items-center py-15'>
        <div className="relative  overflow-hidden">
          <div data-aos="fade-up">
            <h1 className="text-2xl font-semibold p-2">We're Experts</h1>
            <p className="p-2">
              Lorem ipsum dolor sit repellat voluptates unde aspernatur beatae
              necessitatibus, debitis quam!
            </p>
          </div>
          {/* Divider doesn't animate */}
          <div className="h-0.5 w-18 m-4 bg-white"></div>
        </div>


        <div className="relative  overflow-hidden">
          <div data-aos="fade-up">
            <h1 className="text-2xl font-semibold p-2">We're Friendly</h1>
            <p className="p-2">
              Lorem ipsum dolor sit repellat voluptates unde aspernatur beatae
              necessitatibus, debitis quam!
            </p>
          </div>

          {/* Divider doesn't animate */}
          <div className="h-0.5 w-18 m-4 bg-white"></div>
        </div>
        <div className="relative   overflow-hidden">
          <div data-aos="fade-up">
            <h1 className="text-2xl font-semibold p-2">We're Accurate</h1>
            <p className="p-2">
              Lorem ipsum dolor sit repellat voluptates unde aspernatur beatae
              necessitatibus, debitis quam!
            </p>
          </div>

          {/* Divider doesn't animate */}
          <div className="h-0.5 w-18 m-4 bg-white"></div>
        </div>
        <div className="relative   overflow-hidden">
          <div data-aos="fade-up">
            <h1 className="text-2xl font-semibold p-2">We're Trusted</h1>
            <p className="p-2">
              Lorem ipsum dolor sit repellat voluptates unde aspernatur beatae
              necessitatibus, debitis quam!
            </p>
          </div>

          {/* Divider doesn't animate */}
          <div className="h-0.5 w-18 m-4 bg-white"></div>
        </div>

      </section>
      {/* ////////////// */}
      <section>
        <Asection></Asection>
      </section>

      {/* <div className='grid '> */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mb-20'>
        <div>
          <h1 className='text-gray-600 flex'><Dot />Our SERVICES</h1>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mt-6'>Crafting Your Vision into Reality.</h1>
          <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit amet consectetur...</p>
        </div>

        {data.map((val, index) => (
          <div key={index} className="p-6 border border-gray-400 bg-white" data-aos="fade-up">
            <h1 className="font-medium text-lg">{val.icon}</h1>
            <p className="text-xl font-bold mt-2">{val.title}</p>
            <p className="mt-2 text-sm">{val.Text}</p>
            <button className='bg-black text-white text-sm mt-4 px-4 py-2'>Learn More →</button>
          </div>
        ))}
      </div>
     <div className='bg-amber-600 flex flex-wrap justify-center items-center gap-6 py-10 px-4'>
  {[l4, l1, l2, l3].map((logo, i) => (
    <img key={i} src={logo} alt={`Logo ${i}`} className='h-12 sm:h-16' />
  ))}
</div>

      <div>
        <Buildsection></Buildsection>
      </div>
      <div>
<div className='flex justify-center items-center px-4 md:px-8'>
  <div className='max-w-4xl text-center'>
    <h1 className='flex items-center justify-center text-xl md:text-2xl font-semibold p-4'>
      <Dot className='text-amber-500 mr-2' /> Our Project
    </h1>

    <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold mb-4'>
      Dedicated to Building Excellence.
    </h1>

    <p className='text-base md:text-lg text-gray-300 px-2 md:px-8'>
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam euismod, risus non molestie elementum,
      metus urna ullamcorper justo, quis vulputate nulla ante condimentum.
    </p>
  </div>
</div>

        {/* <div className='flex justify-center items-center'>
          <div>
            <h1 className='flex items-center justify-center text-2xl font-semibold p-4'><Dot />Our Project</h1>
            <h1 className='md:text-6xl text-2xl font-bold m-4 '>Dedicated to Building Excellence.</h1>
            <p className='text-center w-200 ml-12'>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam euismod, risus non molestie elementum, metus urna ullamcorper justo, quis vulputate nulla ante condimentum.</p>
          </div>

        </div> */}
        <div className='grid md:grid-cols-4 grid-cols-1 gap-4 p-10'>
          <div className='relative' data-aos="fade-right">
            <img src={p1} alt="" className='h-100 w-900' />
            <div className='hover-img bg-[rgba(255,166,0,0.85)] w-60 m-4 p-4 py-20 h-90 absolute top-0 text-white'>
              <h1 className='text-white text-xl font-bold'>High-Rise Residential Tower</h1>
              <p>Residential Construction</p>
              <button className='px-4 py-2 my-10 rounded-full bg-black text-white  text-center'>+</button>
            </div>
          </div>
          <div className='relative' data-aos="fade-up" data-aos-anchor-placement="top-center">
            <img src={p2} alt="" className='h-100 w-900' />
            <div className='hover-img bg-[rgba(255,166,0,0.85)] w-60 m-4 p-4 py-20 h-90 absolute top-0 text-white'>
              <h1 className='text-white text-xl font-bold mt-20'>Green Office Park Commercial</h1>
              <p>Green Office Park Commrcial</p>
              <button className='px-4 py-2 my-10 rounded-full bg-black text-white  text-center'>+</button>
            </div>
          </div>
          <div className='relative' data-aos="fade-up" data-aos-anchor-placement="top-center">
            <img src={p3} alt="" className='h-100 w-900' />
            <div className='hover-img bg-[rgba(255,166,0,0.85)] w-60 m-4 p-4 py-20 h-90 absolute top-0 text-white'>
              <h1 className='text-white text-xl font-bold mt-20'>Mixed-Use Urban Development</h1>
              <p>Mixed-Use Urban Development</p>
              <button className='px-4 py-2 my-10 rounded-full bg-black text-white  text-center'>+</button>
            </div>
          </div>
          <div className='relative ' data-aos="fade-left">
            <img src={p4} alt="" className='h-100 w-900' />
            <div className='hover-img bg-[rgba(255,166,0,0.85)] w-60 m-4 p-4 py-20 h-90 absolute top-0 text-white'>
              <h1 className='text-white text-xl font-bold mt-20'>Healthcare Facility Expansion</h1>
              <p>Healthcare Facility Expansion</p>
              <button className='px-4 py-2 my-10 rounded-full bg-black text-white  text-center'>+</button>
            </div>
          </div>
        </div>
      </div>

   
       
    <section className='bg-black text-white px-4 md:px-12 py-16'>
  <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>

    {/* Left Image Section */}
    <div className='relative w-full lg:w-1/2'>
      <img src={a1} alt="" className='w-full h-auto max-w-md mx-auto lg:mx-0' />
      <img
        src={a2}
        alt=""
        className='absolute w-2/3 max-w-[300px] h-auto border-8 border-black -bottom-10 -right-6 hidden md:block'
      />
    </div>

    {/* Right Content Section */}
    <div className='w-full lg:w-1/2'>
      <h1 className='flex items-center text-xl md:text-2xl text-amber-500 mb-2'>
        <Dot className='text-amber-500 mr-2' /> FAQ
      </h1>

      <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-6'>
        Answers to Your Construction Queries.
      </h2>

      <hr className='border-gray-600 mb-6' />

      <Demo />

      <button className='bg-amber-500 border-none outline-none mt-8 px-6 py-3 text-lg md:text-xl font-semibold hover:bg-white hover:text-amber-600 transition-all'>
        Services →
      </button>
    </div>
  </div>
</section>

    </div>

  )
}

export default Home


