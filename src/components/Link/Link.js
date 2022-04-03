import React from "react";

const Link = (props) => {
  const { name, link } = props.route;
  return (
    <li className="mx-10 my-1 font-medium md:my-4">
      <Link to={link}>{name}</Link>
    </li>
  );
};

export default Link;
