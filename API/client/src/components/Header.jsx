import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <Nav />
          <h1 id="header-title">Twitter Showcase</h1>
        </header>
      </div>
    </div>
  );
}

export default Header;