import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  // routes
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Reviews", link: "/reviews" },
    { id: 3, name: "Dashboard", link: "/dashboard" },
    { id: 4, name: "Blogs", link: "/blogs" },
    { id: 5, name: "About", link: "/about" },
  ];

  return (
    <nav className="my-auto text-xl font-medium">
      <div className="flex justify-center">
        {routes.map((route) => (
          <CustomLink key={route.id} route={route}></CustomLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
