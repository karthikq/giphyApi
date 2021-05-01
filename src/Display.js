/** @format */

import React, { useState } from "react";

const Display = ({ ob }) => {
  const [imgsrc, setImgsrc] = useState("");

  console.log(ob);
  return (
    <div>
      <h2>{imgsrc.url}</h2>
    </div>
  );
};

export default Display;
