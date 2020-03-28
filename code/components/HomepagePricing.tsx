import { Frame } from 'framer'
import * as React from 'react'
import { useIntl } from 'react-intl'

import i18nId from '../i18n/messageIds'

import { ErrorBoundaryText } from './ErrorBoundaryText'

export function HomePagePricing() {
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
        {intl.formatMessage({ id: i18nId.HomePage.Pricing.title })}
      </Frame>
    </ErrorBoundaryText>
  )
}
