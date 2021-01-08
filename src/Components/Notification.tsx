import React from "react";

export type INotificationProps = {
  children?: any;
}
const Notification = (props: INotificationProps) => {
  return (
    <div className="notification">
      {props.children}
    </div>
  );
};

export default Notification;
