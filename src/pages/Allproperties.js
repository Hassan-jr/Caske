import React from 'react'
import Card from '../components/Card'
import Buydata from '../data/Buydata'
import Rentdata from '../data/Rentdata'


function Allproperties() {
  return (
    <div>
         <div>
<h2>ALL PROPERTIES AVAILABLE FOR SALE AND RENT  </h2> 
   
    <div className="allcards">
      {Buydata.map(one=><Card key={one.id} {...one}/>)}
      {Rentdata.map(one=><Card key={one.id} {...one}/>)}
    </div>
    </div>

    </div>
  )
}

export default Allproperties