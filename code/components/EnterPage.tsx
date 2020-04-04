import { Frame } from 'framer'
import pdsp from 'pdsp'
import * as React from 'react'
import { useIntl } from 'react-intl'
import {
  Box,
  Button,
  Control,
  Field,
} from 'trunx'

import i18nId from '../i18n/messageIds'

import { EmailField } from './EmailField'
import { Hero } from './Hero'
import { PasswordField } from './PasswordField'

export function EnterAccountForm ({
  enterAccount,
  enterAccountRequestIsWaiting,
}) {
  const intl = useIntl()

  return (
    <Hero>
      <Frame>
        <EnterAccountForm
          enterAccount={enterAccount}
          enterAccountRequestIsWaiting={enterAccountRequestIsWaiting}
        />
      </Frame>
    </Hero>
  )
}
