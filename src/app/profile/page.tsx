"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const router = useRouter();

  const [info, setInfo] = useState({_id:"" , username:"", email:"" , isVerfied:false , isAdmin:false });

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");

    const data = res.data.data;

    setInfo(data);
    console.log(info);
  };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    //   <h1>Profile</h1>
    //   <hr />
    //   <p>Profile page</p>
    //   <h2 className="p-1 rounded bg-green-500">
    //           {info === null ? "Nothing" :
    //             <>info._id ,info.username , info.email , info.isvalid , info.isadmin , </>
    //     <button onClick={getUserDetails}>get that</button>
    //   </h2>
    //   <hr />
    // </div>

    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <hr className="w-20 border-2 border-gray-300 mb-4" />
      <p className="text-lg mb-6">Profile page</p>
      <div className="p-4 rounded bg-green-500 text-white mb-4">
        {info === null ? (
          <p>Nothing</p>
        ) : (
          <>
            <p>ID: {info._id}</p>
            <p>Username: {info.username}</p>
            <p>Email: {info.email}</p>
            <p>Is Valid: {info.isVerfied ? "Yes" : "No"}</p>
            <p>Is Admin: {info.isAdmin ? "Yes" : "No"}</p>
          </>
        )}
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={getUserDetails}
      >
        Get User Details
      </button>
      <hr className="w-20 border-2 border-gray-300 mt-6" />
    </div>
  );
}
