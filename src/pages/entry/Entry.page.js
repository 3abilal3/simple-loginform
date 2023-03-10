import React, { useState } from 'react';
import './entry.style.css';
import PropTypes from 'prop-types';
import { Login } from '../../components/login/Login.comp';
import { ResetForm } from '../../components/resetPassword/Reset.comp';


export const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formLoad, setFormLoad] = useState('login');


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password  ":
        setPassword(value);
        break;
      default:
        break;
    }
  }

  const handleOnSubmit = (e)=>{
    e.preventDefault();

   if(!email&&!password){
    
      return alert('fill up all the form')
  
   }
else{
    console.log(`email ${email} & password ${password}`)
}
  }

  const handleOnResetSubmit = (e)=>{
    e.preventDefault();

   if(!email){
    
      return alert('fill up email')
  
   }
else{
    console.log(`email ${email}`)
}
  }


  const formSwitcher=(formType)=>{
    setFormLoad(formType)
  }

  return (
    <div className='entry-page bg-info'>
      <div className='jumbotron'>
      {formLoad==='login' &&(
        <Login 
          handleOnChange={handleOnChange}
          email={email}
          password={password}
          handleOnSubmit={handleOnSubmit}
          formSwitcher={formSwitcher}
        />)}

{formLoad==='reset' &&(
      <ResetForm
          handleOnChange={handleOnChange}
          email={email}
          formSwitcher={formSwitcher}       
          handleOnResetSubmit={handleOnResetSubmit}
        />)}
      </div>
    </div>
  );
};
