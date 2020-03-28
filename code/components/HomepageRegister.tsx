import * as React from 'react'
import { Frame } from 'framer'
import { useIntl } from 'react-intl'

import i18nId from '../i18n/messageIds'

export function HomePageRegister () {
  const intl = useIntl()

  return (
    <Frame
      backgroundColor="#1854A5"
      color="#fff"
      style={{
        flex: 1,
        width: '100%'
      }}
    >
      {intl.formatMessage({ id: i18nId.Authentication.Action.Register })}
    </Frame>
  )
}
