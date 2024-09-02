
import React, {useState} from 'react'
import './home.css'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploreMenu/ExploreMenu'
import FoodDispaly from '../../components/foodDisplay/FoodDispaly'
import AppDownload from '../../components/appDownload/AppDownload'

export default function Home() {
  const [category , setCategory]=useState("All")
  return (
    <div className='home'>
        <Header />
        <ExploreMenu category={category}  setCategory={setCategory} />
        <FoodDispaly category={category} />
        <AppDownload />
    </div>
  )
}
