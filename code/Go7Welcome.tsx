import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

export function Go7Welcome(props) {
    const { text, ...rest } = props

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

Go7Welcome.defaultProps = {
    height: 128,
    width: 240,
    text: "",
    tint: "#0099ff",
}

addPropertyControls(Go7Welcome, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: Go7Welcome.defaultProps.text,
    },
})
