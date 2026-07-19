import React from 'react'
import {Link} from "react-router-dom"
function Sidebar() {
  return (
    <div>
       <div className='border h-screen p-10 bg-black text-white text-2xl'>
      {/* <Link to={"ViewContact"} >viewContact</Link><br /> */}
      <Link to={"Viewcontact"}>Viewcontact</Link>

    </div>
    </div>
  )
}

export default Sidebar
