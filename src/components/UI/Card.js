import React from 'react';
import "./Card.css";

const Card = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>; //props.children is automatically passed in through React
}

export default Card;
