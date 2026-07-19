import React from 'react'
import l1 from '../assets/L1.png'
import l2 from '../assets/L10.png'
import l3 from '../assets/L11.png'
import l4 from '../assets/L12.png'
import {Dot} from 'lucide-react'
function Services() {
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
    title: "Renovation Service",
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
        <div className='services text-2xl text-white flex justify-center items-center'>
            <div className='z-10'>
                <h1 className='text-5xl text-white font-bold p-2'>Services</h1>
         <h1>Home – Services</h1>
            </div>
            </div>
        <div>
          <h1 className='text-gray-600 flex'><Dot />Our SERVICES</h1>
          <h1 className='text-5xl font-bold mt-6'>Crafting Your Vision into Reality.</h1>
          <p className='text-gray-600 m-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit inventosed fuga sapiente accusantium ad non vel doloribus corporis sit, voluptatum explicabo.</p>
        </div>
              <div className="grid grid-cols-3 grid-rows-2 gap-8 mb-20 ">
        {
          data.map((val) => {
            return (
              <div className="p-8 border-1 border-gray-400 bg-white" data-aos="fade-up">
                <h1 className="p-1 font-medium text-xl">{val.icon}</h1>
                <p className="mt-3 text-3xl font-bold">{val.title}</p>
                <p className="mt-2 ">{val.Text}</p>
                <button className='bg-black text-white font-semibold text-xl py-3 px-3.5 mt-4'>Learn More--</button>
              </div>
            )
          })
        }
        </div>
              <div className='bg-amber-600 flex justify-between items-center gap-10 py-18 px-8'>
                                    <img src={l4} alt="" className='h-18 ' />
                                    <img src={l1} alt="" className='h-18' />
                                    <img src={l2} alt="" className='h-18 ' />
                                    <img src={l3} alt="" className='h-18 ' />
                                  </div>
    </div>
  )
}

export default Services
