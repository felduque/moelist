import React from "react";
import { CardItem } from "../CardItem/CardItem";

export const CardLoop = ({
  cards,
  oneCol = false,
  showDesc = true,
  action = "add",
}) => {
  const colsStyles = oneCol
    ? "row-cols-1"
    : "row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6";

  return (
    <div className={`row ${colsStyles}`}>
      {cards.map((card, index) => {
        return (
          <CardItem
            key={card.id + card.contentType}
            {...card}
            showHover={showDesc}
            index={index}
            action={action}
          />
        );
      })}
    </div>
  );
};
