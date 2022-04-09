import React from 'react'
import { useNavigate } from 'react-router-dom';
import Buydata from '../data/Buydata'
function Homepics() {


    let navigate = useNavigate();
    function handleClick (){
      navigate("/allproperties")
    }
    

  return (

  <div>
      <h2>Explore Best Cities </h2>  
    <div className="homepics" onClick={handleClick}>
        <div>
            <img className="card-img" src={Buydata[0].img} alt="" />
        </div>
        <div>
            <img className="card-img" src={Buydata[1].img} alt="" />
        </div>
        <div>
            <img className="card-img" src={Buydata[2].img} alt="" />
        </div>
        <div>
            <img className="card-img" src={Buydata[3].img} alt="" />
        </div>
    </div>
 </div>
  )
}

export default Homepics