import React from "react";

import Box from "@mui/material/Box";
import useStyles from "./CardStyles";

import cardBackground from "../../assets/card-background.svg";

import { handleHover, handleMouseLeave, handleCardClick } from "./handles";

/**
 *  A card component.
 * 
 * Card Props:
 * @param {string} type - The type of card: { need, want, event, inactive}
 * @param {string} description - The description of the card.
 * @param {function} action - The action to be performed when the card is clicked.
 */

const Card = props => {
  const classes = useStyles();
  const { type, description, action, inactive } = props;

  if (inactive)
    return (
      <Box className={classes.cardContainer}/>
    );

  return (
    <Box className={classes.cardContainer} 
        draggable="false"
        onMouseMove={e => handleHover(e)}
        onMouseLeave={e => handleMouseLeave(e)}
        onClick={e => {handleCardClick(e)}}>

      <div className={classes.back}>
        {/* <img src={cardBackground} draggable="false"/> */}
      </div>

      <div className={classes.front}>
        hi!
      </div>
    </Box>
  );
};

export default Card;