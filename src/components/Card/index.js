import React from "react";
import useStyles from "./styles";

const Card = ({ item }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.cardContent}>
        <div className={classes.taskName}>{item.taskName}</div>
        <div className={classes.price}>{item.price} руб.</div>
        <div className={classes.clientName}>{item.client}</div>
        <div className={classes.id}>ИНН {item.id}</div>
      </div>
      <div className={classes.additionalData}>
        <div className={classes.tagsContainer}>
          {item.primaryTags.map((tag, i) => (
            <div key={i} className={classes.tag}>
              {tag}
            </div>
          ))}
        </div>
        <div className={classes.nameRow}>{item.name}</div>
        <div className={classes.tagsContainer}>
          {item.secondaryTags.map((tag, i) => (
            <div key={i} className={classes.tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.cardContent}>
        <div className={classes.dateRow}>
          <div className={classes.number}>{item.number}</div>
          <div className={classes.date}>от {item.date}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
