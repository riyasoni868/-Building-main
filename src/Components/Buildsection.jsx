import React from 'react'
import build from '../assets/build.webp'
import { Dot } from 'lucide-react'
import Circlediv from './Circlediv'

function Buildsection() {
  const data = [
    {
      num: "97%",
      title: "Reputation&",
      subtitle: "High-Quality",
      text: "Curabitur id neque quis odio vestibulum vulputate."
    },
    {
      num: "87%",
      title: "Value of",
      subtitle: "Money",
      text: "Curabitur id neque quis odio vestibulum vulputate."
    },
    {
      num: "98%",
      title: "Comprehensive",
      subtitle: "Solutions",
      text: "Curabitur id neque quis odio vestibulum vulputate."
    },
    {
      num: "78%",
      title: "Customer",
      subtitle: "Services",
      text: "Curabitur id neque quis odio vestibulum vulputate."
    }
  ];

  return (
    <div className="bg-black text-white px-4 py-12">
      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2" >
          <img src={build} alt="build" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2" >
          <h1 className="text-lg sm:text-xl font-semibold flex items-center mb-2">
            <Dot size={40} className="text-orange-500 mr-2" />
            Why Choose Us
          </h1>

          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Building Trust Through Excellence.
          </h2>

          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            eaque culpa neque dolor autem, itaque nulla nostrum cupiditate nihil
            illum quos eum consequuntur enim quo labore eius nemo odit voluptatibus.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.map((val, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="h-24 w-24 flex items-center justify-center text-3xl font-bold border-4 border-amber-700 rounded-full text-white">
                  {val.num}
                </div>
                <div>
                  <h3 className="text-amber-600 text-base">{val.title}</h3>
                  <h4 className="text-xl font-semibold">{val.subtitle}</h4>
                  <p className="text-gray-400 text-sm mt-1">{val.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optional Circle Section */}
      <div className="mt-12">
        {/* <Circlediv /> */}
      </div>
    </div>
  );
}

export default Buildsection;
