import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import './Nav.css'
import Login from '@mui/icons-material/Login';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {

// toggle nav 
const [nav,setNav]=useState(false);
function handleClick(){
    setNav(!nav);
}



    // get user
    const user = JSON.parse(localStorage.getItem('user'))
    // get  first letter
    const string  =  user? user.name : null;
    let letter;
    if  (string)
    {
       letter = string.charAt(0);
    }
     

    //   toggle profile
    const [profile , setprofile] = useState(false)

    function togglepro(){
          setprofile(!profile)
    }

// log out
function logout (){
    localStorage.removeItem('user')
    window.location.reload();
}

  return (
      <div className="main-nav"> 

     
    <div className='nav-container'>

        {/* Nav log */}
        <div>
            <Link to = "/">
            <h2 className='nav-logo'>CASKE</h2>
            </Link>
        </div>

 {/* Nav links */}
        <div className='nav-links'>
            <div className="toggle-links" id={nav ? "tog": ""}  >
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
        </div>
  {user ?  
        
  <div >

        {/* profile letter  */}
       <div className=' profile' onClick={togglepro} >
         <h2>{letter}</h2>
       </div>

            {/* profile div */}
    {profile && 
    
         <div className='toggled-profle'>
          {/* profile letter  */}

           <div className=' profile'>
               <h2>{letter}</h2>
           </div>

           <p> {user.name}  </p> 
           <p> {user.email}  </p> 
           <p>D.O.B:  {user.birthday}  </p> 
           <button className='logout' onClick={logout}>  <LogoutIcon/>  LOG OUT</button>

        </div>
    }
   
    
    </div>
    :
    
    
        <div className='login-div'>

        <Link to = "/registration" style={{ textDecoration: 'none' }}>
            <div className="link-nav">
            <AssignmentIndIcon/>  Register
            </div>
         
        </Link>

        <Link to = "/login" style={{ textDecoration: 'none' }}>
            <div className="link-nav">
            <Login/> Login
            </div>
           
        </Link>
        </div>   
 } 
        </div>

        {/* menu */}
         
       <div className="menu">
       {user ?  
        
        <div className="toggle-prof2" >
      
              {/* profile letter  */}
             <div className=' profile' onClick={togglepro} >
               <h2>{letter}</h2>
             </div>
      
                  {/* profile div */}
          {profile && 
          
               <div className='toggled-profle'>
                {/* profile letter  */}
      
                 <div className=' profile'>
                     <h2>{letter}</h2>
                 </div>
      
                 <p> {user.name}  </p> 
                 <p> {user.email}  </p> 
                 <p>D.O.B:  {user.birthday}  </p> 
                 <button className='logout' onClick={logout}>  <LogoutIcon/>  LOG OUT</button>
      
              </div>
          }
         
          
          </div>
          :
          
          
              <div className='login-div'>
      
              <Link to = "/registration" style={{ textDecoration: 'none' }}>
                  <div className="link-nav">
                  <AssignmentIndIcon/>  Register
                  </div>
               
              </Link>
      
              <Link to = "/login" style={{ textDecoration: 'none' }}>
                  <div className="link-nav">
                  <Login/> Login
                  </div>
                 
              </Link>
              </div>   
       }  
       <div  onClick={handleClick}>
       <MenuIcon/> 
       </div>
         
       </div>
      
       
    </div>
    </div>
  )
}

export default Nav