"use client";
import { fetchData } from "../../utils/fetchData";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FavExerciseCard from "./components/FavexerciseCard";
import del from "../../public/delete.svg";
import Image from "next/image";

const Favourite = () => {
  const [info, setInfo] = useState([]);

  const getFavouriteExercise = async () => {
    try {
      const res = await axios.get("/api/exercise/getfavourite");
      const data = res.data.data;
      setInfo(data);
    } catch (error) {
      console.log("Error fetching favourite exercises:", error.message);
    }
  };

  useEffect(() => {
    getFavouriteExercise();
  }, []);

  const onDelete = async (param) => {
    try {
      const path = { path: param };
      const response = await axios.post("/api/exercise/deletefavourite", path);
      alert("Deleting...");
    } catch (error) {
      console.log("Failed to delete in favourite:", error.message);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6 mt-12">
      {info.map((button,index) => (
        <div className="flex flex-col items-center">
          <FavExerciseCard key={index} exercise={button.path} />

          <button
            className="w-8 h-8 flex items-center justify-center mt-2 bg-blue-500 hover:bg-red-600 text-white rounded-lg shadow-md transition-colors duration-300"
           
            onClick={() => onDelete(button.path)}
          >
           
            <Image src={del} width={16} height={16} alt="logo" />
          </button>
        </div>
      ))}
    </div>

    //   <div className="flex flex-wrap justify-center gap-4">
    //   {info.map((exercise, index) => (
    //     <div key={index} className="flex flex-col items-center">
    //       <button
    //         className="w-8 h-5"
    //         onClick={() => onDelete(exercise.path)}
    //       >
    //         {index}
    //       </button>

    //       <FavExerciseCard url={exercise.path} />
    //     </div>
    //   ))}
    // </div>
  );
};

export default Favourite;
