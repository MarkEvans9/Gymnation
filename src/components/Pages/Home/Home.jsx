import React, { useState } from "react";
import HeroBanner from "../../HomeComponents/Herobanner/HeroBanner";
import SearchExercise from "../../HomeComponents/SearchExercise/SearchExercise";
import Exercises from "../../HomeComponents/Exercises/Exercises";
const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  console.log(bodyPart);
  return (
    <div>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </div>
  );
};

export default Home;
