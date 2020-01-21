import React from 'react'
import leftlogo from '../../assets/images/logo_codemasters.png'
import rightLogo from '../../assets/images/logo_pegi.png'


const Footer = () => ( 

   <div className ='footer'>
  <img src ={leftlogo} alt = 'leftlogo'></img>
    <p> 2019 Codemasters  </p>
   
    <img src ={rightLogo} alt = 'rightLogo'></img>
  
    </div>

)

export default Footer;