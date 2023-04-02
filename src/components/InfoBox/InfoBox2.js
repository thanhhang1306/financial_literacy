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
          <div class="salary">Salary: $80000</div>
          <div class="savings">Savings: $0</div>
          <div class="investment">Investment: $0</div>
          <div class="debt">Debt: $0</div>
        </div>
      </div>
    </Box>
  );
};

export default InfoBox;