import * as React from 'react'
import { Frame } from 'framer'
import { useIntl } from 'react-intl'

import i18nId from '../i18n/messageIds'

import { ErrorBoundaryText } from './ErrorBoundaryText'

export function HomePageFeatures() {
  const intl = useIntl()

  return (
    <ErrorBoundaryText message="Features">
      <Frame
        background="transparent"
        style={{
          flex: 1,
          width: '100%'
        }}
      >
        {intl.formatMessage({ id: i18nId.HomePage.Features.title })}
      </Frame>
    </ErrorBoundaryText>
  )
}
