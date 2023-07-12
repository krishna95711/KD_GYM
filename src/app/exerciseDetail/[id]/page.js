"use client";
import React, { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom';
import { useParams } from "next/navigation";
import { Box } from "@mui/material";
import { Button } from "@nextui-org/react";
// import { NotificationIcon } from "../components/Notification";
import Link from "next/link";
import axios from "axios";

import {
  exerciseOptions,
  fetchData,
  youtubeOptions,
} from "../../../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
// import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [info, setInfo] = useState("nothhing");
  // let info = "nothing";
  console.log(useParams());
  const { id } = useParams();
  // console.log(router.query);
  // const  id  = router.query;

  console.log("id = ", id);
  console.log("type fo id ", typeof id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    

    const fetchExercisesData = async () => {

      const res = await axios.get("/api/users/me");

      setInfo(res.data.data.email);


      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
      console.log("exercises deatail data name is ", exerciseDetailData.name);
      console.log("typf ", typeof exerciseDetailData.name);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      // const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      // setTargetMuscleExercises(targetMuscleExercisesData);

      // const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      // setEquipmentExercises(equimentExercisesData);
      
     
      
    };

    fetchExercisesData();
  }, []);

  if (!exerciseDetail) return <div>No Data</div>;
  const queryString = encodeURIComponent(JSON.stringify(exerciseDetail.name));

  // favourite adding section ------------------ xxxxxxxxxxxxxxxxxxxxxxxxxxxxx---------xxxxxxxxxxxxxxxxxxxx- ----------------xxxxxxxxxx--
  const base = "https://exercisedb.p.rapidapi.com";

 

  // useEffect(() => {
  //   const getUserDetails = async () => {
  //     const res = await axios.get("/api/users/me");

  //     const data = res.data.data.email;
  //     console.log(data);
  //     alert(data);

  //     setInfo(data);
  //     console.log(info);
  //   };

  //   getUserDetails();
  // }, []);

  const onAdd = async () => {
    try {
      const fav = { email: info, path: `${base}/exercises/exercise/${id}` };
      const response = await axios.post("/api/exercise/addfavourite", fav);
      // console.log(info);
      // console.log(" success added fav", response.data);
      alert("added...");
    } catch (error) {
      console.log("failed to add in favourite", error.message);
    }
  };
  return (
    // <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
    //   <Detail exerciseDetail={exerciseDetail} />
    //   {/* <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} /> */}
    //   {/* <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} /> */}
    //   <Button flat color="secondary" auto>
    //     Secondary
    //   </Button>
    //   <Button flat color="secondary" auto>
    //     Secondary
    //   </Button>
    // </Box>

    <div className="mt-16 lg:mt-16  mb-16 lg:mb-16">
      <Detail exerciseDetail={exerciseDetail} />
      {/* <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      /> */}
      {/* <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} /> */}
      <div className=" mt-16 lg:mt-16 flex justify-center gap-96 ">
        <Link href={`/video?data=${queryString}`} passHref>
          <Button
          
            color="secondary"
          >
            related videos
          </Button>
        </Link>

        <Button
         
          color="secondary"
          onClick={onAdd}
        >
          add to favourites list
        </Button>
      </div>
    </div>
  );
};

export default ExerciseDetail;
