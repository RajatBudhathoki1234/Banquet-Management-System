import React from "react";

import { BsFillTelephoneForwardFill } from "react-icons/bs";

import {
  AiFillMail,
  AiFillHome,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-short-info">
        <div className="short-info-text" data-aos="zoom-in">
          <h2>Short Info</h2>
          <p>Get in Touch</p>
          <img
            src={"http://wahabali.com/work/pearl-demo/images/heading-dark.png"}
            alt=""
          />
        </div>
        <div className="get-touch" data-aos="zoom-in">
          <section className="contact-us">
            <div className="heading">
              <h2>Contact Us</h2>
            </div>
            <div className="footer-content">
              <p id="margin-btm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Aenean
                ac.
              </p>
              <p>
                <BsFillTelephoneForwardFill /> +977 982312132
              </p>
              <p>
                <AiFillMail /> test@gmail.com
              </p>
              <p>
                <AiFillHome /> 329 Queensberry Street, North Me bourne,
                Australia.
              </p>
            </div>
          </section>
          <section className="opening-hour">
            <div className="heading">
              <h2>Opening Hour</h2>
            </div>
            <div className="opening-hour-content">
              <div className="days">
                <h2>Monday</h2>
                <h2>Tuesday</h2>
                <h2>Wednessday</h2>
                <h2>Thursday</h2>
                <h2>Friday</h2>
                <h2>Saturday</h2>
                <h2>Sunday</h2>
              </div>

              <div className="time">
                <p>09am - 10pm</p>
                <p>09am - 10pm</p>
                <p>09am - 10pm</p>
                <p>09am - 10pm</p>
                <p>11am - 08pm</p>
                <p>10am - 11pm</p>
                <p>Closed</p>
              </div>
            </div>
          </section>
          <section className="opening-hour">
            <div className="heading">
              <h2>Instagram</h2>
            </div>
            <div className="content">
              <img src={require("../images/blog-img.jpg")} alt="" width="100" />
              <img src={require("../images/blog-img.jpg")} alt="" width="100" />
              <img src={require("../images/blog-img.jpg")} alt="" width="100" />
              <img src={require("../images/blog-img.jpg")} alt="" width="100" />
              <img src={require("../images/blog-img.jpg")} alt="" width="100" />
              <img src={require("../images/blog-img.jpg")} alt="" width="100" />
            </div>
          </section>
        </div>
        <div className="underline" data-aos="zoom-in"></div>
        <div className="about-banquet" data-aos="zoom-in">
          <div className="heading">
            <h2>About Banquet</h2>
          </div>
          <div className="footer-content">
            <p>
              PEARL is an Lorem ipsum porta placerat rutrum aliquet platea
              accumsan, molestie eros aliquet adipiscing egestas ultrices, leo
              convallis dolor nisl integer potenti fringilla aenean condimentum
              ipsum maecenas aliquet consectetur.
            </p>
          </div>
        </div>
        <div className="links-newsletter">
          <div className="social-links">
            <div className="heading">
              <h2>Follow Along</h2>
            </div>
            <div className="social-link">
              <a href="www.instagram.com">
                {" "}
                <AiFillInstagram className="social-icon" />
              </a>
              <a href="www.instagram.com">
                {" "}
                <AiFillFacebook className="social-icon" />
              </a>
              <a href="www.instagram.com">
                {" "}
                <AiOutlineWhatsApp className="social-icon" />
              </a>
            </div>
          </div>
          <div className="newsLetter">
            <div className="heading">
              <h2>Newsletter</h2>
            </div>
            <div className="newsletter-form">
              <input
                className="email"
                id="email"
                placeholder="Enter your e-mail address"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-footer">
        <p>Copyright © 2016 Pearl Hotel. All rights reserved. by Brighthemes</p>
        <p>Permissions and Copyrights - Contact Us </p>
      </div>
    </footer>
  );
}

export default Footer;
