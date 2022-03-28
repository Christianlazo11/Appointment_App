import React from "react";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="spinner-border display-1"
        style={{ color: "darkcyan" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
