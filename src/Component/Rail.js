import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import recipedia from "../Aset/recipedia.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rail = () => {
  return (
    <div className="sidebar fixed ">
      <div className="resto">
        <a href="#" className="logo">
          <img className="budi" src={recipedia} alt="gambar" />
        </a>
      </div>
      <div className="menu mt-8 ml-5 ">
        <a href="#" className="active text-2xl py-3">
          <span className="icon">
            <i class="fa-solid fa-house text-2xl"></i>
          </span>
          Home
        </a>

        <Link to={`/addrecipe`} className="py-3">
          <span>
            <i class="fa-solid fa-plus w-10 text-2xl"></i>
          </span>
          Add Recipe
        </Link>

        <Link to={`/profile`} className="py-3">
          <span>
            <i class="fa-solid fa-circle-user w-10 text-2xl"></i>
          </span>
          Profile
        </Link>
        <a href="#" className="text-2xl py-72">
          <span>
            <i class="fa-solid fa-right-from-bracket w-10 text-2xl"></i>
          </span>
          Log Out
        </a>
      </div>
    </div>
  );
};

export default Rail;
