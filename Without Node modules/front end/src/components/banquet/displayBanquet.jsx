import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Slider from "@mui/material/Slider";

import { GiIndianPalace } from "react-icons/gi";

import { AiFillExclamationCircle, AiOutlineSearch } from "react-icons/ai";

import axios from "axios";

import Footer from "../footer/Footer";

import "./displayBanquet.css";

const url = "http://localhost:8000/api/getBanquet";

const DisplayBanquet = ({ userId }) => {
  const [banquetData, setBanquetData] = useState([]);

  const [searchBanquetValue, setSearchBanquetValue] = useState("");

  const { token } = useParams();
  console.log(token);

  const [searchBanquetByLocation, setSearchBanquetByLocation] = useState("");

  const [noDataFound, setNoDataFound] = useState(false);

  const [range, setRange] = useState([100, 1000]);
  // const handleAscending = async () => {
  //   const response = await axios.get(`/api/filterbanquetAsc/${0}`);
  //   if (response.data === "unsucessful") {
  //     setNoDataFound(true);
  //     return;
  //   }
  //   setBanquetData(response.data);
  // };
  async function handleChanges(event, newValue) {
    setRange(newValue);
    setNoDataFound(false);
    const response = await axios.get(`/api/filterBanquetPrice/${range}`);
    if (response.data === "unsucessful") {
      setNoDataFound(true);
      return;
    }
    setBanquetData(response.data);
  }

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

  const handleInput = (e) => {
    setSearchBanquetValue(e.target.value);
    setNoDataFound(false);
    if (e.target.value === "") {
      fetchData();
    }
  };

  const handleSearchByLocationInput = async (e) => {
    setNoDataFound(false);
    const response = await axios.get(
      `/api/filterBanquetLocation/${e.target.value}`
    );
    if (response.data === "unsucessful") {
      setNoDataFound(true);
      return;
    }
    setBanquetData(response.data);
    if (e.target.value === "") {
      fetchData();
    }
  };

  const handleSearchBanquet = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `/api/filterBanquetName/${searchBanquetValue}`
    );
    if (response.data === "unsucessful") {
      setNoDataFound(true);
      return;
    }
    setBanquetData(response.data);
  };
  const sortAscending = async () => {
    const response = await axios.get(`/api/filterBanquetAscending`);
    setBanquetData(response.data);
  };
  const sortDescending = async () => {
    const response = await axios.get(`/api/filterBanquetDescending`);
    setBanquetData(response.data);
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
          <div className="search-banquet-form">
            <div className="location-field" style={{ margin: "20px 50px" }}>
              <select
                name="location"
                onChange={(e) => {
                  handleSearchByLocationInput(e);
                }}
              >
                <option value="" disabled selected>
                  Location
                </option>
                <option value="Kathmandu">Kathmandu</option>
                <option value="Butwal">Butwal</option>
                <option value="Janakpur">Janakpur</option>
                <option value="Hetauda">Hetauda</option>
                <option value="Chitwan">Chitwan</option>
                <option value="Pokhara">Pokhara</option>
                <option value="Biratnagar">Biratnagar</option>
                <option value="Jhapa">Jhapa</option>
                <option value="Charikot">Charikot</option>
                <option value="Dharan">Dharan</option>
                <option value="Birtamod">Birtamod</option>
                <option value="Dhangadhi">Dhangadhi</option>
                <option value="Nepalgunj">Nepalgunj</option>
              </select>
            </div>

            <form onSubmit={handleSearchBanquet}>
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // gap: "1rem",
                  margin: "40px",
                }}
              >
                <input
                  type="search"
                  id="gsearch"
                  name="gsearch"
                  placeholder="Search for banquet"
                  value={searchBanquetValue}
                  onChange={(e) => {
                    handleInput(e);
                  }}
                  style={{
                    width: "300px",
                    height: "40px",
                  }}
                />
                <button
                  className="btn"
                  type="submit"
                  style={{ cursor: "pointer" }}
                >
                  <AiOutlineSearch size={"33px"} />
                </button>
              </div>
            </form>
            <div style={{ maxWidth: "32rem", padding: "20px" }}>
              <h3>Please Select Range</h3>
              <Slider
                value={range}
                min={100}
                max={1000}
                onChange={handleChanges}
                valueLabelDisplay="auto"
              />
              {range[1] === 1000 ? (
                <p>Please select a maximum value</p>
              ) : (
                <p>
                  The selected range is {range[0]} - {range[1]}
                </p>
              )}
            </div>
            <div className="button-asc-desc">
              <button
                type="submit"
                onClick={() => {
                  sortAscending();
                }}
              >
                Sort Ascending
              </button>
              <button
                type="submit"
                onClick={() => {
                  sortDescending();
                }}
              >
                Sort Descending
              </button>
            </div>
          </div>
          {/* <button
            type="submit"
            onClick={() => {
              handleAscending();
            }}
          >
            Sort Ascending
          </button> */}

          {!noDataFound &&
            banquetData.map((item) => {
              const {
                _id,
                banquet_name,
                banquet_description,
                image_location,
                banquet_location,
                banquet_price,
              } = item;
              return (
                <div key={_id} className="banquet-container">
                  <img
                    src={require(`../banquet-Images/${image_location}`)}
                    alt=""
                  />
                  <div className="banquet-content">
                    <h2>{banquet_name}</h2>
                    <p>
                      <strong>Description: </strong>
                      {banquet_description}
                    </p>
                    <p>
                      <strong>Location:</strong> {banquet_location}
                    </p>
                    <p>
                      <strong>Price: </strong>
                      {banquet_price}
                    </p>
                    <a href={`/DisplayMenu/${_id}/${token}/${banquet_name}`}>
                      <button className="banquet-menu-btn">Continue</button>
                    </a>
                  </div>
                </div>
                // {/* <article className="banquet-image">
                // </article> */}
              );
            })}
          {noDataFound && (
            <p
              style={{
                textAlign: "center",
                display: "block",
                fontSize: "40px",
                fontWeight: "600",
              }}
            >
              NO DATA FOUND
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DisplayBanquet;
