import React, { useState } from "react";

import Box from "@mui/material/Box";
import useStyles from "./CardStyles";
import "./CardStyles.css";

import cardBackground from "../../assets/card-background.svg";

import { handleHover, handleMouseLeave, handleCardClick } from "./handles";

/**
 *  A card component.
 * 
 * Card Props:
 */

const Card = props => {
  const { inactive } = props;
  const classes = useStyles();

  const [description, setDescription] = useState("");

  return (
    <Box className={`${classes.cardContainer} card-container`} 
        draggable="false"
        onMouseMove={e => {if(!inactive) handleHover(e)}}
        onMouseLeave={e => {if(!inactive) handleMouseLeave(e)}}
        onClick={e => {if(!inactive) handleCardClick(e)}}>

      <div className={`${classes.back} back`}>
        <img src={cardBackground} draggable="false"/>
      </div>

      <div className={`${classes.front} front`}>
        <h1>hi</h1>
        <p>hey!</p>
      </div>
    </Box>
  );
};

export default Card;