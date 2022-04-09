import React, { useState } from 'react'
import './Contact.css'
import emailjs from  'emailjs-com'
function Contact() {

  const [succ , setSuccess] = useState (false)




  // send email notification
  function Sendemail (e){
    e.preventDefault()
   emailjs.sendForm("service_apy8uk3","template_3pshzls" ,e.target,"Qs840L1BwZGTjBL76")
    .then(res=> {
      console.log(res);
    }).catch (err=> console.log (err))
    e.target.reset()
    setSuccess(true)
    }

  return (
    <div className="element" >

 <h2>CONTACT ME</h2>
 {succ ? <p className="succ"> Email Sent Successfully</p> : null}
     <form className="form-inputs" onSubmit={Sendemail}>
       
       <input 
       type="text"
       placeholder="Name"
       name = "name"
         />

          
       <input 
       type="email"
       placeholder="email"
       name = "user_email"
         />

          
       <input 
       type="text"
       placeholder="Subject"
       name = "subject"
         />

        
        <textarea
        name="message"  
       type="textarea"
       placeholder="message"
      
         />
      
      
     <button className="btn-email">SEND</button>
     </form>
    

    </div>
  )
}

export default Contact