
import React from 'react'
import { useState } from "react";
import "./Registration.css";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";


const Login= () => {

  const [values, setValues] = useState({
   
    email: "",

    password: "",
    
  });

  const inputs = [
  
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
   
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
   
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
   const [loged , setloged] = useState(false)
  // onclick
  let navigate = useNavigate ()
  function handleClick ()
  {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user.password === values.password)
    {
            navigate ("/")
            window.location.reload();
    }
    else
    {
      setloged (true);

    }
    console.log(values);
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button onClick={handleClick}>Submit</button>
      </form>
      {loged ? <p>Wrong User Information</p> : null }
      
    </div>
  );
};

export default Login;