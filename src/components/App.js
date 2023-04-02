import React from "react";

import { Box } from "@mui/material";
import PlayArea from "./PlayArea/PlayArea";
import StatsArea from "./StatsArea/StatsArea";

import useStyles from "./AppStyles";
import GameManager from "../core/gameManager";

const App = () => {
  const classes = useStyles();
  
  // Initialize the game manager.
  GameManager.init();

  return (
    <Box className={classes.gameContainer} maxWidth="false">
      <PlayArea/>
      <StatsArea/>
    </Box>
  );
};

export default App;