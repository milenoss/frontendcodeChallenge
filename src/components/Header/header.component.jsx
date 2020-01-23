import React from 'react'
import F1 from '../../assets/images/nav_logo.png'
import {Route, Link} from 'react-router-dom'
import Home from '../Home/home.component'
import Features from '../Features/features.component'

const Header = () => ( 
    
      <div className ='header'>
      <div className ='F1container'>
       <img src={F1} alt = 'F1'></img></div> 
       <div className = 'opt'>
       
        <Link to= '/home'>HOME</Link>
        <Link to= '/features'>FEATURES</Link>
        <Link to= '/news'>NEWS</Link>
        <Link to= '/buy'>BUY NOW</Link>
        
        <Route path="/" exact component={Home} />
       
    
       </div>
       </div>
      
    

)

export default Header;