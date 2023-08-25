import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const mappedLinks = links.map((link) => {
    return (
      <a href={`#${link}`} key={link}>
        {link}
      </a>
    );
  });
  return <nav>{mappedLinks}</nav>;
}

export default NavBar;
