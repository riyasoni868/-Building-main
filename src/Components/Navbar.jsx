// import React from 'react'
// import { Link } from 'react-router-dom'
// import { MapPin, Mail, Phone } from 'lucide-react'
// import logo from '../assets/Logo.png'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";

// function Navbar() {
//     useEffect(() => {
//     AOS.init({
//       duration: 1000, // animation duration
//     //   once: true,     // whether animation should happen only once
//     });
//   }, []);
//     return (
//         <div>
//             <div className='bg-gray-950 text-white flex justify-between items-center border-b-amber-50 border-1 p-2'>
//                 <img src={logo} alt="" />
//                 <div className='flex gap-6'>
//                     <p className='flex gap-2'><MapPin fill='orange' />Creative District Ahmad Yani No. 456 Medan, North Sumatera</p>
//                     <div>
//                         <p className='flex gap-2'><Mail fill='orange' />hola@dominantsite.com</p>
//                         <p className='flex'><Phone fill='orange' />+800-3374-4676</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='bg-gray-950 text-white  font-semibold p-4 flex gap-8'>
//                 <Link to={"/"}>HOME +</Link>
//                 <Link to={"/About"}>ABOUT +</Link>
//                 <Link to={"/Services"}>SERVICES +</Link>
//                 <Link to={"/Project"}>PROJECTS +</Link>
//                 <Link>PAGES +</Link>
//                 <Link to={"/contact"}>CONTACT</Link>
//             </div>           
//         </div >
//     )
// }

// export default Navbar


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Menu, X } from 'lucide-react';
import logo from '../assets/Logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-950 text-white">
      {/* Top bar */}
      <div className='flex flex-wrap justify-between items-center border-b border-amber-50 p-2 text-sm'>
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        
        <div className='hidden lg:flex gap-6 text-xs'>
          <p className='flex gap-2 items-center'><MapPin fill='orange' size={16} />Creative District Ahmad Yani No. 456 Medan, North Sumatera</p>
          <div className='flex flex-col gap-1'>
            <p className='flex gap-2 items-center'><Mail fill='orange' size={16} />hola@dominantsite.com</p>
            <p className='flex gap-2 items-center'><Phone fill='orange' size={16} />+800-3374-4676</p>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className='p-4 flex justify-between items-center lg:items-start'>
        {/* Desktop Nav */}
        <div className='hidden lg:flex gap-8 font-semibold'>
          <Link to={"/"}>HOME +</Link>
          <Link to={"/About"}>ABOUT +</Link>
          <Link to={"/Services"}>SERVICES +</Link>
          <Link to={"/Project"}>PROJECTS +</Link>
          <Link to={"/contact"}>CONTACT</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className='lg:hidden'>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='lg:hidden flex flex-col gap-4 px-4 pb-4 font-semibold'>
          <Link to={"/"} onClick={() => setMenuOpen(false)}>HOME +</Link>
          <Link to={"/About"} onClick={() => setMenuOpen(false)}>ABOUT +</Link>
          <Link to={"/Services"} onClick={() => setMenuOpen(false)}>SERVICES +</Link>
          <Link to={"/Project"} onClick={() => setMenuOpen(false)}>PROJECTS +</Link>
          <Link onClick={() => setMenuOpen(false)}>PAGES +</Link>
          <Link to={"/contact"} onClick={() => setMenuOpen(false)}>CONTACT</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
