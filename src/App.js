import React, { Fragment } from "react";
import Card from "./Card";
import CardState from "./context/card/CardState";
import AlertState from "./context/alert/AlertState";
import Alert from "./pages/Alert";
import NumberOfHits from "./NumberOfHits";

function App() {
  return (
    <Fragment>
      <CardState>
        <AlertState>
          <Alert />
          <div style={{
            width: '85%',
            margin: '4rem auto',
            padding: '2rem 0',
            boxShadow: '0px 3px 6px #00000029',
            background: '#fff'
          }}>
            <Card />
            <NumberOfHits />
          </div>
        </AlertState>
      </CardState>
    </Fragment>
  );
}

export default App;
