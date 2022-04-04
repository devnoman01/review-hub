import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  const navigate = useNavigate();

  const homePage = () => {
    const path = `/home`;
    navigate(path);
  };

  return (
    <div className="header bg-white w-auto border-b-2 flex justify-center border-gray-300 sticky top-0">
      <div className="flex justify-between container my-2 p-4">
        <div>
          <h2 onClick={homePage} className="logo text-3xl font-medium">
            <FontAwesomeIcon className="text-3xl" icon={faHeadphonesAlt} />{" "}
            Review Hub
          </h2>
        </div>
        <Navbar></Navbar>
        {/* <div className="my-auto text-slate-200 text-xl font-medium">
          <Link className="ml-5" to="/home">
            Home
          </Link>
          <Link className="ml-5" to="/reviews">
            Reviews
          </Link>
          <Link className="ml-5" to="/dashboard">
            Dashboard
          </Link>
          <Link className="ml-5" to="/blogs">
            Blogs
          </Link>
          <Link className="ml-5" to="/about">
            About
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
