import React from "react"

import "./createBanquet.css"

function Banquet() {
 return (
  <>
   <div className="container">
    <div className="auth-container">
     <section className="auth-first-section">
      <section id="create-banquet">
       <h1>Create Banquet</h1>
       <form className="create-banquet-form" method="POST" action="/api/createBanquet" enctype="multipart/form-data">
        <div className="email-field">
         <input
          type="name"
          id="name"
          name="name"
          placeholder="Banquet Name"
         />
        </div>
        <div className="password-field">
         <textarea
          type="desc"
          id="desc"
          name="desc"
          placeholder="Description"
         />
        </div>
        <div className="image-field">
         <input type="file" name="image" accept="image/png,image/jpeg" id="image-field" />
        </div>

        <div className="create-banquet-btn">
         <button type="submit" className="btn">Create Banquet</button>
        </div>
       </form>
      </section>
     </section>
    </div>
    {/* <form className="create-banquet" method="POST" action="/api/createBanquet" enctype="multipart/form-data">
    <label htmlFor="">Banquet Name </label>
    <input type="text" className="name" id="name" />
    <br />
    <label htmlFor="desc">Description  </label>
    <input type="text" className="desc" id="desc" />
    <br />
    <label htmlFor="desc">Image  </label>
    <input type="file" name="image" accept="image/png,image/jpeg" />
    <button className="btn">Submit</button>
   </form> */}
   </div >
  </>
 )
}

export default Banquet;