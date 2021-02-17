import React, { useState } from 'react'
import { Button, colors } from '@darius-kiuberis/react-ui'
import { random, type } from '@darius-kiuberis/helper'


const { grey, white } = colors

const ButtonComponent = () => {
    const [state, setState] = useState(false)

    // console.log(1111, random("array", 30));

    return (
        <div>

            <div onClick={(e) => setState(prevState => !prevState)} > change state to disabled</div>


            <Button
                backgroundColor={grey[5]}
                onClick={(e) => console.log("clicked button")}
                color={white}
                disabled={state}
                active
            //  size={"5em"}
            // hover={false}
            >


            </Button>

        </div>
    )
}
export default ButtonComponent