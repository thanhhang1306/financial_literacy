import React from "react";

import { Box, Container } from "@mui/material";

import LineChart from "../LineChart/LineChart";
import InfoBox from "../InfoBox/InfoBox";
import useStyles from "./StatsAreaStyles";
import WellBeing from "../WellBeing/WellBeing";
import NetChart from "../NetChart/NetChart";

const StatsArea = (props) => {
  const { values } = props;
  const classes = useStyles();

  const { needs, wants, wellbeing, wealth, times } = props;

  return (
    <Box className={`${classes.statsAreaContainer} statsAreaContainer`}>
      <InfoBox statsData={{ salary: '$35000', savings: '$0', investment: '$1000', debt: '$30000' }} />
      <Container style={{"transform": "translate(19%)"}}>
        <LineChart height="25%" needs={needs} wants={wants} times={times}/>
        <WellBeing height="25%" wellBeing={wellbeing} times={times}/>
        <NetChart height="25%" wealth={wealth} times={times}/>
      </Container>
    </Box>
  );
};

export default StatsArea;