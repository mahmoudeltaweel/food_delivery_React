import React, { useContext } from 'react'
import "./fooddisplay.css"
import { storeContext } from '../../context/StoreContext'
import FoodItem from '../fooditem/FoodItem';

export default function FoodDispaly({category}) {  
    const {food_list} = useContext(storeContext);
  return (
    <div className='food-display' id='food-display'>   
        <h2>Top dishes near you </h2>
        <div className='food-display-list'>
            {food_list.map((item,index)=>{
              if( category==="All" || category===item.category){
                return <FoodItem key={index} name={item.name} image={item.image} id={item._id} price={item.price} description={item.description} />
              }
            }
            )}
        </div>
    </div>
  )
}
