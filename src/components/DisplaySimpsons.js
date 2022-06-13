import React from "react";

function DisplaySimpsons({ simpson }) {
  return (
    simpson && (
      <div className="DisplaySimpsons">
        <img src={simpson.image} alt={simpson.character} />
        <ul>
          <li>Name: {simpson.character}</li>
          <li>Quote: {simpson.quote}</li>
        </ul>
      </div>
    )
  );
}

export default DisplaySimpsons;
