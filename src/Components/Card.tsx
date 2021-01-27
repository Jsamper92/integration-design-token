import React, { useState } from "react";
import Button from "./Button";
import image from "../assets/images/img_card.svg";

/* export interface ICard {
  messages: Array<{[key:string]:string}>;
  getCard: (index: number) => void;
  getNotification: () => void;
} */

const Card = (props: any) => {
  const [active, setActive] = useState();

  const onSelection = (index: any) => {
    setActive(index);
    return props.getCard(index);
  };

  return props.messages.map((card: any, key: number) => {
    return (
      <div
        key={key}
        className="card"
        onClick={() => onSelection(key)}
      >
        <img
          style={{ height: active === key ? "100px" : "0px" }}
          className="card__img"
          src={image}
          alt="imagen card"
        />
        <p className="card__content">{card.message}</p>
        <Button
          getNotification={props.getNotification}
          theme={"btn btn--primary card__button"}
        >
{/*           <i className="icon-plus"></i>
          <span>Link</span> */}
          Link
        </Button>
      </div>
    );
  });
};

export default Card;
