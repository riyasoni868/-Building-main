import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react'
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import Project from "./Components/Project"
import Services from "./Components/Services"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Adminlogin from "./Components/Adminlogin"
import Adminlayout from "./Admin/Adminlayout"
import ViewContact from "./Admin/Viewcontact"
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Home></Home>} />
            <Route path="Project" element={<Project></Project>}></Route>
            <Route path="Services" element={<Services></Services>}></Route>
            <Route path="About" element={<About></About>} />
            <Route path="Contact" element={<Contact></Contact>} />
            <Route path="adminlogin" element={<Adminlogin />}></Route>
            <Route path="Admin" element={<Adminlayout />}>
              <Route path="Viewcontact" element={<ViewContact />}></Route>
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
