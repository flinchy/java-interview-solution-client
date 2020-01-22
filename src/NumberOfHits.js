import React from "react";
import Pagination from "./Pagination";
import NumberOfHitsTable from "./NumberOfHitsTable";

const NumberOfHits = () => {
  return (
    <div style={numberOfHits}>
      <h2 style={{ fontWeight: "200", fontSize: "2rem"}}>NUMBER OF HITS</h2>
      <Pagination />
      <NumberOfHitsTable />
    </div>
  );
};

const numberOfHits = {
  width: "80%",
  margin: "0 auto",
  marginTop: "5rem",
  textAlign: "center",
};

export default NumberOfHits;
