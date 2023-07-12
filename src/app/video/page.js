"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from "../../utils/fetchData";
import ExerciseVideos from "../exerciseDetail/components/ExerciseVideos";
import { useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();

  const search = searchParams.get("data");

  const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
  // console.log( `${youtubeSearchUrl}/search?query=${search} exercise`);

  const [exerciseVideos, setExerciseVideos] = useState([]);

  const fetchExercisesData = async () => {
    const youtubeSearchUrl =
      "https://youtube-search-and-download.p.rapidapi.com";

    console.log("exercises deatail data name is ", search);
    console.log("typf ", typeof search);

    const exerciseVideosData = await fetchData(
      `${youtubeSearchUrl}/search?query=${search} exercise`,
      youtubeOptions
    );
    setExerciseVideos(exerciseVideosData.contents);
  };
  fetchExercisesData();

  return (
    <>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={search} />
    </>
  );
}
