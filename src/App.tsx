import React, { useState } from "react";
import "./App.scss";
import Card from "./Components/Card";
import Notification from "./Components/Notification";

function App() {
  const messages = [
    {
      message:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
    },
    {
      message:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
    },
    {
      message:
        "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
    }
  ];
  let [notification, setNotification] = useState(false);
  const [idMessage, setMessage] = useState();

  const getNotification = (e: boolean) => {
    setNotification(e);
  };

  const getCard = (e: any) => {
    setTimeout(() => {
      setNotification(false);
    }, 5000);
    setMessage(e);
  };

  return (
    <main className="container">
      <h1 className="col-sm-12 col-md-12 col-lg-12">
        Demo Implementation Design Token
      </h1>
      <div className="col-sm-4 col-md-3 col-lg-3">
        {notification ? (
          <Notification>
            {/* <i className="icon-plus"></i> */}
            <p>El articulo con id {idMessage} ha sido añadido</p>
          </Notification>
        ) : null}
        <Card
          messages={messages}
          getCard={getCard}
          getNotification={getNotification}
        ></Card>
      </div>
    </main>
  );
}

export default App;
