import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

export function Go7Description(props) {
    const { text1, text2, ...rest } = props

    return (
        <Frame
            {...rest}
            background="transparent"
            whileHover={{
                scale: 1.1,
            }}
            style={{
                color: "#fff",
                fontSize: 42,
                fontWeight: 600,
            }}
        >
            {text1}
            <br />
            {text2}
        </Frame>
    )
}

Go7Description.defaultProps = {
    height: 128,
    width: 240,
    text1: "",
    text2: "",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Go7Description, {
    text1: {
        title: "Text",
        type: ControlType.String,
        defaultValue: Go7Description.defaultProps.text1,
    },
    text2: {
        title: "Text",
        type: ControlType.String,
        defaultValue: Go7Description.defaultProps.text2,
    },
})
