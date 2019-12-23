import * as React from "react"
import { Frame } from "framer"
import { url } from "framer/resource"

export function Go7Logo({ image, ...rest }) {
    return (
        <Frame
            {...rest}
            style={{
                width: 241,
                height: 60,
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

Go7Logo.defaultProps = {
    image: url("./node_modules/go-seven-assets/images/logotype.png"),
    height: 60,
    width: 241,
}
