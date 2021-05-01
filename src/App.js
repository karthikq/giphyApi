/** @format */

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Loader from "./Loader";
import Stickers from "./Stickers";
import Gifs from "./gifs";
import Form from "./Form";
import * as loader from "../src/9825-loading-screen-loader-spinning-circle.json";

const App = () => {
  const [text, setText] = useState("");
  const [usertext, setUsertext] = useState("");
  const [state, setState] = useState(false);
  const [searchstate, setSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(true);

  function handleChange(e) {
    const userip = e.target.value;
    setText(userip);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUsertext(text);
    setState(true);
  }

  setTimeout(() => setLoading(true), 1000);

  return (
    <Router>
      <Switch>
        {!loading ? (
          <Loader />
        ) : (
          <div className="container">
            <div className="main-page">
              <h2>GIPHY API</h2>
              <Route path="/">
                <Form
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  handleClick={() => setLoader(false)}
                  text={text}
                />
              </Route>

              <div className="nav-bar">
                <ul>
                  <Link to="/" className="link" onClick={() => setSearch(true)}>
                    {state === true ? <li>Gifs</li> : ""}
                  </Link>

                  <Link
                    to="/gifs"
                    className="link"
                    onClick={() => setSearch(true)}>
                    {state === true ? <li>Stickers</li> : ""}
                  </Link>
                </ul>
              </div>

              <div className="elements">
                <Route path="/" exact>
                  <Stickers value={usertext} state={loader} />
                </Route>
                <Route path="/gifs">
                  <Gifs value={usertext} />
                </Route>
              </div>
            </div>
          </div>
        )}
      </Switch>
    </Router>
  );
};

export default App;
