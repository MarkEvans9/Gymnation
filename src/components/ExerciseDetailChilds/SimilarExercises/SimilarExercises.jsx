import React from "react";
import "./SimilarExercises.css";
import HorizontalScrollBar from "../../HomeComponents/SearchExercise/HorizontalScrollBar/HorizontalScrollBar";
import Loader from "../../Loader/Loader";
const SimilarExercises = ({ similarExercisesD, similarEquipmentExercises }) => {
  return (
    <>
      <div className="similarExerciseContainer">
        <h3>
          Similar <span>target muscle</span> exercise
        </h3>

        {similarExercisesD.length ? (
          <HorizontalScrollBar data={similarExercisesD} />
        ) : (
          <Loader />
        )}
      </div>

      <div className="similarExerciseContainer">
        <h3>
          Similar <span>equipment</span> exercise
        </h3>

        {similarEquipmentExercises.length ? (
          <HorizontalScrollBar data={similarEquipmentExercises} />
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default SimilarExercises;
