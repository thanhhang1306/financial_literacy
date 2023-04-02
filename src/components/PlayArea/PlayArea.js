import React, { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import Card from "../Card/Card";
import Summary from "../Summary/Summary";
import useStyles from "./PlayAreaStyles";

import GameManager from "../../core/gameManager";

const PlayArea = (props) => {
  const gameManager = GameManager.getInstance();

  const [setNeeds, setWants, setWealth, setWellbeing, setTimes] = props.functions;

  const classes = useStyles();

  return (
    <Box className={`${classes.playAreaContainer} playAreaContainer`}>

      {/* Header. */}
      <div className={classes.header}>
        <Typography 
            className={`${classes.typography} year`}
            variant="h1"
            align="center">
          Year {gameManager.year}
        </Typography>
      </div>

      {/* Cards. */}
      <div className={`${classes.cardsContainer} cardsContainer`}>
        <Card/>
        <Card inactive="true"/>
        <Card inactive="true"/>
        <Summary/>
      </div>
    </Box>
  );
};

export default PlayArea;