import React, { useState } from "react";

import data from "./blog-data";

import DisplayBlog from "../pages-components/displayBlog";

import { Footer } from "../";

import "./blog.css";

function Blog() {
  const [blogData] = useState(data);

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
      <div className="blog-container">
        {blogData.map((item, index) => {
          return (
            <DisplayBlog key={index} {...item} dataLen={blogData.length} />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Blog;
