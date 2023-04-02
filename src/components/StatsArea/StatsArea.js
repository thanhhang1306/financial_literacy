import React from "react";

import { Box } from "@mui/material";

import InfoBox from "../InfoBox/InfoBox";
import useStyles from "./StatsAreaStyles";

const StatsArea = () => {
  const classes = useStyles();

  return (
    <Box className={classes.statsAreaContainer}>
      <InfoBox/>
      <InfoBox/>
      <InfoBox/>
      {/* <Box sx={{ width: "100%", height: "26vh", border: "1px solid black" }}></Box> */}
      {/* <Box sx={{ width: "100%", height: "26vh", border: "1px solid black" }}></Box> */}
    </Box>
  );
};

export default StatsArea;