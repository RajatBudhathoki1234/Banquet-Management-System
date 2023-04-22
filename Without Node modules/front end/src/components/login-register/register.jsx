import React, { useState } from "react";

import { useNagivate } from "react-router-dom";

import axios from "axios";

import "./login-register.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/register", user);
    console.log(response);
    if (response.data === "Sucessfull") {
      setIsOpen(true);
      console.log("je;saddddddddddddddddddddd");
    }
  };

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
              <h1 id="register-text">Register Account</h1>
              <form className="register" onSubmit={handleSubmit}>
                <div className="name-field">
                  <span className="login-icon">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Username"
                    value={user.name}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>

                <div className="email-field">
                  <span className="login-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    placeholder="Email"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </div>

                <div className="number-field">
                  <span className="login-icon">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    placeholder="Number"
                    value={user.number}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    pattern="[0-9]{10,}"
                    title="Phone number must contain at least 10 digits."
                    required
                  />
                </div>

                <div className="password-field">
                  <span className="login-icon">
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$"
                    title="Password must contain at least one uppercase letter, one number and special character."
                  />
                </div>

                <div className="btn-pass">
                  <button type="submit" className="btn">
                    Register Account
                  </button>
                </div>
                <div className="forget-pass">
                  <a href="login">Already have an account. Sign in?</a>
                </div>
                {isOpen && (
                  <div>
                    <article
                      style={{ background: "green", padding: "2px 5px" }}
                    >
                      <p style={{ color: "white" }}>
                        Completed Register Please Check Your Email
                      </p>
                      {/* <button
                        className="X"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        X
                      </button> */}
                    </article>
                  </div>
                )}
              </form>
              {/* <!--End of form section--> */}
            </section>
          </section>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Register;
