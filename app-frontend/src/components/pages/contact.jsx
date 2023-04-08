import React, { useState } from "react";

import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import axios from "axios";

import "./contact.css";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [contactData, setContactData] = useState({
    name: "",
    gmail: "",
    number: "",
    to: "",
    comment: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSubmit = async (e) => {
    await axios.post("/api/contact", contactData);
  };

  return (
    <div className="contact-page-container">
      <section className="left-side-contact-page">
        <article className="contact-page-heading">
          <h2>Please feel free to contact us for any queries</h2>
        </article>
        <article className="contact-page-social-links">
          <AiFillFacebook />
          <AiFillTwitterCircle />
          <AiFillInstagram />
          <AiFillLinkedin />
        </article>
      </section>
      <section className="right-side-contact-page">
        <form
          action="/api/contact"
          method="POST"
          className="contact-page-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="name"
            name="name"
            placeholder="Name Eg. Rajat"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="email"
            id="gmail"
            name="gmail"
            placeholder="Email Eg. Budhathokirajat31@gmail.com"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Phone Number"
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <select
            name="to"
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option value="" disabled selected>
              For
            </option>
            <option value="Banquet Booking">Banquet Booking</option>
            <option value="Banquet Owner">Banquet Owner</option>
          </select>

          <textarea
            id="comment"
            name="comment"
            rows="4"
            cols="50"
            placeholder="Your Message or Queries"
            onChange={(e) => {
              handleChange(e);
            }}
          ></textarea>
          <button
            className="contact-page-btn"
            type="submit"
            onClick={() => setIsOpen(true)}
          >
            Submit
          </button>
        </form>

        {isOpen && (
          <div>
            <div className="sucess-pop-up">
              <article className="pop-up-message">
                <p>Operation Success</p>
              </article>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact;
