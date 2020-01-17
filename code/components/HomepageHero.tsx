import * as React from "react"
import { addPropertyControls, Frame, Stack } from "framer"
import { url } from "framer/resource"

import { Logo } from "./Logo"

export function HomepageHero({ logoImage, ...props }) {
    return (
        <Frame {...props} className="HomepageHero" position="relative">
            {/* Full page */}
            <Stack>
                {/* Header */}
                <Stack>
                    <Frame
                        style={{
                            height: "100%",
                            width: "469",
                            overflow: "visible",
                        }}
                    >
                        <Logo image={logoImage} />
                    </Frame>
                </Stack>
                {/* Description */}
                <Frame>Description</Frame>
                {/* Welcome */}
                <Frame>Welcome</Frame>
            </Stack>
        </Frame>
    )
}

HomepageHero.defaultProps = {
    height: "100%",
    width: "100%",
}

addPropertyControls(HomepageHero, {})
