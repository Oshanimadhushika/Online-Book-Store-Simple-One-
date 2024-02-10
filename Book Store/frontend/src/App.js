import React from "react";
import { RouteHandler } from "./components/routes/RouteHandler";
import Header from "./components/header/Header";

function App() {
  return (
    <div >
      <Header/>
      <RouteHandler/>
    </div>
  );
}

export default App;
