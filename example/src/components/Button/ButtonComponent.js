import React from 'react'
import { Button } from '@darius-kiuberis/react-ui'
import './ButtonComponent.scss'

const ButtonComponent = () => {
    return (
        <>
            <Button className="darius" />
            <Button
                style={{ backgroundColor: "red" }}
                label={"lalal" + 33377}
                onClick={(e) => e}
                disabled={false}
            >
                <div>child</div>
            </Button>
        </>
    )
}
export default ButtonComponent