import React from "react";

import "./contact.css";

const contact = () => {
  return (
    <div className="contact-page-container">
      <section className="left-side-contact-page">
        <article className="contact-page-heading">
          <h2>Please feel free to contact us for any queries</h2>
        </article>
      </section>
      <section className="right-side-contact-page">
        <form className="contact-page-form">
          <input
            type="text"
            className="name"
            name="name"
            placeholder="Name Eg. Rajat"
          />
          <input
            type="text"
            id="gmail"
            name="gmail"
            placeholder="Email Eg. Budhathokirajat31@gmail.com"
          />
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Phone Number"
          />
          <textarea
            id="comment"
            name="comment"
            rows="4"
            cols="50"
            placeholder="Your Message or Queries"
          ></textarea>
          <button className="contact-page-btn" type="submit">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default contact;
