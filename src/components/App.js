import React from "react";
import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";

import { Box } from "@mui/material";
import PlayArea from "./PlayArea/PlayArea";
import StatsArea from "./StatsArea/StatsArea";
import EndPage from "./EndPage/EndPage";

import useStyles from "./AppStyles";
import GameManager from "../core/gameManager";
import "./AppStyles.css";

import { lessons } from "./EndPage/lessons";

const topics = [];
for (let i = 0; i < lessons.length; i++) {
  topics.push(lessons[i].topic);
}

Chart.register(CategoryScale);

const App = () => {
  const classes = useStyles();
  const [needs, setNeeds] = React.useState([16000]);
  const [wants, setWants] = React.useState([0]);
  const [times, setTimes] = React.useState([1]);
  const [wealth, setWealth] = React.useState([6000]);
  const [wellbeing, setWellbeing] = React.useState([50]);

  // Initialize the game manager.
  GameManager.init();
  const gameManager = GameManager.getInstance();
  gameManager.setFunctions = [setNeeds, setWants, setWealth, setWellbeing, setTimes];

  return (
    <Box className={classes.gameContainer} maxWidth="false">
      <EndPage topics={topics} lessons={lessons}/>
      <PlayArea functions={[setNeeds, setWants, setWealth, setWellbeing, setTimes]}/>
      <StatsArea needs={needs} wants={wants} wellbeing={wellbeing} wealth={wealth} times={times}/>
    </Box>
  );
};

export default App;