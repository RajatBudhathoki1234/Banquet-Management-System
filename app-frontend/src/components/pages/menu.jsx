import { useNavigate, useParams } from "react-router-dom";

import React, { useState } from "react";

import Footer from "../footer/Footer";

import "./menu.css";

const Menu = () => {
  let { token } = useParams();

  const [Unsucessfull, setUnsucessfull] = useState(false);

  const [breakfast, setbreakFast] = useState([]);

  const [dinner, setDinner] = useState([]);

  const [desert, setDesert] = useState([]);

  const [pricePerPlate, setpricePerPlate] = useState();

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e, index) => {
    if (e.target.name === "breakfast") {
      const inputData = [...breakfast];
      inputData[index] = e.target.value;
      setbreakFast(inputData);
    } else if (e.target.name === "dinner") {
      const inputData = [...dinner];
      inputData[index] = e.target.value;
      setDinner(inputData);
    } else if (e.target.name === "desert") {
      const inputData = [...desert];
      inputData[index] = e.target.value;
      setDesert(inputData);
    }
  };

  const handleAddMenu = (e) => {
    if (e.target.name === "breakfast") {
      setbreakFast([...breakfast, []]);
    } else if (e.target.name === "dinner") {
      setDinner([...dinner, []]);
    } else if (e.target.name === "desert") {
      setDesert([...desert, []]);
    }
  };
  console.log(token);

  const removeInput = (e, index) => {
    if (e.target.name === "breakfast") {
      const newInput = [...breakfast];

      newInput.splice(index, 1);

      setbreakFast(newInput);
    } else if (e.target.name === "dinner") {
      const newInput = [...dinner];

      newInput.splice(index, 1);

      setDinner(newInput);
    } else if (e.target.name === "desert") {
      const newInput = [...desert];

      newInput.splice(index, 1);

      setDesert(newInput);
    }
  };

  const sendMenuData = () => {
    if (
      breakfast.length > 0 &&
      dinner.length > 0 &&
      desert.length > 0 &&
      pricePerPlate
    ) {
      const menu = [[...breakfast], [...dinner], [...desert], pricePerPlate];
      fetch(`/api/menu/${token}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ menu }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data === "Unsucessfull") {
            setUnsucessfull(true);
          }
          if (data === "Sucess") {
            setbreakFast("");
            setDinner("");
            setDesert("");
            setpricePerPlate("");
            // setIsOpen(true)
            // nagivateFun()
          }
        });
    } else {
      setUnsucessfull(true);
    }
  };

  const nagivateFun = () => {
    setTimeout(() => {
      setIsOpen(false);
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <div className="img-section">
        {/* <img src={require("../images/sub-banner.jpg")} alt="" /> */}
        <div className="img-content">
          <h2 className="animate__animated animate__pulse">Create Banquet</h2>
          <p className="animate__animated animate__lightSpeedInLeft">
            Are you looking for the perfect venue for your upcoming banquet, but
            feeling overwhelmed by the endless options? Look no further! Our
            blog has everything you need to know about planning the perfect
            banquet, from choosing the ideal venue to creating a mouthwatering
            menu that will leave your guests wanting more.
          </p>
        </div>
      </div>
      <div className="banquetMenu-container">
        <h1>Add Menu</h1>
        <section className="breakfast-section menu-section">
          <label htmlFor="breakfast">Breakfast</label>
          {breakfast.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="text"
                  id="breakfast"
                  name="breakfast"
                  placeholder="breakfast"
                  onChange={(e) => handleChange(e, index)}
                />

                <button
                  className="menu-close-btn"
                  name="breakfast"
                  onClick={(e) => {
                    removeInput(e, index);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
          <button
            className="addMenu-btn"
            name="breakfast"
            onClick={(e) => {
              handleAddMenu(e);
              setUnsucessfull(false);
            }}
          >
            Add Breakfast
          </button>
        </section>

        <section className="dinner-section  menu-section">
          <label htmlFor="breakfast">Dinner</label>
          {dinner.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="text"
                  id="dinner"
                  name="dinner"
                  placeholder="dinner"
                  onChange={(e) => handleChange(e, index)}
                />

                <button
                  className="menu-close-btn"
                  name="dinner"
                  onClick={(e) => {
                    removeInput(e, index);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
          <button
            className="addMenu-btn"
            name="dinner"
            onClick={(e) => {
              handleAddMenu(e);
              setUnsucessfull(false);
            }}
          >
            Add Dinner
          </button>
        </section>

        <section className="desert-section  menu-section">
          <label htmlFor="desert">Desert</label>
          {desert.map((item, index) => {
            return (
              <div key={index}>
                <input
                  type="text"
                  id="desert"
                  name="desert"
                  placeholder="desert"
                  onChange={(e) => handleChange(e, index)}
                />

                <button
                  name="desert"
                  className="menu-close-btn"
                  onClick={(e) => {
                    removeInput(e, index);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
          <button
            className="addMenu-btn"
            name="desert"
            onClick={(e) => {
              handleAddMenu(e);
              setUnsucessfull(false);
            }}
          >
            Add Desert
          </button>
        </section>

        <section className="price-section  menu-section">
          <label htmlFor="price">Capacity</label>

          <input
            type="number"
            id="price"
            name="price"
            placeholder="Maximum No. of Capacity"
            onChange={(e) => setpricePerPlate(e.target.value)}
          />
        </section>

        {Unsucessfull && (
          <p style={{ color: "red", fontSize: "20px", fontWeight: "500" }}>
            Please check empty fields
          </p>
        )}

        {isOpen && (
          <div className="sucess-popUp">
            <article className="pop-up-message">
              <p>Operation Success</p>
              <button
                className="X"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                X
              </button>
            </article>
          </div>
        )}

        <section className="submit-menu-section">
          <button
            className="submit-menu"
            type="submit"
            onClick={() => {
              sendMenuData();
            }}
          >
            Submit Menu
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
