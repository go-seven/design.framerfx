import * as React from "react"
import { addPropertyControls, ControlType, Frame } from "framer"
import { url } from "framer/resource"

import { mobile } from "./breakpoints"

import { HomepageHero } from "./components/HomepageHero"

// TODO resize handler, see for example:
// https://gist.github.com/steveruizok/b9ff0a24a735f37c16794bc27da36164
// resize must be implemented in the actual container, document an example.
export function _HomepageHero({
  borderRadius,
  clientWidth,
  color,
  ...props
}) {
  return (
    <Frame {...props}>
      <HomepageHero
        borderRadius={borderRadius}
        color={color}
        logoImage={url("./node_modules/go-seven-assets/images/logotype.png")}
        isMobile={clientWidth <= mobile}
      />
    </Frame>
  )
}

_HomepageHero.defaultProps = {
  borderRadius: 10,
  clientWidth: 400,
  color: "#fff",
}

addPropertyControls(_HomepageHero, {
  borderRadius: {
    title: "Border Radius",
    type: ControlType.Number,
    defaultValue: _HomepageHero.defaultProps.borderRadius,
  },
  clientWidth: {
    title: "Client Width",
    type: ControlType.Number,
    defaultValue: _HomepageHero.defaultProps.clientWidth,
  },
  color: {
    title: "Text Color",
    type: ControlType.String,
    defaultValue: _HomepageHero.defaultProps.color,
  },
})