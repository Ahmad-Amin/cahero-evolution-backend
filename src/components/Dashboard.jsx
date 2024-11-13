import React from "react";
import Banner from "../components/Banner";
import UpcomingWebinars from "../pages/UpcomingWebinars";
import Recommendedbooks from "../pages/Recommendedbooks";
import Latestlectures from "../pages/Latestlectures";
import { Box } from "@mui/material";
import Calender from "../components/Calender"
const drawerWidth = 280;

const Dashboard = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` }, // Full width on mobile
          backgroundColor: "#131213",
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left Gradient Background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "70px",
            height: "100%",
            background:
              "linear-gradient(to right, #172719 0%, rgba(34, 14, 55, 0) 100%)",
            zIndex: 1,
          }}
        />

        <div className="w-full flex flex-row mt-20">
          <div className="flex-1 w-2/3 z-20 mx-5">
            <h1 className="text-white text-3xl font-semibold mb-3">Dashboard</h1>
            <Banner />
          </div>
          <div className="w-1/3 mx-5">
            <h1 className="text-white text-3xl font-semibold mb-3">Progress</h1>
            <Calender />
          </div>
        </div>

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            mt: { xs: 4, sm: 8 },
          }}
        >
          <UpcomingWebinars />
        </Box>

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            mt: { xs: 2, sm: 4 },
          }}
        >
          <Latestlectures limit={2} />
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
