import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
    const {signInUser}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
   
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)

        signInUser(email,password)
        .then((result)=>{
            const user=result.user;
            console.log(user)

            navigate(from,{replace:true})

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
            <h2>Please Login</h2>
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
            <input className="submit-btn" type="submit" value="Login" />
          </div>

          <div className="signup-new">
            <span>Are You New Here ?</span>
            <Link to={"/signup"}> SignUp</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
