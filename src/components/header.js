import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
  const { dark, changeTheme } = props;
  return (
    <header>
      <h1>Where in the world?</h1>
      <button onClick={changeTheme} className='theme-switcher'>
            <FontAwesomeIcon icon={dark ? faSun : faMoon}/>
          {dark ? "Light mode" : "Dark mode"}
      </button>
    </header>
  );
}
