import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./navigation";

function App({ name }) {
  return <>
    <Index name={name} />
  </>;
}

export default App;
