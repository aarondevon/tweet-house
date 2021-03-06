import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <div className="App">
      <div className="container">
        <header className="">
          <Nav />
          <h1>Twitter Showcase</h1>
        </header>
      </div>
    </div>
  );
}

export default Header;