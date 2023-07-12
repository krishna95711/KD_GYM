require("dotenv").config();
console.log(process.env.API_KEY);
console.log(typeof process.env.API_KEY);
export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
  },
};

export const fetchData = async (url, options) => {
  console.log("Fetching data");
  const res = await fetch(url, options);
  console.log("Fetched data");

  const data = await res.json();
  console.log(data);

  return data;
};

// export const fetchData = async (url, options) => {
//   try {
//     const res = await fetch(url, options);

//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }

//     console.log(res);

//     // const data = await res.json();

//     // Add validation to ensure data is valid JSON
//     if (typeof data !== "object" || data === null) {
//       throw new Error("Invalid JSON data");
//     }

//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// };
