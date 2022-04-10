import React from 'react'
import HouseIcon from '@mui/icons-material/House';
import './Header.css'
import  img2 from '../images/img2.jpg'
import { Link, useNavigate } from 'react-router-dom';
function Header() {

  let navigate = useNavigate();
  function handleClick (){
    navigate("/allproperties")
  }
  


  return (
    <div className="header-container">
        <img className="headerimg" src={img2} alt="" />

        <div className="header-content">
          <div className="house-icon">
          <HouseIcon/>
          </div>
          <p>CASKA REAL ESTATE PROPERTIES</p>
{/* content */}

        <div className = "content-header"> 
        <h3>FIND  THE HOUSE OF</h3>
        <h3>YOIR DREAM USING</h3>
        <h3>OUR PLATFORM</h3>
        <Link to="/allproperties">
        <button className="btn-email" onClick={handleClick}>VIEW MORE</button>
        </Link>
        </div>

        </div>

        {/* search */}
        <div className="parent-search">
        <div className="search">
          <input type="search" className="input-search" /> <button className="btn-search">SEARCH</button>
        </div>

        </div>
       
    </div>
  )
}

export default Header