import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Reviews", link: "/reviews" },
    { id: 3, name: "Dashboard", link: "/dashboard" },
    { id: 4, name: "Blogs", link: "/blogs" },
    { id: 5, name: "About", link: "/about" },
  ];
  return (
    <div className="my-auto text-xl font-medium">
      {routes.map((route) => (
        <Link key={route.id} className="ml-5" to={route.link}>
          {route.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
