import React from "react";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <header>
      <div id="title">
        <h1>FitHub</h1>
      </div>
      <NavMenu />
    </header>
  );
}

export default Header;
