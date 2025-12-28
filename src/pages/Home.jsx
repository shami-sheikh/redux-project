import React from 'react'
import Searchbar from '../components/Searchbar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'
// import Navbar from '../components/Navbar'
// import { useSelector } from "react-redux"
function Home() {
  
    // const {query}=useSelector((store)=>store.search)
  return (
    <div>
       {/* <Navbar/> */}
        <Searchbar/>
       
              <Tabs/>
        <ResultGrid/>
        
    </div>
  )
}

export default Home