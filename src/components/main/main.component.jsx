import React from 'react'

import Cup from '../../assets/images/icon_cup.png'
import Meter from '../../assets/images/icon_time.png'
import Flags from '../../assets/images/icon_flags.png' 
import Position from '../../assets/images/icon_distance.png'
import Track from '../../assets/images/track_spline_abudhabi.png'
import F1 from '../../assets/images/header_logo.png'

const Main = () => (

  <div className= 'main'>
 
 
 <div className= 'background'>
 </div>
 <div className = 'options-container'>
  
 <div className= 'logo' >
 
  <img src = {F1} alt = 'F1'></img>

  </div>

  
  <div className= 'box1'>
   <h3>689,562</h3>
   <p>Grand Prix this week</p>
    </div>
  

  <div className= 'box2'>
    <p>Favourite Track</p>
    <h3>Abu Dhabi</h3>
    <img src = {Track} alt = 'Track'></img>


   </div>
  <div className= 'box3'>
   <div className ='cup'>
       <img src = {Cup} alt = 'Cup' />
       <h3>259,877</h3>
       <p>Winners</p>
   
   </div>
   <div className ='meter'>
   <img src = {Meter} alt = 'Meter' />
       <h3>4 Days 8 Hours</h3>
       <p>Spent Racing</p>
   
   
   </div>
   </div>
  <div className= 'box4'>
  <div className ='flags'>
  <img src = {Flags} alt = 'Flags' />
  <h3>22,600</h3>
  <p>RaceNet Events Complete</p>
   
  </div>


  <div className ='position'>
  <img src = {Position} alt = 'position' />
  <h3>459,826 mi</h3>
  <p>Distance Covered</p>
   </div>

  </div>
  <div className= 'box5'>
  <a src = '#'>Visit F1 2018's website</a>
  </div>
  


 </div>
 <div className= 'sub-footer'>
 </div>
 </div>





)

export default Main; 