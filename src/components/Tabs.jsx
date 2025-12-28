import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setactiveTav } from '../redux/searchslice'
function Tabs() {
    const tabs = ['photos', 'videos', 'gifs']  
    const dispatch=useDispatch()
    const tabselect=useSelector((state)=>state.search.activeTab)
    return (
        <div className='flex  w-full p-6 gap-6 ml-5'>
            {
                tabs.map((ele) => (
                    <button onClick={()=>dispatch(setactiveTav(ele))} className={` ${tabselect==ele ? "bg-blue-600 hover:bg-blue-700":"bg-gray-800 hover:bg-gray-900"}   transition-all duration-300 active:scale-110 cursor-pointer rounded-lg p-2 px-3`} key={ele}>
                        {ele}
                    </button>
                ))
            }
        </div>
    )
}

export default Tabs