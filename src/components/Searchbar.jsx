import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { setquery } from "../redux/searchslice";
import toast, {} from "react-hot-toast"
function Searchbar() {
    const dispatch=useDispatch()
    const [searchText,setsraechText]=useState("")
    const handlesearch=(e)=>{
     
        e.preventDefault()
dispatch(setquery(searchText))
if(!searchText){
toast.error("saerch kar chutiye")
}
setsraechText("")
    }
  return (
    <form onSubmit={(e)=>handlesearch(e)} className="md:p-6 p-2 bg-gray-950 w-full   ">
      <div className="flex justify-center py-4 mt-4 md:px-12 gap-2 ">
        <input
          type="text"
          // required
          placeholder="search anything..."
          value={searchText}
          onChange={(e)=>setsraechText(e.target.value)}
          className=" w-[400px] md:w-full py-3 pl-4 md:px-6 bg-gradient-to-r lg:max-w-lg  from-gray-900 via-gray-800 to-gray-900 border-2 border-gray-700 outline-none text-white placeholder-gray-500 rounded-lg font-semibold tracking-wide transition-all duration-300 focus:border-transparent"
        />
        <button className="active:scale-110 px-3  md:py-3 md:px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-2 border-gray-700 outline-none text-white placeholder-gray-500 rounded-lg font-semibold tracking-wide transition-all duration-300 focus:border-transparent">
          search
        </button>
      </div>
    </form>
  );
}

export default Searchbar;
