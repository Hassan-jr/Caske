import React from 'react'
import Card from './Card'
import Homedata from '../data/Homedata'
import { useNavigate } from 'react-router-dom'

function Homecard() {

let navigate = useNavigate();
function handleClick (){
  navigate("/allproperties")
}



  return (
    <div>

   <h2>EXPLORE GOOD PLACES</h2>
   <div className="allcards"> 
       {Homedata.map(one=> <Card key={one.id} {...one}/>)}
   </div>
   <div className="allcards">
   <button className="btn-email" onClick={handleClick}>VIEW MORE</button>
   </div>
   
   </div>
  )

}
 
export default Homecard