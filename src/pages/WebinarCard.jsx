import React from "react";
import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
function WebinarCard({
  title,
  year,
  genre,
  image,
  height,
  author,
  link,
  isVideo,
  duration,
  type,
  completed,
}) {
  return (
    <Link to={link || ""}>
      <div
        className="rounded-xl shadow-lg bg-[#1c1c1e] text-white border-2 border-gray-400 relative overflow-hidden hover:scale-[1.05]  ease-in-out transition duration-300"
        style={{ height: height || "400px" }}
      >
        <img
          src={image}
          alt={title}
          className="rounded-t-xl w-full object-cover rounded-lg scale-[1.03]  "
          style={{ height: "100%" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-r backdrop-blur-sm from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0.5)] text-black p-4 rounded-b-xl"
        >
          <div className="flex flex-row">
            <div className="flex-1">
              <h3 className="font-semibold">{title}</h3>
              {author ? (
                <p className="text-sm">{author}</p>
              ) : (
                <p className="text-sm">{duration}</p>
              )}
            </div>
            <div>
              {type === "meditations" ? (
                <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                  <PlayArrowIcon className="text-[#44ae4b]" fontSize="large" />
                </div>
              ) : (
                <div>
                  <button className="bg-[#44ae4b] hover:bg-[#307b35] ease-in-out transition duration-300 px-5 h-12 rounded-lg font-semibold text-white text-bases">
                    Start Now
                  </button>
                </div>
              )}
            </div>
          </div>
          {type === "growth-plan" ? (
            <div className="font-semibold text-[#44ae4b] text-lg w-full flex justify-center">
              {completed}
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

export default WebinarCard;
