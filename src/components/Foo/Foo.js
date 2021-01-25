import React from 'react'
import './styles.css'

const Foo = (props) => {

    return (
        <div className="foo">
            Component Foo: {props.text}
        </div>
    )

}

export default Foo