import React, { useState, useEffect } from "react";
import { fetchData, options } from "../../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar/HorizontalScrollBar";
import "./SearchExercises.css";

const SearchExercise = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");

  const [bodyPartsData, setBodyPartsData] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodypartDatafetch = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );

      setBodyPartsData(["all", ...bodypartDatafetch]);
    };
    fetchExerciseData();
  }, []);
  const SearchHandler = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        options
      );
      // console.log(exerciseData);
      const searchedExercises = exerciseData.filter(
        (e) =>
          e.name.toLowerCase().includes(search) ||
          e.target.toLowerCase().includes(search) ||
          e.equipment.toLowerCase().includes(search) ||
          e.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
      console.log(searchedExercises);
    }
  };

  return (
    <>
      <div className="searchContainer" id="search">
        <h2>
          Awesome Exercises You <br /> Should Know
        </h2>
        <div className="inputField">
          <input
            type="text"
            value={search}
            placeholder="Search Exercises"
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
          />
          <button onClick={SearchHandler}>Search</button>
        </div>
      </div>

      <div className="bodypartContainer">
        <HorizontalScrollBar
          data={bodyPartsData}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyPart
        />
      </div>
    </>
  );
};

export default SearchExercise;
