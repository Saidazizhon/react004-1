import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [menu, setMenu] = useState(false);
  let users = useSelector((state) => state.users.value);
  return (
    <div className="navbar">
      <h2>Odam qoshish</h2>
      <div className={`link ${menu ? "show" : ""}`}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/create-user"}>Create user</NavLink>
        <NavLink to={"/all-users"}>
          All users <sup>{users.length}</sup>
        </NavLink>
      </div>
      <FiMenu onClick={() => setMenu(!menu)} className="menu" />
    </div>
  );
}

export default Navbar;
