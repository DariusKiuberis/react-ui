import React from 'react'
import { Button } from '@darius-kiuberis/react-ui'
import './ButtonComponent.scss'

const ButtonComponent = () => {
    return (
        <>
            <Button className="darius" />
            <Button
                style={{ backgroundColor: "red", border: " solid blue" }}
                label={"lalal" + 33377}
                onClick={(e) => e}
                disabled={true}
            >
                <div>child</div>
            </Button>
        </>
    )
}
export default ButtonComponent