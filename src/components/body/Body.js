import React from "react";
import "./body.scss";
import shows from "../../shows";
import { useState, useEffect } from "react";
function Body() {
  const [orginals, setOrginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [rated, setRated] = useState([]);
  const [horror, setHorror] = useState([]);
  const POSTER_URL = "https://image.tmdb.org/t/p/original"; //base url to load images
  //fetching netflix Orginals
  useEffect(() => {
    const getOrginals = async () => {
      const res = await fetch(shows.fetchNetflixOriginals);
      const ogRes = await res.json();
      setOrginals(ogRes);
    };
    getOrginals();
  }, []);
  console.log(orginals);
  //fetching netflix trending
  useEffect(() => {
    const getTrending = async () => {
      const res = await fetch(shows.fetchTrending);
      const ogRes = await res.json();
      setTrending(ogRes);
    };
    getTrending();
  }, []);
  console.log(trending);

  //   fetching top rated
  useEffect(() => {
    const getRated = async () => {
      const res = await fetch(shows.fetchTopRated);
      const ogRes = await res.json();
      setRated(ogRes);
    };
    getRated();
  }, []);
  console.log(rated);

  //fetching horror
  useEffect(() => {
    const getHorror = async () => {
      const res = await fetch(shows.fetchHorrorMovies);
      const ogHorror = await res.json();
      setHorror(ogHorror);
    };
    getHorror();
  }, []);

  return (
    <>
      <div className="body">
        <div className="conatiner">
          <h3 className="heading">Netflix Orginals</h3>
          <div className="row">
            {orginals.results.map((el) => {
              return (
                <img
                  src={`${POSTER_URL}${el.backdrop_path}`}
                  alt=""
                  className="col"
                />
              );
            })}
          </div>

          <h3 className="heading">Now Trending</h3>
          <div className="row">
            {trending.results.map((el) => {
              return (
                <img
                  src={`${POSTER_URL}${el.backdrop_path}`}
                  alt=""
                  className="col"
                />
              );
            })}
          </div>

          {/* rated */}

          <h3 className="heading">Top rated</h3>
          <div className="row">
            {rated.results.map((el) => {
              return (
                <img
                  src={`${POSTER_URL}${el.backdrop_path}`}
                  alt=""
                  className="col"
                />
              );
            })}
          </div>

          <h3 className="heading">Horror</h3>
          <div className="row">
            {horror.results.map((el) => {
              return (
                <img
                  src={`${POSTER_URL}${el.backdrop_path}`}
                  alt=""
                  className="col"
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
