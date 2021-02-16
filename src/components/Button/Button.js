import React from 'react'
import PropTypes from "prop-types";
import handleButtonClick from './logic/handleButtonClick'
import renderChildren from './logic/renderChildren';
import { ButtonStyled } from './styles'


//@note  StoryShot works with Jest

/**
 * Button component, use carefully :)
 *
 * @param {*} { label, children, onClick, disabled, style }
 * @return {*}
 */
const Button = ({ label, children, onClick, disabled, style, className, backgroundColor, primary, size, ...rest }) => {
    // console.log(" Button.js -> ",
    //     // "label : ", label,
    //     // "children : ", children,
    //     // "onClick :", onClick,
    //     // "disabled : ", disabled,
    //     // "style : ", style,
    //     // "className : ", className,
    //     // "backgroundColor : ", backgroundColor,
    //     // "size : ", size,
    //     // "rest : ", rest
    //     );

    return (
        <ButtonStyled
            {...rest}
            style={style}
            primary={primary}
            onClick={onClick}
            disabled={disabled ? disabled : false}
        >
            {renderChildren(label, children)}
        </ButtonStyled>
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
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
    className: {},
    label: "Hello Button",
    size: "medium",
    variant: "basic",
    disabled: false,
    onClick: undefined,
};

export default Button
