import React from "react";
import "./BodyPartCard.css";
import icon from "../../../../../assets/images/cardslogo.png";
// import
const BodyPartCard = ({ item, bodyPart, setBodyPart }) => {
  return (
    <div
      className="bodypartCard "
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={icon} alt="fitness logo" />
      <h4>{item}</h4>
    </div>
  );
};

export default BodyPartCard;
