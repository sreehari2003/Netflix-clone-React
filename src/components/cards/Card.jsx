import React from 'react'
import "./card.scss";


const Card = ({image,name}) => {
  const img = {
    backgroundSize: "cover",
    backgroundImage: `url(
           "https://image.tmdb.org/t/p/original/${image}"
           )`,
    backgroundPosition: "top top",
  };
  return (
      <div className="card_main" style={img}>
        <div className="card"> 
        <h4>{name}</h4>
        </div>
      </div>
  )
}

export default Card;