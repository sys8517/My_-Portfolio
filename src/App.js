import * as React from "react";
import scrollbar from "smooth-scrollbar";
// import './App.css';
import Header from "./component/header";

scrollbar.init(document.querySelector("#smooth-scroll"));

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="boxs">
        <div
          className="div-box"
          style={{ backgroundColor: "orange", height: "100vh", width: "100vh" }}
        />
        <div
          className="div-box"
          style={{ backgroundColor: "olive", height: "100vh", width: "100vh" }}
        />
        <div
          className="div-box"
          style={{
            backgroundColor: "palegreen",
            height: "100vh",
            width: "100vh",
          }}
        />
        <div
          className="div-box"
          style={{
            backgroundColor: "skyblue",
            height: "100vh",
            width: "100vh",
          }}
        />
      </div>
    </div>
  );
}
