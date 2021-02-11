import React from 'react'
import PropTypes from "prop-types";
import handleButtonClick from './logic/handleButtonClick'
import renderStyles from './logic/renderStyles'
import renderChildren from './logic/renderChildren';
import styles from './styles'

//@todo add StoryShot, so it works with Jest

/**
 * Button component
 *
 * @param {*} { label, children, onClick, disabled, style }
 * @return {*}
 */
const Button = ({ label, children, onClick, disabled, style, className, ...rest }) => {
    console.log("file: Button.js -> line 17 -> rest", rest);

    const s = styles({ role: "admin", company: "IBM" })

    return (
        <button
            {...rest}
            className={className}
            style={renderStyles(style, s)}
            // style={s.root()}
            onClick={handleButtonClick(event, disabled, onClick)}
            disabled={disabled}
        >
            <div
                // style={s.wrap("IBM")}
            >
                {renderChildren(label, children)}
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
    disabled: PropTypes.bool,
    // user: PropTypes.shape({}),
};

Button.defaultProps = {
    className: "",
    label: "",
    size: "",
    variant: "basic",
    disabled: false,
    onClick: undefined
};

export default Button
