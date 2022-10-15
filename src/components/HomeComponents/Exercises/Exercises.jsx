import React, { useEffect, useState } from "react";
import "./Exercises.css";
import { options, fetchData } from "../../utils/fetchData";
import ExerciseCard from "./ExerciseCard/ExerciseCard";
import Pagination from "@mui/material/Pagination";

const Exercises = ({ setExercises, bodyPart, exercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  console.log(indexOfFirstExercise, indexOfLastExercise, currentExercises);

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];
      if (bodyPart === "all")
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          options
        );
      else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          options
        );
      }
      setExercises(exerciseData);
    };

    fetchExerciseData();
  }, [bodyPart]);

  function paginate(e, value) {
    setCurrentPage(value);
    window.scrollTo({ top: 1500, behavior: "smooth" });
  }

  return (
    <>
      <div id="exercises" className="exerciseContainer">
        <h3>Showing Results..</h3>

        <div className="exercisesList">
          {currentExercises.map(
            (exercise, i) => (
              <ExerciseCard key={i} exercise={exercise} />
            )
            // <p key={i}>{exercise.name}</p>
          )}
        </div>
      </div>
      <div className="pagination">
        {exercises.length > exercisesPerPage && (
          <Pagination
            variant="outlined"
            color="primary"
            // shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onChange={paginate}
          />
        )}
      </div>
    </>
  );
};

export default Exercises;
