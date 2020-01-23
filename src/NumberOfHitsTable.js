import React, { useContext, Fragment } from "react";
import CardContext from "./context/card/cardContext";

export const NumberOfHitsTable = () => {
  const cardContext = useContext(CardContext);
  const { cardStats, statError } = cardContext;

  let keys = null;
  let values = null;
  let size = null;

  if (cardStats !== null) {
    keys = Object.keys(cardStats.payload);
    values = Object.values(cardStats.payload);
    size = cardStats.size;
  }

  return (
    <Fragment>
      {size && (
        <div style={{ color: "#4caf50", fontWeight: "600" }}>
          Size: overall number of hits is {size}
        </div>
      )}

      <table id="customers">
        <thead>
          <tr>
            <th>Card Number</th>
            <th>Number of hits</th>
          </tr>
        </thead>

        <tbody>
          {keys && values !== null ? (
            keys.map((result, i) => (
              <tr key={i}>
                <td>{result}</td>
                <td>{values[i]}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>NO RECORDS ENTER PAGINATION TO GET NO OF HITS</td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
      {statError && <p style={{ color: "red" }}>{statError}</p>}
    </Fragment>
  );
};

export default NumberOfHitsTable;
