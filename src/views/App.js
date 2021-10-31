import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "../components/layout/header/Header";
import Navbar from "../components/layout/navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { BiCaretUp } from "react-icons/bi";

import { GlobalProvider } from '../data/Store';

import Home from "./pages/home/Home";
import ItemList from "./pages/itemList/ItemList";
import MusicPlayer from "../components/layout/musicPlayer/MusicPlayer";

function App() {

  const [pageURL, setPageURL] = useState(null);
  var code = null;

  useEffect(() => {
    setPageURL(window.location.href);
  }, []);

  if (pageURL !== null && pageURL.toString().split('/').pop() !== "") {
    code = pageURL.toString().split('/').pop();
  }

  return (
    <GlobalProvider code={code}>
      <Router>
        <div className="App">
          <Header />
          <div className="TopNav">
            <Navbar />
          </div>
          <div id="content" className="Content">
            <Switch>
              <Route path="/gift_list">
                <ItemList />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <MusicPlayer className="MusicContainer" />
          <footer >
            <a href="#content"><BiCaretUp size={50} className="ButtonUp" /></a>
          </footer>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
