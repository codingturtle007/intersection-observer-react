import React from 'react';

const Card = (props) => {
  return(
    <div className="card mb-5" key={props.value}>
      <img className="card-img-top" src={"https://iili.io/jBAOas.png"} alt="Card image cap" />
      <div>
        <p className="card-text">Random title {props.value}</p>
      </div>
    </div>
  );
}

export default Card;