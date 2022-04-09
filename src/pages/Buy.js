import React from 'react'
import Card from '../components/Card'
import Buydata from '../data/Buydata'

function Buy() {
  return (

    <div>
<h2>PROPERTIES AVAILABLE FOR SALE  </h2> 
   
    <div className="allcards">
      {Buydata.map(one=><Card key={one.id} {...one}/>)}
    </div>
    </div>
  )
}

export default Buy