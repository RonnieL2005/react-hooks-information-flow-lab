import React from "react";

function Header({isDarkMode,onDarkModeClick}){
    return(
        <Header>
            <h2>Shopster</h2>
            <button onClick={isDarkMode}>
                {isDarkMode ? "Dark": "Light"}
            </button>
        </Header>
            )
}

export default Header;