import React from "react";
import "./body.scss";
import shows from "../../shows";
import { useState, useEffect } from "react";
function Body() {
  const [orginals, setOrginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [romance, setRomance] = useState([]);
  const [Comedy, setComedy] = useState([]);

  const POSTER_URL = "https://image.tmdb.org/t/p/original"; //base url to load images
  //fetching netflix Orginals
  useEffect(() => {
    const fetchOoriginals = async () => {
      try {
        const res = await fetch(shows.fetchNetflixOriginals);
        const data = await res.json();
        setOrginals(data.results);
        if (!res.ok) throw new Error();
      } catch (err) {
        console.log(err);
      }
    };
    fetchOoriginals();
  }, []);
  //fetching trending
  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await fetch(shows.fetchTrending);
        const data = await res.json();
        setTrending(data.results);
        if (!res.ok) throw new Error();
      } catch (err) {
        console.log(err);
      }
    };
    fetchTrending();
  }, []);
  //romance
  useEffect(() => {
    const fetchRomance = async () => {
      try {
        const res = await fetch(shows.fetchRomanceMovies);
        const data = await res.json();
        setRomance(data.results);
        if (!res.ok) throw new Error();
      } catch (err) {
        console.log(err);
      }
    };
    fetchRomance();
  }, []);

  //comdedy
  useEffect(() => {
    const fetchComedy = async () => {
      try {
        const res = await fetch(shows.fetchHorrorMovies);
        const data = await res.json();
        setComedy(data.results);
        if (!res.ok) throw new Error();
      } catch (err) {
        console.log(err);
      }
    };
    fetchComedy();
  }, []);

  return (
    <>
      <div className="body">
        <div className="conatiner">
          <h3 className="heading">Netflix Orginals</h3>
          <div className="row">
            {orginals.map((el) => {
              return (
                <img
                  src={`${POSTER_URL}${el.backdrop_path}`}
                  alt=""
                  className="col"
                />
              );
            })}
          </div>

          <h3 className="heading">Netflix Trending</h3>
          <div className="row">
            {trending.map((el) => {
              return (
                <img
                  src={`${POSTER_URL}${el.backdrop_path}`}
                  alt=""
                  className="col"
                />
              );
            })}
          </div>

          <h3 className="heading">Netflix Romance</h3>
          <div className="row">
            {romance.map((el) => {
              return (
                <img
                  src={`${POSTER_URL}${el.backdrop_path}`}
                  alt=""
                  className="col"
                />
              );
            })}
          </div>

          <h3 className="heading">Netflix Horror movies</h3>
          <div className="row">
            {Comedy.map((el) => {
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
