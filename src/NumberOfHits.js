import React from "react";
import Pagination from "./Pagination";
import NumberOfHitsTable from "./NumberOfHitsTable";

const NumberOfHits = () => {
  return (
    <div className="numberOfHits">
      <h2 className="hit-title">NUMBER OF HITS</h2>
      <Pagination />
      <NumberOfHitsTable />
    </div>
  );
};


export default NumberOfHits;
