import React from "react";
import requests from "../../requests";
import { useState, useEffect } from "react";
import Navbar from "../Home/Navbar/Navbar";
import "./banner.scss";
function Banner() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(requests);
      const ogRes = await res.json();
      setData(ogRes);
    };
    getData();
  }, []);
  const imgLink = `https://image.tmdb.org/t/p/original/${data?.backdrop_path}`;
  const img = {
    backgroundSize: "cover",
    backgroundImage: `url(
           "https://image.tmdb.org/t/p/original/${imgLink}"
           )`,
    backgroundPosition: "top top",
  };
  return (
    <>
      <div className="banner" style={img}>
        <Navbar />
        <div className="movie">
          <h1 className="movie_name">Fight Club</h1>
          <div className="btn">
            <div className="btn_primary">Play</div>
            <div className="btn_primary">My List</div>
          </div>
          <div className="para">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur, recusandae?
            </p>
          </div>
        </div>
        <div className="bg-dark"></div>
      </div>
    </>
  );
}

export default Banner;
