import { Frame } from 'framer'
import * as React from 'react'
import { useIntl } from 'react-intl'

import ErrorBoundaryText from './ErrorBoundaryText'

export function HomepagePricing () {
  const intl = useIntl()

  return (
    <ErrorBoundaryText message="Pricing">
      <Frame
        background="transparent"
        style={{
          flex: 1,
          width: '100%'
        }}
      >
        {intl.formatMessage({ id: 'Homepage.Pricing' })}
      </Frame>
    </ErrorBoundaryText>
  )
}
