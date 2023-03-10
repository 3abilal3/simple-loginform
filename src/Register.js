import React,{ useState } from 'react';
export const Register=(props)=>{
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [name,setName]=useState('');
    


    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email)
    }
    return(
        
       <div className='auth-form-container'>
        <form onSubmit={handleSubmit} className="reg-form">

            <label htmlFor="name">Full Name</label>            
            <input value={name} onChange={(e)=>setName(e.target.value)} type="name" placeholder="name" id="name" name="name"/>

            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email@gmail.com" id="email" name="email"/>

            <label htmlFor="pass">password</label>
            <input  value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password"/>

            
        </form>

        <button className='link-btn' onClick={()=>{
            props.onFormSwitch('login')
        }}>
           Already have an account Login here!
        </button>
        </div>
       
    );

}