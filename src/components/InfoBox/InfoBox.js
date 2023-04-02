import React from "react";
import Box from "@mui/material/Box";
import useStyles from "./InfoBoxStyles";
import { Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

const InfoBox = ({ statsData }) => {
  const classes = useStyles();

  return (
    <Box className={classes.infoBoxContainer}>
      <div className={classes.header}>
        <PersonIcon fontSize="large" />
        <Typography variant="h6" className={classes.spacing}>
          Tai Sanh Nguyen
        </Typography>
        <div className={classes.spacing}/>
        <Typography variant="p">
          <div>Net Worth: $100</div>
          <div>Discretionary Spending: -$500</div>
        </Typography>
      </div>
      <div>
      <div className={classes.statsContainer}>
          <div className="salary">Salary: $80000</div>
          <div className="savings">Savings: $0</div>
          <div className="investment">Investment: $0</div>
          <div className="debt">Debt: $0</div>
        </div>
      </div>
    </Box>
  );
};

export default InfoBox;
