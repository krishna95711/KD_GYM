"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Stack } from "@mui/material";

import { exerciseOptions, fetchData } from "../../../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import { Loading } from "@nextui-org/react";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(8);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  if (!currentExercises.length)
    return (
      // <Loading className="inline-block py-2 px-4 text-white font-medium duration-150 rounded-lg shadow-md hover:shadow-none" />

      <div className="flex justify-center items-center p-4">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-center">
          <Loading type="points" />
          </div>
        </div>
      </div>


    

    );

  return (
    <div>
      <div className=" flex-row gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </div>

      <Stack
        sx={{ mt: { lg: "114px", xs: "70px" }, mb: { lg: "41px", xs: "20px" } }}
        alignItems="center"
      >
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </div>
  );
};

export default Exercises;
