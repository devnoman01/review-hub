import React from "react";
import { MenuIcon } from "@heroicons/react/solid";
import CustomLink from "../CustomLink/CustomLink";

const Navbar = () => {
  const routes = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Reviews", link: "/reviews" },
    { id: 3, name: "Dashboard", link: "/dashboard" },
    { id: 4, name: "Blogs", link: "/blogs" },
    { id: 5, name: "About", link: "/about" },
  ];

  // let resolved = useResolvedPath(link);
  // let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <nav className="my-auto text-xl font-medium">
      <div className="w-8 h-8 md:hidden">
        <MenuIcon />
      </div>
      <div className="md:flex justify-center">
        {routes.map((route) => (
          <CustomLink key={route.id} route={route}></CustomLink>
          // <Link
          //   style={{ border: match ? "2px solid red" : "none" }}
          //   className="ml-5"
          //   to={route.link}
          // >
          //   {route.name}
          // </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
