import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

const defaultProps = {
    height: 128,
    width: 240,
    text: "",
}

export function Go7Welcome(props) {
    const { text, ...rest } = props

    console.log(props)
    return (
        <Frame
            {...rest}
            background="transparent"
            whileHover={{
                scale: 1.1,
            }}
            style={{
                color: "#fff",
                fontSize: 32,
                fontWeight: 400,
            }}
        >
            <span>{text}</span>
        </Frame>
    )
}

Go7Welcome.defaultProps = defaultProps

addPropertyControls(Go7Welcome, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: Go7Welcome.defaultProps.text,
    },
})
