import React from 'react'
import PropTypes from "prop-types";
import handleButtonClick from './logic/handleButtonClick'
import renderStyles from './logic/renderStyles'
import renderChildren from './logic/renderChildren';
import styles from './styles'

//todo  generate the style from props passed to it,

/**
 * Button component
 *
 * @param {*} { label, children, onClick, disabled, style }
 * @return {*}
 */
const Button = ({ label, children, onClick, disabled, style, className }) => {

    const s = styles({ role: "admin", company: "IBM" })

    return (
        <button
            className={className}
            style={renderStyles(style, s)}
            onClick={handleButtonClick(event, disabled, onClick)}
            disabled={disabled}
        >
            {/* <div style={s.wrap("IBM")} > */}
            {renderChildren(label, children)}
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
