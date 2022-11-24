import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";

const ul = ul.createElement("ul");
const li = li.createElement("li");
li.appendChild(li);
li.appendChild(document.createTextNode("Hey"));

function App() {
  return (
    <div>
      <Header />
      <div className="dummy"></div>
    </div>
  );
}
export default App;
