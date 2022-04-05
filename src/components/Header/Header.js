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
    <div className="z-50 bg-white w-auto border-b-2 flex justify-center border-gray-200 sticky top-0">
      <div className="flex justify-between align-center container my-2 p-4">
        {/* nav logo & text */}
        <div>
          <h2
            onClick={homePage}
            className="logo text-[#00cba9] text-3xl font-bold cursor-pointer"
          >
            <FontAwesomeIcon className="text-3xl" icon={faHeadphonesAlt} />{" "}
            Review Hub
          </h2>
        </div>
        {/* nav memu bar */}
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Header;
