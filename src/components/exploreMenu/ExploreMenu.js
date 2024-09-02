import React from 'react'
import './explorenenu.css'
import { menu_list } from '../../assets/assets'

export default function ExploreMenu({category , setCategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>
          choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. one
          delicious meal at a time.
        </p>
        <div className='explore-menu-list' >
          {menu_list.map((item,index)=>{
            return (
              <div key={index} onClick={()=>setCategory(prev=>prev===item.menu_name ? "All" :item.menu_name)} className='explore-menu-list-item'>
                <img className={category===item.menu_name ? "active" :""} src={item.menu_image} alt='menu-list' />
                <p>{item.menu_name}</p>
              </div>
            )
          }
          )}
        </div>
        <hr />
    </div>
  )
}
