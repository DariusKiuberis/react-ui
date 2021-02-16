import React from 'react'
import PropTypes from "prop-types";
import handleButtonClick from './logic/handleButtonClick'
import renderChildren from './logic/renderChildren';
import { ButtonStyled } from './styles'

//@note  StoryShot works with Jest

/**
 * Button component
 *
 * @param {*} { children, backgroundColor, color, disabled, fullWidth, size, onHover, variant, onClick, style, ...rest }
 *
 * @param {node} leftIcon Element placed before the children.
 * @param {node} rightIcon Element placed after the children.
 * @return {node}
 */
const Button = ({ children, backgroundColor, color, disabled, fullWidth,
     size, onHover, variant, shadow, leftIcon, rightIcon, onClick, style, ...rest }) => {
    // console.log(" Button.js -> ",
    //     // "children : ", children,
    //     // "backgroundColor : ", backgroundColor,
    //     // "color : " , color ,
    //     // "disabled : ", disabled,
    //     // "size : ", size,
    //     // "onHover : " , onHover ,
    //     // "variant : " , variant ,
    //     // "onClick :", onClick,
    //     // "style : ", style,
    //     // "rest : ", rest
    //     );

    return (
        <ButtonStyled
            {...rest}
            style={style}
            variant={variant}
            onClick={onClick}
            disabled={disabled ? disabled : false}
        >
            {children}
        </ButtonStyled>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    backgroundColor: PropTypes,
    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onHover: PropTypes.bool,
    variant: PropTypes.oneOf(['basic', 'download', 'upload']),
    shadow: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
    style: PropTypes.object
};

Button.defaultProps = {
    children: "Click",
    backgroundColor: "white",
    color: 'default',
    disabled: false,
    fullWidth: false,
    size: 'medium',
    onHover: true,
    variant: 'basic',
    shadow: 0,
    onClick: undefined,
    style: undefined
};

export default Button
