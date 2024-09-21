import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Shaanz-cmd")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl flex justify-center">
      <div className="w-64 rounded-md h-72 flex flex-col items-center gap-4 border p-4">
        <img
          src={data.avatar_url}
          alt="Git Picture"
          className="w-28 h-28 rounded-full  text-lg"
        />
        <h3 className="text-lg">{data.name}</h3>
        <h3 className="text-sm">Github Followers: {data.followers}</h3>
      </div>
    </div>
  );
};

export default Github;

export const githubLoader = async () => {
    const response = await fetch("https://api.github.com/users/Shaanz-cmd");
  return response.json();
};
