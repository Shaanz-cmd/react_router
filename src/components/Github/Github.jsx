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
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <div className="w-64 rounded-md h-72 flex flex-col gap-4 border p-4">
        <h3 className="text-lg">Github Followers: {data.followers}</h3>
        <img
          src={data.avatar_url}
          alt="Git Picture"
          className="w-28 h-28 rounded-full  text-lg"
        />
      </div>
    </div>
  );
};

export default Github;

export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/Shaanz-cmd");
  return response.json();
};
