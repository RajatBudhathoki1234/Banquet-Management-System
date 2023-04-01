import React, { useEffect, useState } from "react";

import { GiIndianPalace } from "react-icons/gi";

import "./displayBanquet.css";

const url = "http://localhost:8000/api/getBanquet";

const DisplayBanquet = ({ userId }) => {
  const [banquetData, setBanquetData] = useState([]);

  const fetchData = async () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBanquetData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="img-section">
        {/* <img src={require("../images/sub-banner.jpg")} alt="" /> */}
        <div className="img-content">
          <h2 className="animate__animated animate__pulse">All Banquets</h2>
          <p className="animate__animated animate__lightSpeedInLeft">
            Ridiculus sociosqu cursus neque cursus curae ante scelerisque
            vehicula.
          </p>
        </div>
      </div>
      {/* {console.log(userId)} */}

      <div className="book-banquet-container">
        <div className="display-banquet-container">
          <div className="select-hall">
            <GiIndianPalace className="hall-icon" />
            <h2>Select Hall</h2>
          </div>
          {banquetData.map((item) => {
            const { _id, banquet_name, banquet_description, image_location } =
              item;
            return (
              <div key={_id} className="banquet-container">
                <img
                  src={require(`../banquet-Images/${image_location}`)}
                  alt=""
                />
                <div className="banquet-content">
                  <h2>{banquet_name}</h2>
                  <p>{banquet_description}</p>
                  <a href={`/DisplayMenu/${userId}`}>
                    <button className="banquet-menu-btn">Continue</button>
                  </a>
                </div>
              </div>
              // {/* <article className="banquet-image">
              // </article> */}
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayBanquet;
