import React from 'react'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import {Dot} from 'lucide-react'
import l1 from '../assets/L1.png'
import l2 from '../assets/L10.png'
import l3 from '../assets/L11.png'
import l4 from '../assets/L12.png'
function Project() {
  return (
    <div>
        <div className='project text-2xl text-white flex justify-center items-center'>
            <div className='z-10'>
                <h1 className='text-5xl text-white font-bold p-2'>Projects</h1>
         <h1>Home – Projects</h1>
            </div>

        </div>
       <div className=' justify-center items-center'>

          <div>
            <h1 className='flex items-center justify-center text-2xl font-semibold p-4'><Dot />Our Project</h1>
            <h1 className='text-6xl font-bold m-4'>Dedicated to Building Excellence.</h1>
            <p className='text-center w-200 ml-12'>Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam euismod, risus non molestie elementum, metus urna ullamcorper justo, quis vulputate nulla ante condimentum.</p>
          </div>

        </div>
        <div className='flex gap-4 p-10'>
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
                    <div className='relative ' data-aos="fade-right">
                      <img src={p4} alt="" className='h-100 w-900' />
                      <div className='hover-img bg-[rgba(255,166,0,0.85)] w-60 m-4 p-4 py-20 h-90 absolute top-0 text-white'>
                        <h1 className='text-white text-xl font-bold mt-20'>Healthcare Facility Expansion</h1>
                        <p>Healthcare Facility Expansion</p>
                        <button className='px-4 py-2 my-10 rounded-full bg-black text-white  text-center'>+</button>
                      </div>
                    </div>
                  

        </div>
        <div className='flex gap-4 p-10'>
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
                    <div className='relative ' data-aos="fade-right">
                      <img src={p4} alt="" className='h-100 w-900' />
                      <div className='hover-img bg-[rgba(255,166,0,0.85)] w-60 m-4 p-4 py-20 h-90 absolute top-0 text-white'>
                        <h1 className='text-white text-xl font-bold mt-20'>Healthcare Facility Expansion</h1>
                        <p>Healthcare Facility Expansion</p>
                        <button className='px-4 py-2 my-10 rounded-full bg-black text-white  text-center'>+</button>
                      </div>
                    </div>
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

export default Project
