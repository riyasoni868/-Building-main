import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
function Adminlayout() {
  return (
         <div className="flex gap-4">
            <Sidebar></Sidebar>
            <Outlet></Outlet>

        </div>
  )
}

export default Adminlayout
