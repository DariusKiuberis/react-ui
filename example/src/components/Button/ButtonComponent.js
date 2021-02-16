import React from 'react'
import { Button } from '@darius-kiuberis/react-ui'
import './ButtonComponent.scss'

const ButtonComponent = () => {
    return (
        <>
            <Button label="Default"  primary/>

            <Button className="darius" />
            <Button
                style={{  border: " solid blue" }}
                label={"lalal" + 33377}
                onClick={(e) => console.log(11111111, e)}
                disabled={false} >
                <div>child</div>
            </Button>

        </>
    )
}
export default ButtonComponent