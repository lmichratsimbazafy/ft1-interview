import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { createClient } from "./config/apolloClient";
import Carousel from "./components/Carousel/Carousel";
// require("dotenv").config();

function App() {
  return (
    <ApolloProvider client={createClient()}>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
      <div className="App">
        <div className="App-header">
          <Carousel />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
