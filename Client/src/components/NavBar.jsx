import React from "react";
import SearchBar from "./SearchBar";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ onSearch, logout }) {
  return (
   
    <div className="nav">
      <Link to="/home">
        <button className="btn">Home</button>
      </Link>
      <Link to="/about">
        <button className="btn">About</button>
      </Link>
      <Link to="/favorites">
        <button className="btn">Favorites</button>
      </Link>
      <SearchBar className="btn" onSearch={onSearch} />

      <button className="btn" onClick={logout}>LogOut</button>
    </div>
  );
}
