"use client";
import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import Image from "next/image";

import BodyPartImage from "../../../public/asset/icons/body-part.png";
import TargetImage from "../../../public/asset/icons/target.png";
import EquipmentImage from "../../../public/asset/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    // <Stack
    //   gap="60px"
    //   sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    // >
    //   <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
    //   <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
    //     <Typography
    //       sx={{ fontSize: { lg: "64px", xs: "30px" } }}
    //       fontWeight={700}
    //       textTransform="capitalize"
    //     >
    //       {name}
    //     </Typography>
    //     <Typography
    //       sx={{ fontSize: { lg: "24px", xs: "18px" } }}
    //       color="#4F4C4C"
    //     >
    //       Exercises keep you strong.{" "}
    //       <span style={{ textTransform: "capitalize" }}>{name}</span> bup is one
    //       of the best <br /> exercises to target your {target}. It will help you
    //       improve your <br /> mood and gain energy.
    //     </Typography>
    //     {extraDetail?.map((item) => (
    //       <Stack key={item.name} direction="row" gap="24px" alignItems="center">
    //         <Button
    //           sx={{
    //             background: "#FFF2DB",
    //             borderRadius: "50%",
    //             width: "100px",
    //             height: "100px",
    //           }}
    //         >
    //           <Image
    //             src={item.icon}
    //             alt={bodyPart}
    //             className="absolute  w-full h-full object-cover"
    //           />
    //         </Button>
    //         <Typography
    //           textTransform="capitalize"
    //           sx={{ fontSize: { lg: "30px", xs: "20px" } }}
    //         >
    //           {item.name}
    //         </Typography>
    //       </Stack>
    //     ))}
    //   </Stack>
    // </Stack>

    // <div className="flex gap-60 p-20 items-center flex-col lg:flex-row">
    //   <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
    //   <div className="flex flex-col gap-35">
    //     <h1 className="text-4xl lg:text-6xl font-bold capitalize">{name}</h1>
    //     <p className="text-lg lg:text-2xl text-gray-700">
    //       Exercises keep you strong. <span className="capitalize">{name}</span>{" "}
    //       is one of the best exercises to target your {target}. It will help you
    //       improve your mood and gain energy.
    //     </p>
    //     {extraDetail?.map((item) => (
    //       <div key={item.name} className="flex items-center gap-24">
    //         <button className="w-24 h-24 rounded-full bg-yellow-200 flex items-center justify-center">
    //           <Image src={item.icon} alt={bodyPart} className="w-12 h-12" />
    //         </button>
    //         <h2 className="text-2xl lg:text-3xl capitalize">{item.name}</h2>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 p-8">
  <img src={gifUrl} alt={name} loading="lazy" className="w-96 h-96 lg:w-120 lg:h-120 rounded-lg object-cover" />
  <div className="flex flex-col gap-6">
    <h1 className="text-3xl lg:text-5xl font-bold font-serif capitalize">{name}</h1>
    <p className="text-base lg:text-xl text-gray-700">
      Exercises keep you strong. <span className="capitalize">{name}</span> is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
    </p>
    {extraDetail?.map((item) => (
      <div key={item.name} className="flex items-center gap-10">
        <button className="w-16 h-16 rounded-full bg-yellow-200 flex items-center justify-center">
          <Image src={item.icon} alt={bodyPart} className="w-8 h-8" />
        </button>
        <h2 className="text-xl lg:text-2xl capitalize">{item.name}</h2>
      </div>
    ))}
  </div>
</div>

  );
};

export default Detail;
