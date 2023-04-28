import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import Footer from "../footer/Footer";

import "./displayMenu.css";

const DisplayMenu = () => {
  const { userId, token, banquetName } = useParams();

  console.log(banquetName);

  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      const menuData = await axios.get(`/api/menu/${userId}`);
      setMenuData([menuData.data]);
    };
    fetchMenuData();
  }, [userId]);

  return (
    <>
      <div className="img-section">
        {/* <img src={require("../images/sub-banner.jpg")} alt="" /> */}
        <div className="img-content">
          <h2 className="animate__animated animate__pulse">
            List of Banquet and their Blogs
          </h2>
          <p className="animate__animated animate__lightSpeedInLeft">
            Are you looking for the perfect venue for your upcoming banquet, but
            feeling overwhelmed by the endless options? Look no further! Our
            blog has everything you need to know about planning the perfect
            banquet, from choosing the ideal venue to creating a mouthwatering
            menu that will leave your guests wanting more.
          </p>
        </div>
      </div>
      {menuData.map((item) => {
        const { breakfast, desert, dinner, price } = item;
        return (
          <div className="menu" key={userId}>
            <div className="menu-price">
              <p>
                Maximum Capacity <b>{price}</b>
              </p>
            </div>
            <form
              method="POST"
              action={`/api/bookBanquet/${token}/${banquetName}`}
            >
              <div className="form-menus">
                <div className="heading-menu">
                  <h2>STARTERS</h2>
                </div>

                <div className="menu-items">
                  <div className="menu-content-form">
                    {breakfast.map((item, index) => {
                      return (
                        <div key={index} className="display-all-menu">
                          <div className="breakfast-image">
                            <img
                              src={require("../images/menu/breakfast.jpg")}
                              alt=""
                            />
                          </div>
                          <div>
                            <div>
                              <input
                                type="checkbox"
                                id={item}
                                name="breakfast"
                                value={item}
                              />
                              <label htmlFor="breakfast">{item}</label>
                              <br />
                            </div>
                            <div className="underline-dotted"></div>
                            <div className="menu-text">
                              <p style={{ color: "white" }}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consequatur perspiciatis
                                dolore, .
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="form-menus">
                <div className="heading-menu">
                  <h2>MAINCOURSE</h2>
                </div>

                <div className="menu-items">
                  <div className="menu-content-form">
                    {dinner.map((item, index) => {
                      return (
                        <div key={index} className="display-all-menu">
                          <div className="breakfast-image">
                            <img
                              src={require("../images/menu/dinner.jpg")}
                              alt=""
                              width="500"
                            />
                          </div>
                          <div>
                            <div>
                              <input
                                type="checkbox"
                                id={item}
                                name="dinner"
                                value={item}
                              />
                              <label htmlFor="dinner">{item}</label>
                              <br />
                            </div>
                            <div className="underline-dotted"></div>
                            <div className="menu-text">
                              <p style={{ color: "white" }}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consequatur perspiciatis
                                dolore, .
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="form-menus">
                <div className="heading-menu">
                  <h2>DESSERT</h2>
                </div>

                <div className="menu-items">
                  <div className="menu-content-form">
                    {desert.map((item, index) => {
                      return (
                        <div key={index} className="display-all-menu">
                          <div className="breakfast-image">
                            <img
                              src={require("../images/menu/dinner.jpg")}
                              alt=""
                              width="500"
                            />
                          </div>
                          <div>
                            <div>
                              <input
                                type="checkbox"
                                id={item}
                                name="desert"
                                value={item}
                              />
                              <label htmlFor="desert">{item}</label>
                              <br />
                            </div>
                            <div className="underline-dotted"></div>
                            <div className="menu-text">
                              <p style={{ color: "white" }}>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consequatur perspiciatis
                                dolore, .
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <button className="submit-menu-btn" type="submit">
                Submit Menu
              </button>
            </form>
          </div>
        );
      })}
      <Footer />
    </>
  );
};

export default DisplayMenu;
