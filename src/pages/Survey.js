import React, { useState } from 'react'
import './Survey.css'

function Survey() {

const [surv, setsurv]=useState (false)
function surveyclick(e) {
    console.log(e.target);
    e.preventDefault();
    setsurv (!surv)
}



  return (
    <div className="element">
        <h2>SURVEY FORM</h2>
 {surv ? <h2>Survey Successfully Submitted</h2> : null}
   
<form id="form"  onSubmit={surveyclick}>
 

  {/* Details  */}

 <div class="form-control">

     <label for="name" id="label-name">

         Name

     </label>


      {/* Input Type Text  */}

     <input type="text"

            id="name"

            placeholder="Enter your name" />

 </div>



 <div class="form-control">

     <label for="email" id="label-email">

         Email

     </label>


      {/* Input Type Email */}

     <input type="email"

            id="email"

            placeholder="Enter your email" />

 </div>



 <div class="form-control">

     <label for="age" id="label-age">

         Age

     </label>


      {/* Input Type Text  */}

     <input type="text"

            id="age"

            placeholder="Enter your age" />

 </div>



 <div class="form-control">

     <label for="role" id="label-role">

         Which option best describes you?

     </label>

      

     {/* Dropdown options  */}

     <select name="role" id="role">

         <option value="student"> Real Estate Agent</option>

         <option value="intern"> Looking for Homes on Sale</option>

         <option value="professional">

             Looking For Rental Properties

         </option>

         <option value="other">Other</option>

     </select>

 </div>



 <div class="form-control">

     <label>

         Would you recommed CASKE Real Estate

         to a friend?

     </label>


      {/* Input Type Radio Button  */}

     <label for="recommed-1">

         <input type="radio"

                id="recommed-1"
               value="yes"
                name="recommed"/> Yes

     </label>

     <label for="recommed-2">

         <input type="radio"

                id="recommed-2"
               value="no"
                name="recommed"/> No

     </label>

     <label for="recommed-3">

         <input type="radio"

                id="recommed-3"
                  value="maybe"
                name="recommed"/> Maybe

     </label>

 </div>



 <div class="form-control">

     <label>
Which source of information do you use while choosing real estate property?

         <small>(Check all that apply)</small>

     </label>

      {/* Input Type Checkbox  */}

     <label for="inp-6">

         <input type="checkbox"
                value="Brokers"
                name="inp"/>Brokers
     </label>

     <label for="inp-7">

         <input type="checkbox"
                 value="Family/Friends"
                name="inp"/>Family/Friends
        </label>

     <label for="inp-7">

         <input type="checkbox"
               value="Real Estate advertisement"
                name="inp"/>Real Estate advertisement
        </label>

     <label for="inp-7">

         <input type="checkbox"
                value="Internet"
                name="inp"/>Internet
        </label>

     <label for="inp-7">

         <input type="checkbox"
                value="Other"
                name="inp"/>Other
    </label>

 </div>



 <div class="form-control">

     <label for="comment">

         Any comments or suggestions

     </label>

{/* 
      multi-line text input control   */}

     <textarea name="comment" id="comment"

         placeholder="Enter your comment here">

     </textarea>

 </div>

 {surv ? <h2>Survey Successfully Submitted</h2> : null}


   {/* Multi-line Text Input Control  */}

 <button    >

     Submit

 </button>

</form>


    </div>
  )
}

export default Survey