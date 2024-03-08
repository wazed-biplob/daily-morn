import { Grid } from "@mui/material";
import React from "react";
import LatestNews from "./components/ui/latestNews/LatestNews";
import SideBar from "./components/ui/sideBar/SideBar";

const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <LatestNews />
      </Grid>
      <Grid item xs={4}>
        <SideBar />
      </Grid>
    </Grid>
  );
};

export default HomePage;
