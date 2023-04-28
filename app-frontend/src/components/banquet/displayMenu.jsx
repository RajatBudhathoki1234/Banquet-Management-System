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
            WELCOME TO THE BANQUET
          </h2>
          <p className="animate__animated animate__lightSpeedInLeft">
            Welcome to our menu design system! With our system, you have the
            flexibility to design a menu that perfectly fits your needs and
            preferences. Whether you're looking to create a menu for a special
            event, a restaurant, or any other occasion, our system makes it easy
            and convenient for you to do so.
          </p>
        </div>
      </div>
      {menuData.map((item) => {
        const { breakfast, desert, dinner, price } = item;
        return (
          <div className="form-menus" key={userId}>
            <div className="heading-menu">
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
                            <img src={require("../images/bbb.jpg")} alt="" />
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
                                It replenishes your supply of glucose to boost
                                your energy levels and alertness.
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
                              src={require("../images/jimbu.jpg")}
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
                                The main course is the primary dish of food
                                served for lunch or dinner.
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
                              src={require("../images/Desert.jpg")}
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
                                Desserts can be defined as a usually sweeter
                                course that concludes a meal.
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
