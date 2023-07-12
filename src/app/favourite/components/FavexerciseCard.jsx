// "use client";
// import Link from "next/link";
// import { Button } from "@nextui-org/react";
// import { fetchData } from "@/app/utils/fetchData";

// const FavExerciseCard = ({ url }) => (

//    const exercise = await fetchData(
//     button.path,
//     exerciseOptions
//   );

//   <div className="w-full  p-4">
//     <Link href={`/exerciseDetail/${exercise.id}`} legacyBehavior>
//       <a className="block bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
//         <img
//           src={exercise.gifUrl}
//           alt={exercise.name}
//           className="w-full h-80 object-cover"
//           loading="lazy"
//         />
//         <div className="p-4">
//           <div className="flex flex-row gap-1 mb-2">
//             <Button size="sm">{exercise.bodyPart}</Button>
//             <Button size="sm">{exercise.target}</Button>
//           </div>
//           <p className="text-lg font-medium text-gray-800">{exercise.name}</p>
//         </div>
//       </a>
//     </Link>
//   </div>
// );

// export default ExerciseCard;

"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { fetchData, exerciseOptions } from "@/utils/fetchData";
import { useState } from "react";
import { useEffect } from "react";

const FavExerciseCard = (param) => {
  const [exercise, setExercise] = useState(null);
  console.log("param: ", param);
  const url = param.exercise;
  console.log("url: ", url);

  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const exerciseData = await fetchData(url, exerciseOptions);
        setExercise(exerciseData);
      } catch (error) {
        console.log("Error fetching exercise data:", error.message);
      }
    };

    fetchExercise();
  }, [url]);

  console.log(exercise);
  return (
    <div className="w-full p-4">
      {exercise ? (
        <Link href={`/exerciseDetail/${exercise.id}`} legacyBehavior>
          <a className="block bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <img
              src={exercise.gifUrl}
              alt={exercise.name}
              className="w-full h-80 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <div className="flex flex-row gap-1 mb-2">
                <Button size="sm">{exercise.bodyPart}</Button>
                <Button size="sm">{exercise.target}</Button>
              </div>
              <p className="text-lg font-medium text-gray-800">
                {exercise.name}
              </p>
            </div>
          </a>
        </Link>
      ) : (
        <p>Loading exercise data...</p>
      )}
    </div>
  );
};

export default FavExerciseCard;
