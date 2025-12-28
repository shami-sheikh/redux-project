import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removecolection, clearcolection } from '../redux/colectionslice'
import toast from 'react-hot-toast'

function Collection() {
  const dispatch = useDispatch()
  const collection = useSelector((state) => state.colection?.items || [])
  
  return (
    <div className='min-h-screen bg-gray-900 p-6'>
      
      {/* Header with Clear All button */}
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-3xl font-bold text-white'>My Collection</h1>
        
        {collection.length > 0 && (
          <button 
            onClick={() => {
              if(window.confirm('Clear all items?')) {
                dispatch(clearcolection())
                toast.success("items clear sucessfull")
              }else{
                toast.error("clear cancel")
              }
            }}
            className='bg-red-500 hover:bg-red-600 active:scale-95 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-lg'
          >
            Clear All
          </button>
        )}
      </div>

      {/* Empty State */}
      {collection.length === 0 ? (
        <p className='text-gray-400 text-center mt-20'>No items saved yet</p>
      ) : (
        /* Grid */
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {collection.map((item) => (
            <div 
              key={item.id} 
              className='relative w-full h-fit bg-gray-800 rounded-lg hover:scale-105 transition-transform overflow-hidden'
            >
              <a 
                href={item.url} 
                target='_blank' 
                rel='noopener noreferrer'
                className='block w-full'
              >
                {item.type === 'photo' && (
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className='w-full h-48 object-cover'
                  />
                )}
                
                {item.type === 'video' && (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    src={item.src}
                    className='w-full h-48 object-cover'
                  />
                )}
                
                {item.type === 'gif' && (
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className='w-full h-48 object-cover'
                  />
                )}
              </a>

              {/* Bottom Bar */}
              <div className='absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent'>
                <h3 className='text-white text-sm font-medium truncate flex-1 mr-3'>
                  {item.title}
                </h3>
                <button 
                  onClick={(e) => {
                    e.preventDefault()
                    dispatch(removecolection(item.id))
                  }}
                  className='bg-red-500 hover:bg-red-600 active:scale-95 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap shadow-lg'
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Collection