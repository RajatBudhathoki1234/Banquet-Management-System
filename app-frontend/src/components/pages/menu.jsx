import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

import "./menu.css";

const Menu = () => {
  const [breakfast, setbreakFast] = useState([]);

  const [dinner, setDinner] = useState([]);

  const [desert, setDesert] = useState([]);

  const [pricePerPlate, setpricePerPlate] = useState();

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
    if (breakfast && dinner && desert && pricePerPlate) {
      const menu = [[...breakfast], [...dinner], [...desert], pricePerPlate];
      console.log(pricePerPlate);
      fetch("/api/menu", {
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
          if (data === "Sucess") {
            setbreakFast("");
            setDinner("");
            setDesert("");
            setpricePerPlate("");
            navigate("/");
          }
        });
    }
  };

  return (
    <>
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
            }}
          >
            Add Desert
          </button>
        </section>

        <section className="price-section  menu-section">
          <label htmlFor="price">Price</label>

          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            onChange={(e) => setpricePerPlate(e.target.value)}
          />
        </section>

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
    </>
  );
};

export default Menu;
