import React from 'react'
import './Card.css'
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import GarageOutlinedIcon from '@mui/icons-material/GarageOutlined';



function Card(prop) {
  return (
    <div className="card-container"> 
        {/* imagr div */}
        <div >
         <img className="card-img" src={prop.img} alt="" />
        </div>

        {/* icos divs */}
        <div className="card-icons1">
            <div className="card-icons">
                <p>${prop.amount}</p>
            </div>  

             <div className="card-icons">
              <OpenInFullIcon/>
             </div>

             <div className="card-icons">
                <FavoriteBorderIcon/>
             </div>

             <div className="card-icons">
                  <AddCircleOutlineOutlinedIcon/>
             </div>
        </div>

        {/*  name and location div*/}
        <div className="card-content">
            <h3> {prop.name} </h3>
           <p>  <LocationOnIcon/> {prop.location} </p>
        </div>

        {/* bottom icons */}
        <div className="card-bottom">
            <div className="card-bottomicons">
              <BedIcon/>
              <p> {prop.beds} Beds </p>
            </div>

            <div className="card-bottomicons">
               <BathtubOutlinedIcon/>
               <p> {prop.baths} Baths  </p>
            </div>

            <div className="card-bottomicons">
             <GarageOutlinedIcon/>
             <p>1 Garage</p>
            </div>
        </div>

        {/* FOR SALE OR RENT DIV */}
        <div className="card-rentbuy">
            <p>{prop.buyorRent} </p>
        </div>

    </div>
  )
}

export default Card