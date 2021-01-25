import React from 'react'
import PropTypes from "prop-types";
import styles from './styles'

/**
 * Button component
 *
 * @param {*} props
 * @return {*}
 */
const Button = ({ label, children, onClick, disabled }) => {
    console.log("props : ", label, children, onClick, disabled)
    const s = styles({ role: "admin", company: "IBM" })

    // console.log(1111, s.wrap("IBM"))

    const renderChildren = () => {

        if (label) {
            return label;
        }

        if (children) {
            return children;
        }

        return "Button";
    };

    const handleButtonClick = event => {
        console.log("BUTTON CLICKED", event)
        if (disabled) return;

        onClick && onClick({ event });
    };

    return (
        <button style={s.root}
            onClick={handleButtonClick}
        >
            <div style={s.wrap("IBM")} >
                {renderChildren()}
            </div>

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
