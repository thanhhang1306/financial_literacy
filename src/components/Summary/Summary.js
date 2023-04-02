import React from "react";

import { Box } from "@mui/material";

import useStyles from "./SummaryStyles";

const Summary = () => {
  const classes = useStyles();

  return (
    <Box className={`${classes.summaryContainer} summaryContainer`}>
      <div className={classes.firstColumn}>
        <div className="need">
          Need: $0
        </div>
        <div className="want">
          Want: $0
        </div>
      </div>
      
      <div className={classes.secondColumn}>
        <div className="salary-discrepancy">
          Salary + Discrepency: $0
        </div>
        <div className="debt">
          Debt: $0
        </div>
        <button>
          Submit
        </button>
      </div>

      <div className={classes.thirdColumn}>
        <div className="saving">
          Saving: $0
        </div>
        <div className="investment">
          Investment: $0
        </div>
      </div>
    </Box>
  );
};

export default Summary;