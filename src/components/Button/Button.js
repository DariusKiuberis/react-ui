import React from 'react'
import PropTypes from "prop-types";
import styles from './styles'

/**
 * Button component
 *
 * @param {*} props
 * @return {*}
 */
const Button = ({label}) => {
    const s = styles({role: "admin", company: "IBM"})

    console.log(1111, s.wrap("IBM"))

    return (
        <div style={s.root}>
            <div style={s.wrap("IBM")} >
                 BUTTON {label}
            </div>

        </div>
    )
}

Button.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
};

export default Button
