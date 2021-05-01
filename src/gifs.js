/** @format */

import React, { useState, useEffect } from "react";
import Loader2 from "./Loader2";

const Gifs = ({ value }) => {
  const [content, setContent] = useState([]);
  const [loader2, setLoader2] = useState(false);

  let apiKey = `KDvwOHtuUPNun5yMluM85OCA3sv6zxWp`;
  let url = `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${value}&limit=25&offset=0&rating=g&lang=en`;

  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch(url);
      const items = await data.json();

      setContent(items.data);
      if (loader2 === false) {
        setTimeout(() => setLoader2(true), 5000);
      } else {
        setLoader2(false);
      }
    };
    fetchdata();
  }, [url]);
  setTimeout(() => setLoader2(true), 2000);
  return (
    <div className="img-contents">
      {content.map((content, index) => {
        return (
          <div className="img-content" key={index}>
            <>
              {!loader2 ? (
                <Loader2 />
              ) : (
                <a href={content.url}>
                  <img src={content.images.fixed_height.url} alt="" />
                </a>
              )}
            </>
          </div>
        );
      })}
    </div>
  );
};

export default Gifs;
