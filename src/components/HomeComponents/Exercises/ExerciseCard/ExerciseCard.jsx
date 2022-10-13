import React from "react";
import { Link } from "react-router-dom";
const ExerciseCard = ({ exercise }) => {
  return (
    <div className="exerciseCardContainer">
      <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <div className="exerciseinfo">
          <button>{exercise.bodyPart}</button>
          <button style={{ backgroundColor: "#fcc757" }}>
            {exercise.target}
          </button>
        </div>
        <p>{exercise.name}</p>
      </Link>
    </div>
  );
};

export default ExerciseCard;
