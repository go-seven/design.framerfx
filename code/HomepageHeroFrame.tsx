import * as React from "react"
import { Frame } from "framer"
import { url } from "framer/resource"

import { HomepageHero } from "./components/HomepageHero"

export function HomepageHeroFrame(props) {
    return (
        <Frame {...props}>
            <HomepageHero
                logoImage={url(
                    "./node_modules/go-seven-assets/images/logotype.png"
                )}
            />
        </Frame>
    )
}
