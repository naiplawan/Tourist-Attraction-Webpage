import React, { useState } from "react";
import BoxResults from "./components/BoxResult";
import homepageStyles from "../styles/Homepage.module.css";

export default function HomePage() {
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className={homepageStyles.homePageBox}>
      <div className={homepageStyles.titleBox}>เที่ยวไหนดี</div>
      <div className={homepageStyles.seperator}></div>
      <div className={homepageStyles.inputContainer}>
        <form className={homepageStyles.locationForm} onSubmit={handleSubmit}>
          <label>
            <input
              className={homepageStyles.inputBox}
              name="location"
              type="text"
              placeholder="หาที่เที่ยวไปแล้วกัน....🌻"
              value={location}
              onChange={handleInputChange}
            />
          </label>
        </form>
      </div>
      <div className={homepageStyles.seperator}></div>
      <BoxResults value={location} />
    </div>
  );
}
