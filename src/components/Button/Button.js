import React from 'react'
import PropTypes from "prop-types";
import styles from './styles'

/**
 * Button component
 *
 * @param {*} { label, children, onClick, disabled, style }
 * @return {*}
 */
const Button = ({ label, children, onClick, disabled, style, className }) => {
    console.log("props : ", label, children, onClick, disabled, "style : ", style)
    const s = styles({ role: "admin", company: "IBM" })

    console.log(1111, s.root())

    const renderChildren = () => {
        if (label) {
            return label;
        }

        if (children) {
            return children;
        }

        return "Click";
    };

    const handleButtonClick = event => {
        console.log("BUTTON CLICKED", event)
        if (disabled) return;

        onClick && onClick({ event });
    };

    const renderStyles = () => {
        if (style) {
            return s.root(style)
        }
        return
    }

    console.log(" renderStyle() : ", renderStyles())

    return (
        <button
            className={className}
            style={renderStyles()}
            onClick={handleButtonClick}
            disabled={disabled}
        >
            {/* <div style={s.wrap("IBM")} > */}
            {renderChildren()}
            {/* </div> */}

        </button>
    )
}

Button.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onClick: PropTypes.func,
    children: PropTypes.node,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    className: "",
    label: "",
    size: "",
    variant: "basic",
    disabled: false,
};

export default Button
