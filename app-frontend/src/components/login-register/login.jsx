import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom"

import axios from "axios";

import "./login-register.css"

const Login = () => {

 const navigate = useNavigate();

 const [error, setError] = useState(false);

 const [userAuth, setUserAuth] = useState({ email: "", password: "" });


 const handleChange = (e) => {
  const name = e.target.name;
  const password = e.target.value;
  setUserAuth({ ...userAuth, [name]: password })
 }

 const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await axios.post("/api/login", userAuth);
  const data = response.data;
  if (data === "unsucessful") {
   setError(true);
   console.log("hello")
  } else if (data === "sucess") {

   window.location.reload(navigate("/"));
  }
 }

 return (
  <>
   <main>
    <div className="auth-container">
     <section className="auth-first-section">
      <section className="card-design">
       <section className="u-shaped card-01"></section>
       <section className="u-shaped card-02"></section>
       <section className="u-shaped card-03"></section>
       <section className="u-shaped card-04"></section>
      </section>
      <section className="register-form">
       <h1>User Login</h1>
       <form className="register" onSubmit={handleSubmit}>
        <div className="email-field">
         <span className="login-icon"><i className="fa-solid fa-user"></i></span>
         <input
          type="email"
          id="email"
          name="email"
          placeholder="Username"
          onChange={(e) => { handleChange(e) }}
          onClick={
           () => {
            setError(false);
           }
          }
         />
        </div>
        <div className="password-field">
         <span className="login-icon"><i className="fa-solid fa-lock"></i></span>
         <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) => { handleChange(e) }}
          onClick={
           () => {
            setError(false);
           }
          }
         />
        </div>
        <div className="btn-pass">
         <button type="submit" className="btn">LOGIN</button>
        </div>
        <div className="forget-pass">
         <a href="forgetPass">Forget Username password?</a>
         <a href="register" className="margin-bottom">
          Create Your Account
          <i className="fa-solid fa-arrow-right"></i>
         </a>
        </div>
       </form>
       {
        error && (
         <article className="error-message">
          <p>Sorry! Email or Password did not match</p>
         </article>
        )
       }
      </section>
     </section>
    </div>
   </main>
   {/* <Footer /> */}
  </>
 )
}

export default Login