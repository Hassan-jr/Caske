import React from 'react'
import Rentdata from '../data/Rentdata'
import Card from '../components/Card'

function Rent() {
  return (
   
    <div>
     <h2>PROPERTIES AVAILABLE FOR RENT  </h2> 
   
    <div className="allcards">
      {Rentdata.map(one=><Card key={one.id} {...one}/>)}
    </div>
    </div>
  )
}

export default Rent