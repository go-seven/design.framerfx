import * as React from "react"
import { Frame } from "framer"
import { useIntl } from "react-intl"

import ErrorBoundaryText from "./ErrorBoundaryText"

export function HomepageFeatures() {
  const intl = useIntl()

  return (
    <ErrorBoundaryText message="Features">
      <Frame
        background="transparent"
        style={{
          flex: 1,
          width: "100%"
        }}
      >
        {intl.formatMessage({ id: "Homepage.Features" })}
      </Frame>
    </ErrorBoundaryText>
  )
}
