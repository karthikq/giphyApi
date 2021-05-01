/** @format */
import React from "react";
import Lottie from "react-lottie";
import * as loader from "../src/9619-loading-dots-in-yellow.json";

const Loader2 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const loaderPosition = {
    margin: "1rem auto",
    opacity: 0.8,
  };
  return (
    <div>
      <Lottie options={defaultOptions} className="loading" />
    </div>
  );
};

export default Loader2;
