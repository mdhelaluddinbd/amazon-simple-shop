import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';



const SignUp = () => {
   
    const [error,setError]=useState(null);
    const {createUser}=useContext(AuthContext);
   
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirm=form.confirm.value;
      
        if(password.length === 6 && password === confirm){
            setError("SignUp successful")
            return;
        }

        if(password.length < 6){
            setError("Must 6 digit")
            return;
        }
        if(password !== confirm){
            setError("Not match")
        }


        createUser(email,password)
        .then((result)=>{
            const user=result.user;
            console.log(user);
            form.reset();
        })
        .catch((error)=>{
            console.error(error)
        })
        
       

        
       
       

    }
    return (
        <div>
            <div className="container">
        <form className="form-container" onSubmit={handleSubmit} action="">
          <div className="login-container">
            <h2>Please SignUp</h2>
          </div>
          <div className="form-control">
            <label htmlFor="">Email</label>
            <input type="email" name="email" placeholder="Enter Email" />
          </div>

          <div className="form-control">
            <label htmlFor="">Password</label>
            <input type="password" name="password" placeholder="Enter Password" />
          </div>
          <div className="form-control">
            <label htmlFor="">Confirm Password</label>
            <input type="password" name="confirm" placeholder="Confirm Password" />
          </div>

          <div className="form-control">
            <input className="submit-btn" type="submit" value="SingUp" />
          </div>
          
          <div className="signup-new">
            <span>Already have you account ?</span>
            <Link to={"/Login"}> Login</Link>
           
          </div>
         <div className='error'>
         <p className='error'>{error}</p>
        
         </div>
        </form>
      </div>
        </div>
    );
};

export default SignUp;