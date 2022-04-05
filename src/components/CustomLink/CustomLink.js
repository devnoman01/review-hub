import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = (props) => {
  const { name, link } = props.route;
  let resolved = useResolvedPath(link);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li className="mx-3 py-2 font-medium list-none md:block text-right">
      <Link
        className="pb-2"
        style={{
          borderBottom: match ? "3px solid #00cba9" : "none",
          color: match ? "#00cba9" : "#273036",
        }}
        to={link}
      >
        {name}
      </Link>
    </li>
  );
};

export default CustomLink;
