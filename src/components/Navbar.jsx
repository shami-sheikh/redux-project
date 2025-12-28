import React from 'react'
import {useNavigate} from "react-router-dom"

function Navbar() {
     const navigate=useNavigate()
  return (
     <div className='text-center overflow-hidden justify-between flex px-2 text-sm md:px-6 bg-blue-900 md:text-2xl font-semibold py-5'>
<h1>media search</h1>
<div className='flex md:space-x-5 space-x-2 text-black'>
<h1 onClick={()=>navigate("/")} className='bg-white px-3 rounded-xl cursor-pointer active:scale-110 md:px-4 py-2'>search</h1>
<h1 onClick={()=>navigate("/colection")} className=' bg-white text-red-600 px-3 md:px-4 py-2 rounded-xl cursor-pointer active:scale-110'>colection</h1>
</div>
        </div>
  )
}

export default Navbar