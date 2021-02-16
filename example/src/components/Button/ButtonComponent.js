import React from 'react'
import { Button } from '@darius-kiuberis/react-ui'

const ButtonComponent = () => {
    return (
        <>
            <Button label="Default"  variant>Default button </Button>

            <Button
                style={{  border: " solid blue" }}
                onClick={(e) => console.log(11111111, e)}
                disabled={false} >
                <div>child</div>
            </Button>

        </>
    )
}
export default ButtonComponent