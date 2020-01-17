import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

const defaultProps = {
    fontSizeVW: 2,
    text1: "",
    text2: "",
}

export function Go7Description(props) {
    const { fontSizeVW, text1, text2, ...rest } = props

    return (
        <Frame
            {...rest}
            background="transparent"
            whileHover={{
                scale: 1.1,
            }}
            style={{
                color: "#fff",
                fontSize: `${fontSizeVW}vw`,
                fontWeight: 600,
                width: "100%",
            }}
        >
            {text1}
            <br />
            {text2}
        </Frame>
    )
}

Go7Description.defaultProps = defaultProps

addPropertyControls(Go7Description, {
    fontSizeVW: {
        title: "FontSizeVW",
        type: ControlType.Number,
        defaultValue: Go7Description.defaultProps.fontSizeVW,
    },
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
