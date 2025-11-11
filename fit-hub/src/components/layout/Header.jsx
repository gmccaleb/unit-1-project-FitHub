import React from "react";
import NavMenu from "./NavMenu";
import { Link } from "react-router";

function Header() {
  return (
    <header>
      <div id="title">
        <Link to="/">
        <h1>FitHub</h1>
        </Link>
      </div>
      <NavMenu />
    </header>
  );
}

export default Header;
