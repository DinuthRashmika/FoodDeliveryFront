import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

function ExploreMenu() {
  return (
    <div className='explore-menu' id='emplore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Welcome to the DashDine menu! Here, you'll find a diverse selection of mouth-watering dishes from your favorite local restaurants. Whether you're in the mood for a quick snack, a hearty meal, or a gourmet experience, we have something to satisfy every craving.</p>
        <div className='explore-menu-list'> 
            {menu_list.map((item,index)=>{
                return(
                    <div key={index} className='explpre-menu-list-item'>
                        <img src={item.menu_image} alt=''/>
                        <p>{item.menu_name}</p>

                        
                    </div>
                )
            })}

        </div>
    </div>
  )
}

export default ExploreMenu
