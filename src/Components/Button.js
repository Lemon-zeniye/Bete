import React from "react";
import PropTypes from "prop-types";
const Button = ({text, onToggle}) => {
    return (
        <button onClick={onToggle}>{text}</button>
    )
}
Button.defaultProps = {
    text : "ADD",
}
Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button;