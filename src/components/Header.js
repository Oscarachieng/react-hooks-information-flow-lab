import React from "react";

function Header ({onDarkModeClick, darkMode}) {

    return (
      <>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
           {darkMode ? "Light Mode" :"Dark Mode"}
        </button>
      </>
    )
}

export default Header