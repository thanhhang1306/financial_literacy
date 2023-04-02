import React from "react";

import { Box, Typography } from "@mui/material";
import Card from "../Card/Card";
import useStyles from "./PlayAreaStyles";

import GameManager from "../../core/gameManager";

const PlayArea = () => {
  const classes = useStyles();

  const gameManager = GameManager.getInstance();

  return (
    <Box className={classes.playAreaContainer}>
      {/* Header. */}
      <div className={classes.header}>
        <Typography 
            className={`${classes.typography}`}
            variant="h1"
            align="center">
          Year {gameManager.year}
        </Typography>
      </div>

      {/* Cards. */}
      <div className={classes.cardsContainer}>
        <Card/>
        <Card inactive="true"/>
        <Card inactive="true"/>
      </div>
    </Box>
  );
};

export default PlayArea;