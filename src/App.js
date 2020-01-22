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
          <div className="main">
            <Card />
            <NumberOfHits />
          </div>
        </AlertState>
      </CardState>
    </Fragment>
  );
}

export default App;
