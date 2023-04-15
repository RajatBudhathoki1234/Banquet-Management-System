import React, { useState } from "react";

import axios from "axios";

import "./bookBanquet.css";

const BookBanquet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [reservationData, setReservationData] = useState({
    shift: "",
    date: "",
    type: "",
    guest: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleSubmit = async (e) => {
    await axios.post("/api/createBookNow", reservationData);
  };

  return (
    <main>
      <div className="book-banquets-container">
        <section className="book-banquet-content">
          <section className="book-banquet-heading">
            <h2>Book now</h2>
          </section>

          <form
            className="book-banquet-form"
            action="/api/createBookNow"
            method="POST"
            onSubmit={handleSubmit}
          >
            <select
              name="shift"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              {/* <option value="" disabled selected>Shift</option> */}
              <option value="morning">Morning</option>
              <option value="evening">Evening</option>
              <option value="whole day">Whole day</option>
              <option value="whole day">For 1 Hour </option>
            </select>

            <input
              type="date"
              id="date"
              name="date"
              placeholder="date"
              min={(function () {
                let tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                return tomorrow.toISOString().split("T")[0];
              })()}
              onChange={(e) => {
                handleChange(e);
              }}
            />

            <input
              type="number"
              id="guest"
              name="guest"
              placeholder="Guest"
              max="5000"
              onChange={(e) => {
                handleChange(e);
              }}
            />

            <select
              name="type"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="" disabled selected>
                Type
              </option>
              <option value="weeding">Weeding</option>
              <option value="anniversary">Anniversary</option>
              <option value="corporate event">Corporate Event</option>
              <option value="other">Other</option>
            </select>
            <button
              className="online-booking-btn"
              onClick={() => setIsOpen(true)}
            >
              Online Booking
            </button>
          </form>
        </section>

        {isOpen && (
          <div>
            <div className="sucess-pop-up">
              {<button onClick={() => setIsOpen(false)}>X</button>}
              <article className="pop-up-message">
                <p>Searching the banquet</p>
              </article>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default BookBanquet;
