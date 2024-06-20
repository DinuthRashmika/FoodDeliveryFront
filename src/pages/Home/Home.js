import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import  { useState } from 'react'




export default function Home() {
  
  const [catagory,setCatagory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreMenu cata={catagory} setCat={setCatagory}/>
    </div>
  )
}
