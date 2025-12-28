import React, { useEffect } from 'react'
import {fetchvideos, fetchGIFS, fetchPhotos} from "../api/meadia"
import { useDispatch, useSelector } from 'react-redux'
import {setResult, setloading, seterror} from "../redux/searchslice"
import ResultCard from './ResultCard'

function ResultGrid() {
  const dispatch = useDispatch()
  const {query, activeTab, result, error, loading} = useSelector((store) => store.search)
  
  useEffect(() => {
    const getdata = async () => {
      if(!query) return 
      
      dispatch(setloading()) 
      
      try {
        let data
        
      // Photos
if(activeTab === 'photos'){
  let response = await fetchPhotos(query)
  data = response.results.map((items) => ({
    id: items.id,
    type: "photo",
    title: items.alt_description || "Photo",
    thumbnail: items.urls.small,
    src: items.urls.full,
    url: items.links.html 
  }))
}

// Videos
else if(activeTab === "videos"){
  let response = await fetchvideos(query)
  data = response.videos.map((items) => ({
    id: items.id,
    type: "video",
    title: items.user.name || "Video",
    thumbnail: items.image,
    src: items.video_files[0].link,
    url: items.url  
  }))
}

// GIFs
else if(activeTab === "gifs"){
  let response = await fetchGIFS(query)
  data = response.results.map((item) => ({
    id: item.id,
    type: "gif",
    title: item.title || item.content_description || "GIF",
    thumbnail: item.media_formats?.tinygif?.url || item.media_formats?.gif?.url,
    src: item.media_formats?.gif?.url,
    url: item.itemurl  
  })) 
}
        console.log("Final Data:", data)
        dispatch(setResult(data))  
        
      } catch (err) {
        console.error("Error:", err)
        dispatch(seterror(err.message))  
      }
    }
    
    getdata()
  }, [query, activeTab, dispatch])
  
  return (
    <div className="p-6">
      {/* Loading state */}
      {loading && <p className="text-white text-center">Loading...</p>}
      
      {/* Error state */}
      {error && <p className="text-red-500 text-center">Error: {error}</p>}
     
      {/* Results Grid */}
      {result && result.length > 0 && (  // ✅ Null check added
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  overflow-hidden">
          {result.map((itemcard) => (
            <ResultCard 
              key={itemcard.id}  // ✅ Single key, correct value
              itemcard={itemcard} 
            />
          ))}
        </div>
      )}
      
      {/* No results message */}
      {!loading && result && result.length === 0 && (
        <p className="text-gray-400 text-center">No results found</p>
      )}
    </div>
  )
}

export default ResultGrid