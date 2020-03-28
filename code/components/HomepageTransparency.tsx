import * as React from 'react'
import { Frame } from 'framer'
import { useIntl } from 'react-intl'

import i18nId from '../i18n/messageIds'

export function HomePageTransparency() {
  const intl = useIntl()

  return (
    <Frame
      backgroundColor="#D6E9F6"
      color="#0F4194"
      style={{
        flex: 1,
        width: '100%'
      }}
    >
      {intl.formatMessage({ id: i18nId.HomePage.Transparency.message })}
    </Frame>
  )
}
