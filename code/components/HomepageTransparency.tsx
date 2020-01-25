import * as React from "react"
import { Frame } from "framer"
import { useIntl } from "react-intl"

export function HomepageTransparency() {
  const intl = useIntl()

  return (
    <Frame
      backgroundColor="#D6E9F6"
      color="#0F4194"
      style={{
        flex: 1,
        width: "100%"
      }}
    >
      {intl.formatMessage({ id: "Homepage.Transparency" })}
    </Frame>
  )
}
