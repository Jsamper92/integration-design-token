import React, { useState } from "react";

export interface IButtonProps {
  theme: string;
  children: HTMLElement;
  getNotification: () => void
}

const Button = (props: any) => {
  const [notification, setNotification] = useState(false);

  const onSelection = (e: any) => {
    setNotification(e);
    return props.getNotification(e);
  };

  return (
    <button onClick={() => onSelection(true)} className={`btn ${props.theme}`}>
      {props.children}
    </button>
  );
};

export default Button;
