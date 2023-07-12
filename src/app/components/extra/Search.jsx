"use client";
import React, { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../../../utils/fetchData";
import { Loading } from "@nextui-org/react";
const Search = ({ setExercises, bodyPart, setBodyPart, setCurrentPage }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  const [loading, setLoading] = useState(false);
  const handleSearch = async () => {
    // loader --------------------------------------------------------------------------------

    setLoading(true);

    try {
      // Perform the asynchronous operation here, such as fetching data or executing an API request
      // Replace the following setTimeout with your actual async operation
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    // loader end ----------------------------------------------------------------
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 500, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  return (
    <>
      <section
        className="py-28"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
          <div className="max-w-xl space-y-3 md:mx-auto">
            <h3 className="text-indigo-600 font-semibold">
              Professional services
            </h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Build the future with us
            </p>
            <p className="text-gray-600">
              Find your perfect exercise with our powerful search bar, tailored
              to your fitness goals.
            </p>
          </div>
          {/* // serchbox--------------------------------------------------------------------------------------------------------------- */}
          <div className="relative text-lg bg-transparent text-gray-800">
            <div className="flex items-center  border-b-2 border-teal-500 py-2">
              <input
                className="bg-transparent border-none mr-3 px-2 leading-tight focus:outline-none "
                // type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
              />
            </div>
          </div>
          {/* // search box end --------------------------------------------------------------- */}
          <div className="mt-4">
            <button
              href=""
              className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
              onClick={handleSearch}
            >
              Get started
            </button>
          </div>
          <div className="mt-4">
            {loading && (
              <Loading className="inline-block py-2 px-4 text-white font-medium duration-150 rounded-lg shadow-md hover:shadow-none">
                loading...
              </Loading>
            )}
          </div>
        </div>

        {/* <div className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
          {loading && <Loading />}
        </div> */}
      </section>
    </>
  );
};

export default Search;
