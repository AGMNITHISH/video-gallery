import React, { useEffect, useState } from "react";
import mediaData from "../mediaData.json";
import VideoCard from "../components/VideoCard";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(mediaData.categories);
  }, []);

  return (
    <div className="grid grid-cols-3  gap-6 p-6">
      {data.map((item) => {
        return <VideoCard item={item} />;
      })}
    </div>
  );
};

export default Main;
