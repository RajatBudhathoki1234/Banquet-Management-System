import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom"

import axios from "axios";

import "./displayMenu.css"

const DisplayMenu = () => {
 const { userId } = useParams();

 const [menuData, setMenuData] = useState([]);


 useEffect(() => {

  const fetchMenuData = async () => {
   const menuData = await axios.get(`/api/menu/${userId}`);
   setMenuData([menuData.data]);
  }
  fetchMenuData();
 }, [userId])

 return (
  <>

   {menuData.map((item) => {
    const { breakfast, desert, dinner, price } = item;
    return (
     <div className="menu" key={userId}>
      <div className="menu-price">
       <p>Per Plate <b>Rs.{price}</b></p>
      </div>
      <form method="POST" action="/api/bookedMenu">
       <div className="form-menus">

        <div className="heading-menu">
         <h2>STARTERS</h2>
        </div>


        <div className="menu-items">
         <div className="breakfast-image">
          <img src={require("../images/menu/breakfast.jpg")} alt="" />
         </div>

         <div className="menu-content-form">
          {
           breakfast.map((item, index) => {
            return (
             <div key={index}>
              <input type="checkbox" id={item} name="breakfast" value={item} />
              <label htmlFor="breakfast">{item}</label>
              <br />
             </div>
            )
           })
          }
         </div>
        </div>


       </div>

       <div className="form-menus" >
        <div className="heading-menu">
         <h2>MAINCOURSE</h2>
        </div>

        <div className="menu-items">
         <div className="dinner-image">
          <img src={require("../images/menu/dinner.jpg")} alt="" width="500" />
         </div>

         <div className="menu-content-form">
          {
           dinner.map((item, index) => {
            return (
             <div key={index}>
              <input type="checkbox" id={item} name="dinner" value={item} />
              <label htmlFor="dinner">{item}</label>
              <br />
             </div>
            )
           })
          }
         </div>
        </div>
       </div>

       <div className="form-menus" >
        <div className="heading-menu">
         <h2>DESSERT</h2>
        </div>

        <div className="menu-items">
         <div className="dinner-image">
          <img src={require("../images/menu/dinner.jpg")} alt="" width="500" />
         </div>

         <div className="menu-content-form">
          {
           desert.map((item, index) => {
            return (
             <div key={index}>
              <input type="checkbox" id={item} name="desert" value={item} />
              <label htmlFor="desert">{item}</label>
              <br />
             </div>
            )
           })
          }
         </div>
        </div>
       </div>
       <button className="submit-menu-btn" type="submit">Submit Menu</button>
      </form>
     </div>
    )
   })}
  </>
 )
}

export default DisplayMenu;