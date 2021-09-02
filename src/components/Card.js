import "./Card.css";

function Card(props) {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>; //props.children is automatically passed in through React
}

export default Card;
