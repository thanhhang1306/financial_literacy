import React from "react";
import Box from "@mui/material/Box";
import useStyles from "./InfoBoxStyles";
import { Typography } from "@mui/material";

const InfoBox = () => {
  const classes = useStyles();

  return (
    <Box className={classes.infoBoxContainer}>
      <div className={classes.header}>
        <Typography variant="h6">
          <span>Tai Sanh Nguyen</span>
        </Typography>
        <Typography variant="p">
          {/* Net Worth: $1000 */}
        </Typography>
      </div>
      <div>
        <div className={classes.statsContainer}>
          <div>Salary</div>
          <div>Savings</div>
          <div>Investment</div>
          <div>Debt</div>
        </div>
      </div>
    </Box>
  );
};

export default InfoBox;