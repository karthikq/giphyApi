/** @format */
import React from "react";
import Lottie from "react-lottie";
import * as loader from "../src/9825-loading-screen-loader-spinning-circle.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const loaderPosition = {
    position: " absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%,50%)",
  };
  return (
    <div>
      <Lottie
        options={defaultOptions}
        style={loaderPosition}
        height={200}
        width={200}
      />
    </div>
  );
};

export default Loader;
