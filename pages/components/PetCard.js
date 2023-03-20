import React from "react";


const PetCard = (props) => {
  return (
    <div className="dog-card" key={props.id}>
      <img className="dog-image" alt="random dog" src={props.imgUrl} />
      <h2>{props.breed1}</h2>
      <button>Adopt me!</button>
    </div>
  );
};
export default PetCard;
