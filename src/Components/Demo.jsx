// import React, { useState } from 'react'
// import { ArrowDown, ArrowRight } from 'lucide-react'
// function Demo() {
//   let [show, setShow] = useState(0)
//   let data = [
//     {
//       id: 1,
//       title: "Far far away, behind the word mountains, ",
//       desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
//     },

//     {
//       id: 2,
//       title: "Far far away, behind the word mountains, ",
//       desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
//     },
//     {
//       id: 3,
//       title: "Far far away, behind the word mountains, ",
//       desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
//     },
//     {
//       id: 4,
//       title: "Far far away, behind the word mountains, ",
//       desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
//     }, {
//       id: 5,
//       title: "Far far away, behind the word mountains, ",
//       desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
//     },
//   ]

//   function showdes(id) {
//     setShow(id)
//   }
//   return (
//     <div>
//       {
//         data.map((val) => {
//           return (
//             <div>
//               <li onClick={() => { showdes(val.id) }} className='text-2xl font-semibold p-4 flex gap-4'>
//                 {val.id == show ? (<ArrowDown></ArrowDown>)  :(<ArrowRight />)} 

//                 {val.title}</li>
//               <p className={`${show == val.id ? "" : "hidden"} text-xl pb-2 pl-2`}  >{val.desc}</p>
//               <hr />
//             </div>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default Demo

import React, { useState } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'

function Demo() {
  const [active, setActive] = useState(null);

  const data = [
    {
      id: 1,
      title: "What types of construction services do you offer?",
      desc: "We offer a wide range of construction services including residential, commercial, industrial, and renovation projects tailored to client needs."
    },
    {
      id: 2,
      title: "Are your projects delivered on time?",
      desc: "Yes, we follow strict timelines and project management standards to ensure timely delivery without compromising on quality."
    },
    {
      id: 3,
      title: "Do you provide cost estimates before starting?",
      desc: "Absolutely. We provide detailed project proposals and transparent cost estimates based on your requirements."
    },
    {
      id: 4,
      title: "Is your company licensed and insured?",
      desc: "Yes, we are fully licensed and insured to ensure peace of mind for our clients throughout the construction process."
    },
    {
      id: 5,
      title: "How can I get started with a project?",
      desc: "Simply contact us through our website or phone, and we’ll schedule a consultation to discuss your vision and requirements."
    },
  ];

  const toggle = (id) => {
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-3xl space-y-4">
      {data.map((item) => (
        <div key={item.id} className="border-b border-gray-600">
          <button
            onClick={() => toggle(item.id)}
            className="flex justify-between items-center w-full text-left text-xl sm:text-2xl font-semibold py-4 text-white hover:text-amber-500 transition-colors"
          >
            <span className="flex items-center gap-3">
              {active === item.id ? <ArrowDown size={22} /> : <ArrowRight size={22} />}
              {item.title}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              active === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-white text-base sm:text-lg pl-10 pb-4">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Demo;
