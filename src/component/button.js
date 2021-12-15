import React from "react";

function Button({ onClick: handleClick, value}) {
    return <button className="Button" onClick={handleClick}>{value}</button>;
}

export default Button;