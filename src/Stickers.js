/** @format */
import React, { useEffect, useState } from "react";
import Loading from "react-loading";
import Loader2 from "./Loader2";

const Stickers = ({ value, state }) => {
  const [content, setContent] = useState([]);
  const [loader, setLoader] = useState(false);

  let apiKey = `KDvwOHtuUPNun5yMluM85OCA3sv6zxWp`;
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${value}&limit=25&offset=0&rating=g&lang=en`;
  console.warn = () => {};

  useEffect(() => {
    setTimeout(() => {
      const fetchdata = async () => {
        fetch(url)
          .then((res) => res.json())
          .then((items) => {
            setContent(items.data);
            if (loader === false) {
              setTimeout(() => setLoader(true), 5000);
            } else {
              setLoader(false);
            }
          });
      };
      fetchdata();
    }, 1000);
  }, [url]);

  setTimeout(() => setLoader(true), 2000);
  return (
    <div className="img-contents">
      {content.map((content, index) => {
        return (
          <div className="img-content" key={index}>
            <>
              <a href={content.url}>
                {!loader ? (
                  <Loader2 />
                ) : (
                  <img src={content.images.fixed_height.url} alt="" />
                )}
              </a>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default Stickers;
