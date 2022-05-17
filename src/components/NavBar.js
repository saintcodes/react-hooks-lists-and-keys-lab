import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksMap = links.map((link) => {
    return <a href={"#"+link} key={link}>{link}</a>
  });

  return <nav>{linksMap}</nav>;
}

export default NavBar;
