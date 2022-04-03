import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { faHeadphonesAlt } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="header bg-[#F3F4F5] w-auto border-b-2 flex justify-center border-gray-300 sticky top-0">
      <div className="flex justify-between container my-2 p-4">
        <div>
          <h2 className="text-3xl font-medium">
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
