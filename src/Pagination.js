import React, { useState, useContext } from "react";
import CardContext from "./context/card/cardContext";

const Pagination = () => {
  const cardContext = useContext(CardContext);

  const { getCardStats } = cardContext;

  const [state, setState] = useState({
    start: "",
    limit: ""
  });

  const { start, limit } = state;

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    getCardStats(start, limit);
  };

  return ( 
    <div>
      <form onSubmit={handleSubmit} className="form-pagination">
        <p style={{ fontWeight: "100" }}>Pagination:</p>
        <p>
          Start:{" "}
          <input
          className="p-input"
            name="start"
            placeholder="Enter start here"
            type="number"
            value={state.start}
            onChange={handleChange}
          />
        </p>
        <p>
          Limit:{" "}
          <input
          className="p-input"
            name="limit"
            placeholder="Enter limit here"
            type="number"
            value={state.limit}
            onChange={handleChange}
          />
        </p>
        <button className="btn">Get Statistics</button>
      </form>
    </div>
  );
};


export default Pagination;
