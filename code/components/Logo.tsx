import * as React from "react"
import { Frame } from "framer"
import { url } from "framer/resource"

const width = 241
const height = 60

export function Logo({ image, ...props }) {
    return (
        <Frame
            {...props}
            style={{
                width,
                height,
                overflow: "visible",
                background: "transparent",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                imageRendering: "pixelated",
            }}
        ></Frame>
    )
}

Logo.defaultProps = {}
