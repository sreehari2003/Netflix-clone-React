import React from "react";
import requests from "../../requests";
import { useState, useEffect } from "react";
import Navbar from "../Home/Navbar/Navbar";
import shows from "../../shows";
import "./banner.scss";
function Banner() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(shows.fetchTrending);
      const ogRes = await res.json();
      setData(ogRes.results.slice(0, 1));
    };
    getData();
  }, []);
  console.log("from banner");
  console.log(data);
  const backPath = data.map((el) => el.backdrop_path);
  const imgLink = `https://image.tmdb.org/t/p/original/${backPath}`;
  const img = {
    backgroundSize: "cover",
    backgroundImage: `url(
           "https://image.tmdb.org/t/p/original/${imgLink}"
           )`,
    backgroundPosition: "top top",
  };
  return (
    <>
      {data.map((el) => {
        return (
          <div className="banner" style={img}>
            <Navbar />
            <div className="movie">
              <h1 className="movie_name">{el.original_title}</h1>
              <div className="btn">
                <div className="btn_primary">Play</div>
                <div className="btn_primary">My List</div>
              </div>
              <div className="para">
                <p>{el.overview}</p>
              </div>
            </div>
            <div className="bg-dark"></div>
          </div>
        );
      })}
    </>
  );
}

export default Banner;
