import React from "react";
import "./Details.css";
import bodyPartIcon from "../../../assets/images/yogaIcon.png";
import targetIcon from "../../../assets/images/infoicon1.png";
import equipmentIcon from "../../../assets/images/gymIcon.png";

const Details = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

  const extraDetails = [
    {
      icon: bodyPartIcon,
      name: bodyPart,
    },
    {
      icon: targetIcon,
      name: target,
    },
    {
      icon: equipmentIcon,
      name: equipment,
    },
  ];
  return (
    <div className="detailsContainer">
      <img src={gifUrl} alt={name} loading="lazy" />
      <div className="exerciseInfo">
        <h2 style={{ textTransform: "capitalize" }}>{name}</h2>
        <h5>
          Exercises Keep you strong. {name} is one of the best exercise to
          target your {target}. it will help you to improve your mood and gain
          energy
        </h5>
        {extraDetails.map((d, i) => (
          <div key={i} className="extraInfo">
            <button>
              <img src={d.icon} alt={d.name} />
            </button>
            <h5>{d.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
