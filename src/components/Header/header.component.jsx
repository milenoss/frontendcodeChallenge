import React from 'react'
import F1 from '../../assets/images/nav_logo.png'

const Header = () => ( 
    
      <div className ='header'>
      <div className ='F1container'>
       <img src={F1} alt = 'F1'></img></div> 
       <div className = 'opt'>
       <p>HOME</p>
       <p>FEATURES</p>
       <p>NEWS</p>
       <p>BUY NOW</p>
       </div>
       </div>
      
    

)

export default Header;