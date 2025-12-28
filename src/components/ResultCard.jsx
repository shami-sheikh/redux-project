import React from 'react'
import toast, {} from "react-hot-toast"
import { useDispatch } from 'react-redux'
import { addcolection } from '../redux/colectionslice'
const ResultCard = React.memo(function ResultCard({itemcard}) {
  const dispatch=useDispatch()
  const getnewdata=()=>{
// const olddata=JSON.parse(localStorage.getItem('collection'))||[]
// const newdata=[...olddata,itemcard]
// localStorage.setItem("colection",JSON.stringify(newdata))
dispatch(addcolection(itemcard))

toast.success("saved successfully")
  }
  return (
    <div className='relative w-full h-fit bg-gray-800 rounded-lg hover:scale-105 transition-transform overflow-hidden'>
    
      
      <a 
        href={itemcard.url} 
        target='_blank' 
        rel='noopener noreferrer'
        className='block w-full'
      >
        {/* Photo */}
        {itemcard.type === 'photo' && (
          <img 
            src={itemcard.src} 
            alt={itemcard.title} 
            className='w-full h-48 object-cover'
          />
        )}
        
        {/* Video */}
        {itemcard.type === 'video' && (
          <video 
            autoPlay 
            loop 
            muted 
            src={itemcard.src}
            className='w-full h-48 object-cover'
          />
        )}
        
        {/* GIF */}
        {itemcard.type === 'gif' && (
          <img 
            src={itemcard.src} 
            alt={itemcard.title}
            className='w-full h-48 object-cover'
          />
        )}
      </a>

   
      <div className='absolute bottom-0 overflow-hidden font-serif left-0 right-0 flex justify-between items-center px-4 py-3 bg-gradient-to-t from-black/80 to-transparent'>
        <h1 className='text-white text-sm font-medium truncate flex-1 mr-2'>
          {itemcard.title}
        </h1>
        <button 
          className='bg-green-500  hover:bg-green-600 active:scale-110 rounded-lg py-2 px-4 text-white text-sm font-semibold transition-colors whitespace-nowrap'
          onClick={() => {
          getnewdata(itemcard)
          }}
        >
          Save
        </button>
      </div>
    </div>
  )
})

export default ResultCard