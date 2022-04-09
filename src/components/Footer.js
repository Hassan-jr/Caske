import React from 'react'
import {Link} from 'react-router-dom'
import Rentdata from '../data/Rentdata'
import "./Footer.css"
import HouseIcon from '@mui/icons-material/House';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LogoutIcon from '@mui/icons-material/Logout';


function Footer() {
  return (
    <div>

    {/* Owner */}
    <div className="owner">
            <img className="owner-img" src={Rentdata[7].img} alt="" />
            <div>
                <h2>ABDIAZIZ GACAL</h2>
                <p>Founder And CEO of Caske Real Estate</p>
            </div>
        </div>
    <div className="footer">

        {/* Bottom Footer */}
      
  <div className="bottom-footer">
      <div className="bottom-footer1">
        <div className="house-icon2">
           <h2>CASKE <HouseIcon/></h2>  
         </div >

          <div className="footer-content">
             <h2>ABOUT ME</h2>
             <p>I am A Real EstateAgent And Real Estate Developer, And Also Founder And CEO of CASKE Real Estate </p>
          </div>

          <div>
            <a style={{ Color: 'none' }} href="https://instagram.com/caske_major?igshid=YmMyMTA2M2Y="><InstagramIcon/>@caske_major</a>
            <p><MailOutlineIcon/>abdiaziz_gacal21@gmail.com</p>
            <p><LocalPhoneIcon/> +1 (236) 513 6919</p>
          </div>

        </div>
    

          <div className="bottom-footer2">
            <h2>QUICK LINKS</h2>
          <Link to = "/" style={{ textDecoration: 'none' }}>
            Home
        </Link>
        <Link to = "/allproperties" style={{ textDecoration: 'none' }}>
            Properties
        </Link>
        <Link to = "/buy" style={{ textDecoration: 'none' }}>
            Buy
        </Link>
        
        <Link to = "/rent" style={{ textDecoration: 'none' }}>
            Rent
        </Link>
        <Link to = "/contact" style={{ textDecoration: 'none' }}>
            <div className="link-nav">
            <ContactPageOutlinedIcon/>  Contact Me
            </div>
            </Link>

            <Link to = "/survey" style={{ textDecoration: 'none' }}>
           <div  className="link-nav">  
           <LibraryBooksIcon/>    Survey
           </div>
           </Link>
             <button className='logout' >  <LogoutIcon/>  LOG OUT</button>

          </div>

     

     </div>
    </div>

    </div>
  )
}

export default Footer