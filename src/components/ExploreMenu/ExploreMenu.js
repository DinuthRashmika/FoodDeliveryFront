import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

function ExploreMenu({cata,setCat}) {

   
  return (
    <div className='explore-menu' id='emplore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Welcome to the DashDine menu! Here, you'll find a diverse selection of mouth-watering dishes from your favorite local restaurants. </p>
        <div className='explore-menu-list'> 
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCat(cata===item.menu_name?"All":item.menu_name)} key={index} className='explpre-menu-list-item'>
                        <img className={cata===item.menu_name?"Active":""} src={item.menu_image} alt=''/>
                        <p>{item.menu_name}</p>

                        
                    </div>
                )
            })}

        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu
