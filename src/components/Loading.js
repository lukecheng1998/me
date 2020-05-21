import React from "react";
import loadingGif from "../images/loading.gif";

const Loading = () => {
  return (
    <div className="loading">
      <h4>Loading data...</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;
