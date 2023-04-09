import React from "react";

import "./bookBanquet.css"

const BookBanquet = () => {


 return (
  <main>
   <div className="book-banquets-container">
    <section className="book-banquet-content">
     <section className="book-banquet-heading">
      <h2>Book now</h2>
     </section>

     <form className="book-banquet-form" action="/api/filterBanquet" method="POST">
      <select name="shift">
       <option value="" disabled selected>Shift</option>
       <option value="morning">Morning</option>
       <option value="evening">Evening</option>
       <option value="whole day">Whole day</option>
      </select>

      <input type="date" id="date" name="date" placeholder="date" />
      <input type="number" id="guest" name="guest" placeholder="Guest" />

      <select name="type">
       <option value="" disabled selected>Type</option>
       <option value="weeding">Weeding</option>
       <option value="anniversary">Anniversary</option>
       <option value="corporate event">Corporate Event</option>
       <option value="other">Other</option>
      </select>
      <button className="online-booking-btn">
       Online Booking
      </button>
     </form>
    </section>

   </div>
  </main >
 )
}

export default BookBanquet;