import { Frame } from "framer"
import * as React from "react"
import { FormattedMessage } from "react-intl"

import ErrorBoundaryText from "./ErrorBoundaryText"

// TODO use this wrapper for the whole homepage
export function Homepage(props) {
  return (
    <ErrorBoundaryText message="Go Seven">
      <Frame
        background="transparent"
        style={{
          flex: 1,
          width: "100%"
        }}
      >
        <FormattedMessage id="Homepage.Pricing" />
      </Frame>
    </ErrorBoundaryText>
  )
}

