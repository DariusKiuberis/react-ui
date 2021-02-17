import React from 'react'
import PropTypes from "prop-types";
import { random, type } from '@darius-kiuberis/helper'
import handleButtonClick from './logic/handleButtonClick'
import renderChildren from './logic/renderChildren';
import log from '../../utils/helpers/console.log';
import { colors } from '../../stylesheets/styles/colors'
import { ButtonStyled } from './styles'

// a b c d e f g h i j k l m n o p q r s t u v w x y z

const { grey, white } = colors

/**
 * Button component
 *
 * @param {boolean} active Clicking on button background changes or not
 * @param {string} backgroundColor Background color for button
 * @param {string | number | node} children Children passed to button
 * @param {boolean} shadow Shadow box arround button
 * @param {node} leftIcon Element placed before the children.
 * @param {node} rightIcon Element placed after the children.
 *
 * @return {node}
 */
const Button = ({ active, backgroundColor, children, color, disabled, disabledBackground,
    disabledColor, fullWidth, hover, leftIcon, onClick, rightIcon,
    shadow, size, style, variant, ...rest }) => {

    // log(" Button.js -> ",
    //     // "children : ", children,
    //     // "backgroundColor : ", backgroundColor,
    //     // "color : " , color ,
    //     // "disabled : ", disabled,
    //     // "size : ", size,
    //     // "hover : " , hover ,
    //     // "variant : " , variant ,
    //     // "onClick :", onClick,
    //     // "style : ", style,
    //     // "rest : ", rest
    // );

    return (
        <ButtonStyled
            active={active}
            backgroundColor={backgroundColor}
            color={color}
            disabled={disabled}
            disabledBackground={disabledBackground}
            disabledColor={disabledColor}
            fullWidth={fullWidth}
            hover={hover}
            shadow={shadow}
            size={size}
            style={style}
            onClick={onClick}
            variant={variant}
            {...rest}
        >
            {children}
        </ButtonStyled>
    )
}

Button.propTypes = {
    active: PropTypes.bool,
    backgroundColor: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node
      ]),
    color: PropTypes.string,
    disabled: PropTypes.bool,
    disabledBackground: PropTypes.string,
    disabledColor: PropTypes.string,
    fullWidth: PropTypes.bool,
    hover: PropTypes.bool,
    leftIcon: PropTypes.node,
     /**
     * Gets called when the user clicks on the button
     *
     */
    onClick: PropTypes.func,
    rightIcon: PropTypes.node,
    shadow: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
    size: PropTypes.string,
    style: PropTypes.object,
    variant: PropTypes.oneOf(['basic', 'download', 'upload'])
};

Button.defaultProps = {
    active: true,
    backgroundColor: '#2196f3',
    children: "Click",
    color: '#FFFFFF',
    disabled: false,
    disabledBackground: '#e0e0e0',
    disabledColor: '#9e9e9e',
    fullWidth: false,
    hover: true,
    shadow: 0,
    onClick: undefined,
    size: 'medium',
    style: {},
    variant: 'basic'
};

export default Button
