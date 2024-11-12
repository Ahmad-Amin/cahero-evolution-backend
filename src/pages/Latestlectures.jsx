import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WebinarCard from "./WebinarCard";
import axiosInstance from "../lib/axiosInstance";
import LoadingWrapper from "../components/ui/LoadingWrapper";
import { Link } from "react-router-dom";

function LatestLectures({ limit }) {
  const navigate = useNavigate(); 

  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/lectures");
        setLectures(response.data); 
      } catch (e) {
        console.log("Error getting the lecture", e);
      } finally {
        setLoading(false);
      }
    };
  
    fetchLectures();
  }, []);
  

  const displayedLectures = limit ? lectures.slice(0, limit) : lectures;

  return (
    <LoadingWrapper loading={loading}>
      <div>
        <h1 className="text-white text-3xl font-semibold ml-8 mt-3 p-4">
          Latest Lectures
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mx-8 my-4">
          {displayedLectures.map((lecture) => (
            <WebinarCard
              key={lecture.id}
              title={lecture.title}
              genre="Webinar Genre"
              height={300}
              image={
                lecture.coverImageUrl ||
                `${process.env.PUBLIC_URL}/images/Tokyotrain.png`
              }
              link={`/documentaries/${lecture.id}`}
            />
          ))}
        </div>
        <Link to={"/documentaries"}>
          <button className="flex justify-end w-full px-10 font-semibold text-lg text-white text-opacity-65 hover:text-opacity-100 ease-in-out transition duration-300">
            View All
          </button>
        </Link>
      </div>
    </LoadingWrapper>
  );
}

export default LatestLectures;