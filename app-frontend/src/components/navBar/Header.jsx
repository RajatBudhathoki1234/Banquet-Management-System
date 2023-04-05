import React from "react";

import "./header.css";

import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";

function Header({ checkLogin, deleteFun }) {
  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="menu-container">
            <button className="menu-btn">
              <AiOutlineMenu className="menu-icon" />
            </button>
          </div>

          <div className="links">
            <div className="logo">
              <img
                src={require("../images/dhido.png")}
                alt=""
                style={{ width: 130 }}
              />
            </div>

            <div className="link-container">
              <a href="/" className="link">
                <i className="fa fa-home"></i>
                Home
              </a>
              <a href="banquet" className="link">
                <i className="fa-solid fa-champagne-glasses"></i> Banquets
              </a>

              <a href="blog" className="link">
                <i className="fa-solid fa-blog"></i>
                Blog
              </a>
              <a href="gallery" className="link">
                <i className="fa-solid fa-info"></i>
                Gallery
              </a>
              <a href="about" className="link">
                <i className="fa fa-question-circle"></i>
                About Us
              </a>
              <a href="contact" className="link">
                <i className="fa fa-question-circle"></i>
                Contact Us
              </a>

              {!checkLogin && (
                <>
                  <a href="register" className="link">
                    <i className="fa-solid fa-address-card"></i>
                    Register
                  </a>
                  <a href="login" className="link">
                    <i className="fa-solid fa-user"></i>
                    Login
                  </a>
                </>
              )}

              {checkLogin && (
                <>
                  <button
                    className="link btn-logout"
                    onClick={() => {
                      deleteFun();
                    }}
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
