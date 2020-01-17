import * as React from "react"
import { Frame, addPropertyControls } from "framer"

import { Go7Welcome } from "./Go7Welcome"
export function Go7Hero(props) {
    return (
        <Frame {...props} background="transparent">
            <Go7Welcome />
        </Frame>
    )
}

Go7Hero.defaultProps = {
    height: "100vh",
    width: "100vw",
}

addPropertyControls(Go7Hero, {})
