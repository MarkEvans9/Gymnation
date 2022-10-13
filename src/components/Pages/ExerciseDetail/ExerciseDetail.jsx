import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData, options, youtubeOptions } from "../../utils/fetchData";

import Details from "../../ExerciseDetailChilds/Details/Details";
import ExerciseVideos from "../../ExerciseDetailChilds/ExerciseVideos/ExerciseVideos";

import SimilarExercises from "../../ExerciseDetailChilds/SimilarExercises/SimilarExercises";

const ExerciseDetail = ({ setExercises, bodyPart, exercises }) => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [similarExercisesD, setSimilarExercisesD] = useState([]);
  const [similarEquipmentExercises, setSimilarEquipmentExercises] = useState(
    []
  );

  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseData = async () => {
      const exercisedbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeUrl = "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseData = await fetchData(
        `${exercisedbUrl}/exercises/exercise/${id}`,
        options
      );
      setExerciseDetail(exerciseData);
      const exerciseVideoData = await fetchData(
        `${youtubeUrl}/search?query=${exerciseData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideoData.contents);

      const similarExerciseData = await fetchData(
        `${exercisedbUrl}/exercises/target/${exerciseData.target}`,
        options
      );
      setSimilarExercisesD(similarExerciseData);

      const similarEquipmentExerciseData = await fetchData(
        `${exercisedbUrl}/exercises/equipment/${exerciseData.equipment}`,
        options
      );
      setSimilarEquipmentExercises(similarEquipmentExerciseData);
    };

    fetchExerciseData();
  }, [id]);

  return (
    <div>
      <Details exerciseDetail={exerciseDetail} />

      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />

      <SimilarExercises
        similarExercisesD={similarExercisesD}
        similarEquipmentExercises={similarEquipmentExercises}
      />
    </div>
  );
};

export default ExerciseDetail;
