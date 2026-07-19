import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Adminlogin() {
    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");
const navi = useNavigate();
function addminlogin() {
    if (userName === 'muskan' && password ==='muskan') {
        alert("ready to fill data");
        navi("/Admin")
    }else{
        alert("error")
    }
}

    return (
   <div class="bg-white p-8 rounded-2xl shadow-2xl w-80 ml-100 mt-10">
    <h2 class="text-2xl font-bold text-center text-gray-700 mb-6">Admin Login</h2>
    
      
      <div>
        <input 
          type="text" 
          value={userName}
          placeholder="Name"
          onChange={(e)=>setUserName(e.target.value)}
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300 mb-4"
          required
        />
      </div>

      <div>
        <input 
          type="password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300 mb-4"
          required
        />
      </div>

      <button 
        onClick={addminlogin}
       class="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 active:scale-95 transition duration-300"
      >
        Login
      </button>

  </div>
  )
}

export default Adminlogin
