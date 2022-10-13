import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InfinitySpin color="#ff2625" />
    </div>
  );
};

export default Loader;
