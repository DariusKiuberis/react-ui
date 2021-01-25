import React from 'react'

const Bar = (props) => {
    const styles = {
        border: "green solid 5px"
    }

    return (
        <div style={styles}>
            Component Bar: {props.text}
        </div>
    )

}

export default Bar