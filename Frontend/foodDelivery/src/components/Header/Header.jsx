import React from "react";
import { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  const [search, setSearch] = useState("");

  const inputChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="nav-bar">
        <div className="location">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
            alt=""
            className="logo"
          />
          <h2>Location</h2>
        </div>

        <div className="search">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={search}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="icons">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-profile-197-436932.png?f=webp&w=512"
            alt=""
            className="profile"
          />

          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-cart-389-458456.png?f=webp&w=512"
            alt=""
            className="cart"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
