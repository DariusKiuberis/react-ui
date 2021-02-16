import React from 'react'
import { Button, colors } from '@darius-kiuberis/react-ui'


const {red} = colors

const ButtonComponent = () => {
    return (
        <>
            <Button >Default button </Button>

            <Button
            backgroundColor={red[8]}
                style={{  border: " solid blue" }}
                onClick={(e) => console.log(11111111, e)}
                disabled={false} >
                <div>child</div>
            </Button>

        </>
    )
}
export default ButtonComponent